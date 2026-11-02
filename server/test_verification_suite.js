/**
 * Verification Test Suite for Clean Multi-College LMS
 * Tests:
 * Test A: Multiple provisioning calls / server restarts -> exactly 2 super admins, 0 duplicates.
 * Test B: Create user1@gmail.com -> role = user, independent / none college.
 * Test C: Login page inspection -> no hardcoded credentials, no quick login buttons.
 * Test D: Enter invalid super admin password -> rejected with 401.
 * Test E: Enter valid Super Admin 1 credentials -> succeeds, role = super_admin.
 * Test F: Logout / invalid token -> protected endpoints return 401.
 * Test G: Login as Super Admin 2 -> role = super_admin, no duplicate account creation.
 * Test H: Register another normal user -> role = user.
 * Test I: Session restored via token -> returns correct user, no automatic account switching.
 */

import { dbService } from './services/db.service.js';
import { supabaseAdmin, isSupabaseAdminConfigured } from './config/supabase.js';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:5000';

async function cleanUserByEmail(email) {
  const norm = email.trim().toLowerCase();
  if (isSupabaseAdminConfigured()) {
    try {
      const { data } = await supabaseAdmin.auth.admin.listUsers();
      const existing = data?.users?.find(u => u.email?.toLowerCase() === norm);
      if (existing) {
        await supabaseAdmin.auth.admin.deleteUser(existing.id);
      }
    } catch (e) {}
  }
  const prof = dbService.getProfileByEmail(norm);
  if (prof) {
    dbService.deleteUserAndData(prof.id);
  }
}

async function runVerification() {
  console.log('\n===============================================================');
  console.log('🧪 RUNNING MANDATORY VERIFICATION TESTS (A THROUGH I)');
  console.log('===============================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      failed++;
    }
  }

  // --------------------------------------------------------------------------
  // TEST A: Multiple provisioning calls (idempotency check)
  // --------------------------------------------------------------------------
  console.log('--- TEST A: Super Admin Provisioning Idempotency ---');
  for (let i = 0; i < 5; i++) {
    await dbService.provisionSuperAdmins();
  }
  
  dbService.syncFromDisk();
  const superAdminProfiles = dbService.data.profiles.filter(p => 
    ['superadmin1@platform.edu', 'superadmin2@platform.edu'].includes(p.email?.toLowerCase())
  );
  const superAdminRoles = dbService.data.user_roles.filter(r => r.role === 'super_admin');
  
  assert(superAdminProfiles.length === 2, `Test A.1 Exactly 2 super-admin profiles exist after 5 provisioning runs (got ${superAdminProfiles.length})`);
  assert(superAdminRoles.length === 2, `Test A.2 Exactly 2 super_admin roles assigned (got ${superAdminRoles.length})`);
  assert(dbService.data.colleges.length === 0, `Test A.3 Zero demo colleges automatically created (got ${dbService.data.colleges.length})`);

  // --------------------------------------------------------------------------
  // TEST B: Create user1@gmail.com
  // --------------------------------------------------------------------------
  console.log('\n--- TEST B: Normal Signup creates role "user" with Independent college ---');
  await cleanUserByEmail('user1@gmail.com');
  const user1Email = 'user1@gmail.com';
  const user1Password = 'UserPassword123!';
  const user1FullName = 'User 1';

  let regRes = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: user1Email, password: user1Password, fullName: user1FullName })
  });
  let regData = await regRes.json();
  
  assert(regRes.status === 201 && regData.success, 'Test B.1 Register user1@gmail.com succeeded (201)');
  assert(regData.user?.role === 'user', `Test B.2 User role is strictly "user" (got ${regData.user?.role})`);

  // Verify in super admin users list
  let saLoginRes = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'superadmin1@platform.edu', password: 'SuperAdmin@Secure2026!' })
  });
  let saLoginData = await saLoginRes.json();
  const saToken = saLoginData.token;

  let usersRes = await fetch(`${BASE_URL}/api/super-admin/users`, {
    headers: { 'Authorization': `Bearer ${saToken}` }
  });
  let usersData = await usersRes.json();
  const user1InList = usersData.users?.find(u => u.email === user1Email);
  assert(Boolean(user1InList), 'Test B.3 user1@gmail.com appears in platform user directory');
  assert(user1InList?.role === 'user', 'Test B.4 user1@gmail.com has role "user"');
  assert(!user1InList?.college_id && (!user1InList?.college_name || user1InList?.college_name === 'Independent / None'), 'Test B.5 user1@gmail.com is Independent / None college');

  // --------------------------------------------------------------------------
  // TEST C: Login Page Inspection
  // --------------------------------------------------------------------------
  console.log('\n--- TEST C: Login UI contains NO auto-populated credentials or quick buttons ---');
  const loginFilePath = path.resolve('./client/src/pages/Login.jsx');
  const loginFileContent = fs.readFileSync(loginFilePath, 'utf-8');
  
  assert(!loginFileContent.includes('handleRoleQuickLogin'), 'Test C.1 No handleRoleQuickLogin in Login.jsx');
  assert(!loginFileContent.includes('Fast Role Access for Evaluation'), 'Test C.2 No "Fast Role Access for Evaluation" buttons');
  assert(!loginFileContent.includes('superadmin1@platform.edu'), 'Test C.3 No superadmin credentials in Login.jsx');
  assert(!loginFileContent.includes('SuperAdmin@Secure2026!'), 'Test C.4 No superadmin password in Login.jsx');
  assert(!loginFileContent.includes('demo.scholar@aimentor.edu'), 'Test C.5 No demo accounts in Login.jsx');

  // --------------------------------------------------------------------------
  // TEST D: Enter invalid super-admin password
  // --------------------------------------------------------------------------
  console.log('\n--- TEST D: Reject invalid super admin password ---');
  let badPassRes = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'superadmin1@platform.edu', password: 'WrongPassword999!' })
  });
  assert(badPassRes.status === 401, 'Test D.1 Incorrect password rejected with status 401');

  // --------------------------------------------------------------------------
  // TEST E: Enter valid Super Admin 1 credentials
  // --------------------------------------------------------------------------
  console.log('\n--- TEST E: Valid Super Admin 1 Login ---');
  let sa1Res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'superadmin1@platform.edu', password: 'SuperAdmin@Secure2026!' })
  });
  let sa1Data = await sa1Res.json();
  assert(sa1Res.status === 200 && Boolean(sa1Data.token), 'Test E.1 Supabase authentication succeeds with JWT');
  assert(sa1Data.user?.role === 'super_admin', `Test E.2 Authenticated role is "super_admin" (got ${sa1Data.user?.role})`);

  // Verify access to protected Super Admin dashboard endpoint
  let dashRes = await fetch(`${BASE_URL}/api/super-admin/dashboard`, {
    headers: { 'Authorization': `Bearer ${sa1Data.token}` }
  });
  let dashData = await dashRes.json();
  assert(dashRes.status === 200 && dashData.success, 'Test E.3 Super Admin dashboard metrics accessible');

  // --------------------------------------------------------------------------
  // TEST F: Log out / Session Invalidation
  // --------------------------------------------------------------------------
  console.log('\n--- TEST F: Log out & protected route access denial ---');
  let logoutRes = await fetch(`${BASE_URL}/api/auth/logout`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${sa1Data.token}` }
  });
  assert(logoutRes.status === 200, 'Test F.1 Logout endpoint returns success');

  let invalidAccessRes = await fetch(`${BASE_URL}/api/super-admin/dashboard`, {
    headers: { 'Authorization': 'Bearer invalid-expired-token' }
  });
  assert(invalidAccessRes.status === 401 || invalidAccessRes.status === 403, 'Test F.2 Protected super admin pages inaccessible without valid token');

  // --------------------------------------------------------------------------
  // TEST G: Login as Super Admin 2
  // --------------------------------------------------------------------------
  console.log('\n--- TEST G: Login as Super Admin 2 without duplicates ---');
  let sa2Res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'superadmin2@platform.edu', password: 'SuperAdmin@Secure2026!' })
  });
  let sa2Data = await sa2Res.json();
  assert(sa2Res.status === 200 && sa2Data.user?.role === 'super_admin', 'Test G.1 Super Admin 2 authenticates and receives super_admin role');

  // Check user directory for duplicate super admins
  let verifyUsersRes = await fetch(`${BASE_URL}/api/super-admin/users`, {
    headers: { 'Authorization': `Bearer ${sa2Data.token}` }
  });
  let verifyUsersData = await verifyUsersRes.json();
  const allSuperAdmins = verifyUsersData.users?.filter(u => u.role === 'super_admin') || [];
  assert(allSuperAdmins.length === 2, `Test G.2 User management table has exactly 2 super admins (got ${allSuperAdmins.length})`);

  // --------------------------------------------------------------------------
  // TEST H: Register another normal user
  // --------------------------------------------------------------------------
  console.log('\n--- TEST H: Register another normal user ---');
  await cleanUserByEmail('user2@gmail.com');
  const user2Email = 'user2@gmail.com';
  let reg2Res = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: user2Email, password: 'User2Password123!', fullName: 'User 2' })
  });
  let reg2Data = await reg2Res.json();
  assert(reg2Res.status === 201 && reg2Data.user?.role === 'user', 'Test H.1 User 2 registered with role "user"');

  // --------------------------------------------------------------------------
  // TEST I: Restore session via token
  // --------------------------------------------------------------------------
  console.log('\n--- TEST I: Session restoration via Bearer token ---');
  let restoreRes = await fetch(`${BASE_URL}/api/auth/profile`, {
    headers: { 'Authorization': `Bearer ${sa2Data.token}` }
  });
  let restoreData = await restoreRes.json();
  assert(restoreRes.status === 200 && restoreData.user?.email === 'superadmin2@platform.edu', 'Test I.1 Session restored correctly for Super Admin 2');
  assert(restoreData.user?.role === 'super_admin', 'Test I.2 Restored session preserves super_admin role');

  // Clean up user2 so only user1 and the 2 superadmins remain (matching requirement 11)
  if (reg2Data.user?.id) {
    if (isSupabaseAdminConfigured()) {
      try {
        await supabaseAdmin.auth.admin.deleteUser(reg2Data.user.id);
      } catch (e) {}
    }
    dbService.deleteUserAndData(reg2Data.user.id);
  }

  // Print final user list
  console.log('\n=============================================================');
  console.log('📋 FINAL PLATFORM USER LIST (REQUIREMENT 11):');
  console.log('-------------------------------------------------------------');
  console.log('User\t\tEmail\t\t\tRole\t\tCollege');
  console.log('-------------------------------------------------------------');
  dbService.syncFromDisk();
  const finalUsers = dbService.data.profiles.map(p => {
    const roleInfo = dbService.getUserPrimaryRole(p.id);
    return {
      name: p.full_name,
      email: p.email,
      role: roleInfo.role,
      college: roleInfo.college?.name || 'Independent / None'
    };
  });
  finalUsers.forEach(u => {
    console.log(`${u.name.padEnd(16)}\t${u.email.padEnd(24)}\t${u.role.padEnd(12)}\t${u.college}`);
  });
  console.log('-------------------------------------------------------------');
  console.log(`Total Database Users: ${finalUsers.length}`);
  console.log(`Total Super Admins: ${finalUsers.filter(u => u.role === 'super_admin').length}`);
  console.log('=============================================================');

  console.log(`\n📊 VERIFICATION SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  if (failed > 0) {
    process.exit(1);
  }
}

runVerification().catch(e => {
  console.error('Verification error:', e);
  process.exit(1);
});

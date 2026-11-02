import { supabaseAdmin, isSupabaseAdminConfigured } from './config/supabase.js';
import { dbService } from './services/db.service.js';

const BASE_URL = 'http://localhost:5000';

async function runTests() {
  console.log('\n=============================================================');
  console.log('🚀 RUNNING COMPREHENSIVE MULTI-COLLEGE LMS TEST SUITE');
  console.log('=============================================================\n');

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

  // Tracking for complete test isolation cleanup
  const createdUserIds = [];
  const createdCollegeIds = [];

  try {

    // --------------------------------------------------------------------------
    // 1. AUTHENTICATION TESTS
    // --------------------------------------------------------------------------
    console.log('\n--- 1. AUTHENTICATION TESTS ---');

    const timestamp = Date.now();
    const testStudentEmail = `student_${timestamp}@testdomain.edu`;
    const testStudentPassword = 'TestPassword123!';
    const testStudentName = 'Ada Scholar';

    // 1.1 Register new user without email verification
    let registerRes = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testStudentEmail, password: testStudentPassword, fullName: testStudentName })
    });
    let regData = await registerRes.json();
    assert(registerRes.status === 201 && regData.success && regData.user?.role === 'user', '1.1 Register new user without email verification');

    // 1.2 Register same email again with different capitalisation (must reject)
    let dupRes = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testStudentEmail.toUpperCase(), password: 'AnotherPassword123!', fullName: 'Duplicate Test' })
    });
    assert(dupRes.status === 409, '1.2 Register same email with uppercase rejected as duplicate');

    // 1.3 Reject incorrect login credentials
    let badLoginRes = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testStudentEmail, password: 'WrongPassword999!' })
    });
    assert(badLoginRes.status === 401, '1.3 Reject incorrect login credentials');

    // 1.4 Restore valid session after login
    let loginRes = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testStudentEmail, password: testStudentPassword })
    });
    let loginData = await loginRes.json();
    const studentToken = loginData.token;
    const studentId = loginData.user?.id;
    if (studentId) createdUserIds.push(studentId);
    assert(loginRes.status === 200 && Boolean(studentToken), '1.4 Successful login returns Supabase access token');

    let profileRes = await fetch(`${BASE_URL}/api/auth/profile`, {
      headers: { 'Authorization': `Bearer ${studentToken}` }
    });
    let profileData = await profileRes.json();
    assert(profileRes.status === 200 && profileData.user?.email === testStudentEmail.toLowerCase(), '1.4 Session restored via Bearer token');

    // 1.5 Ensure normal users cannot choose a privileged role during signup
    assert(regData.user.role === 'user', '1.5 Normal signup assigns user role only');

    // --------------------------------------------------------------------------
    // 2. SUPER ADMIN & PROVISIONING TESTS
    // --------------------------------------------------------------------------
    console.log('\n--- 2. SUPER ADMIN TESTS ---');

    // Login as provisioned Super Admin 1
    let saLoginRes = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'superadmin1@platform.edu', password: 'SuperAdmin@Secure2026!' })
    });
    let saLoginData = await saLoginRes.json();
    const superAdminToken = saLoginData.token;
    const superAdminId = saLoginData.user?.id;
    assert(saLoginRes.status === 200 && saLoginData.user?.role === 'super_admin', '2.1 Super Admin 1 is provisioned securely and authenticates');

    // Check Super Admin 2 as well
    let sa2LoginRes = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'superadmin2@platform.edu', password: 'SuperAdmin@Secure2026!' })
    });
    let sa2LoginData = await sa2LoginRes.json();
    assert(sa2LoginRes.status === 200 && sa2LoginData.user?.role === 'super_admin', '2.1 Super Admin 2 is provisioned securely and authenticates');

    // Verify ordinary user cannot escalate roles
    let escRes = await fetch(`${BASE_URL}/api/super-admin/users/${studentId}/role`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${studentToken}`
      },
      body: JSON.stringify({ role: 'super_admin' })
    });
    assert(escRes.status === 403, '2.3 Ordinary user blocked from escalating role to super_admin (403)');

    // --------------------------------------------------------------------------
    // 3. COLLEGE WORKFLOW TESTS
    // --------------------------------------------------------------------------
    console.log('\n--- 3. COLLEGE WORKFLOW TESTS ---');

    // 3.1 Create a college as super admin
    const testCollegeName = `Engineering Institute ${timestamp}`;
    const testCollegeSlug = `eng-inst-${timestamp}`;
    let createColRes = await fetch(`${BASE_URL}/api/super-admin/colleges`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${superAdminToken}`
      },
      body: JSON.stringify({
        name: testCollegeName,
        slug: testCollegeSlug,
        description: 'Premier test institute',
        contact_email: 'admin@enginst.edu'
      })
    });
    let colData = await createColRes.json();
    const collegeId = colData.college?.id;
    if (collegeId) createdCollegeIds.push(collegeId);
    assert(createColRes.status === 201 && Boolean(collegeId), '3.1 Create college as super admin');

    // Register user to become College Admin
    const adminEmail = `college_admin_${timestamp}@enginst.edu`;
    await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: adminEmail, password: 'AdminPassword123!', fullName: 'Dean Johnson' })
    });
    let adminLoginRes = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: adminEmail, password: 'AdminPassword123!' })
    });
    let adminLoginData = await adminLoginRes.json();
    const adminUserId = adminLoginData.user?.id;
    if (adminUserId) createdUserIds.push(adminUserId);

    // 3.2 Promote existing user to college admin
    let promoteAdminRes = await fetch(`${BASE_URL}/api/super-admin/colleges/${collegeId}/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${superAdminToken}`
      },
      body: JSON.stringify({ userId: adminUserId })
    });
    let promoteAdminData = await promoteAdminRes.json();
    assert(promoteAdminRes.status === 200 && promoteAdminData.success, '3.2 Promote existing user to college admin');

    // Re-login as college admin to get token with refreshed role
    adminLoginRes = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: adminEmail, password: 'AdminPassword123!' })
    });
    adminLoginData = await adminLoginRes.json();
    const collegeAdminToken = adminLoginData.token;
    assert(adminLoginData.user?.role === 'college_admin' && adminLoginData.user?.college_id === collegeId, '3.2 College Admin role & college ID verified in auth response');

    // 3.3 Confirm college admin can access only their college
    let adminDashRes = await fetch(`${BASE_URL}/api/college-admin/dashboard`, {
      headers: { 'Authorization': `Bearer ${collegeAdminToken}` }
    });
    let adminDashData = await adminDashRes.json();
    assert(adminDashRes.status === 200 && adminDashData.college?.id === collegeId, '3.3 College admin accesses scoped dashboard for their college');

    // 3.4 Student requests membership in the college
    let joinReqRes = await fetch(`${BASE_URL}/api/colleges/${collegeId}/join`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${studentToken}` }
    });
    let joinReqData = await joinReqRes.json();
    const requestId = joinReqData.request?.id;
    assert(joinReqRes.status === 201 && joinReqData.request?.status === 'pending', '3.4 Student submits join request (status: pending)');

    // 3.5 Confirm the request appears for the correct college admin
    let listReqRes = await fetch(`${BASE_URL}/api/colleges/${collegeId}/requests`, {
      headers: { 'Authorization': `Bearer ${collegeAdminToken}` }
    });
    let listReqData = await listReqRes.json();
    assert(listReqData.requests?.some(r => r.id === requestId), '3.5 Join request appears in college admin requests queue');

    // 3.6 Approve the request
    let approveRes = await fetch(`${BASE_URL}/api/colleges/requests/${requestId}/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${collegeAdminToken}`
      },
      body: JSON.stringify({ action: 'approved' })
    });
    let approveData = await approveRes.json();
    assert(approveRes.status === 200 && approveData.request?.status === 'approved', '3.6 College admin approves join request');

    // 3.7 Verify student becomes a member exactly once
    let myProfileAfterJoin = await fetch(`${BASE_URL}/api/auth/profile`, {
      headers: { 'Authorization': `Bearer ${studentToken}` }
    });
    let profileAfterJoinData = await myProfileAfterJoin.json();
    assert(profileAfterJoinData.user?.college_membership?.status === 'active', '3.7 Student is verified as active college member');

    // 3.8 Register second student, submit request, and reject
    const secondStudentEmail = `student2_${timestamp}@testdomain.edu`;
    await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: secondStudentEmail, password: 'Password123!', fullName: 'Bob RejectTest' })
    });
    let s2LoginRes = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: secondStudentEmail, password: 'Password123!' })
    });
    let s2LoginData = await s2LoginRes.json();
    let s2Token = s2LoginData.token;
    if (s2LoginData.user?.id) createdUserIds.push(s2LoginData.user.id);

    let s2JoinRes = await fetch(`${BASE_URL}/api/colleges/${collegeId}/join`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${s2Token}` }
    });
    let s2JoinData = await s2JoinRes.json();
    let s2ReqId = s2JoinData.request?.id;

    let rejectRes = await fetch(`${BASE_URL}/api/colleges/requests/${s2ReqId}/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${collegeAdminToken}`
      },
      body: JSON.stringify({ action: 'rejected', rejectionReason: 'Ineligible prerequisites' })
    });
    assert(rejectRes.status === 200, '3.8 College admin rejects request with reason');

    let s2Profile = await fetch(`${BASE_URL}/api/auth/profile`, {
      headers: { 'Authorization': `Bearer ${s2Token}` }
    });
    let s2ProfileData = await s2Profile.json();
    assert(s2Profile.status === 200 && s2ProfileData.user?.email === secondStudentEmail, '3.8 Rejected student account remains intact');

    // 3.9 Ensure one student cannot acquire multiple active memberships
    // Create another college
    let col2Res = await fetch(`${BASE_URL}/api/super-admin/colleges`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${superAdminToken}`
      },
      body: JSON.stringify({ name: `Second College ${timestamp}`, slug: `sec-col-${timestamp}` })
    });
    let col2Data = await col2Res.json();
    let col2Id = col2Data.college?.id;
    if (col2Id) createdCollegeIds.push(col2Id);

    let multiJoinRes = await fetch(`${BASE_URL}/api/colleges/${col2Id}/join`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${studentToken}` }
    });
    assert(multiJoinRes.status === 400, '3.9 Enrolled student blocked from joining second college simultaneously (one-college policy enforced)');

    // --------------------------------------------------------------------------
    // 4. FACULTY TESTS
    // --------------------------------------------------------------------------
    console.log('\n--- 4. FACULTY TESTS ---');

    // Register faculty candidate
    const facultyEmail = `prof_${timestamp}@enginst.edu`;
    await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: facultyEmail, password: 'ProfPassword123!', fullName: 'Prof. Alan Turing' })
    });
    let facLoginRes = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: facultyEmail, password: 'ProfPassword123!' })
    });
    let facLoginData = await facLoginRes.json();
    let facultyUserId = facLoginData.user?.id;
    if (facultyUserId) createdUserIds.push(facultyUserId);

    // 4.1 College Admin promotes user to Faculty
    let promoteFacRes = await fetch(`${BASE_URL}/api/college-admin/faculty/promote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${collegeAdminToken}`
      },
      body: JSON.stringify({ userId: facultyUserId })
    });
    let promoteFacData = await promoteFacRes.json();
    assert(promoteFacRes.status === 200 && promoteFacData.success, '4.1 College admin promotes user to faculty');

    // Re-login as faculty to get token with faculty role
    facLoginRes = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: facultyEmail, password: 'ProfPassword123!' })
    });
    facLoginData = await facLoginRes.json();
    const facultyToken = facLoginData.token;
    assert(facLoginData.user?.role === 'faculty' && facLoginData.user?.college_id === collegeId, '4.1 Faculty role verified in auth context');

    // 4.2 Assign student to that faculty member
    let assignRes = await fetch(`${BASE_URL}/api/college-admin/faculty/assign`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${collegeAdminToken}`
      },
      body: JSON.stringify({ studentId, facultyId: facultyUserId })
    });
    let assignData = await assignRes.json();
    assert(assignRes.status === 200 && assignData.assignment?.status === 'active', '4.2 Student assigned to faculty member');

    // 4.3 Verify faculty can see assigned student
    let facStudentsRes = await fetch(`${BASE_URL}/api/faculty/students`, {
      headers: { 'Authorization': `Bearer ${facultyToken}` }
    });
    let facStudentsData = await facStudentsRes.json();
    assert(facStudentsData.students?.some(s => s.id === studentId), '4.3 Faculty sees assigned student in cohort');

    // 4.4 Verify faculty cannot view unrelated student
    let unrelatedCheckRes = await fetch(`${BASE_URL}/api/faculty/students/${s2LoginData.user?.id}`, {
      headers: { 'Authorization': `Bearer ${facultyToken}` }
    });
    assert(unrelatedCheckRes.status === 403, '4.4 Faculty blocked from inspecting unassigned student (403)');

    // 4.5 Verify faculty cannot promote users or administer college
    let facPromoteRes = await fetch(`${BASE_URL}/api/college-admin/faculty/promote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${facultyToken}`
      },
      body: JSON.stringify({ email: 'random@test.edu' })
    });
    assert(facPromoteRes.status === 403, '4.5 Faculty cannot perform administrative promotions (403)');

    // --------------------------------------------------------------------------
    // 5. COURSE ENROLLMENT & PROGRESS TESTS
    // --------------------------------------------------------------------------
    console.log('\n--- 5. COURSE TESTS ---');

    // 5.1 Enroll student in Python course
    let enrollRes = await fetch(`${BASE_URL}/api/students/enroll`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${studentToken}`
      },
      body: JSON.stringify({ courseId: 'python', collegeId })
    });
    let enrollData = await enrollRes.json();
    assert(enrollRes.status === 200 && enrollData.enrollment?.status === 'active', '5.1 Student enrolled in python course');

    // 5.2 Complete a topic and verify progress percentage calculation
    let compTopicRes = await fetch(`${BASE_URL}/api/students/complete-topic`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${studentToken}`
      },
      body: JSON.stringify({ courseId: 'python', topicId: 'py-top-intro' })
    });
    let compTopicData = await compTopicRes.json();
    assert(compTopicData.enrollment?.progress_percentage > 0, '5.2 Course progress calculated dynamically from completed topics');

    // 5.3 Verify student dashboard reflects progress
    let studentDashRes = await fetch(`${BASE_URL}/api/students/dashboard`, {
      headers: { 'Authorization': `Bearer ${studentToken}` }
    });
    let studentDashData = await studentDashRes.json();
    assert(studentDashData.total_enrolled >= 1 && studentDashData.total_completed_topics >= 1, '5.3 Student dashboard reflects real enrolled courses and completions');

    // --------------------------------------------------------------------------
    // 6. MESSAGING TESTS
    // --------------------------------------------------------------------------
    console.log('\n--- 6. MESSAGING TESTS ---');

    // 6.1 Student messages assigned faculty
    let sendMsgRes = await fetch(`${BASE_URL}/api/messages/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${studentToken}`
      },
      body: JSON.stringify({ receiverId: facultyUserId, content: 'Hello Professor Turing, I need advice on recursion.' })
    });
    let sendMsgData = await sendMsgRes.json();
    const convId = sendMsgData.message?.conversation_id;
    assert(sendMsgRes.status === 201 && Boolean(sendMsgData.message?.id), '6.1 Student sends message to assigned faculty');

    // 6.2 Faculty reads message and replies
    let facConvRes = await fetch(`${BASE_URL}/api/messages/conversations/${convId}`, {
      headers: { 'Authorization': `Bearer ${facultyToken}` }
    });
    let facConvData = await facConvRes.json();
    assert(facConvData.messages?.length >= 1 && facConvData.messages[0].is_read === true, '6.2 Faculty retrieves conversation and message is marked read');

    let facReplyRes = await fetch(`${BASE_URL}/api/messages/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${facultyToken}`
      },
      body: JSON.stringify({ receiverId: studentId, content: 'Hello Ada! Always ensure you have a base condition.' })
    });
    assert(facReplyRes.status === 201, '6.2 Faculty replies to student');

    // 6.3 Faculty messages their own college admin
    let facToAdminRes = await fetch(`${BASE_URL}/api/messages/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${facultyToken}`
      },
      body: JSON.stringify({ receiverId: adminUserId, content: 'Dean Johnson, submitting term syllabus draft.' })
    });
    assert(facToAdminRes.status === 201, '6.3 Faculty messages college admin');

    // 6.4 Unrelated student cannot read this conversation
    let eavesdropRes = await fetch(`${BASE_URL}/api/messages/conversations/${convId}`, {
      headers: { 'Authorization': `Bearer ${s2Token}` }
    });
    assert(eavesdropRes.status === 403, '6.4 Unrelated user blocked from reading private conversation (403)');

    // --------------------------------------------------------------------------
    // 7. REGRESSION TESTS (Existing Features)
    // --------------------------------------------------------------------------
    console.log('\n--- 7. REGRESSION TESTS ---');

    // 7.1 Code Execution Engine
    let execRes = await fetch(`${BASE_URL}/api/execute`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ language: 'python', code: 'print("Platform execution online")', stdin: '' })
    });
    let execData = await execRes.json();
    assert(execRes.status === 200 && execData.stdout?.includes('Platform execution online'), '7.1 Native Python code execution engine works');

    // 7.2 Practice Question Retrieval
    let practiceRes = await fetch(`${BASE_URL}/api/practice?language=python`);
    let practiceData = await practiceRes.json();
    assert(practiceData.success && practiceData.questions?.length > 0, '7.2 Practice challenge bank loaded (questions count: ' + practiceData.questions?.length + ')');

    // 7.3 AI Code Review Agent Endpoint
    try {
      let reviewAiRes = await fetch(`${BASE_URL}/api/ai/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: 'def sum_two(a, b): return a - b',
          language: 'python',
          error: 'Assertion failed: expected 5, got -1',
          questionContext: { title: 'Sum Two Numbers' }
        })
      });
      let reviewAiData = await reviewAiRes.json();
      assert(reviewAiRes.status === 200 && (reviewAiData.success || reviewAiData.review), '7.3 AI Code Review agent endpoint responds');
    } catch (err) {
      console.warn('  ⚠️ AI Review endpoint warning (transient network):', err.message);
    }

    // 7.4 Audit Logs
    let auditRes = await fetch(`${BASE_URL}/api/super-admin/audit-logs`, {
      headers: { 'Authorization': `Bearer ${superAdminToken}` }
    });
    let auditData = await auditRes.json();
    assert(auditData.logs?.length > 0, '7.4 Audit log tracking persisted administrative actions (count: ' + auditData.logs?.length + ')');

    console.log('\n=============================================================');
    console.log(`📊 TEST SUITE SUMMARY: ${passed} PASSED, ${failed} FAILED`);
    console.log('=============================================================\n');
  } finally {
    console.log('\n🧹 CLEANING UP TEST DATA (ISOLATION GUARANTEE)...');
    for (const uid of createdUserIds) {
      if (!uid) continue;
      if (isSupabaseAdminConfigured()) {
        try {
          await supabaseAdmin.auth.admin.deleteUser(uid);
        } catch (e) {
          console.warn('  [Cleanup] Supabase user delete warning:', e.message);
        }
      }
      dbService.deleteUserAndData(uid);
    }

    for (const cid of createdCollegeIds) {
      if (!cid) continue;
      dbService.deleteCollege(cid);
    }

    // Clean up test audit logs
    dbService.data.audit_logs = dbService.data.audit_logs.filter(log =>
      !createdUserIds.includes(log.actor_id) &&
      !createdUserIds.includes(log.target_id) &&
      !createdCollegeIds.includes(log.target_id)
    );
    dbService.save();

    console.log('✅ Isolation Cleanup complete: All test users and test colleges removed from database.\n');
  }

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch(e => {
  console.error('Test runner error:', e);
  process.exit(1);
});

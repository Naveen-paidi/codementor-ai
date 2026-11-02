import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import { LearningProvider } from './context/LearningContext.jsx';

import MainLayout from './components/MainLayout.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import SplashScreen from './components/SplashScreen.jsx';
import PracticeErrorBoundary from './components/PracticeErrorBoundary.jsx';

// Core Pages
import Landing from './pages/Landing.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Languages from './pages/Languages.jsx';
import Practice from './pages/Practice.jsx';
import Profile from './pages/Profile.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Playground from './pages/Playground.jsx';
import AIMentorPage from './pages/AIMentorPage.jsx';
import ProgressPage from './pages/ProgressPage.jsx';
import Achievements from './pages/Achievements.jsx';
import NotFound from './pages/NotFound.jsx';

// Multi-College LMS Role Pages
import CollegeMembership from './pages/CollegeMembership.jsx';
import MessagesPage from './pages/MessagesPage.jsx';
import FacultyDashboardPage from './pages/FacultyDashboardPage.jsx';
import CollegeAdminDashboardPage from './pages/CollegeAdminDashboardPage.jsx';
import SuperAdminDashboardPage from './pages/SuperAdminDashboardPage.jsx';

// Canonical Structured Curriculum & Topic Detail
import Curriculum from './pages/Curriculum.jsx';
import TopicDetail from './pages/TopicDetail.jsx';

// DSA Module Pages
import DSACatalogue from './pages/dsa/DSACatalogue.jsx';
import DSAWorkspace from './pages/dsa/DSAWorkspace.jsx';

// Certificates & Verification
import Certificates from './pages/Certificates.jsx';
import CertificateVerification from './pages/CertificateVerification.jsx';

/**
 * Intelligent role-based dashboard router.
 * Inspects authenticated user credentials and redirects to their canonical role dashboard.
 */
function RoleDashboardRedirect() {
  const { user, sessionLoading } = useAuth();
  const location = useLocation();

  if (sessionLoading) {
    return (
      <div className="min-h-screen bg-[#070B20] flex flex-col items-center justify-center text-white space-y-4">
        <div className="w-10 h-10 border-3 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
        <p className="text-xs text-slate-400 font-medium tracking-wide">Resolving CodeMentor session...</p>
      </div>
    );
  }

  if (!user || user.isGuest) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.role === 'super_admin') return <Navigate to="/admin/dashboard" replace />;
  if (user.role === 'college_admin') return <Navigate to="/college-admin/dashboard" replace />;
  if (user.role === 'faculty') return <Navigate to="/faculty/dashboard" replace />;
  return <Navigate to="/student/dashboard" replace />;
}

function AppContent() {
  const { sessionLoading } = useAuth();

  // Splash Screen State (3-second splash screen on first visit)
  const [showSplash, setShowSplash] = useState(() => {
    try {
      return !sessionStorage.getItem('codementor_splash_seen');
    } catch {
      return true;
    }
  });

  if (sessionLoading) {
    return (
      <div className="min-h-screen bg-[#070B20] flex flex-col items-center justify-center text-white space-y-4">
        <div className="w-10 h-10 border-3 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
        <p className="text-xs text-slate-400 font-medium tracking-wide">Resolving CodeMentor session...</p>
      </div>
    );
  }

  return (
    <>
      {showSplash && (
        <SplashScreen
          onFinish={() => {
            try {
              sessionStorage.setItem('codementor_splash_seen', 'true');
            } catch {}
            setShowSplash(false);
          }}
        />
      )}

      <Routes>
        {/* ================================================================= */}
        {/* 1. PUBLIC MARKETING & AUTHENTICATION ROUTES                        */}
        {/* ================================================================= */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Signup />} />

        {/* Public Course Browsing */}
        <Route path="/courses" element={<Languages />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/curriculum/:languageSlug" element={<Curriculum />} />
        <Route path="/curriculum/:languageSlug/topic/:topicSlug" element={<TopicDetail />} />

        {/* Public Problem Catalogues & Playground */}
        <Route path="/dsa" element={<DSACatalogue />} />
        <Route path="/dsa/:problemId" element={<DSAWorkspace />} />
        <Route path="/practice" element={<PracticeErrorBoundary><Practice /></PracticeErrorBoundary>} />
        <Route path="/playground" element={<Playground />} />

        {/* Public Certificate Verification */}
        <Route path="/verify-certificate" element={<CertificateVerification />} />
        <Route path="/verify-certificate/:certificateId" element={<CertificateVerification />} />

        {/* Intelligent Central Dashboard Redirect */}
        <Route path="/dashboard" element={<RoleDashboardRedirect />} />
        <Route path="/home" element={<RoleDashboardRedirect />} />

        {/* Legacy redirect bridges */}
        <Route path="/progress" element={<Navigate to="/student/progress" replace />} />
        <Route path="/achievements" element={<Navigate to="/student/achievements" replace />} />
        <Route path="/certificates" element={<Navigate to="/student/certificates" replace />} />
        <Route path="/college" element={<Navigate to="/student/college" replace />} />

        {/* ================================================================= */}
        {/* 2. STUDENT PORTAL (Protected Role: user, faculty, admins)         */}
        {/* ================================================================= */}
        <Route
          path="/student"
          element={
            <ProtectedRoute allowedRoles={['user', 'faculty', 'college_admin', 'super_admin']}>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/student/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="courses" element={<Languages />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="curriculum/:languageSlug" element={<Curriculum />} />
          <Route path="curriculum/:languageSlug/topic/:topicSlug" element={<TopicDetail />} />
          <Route
            path="practice"
            element={
              <PracticeErrorBoundary>
                <Practice />
              </PracticeErrorBoundary>
            }
          />
          <Route path="dsa" element={<DSACatalogue />} />
          <Route path="dsa/:problemId" element={<DSAWorkspace />} />
          <Route path="playground" element={<Playground />} />
          <Route path="ai-mentor" element={<AIMentorPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="college" element={<CollegeMembership />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* ================================================================= */}
        {/* 3. FACULTY PORTAL (Protected Role: faculty, admins)               */}
        {/* ================================================================= */}
        <Route
          path="/faculty"
          element={
            <ProtectedRoute allowedRoles={['faculty', 'college_admin', 'super_admin']}>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/faculty/dashboard" replace />} />
          <Route path="dashboard" element={<FacultyDashboardPage />} />
          <Route path="courses" element={<Languages />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="curriculum/:languageSlug" element={<Curriculum />} />
          <Route path="curriculum/:languageSlug/topic/:topicSlug" element={<TopicDetail />} />
          <Route
            path="practice"
            element={
              <PracticeErrorBoundary>
                <Practice />
              </PracticeErrorBoundary>
            }
          />
          <Route path="dsa" element={<DSACatalogue />} />
          <Route path="dsa/:problemId" element={<DSAWorkspace />} />
          <Route path="playground" element={<Playground />} />
          <Route path="ai-mentor" element={<AIMentorPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* ================================================================= */}
        {/* 4. COLLEGE ADMIN PORTAL (Protected Role: college_admin, admin)   */}
        {/* ================================================================= */}
        <Route
          path="/college-admin"
          element={
            <ProtectedRoute allowedRoles={['college_admin', 'super_admin']}>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/college-admin/dashboard" replace />} />
          <Route path="dashboard" element={<CollegeAdminDashboardPage />} />
          <Route path="courses" element={<Languages />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="curriculum/:languageSlug" element={<Curriculum />} />
          <Route path="curriculum/:languageSlug/topic/:topicSlug" element={<TopicDetail />} />
          <Route
            path="practice"
            element={
              <PracticeErrorBoundary>
                <Practice />
              </PracticeErrorBoundary>
            }
          />
          <Route path="dsa" element={<DSACatalogue />} />
          <Route path="dsa/:problemId" element={<DSAWorkspace />} />
          <Route path="playground" element={<Playground />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* ================================================================= */}
        {/* 5. SUPER ADMIN PORTAL (Protected Role: super_admin)               */}
        {/* ================================================================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['super_admin']}>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<SuperAdminDashboardPage />} />
          <Route path="courses" element={<Languages />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="curriculum/:languageSlug" element={<Curriculum />} />
          <Route path="curriculum/:languageSlug/topic/:topicSlug" element={<TopicDetail />} />
          <Route
            path="practice"
            element={
              <PracticeErrorBoundary>
                <Practice />
              </PracticeErrorBoundary>
            }
          />
          <Route path="dsa" element={<DSACatalogue />} />
          <Route path="dsa/:problemId" element={<DSAWorkspace />} />
          <Route path="playground" element={<Playground />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* ================================================================= */}
        {/* 6. CATCH-ALL 404 NOT FOUND ROUTE                                 */}
        {/* ================================================================= */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LearningProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </LearningProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

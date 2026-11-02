import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import Button from './ui/Button.jsx';

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const { user, sessionLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (sessionLoading) {
    return (
      <div className="min-h-screen bg-[#F7F5FC] dark:bg-[#030617] flex flex-col items-center justify-center text-[#171725] dark:text-[#F8FAFC] space-y-4">
        <div className="w-10 h-10 border-3 border-indigo-500/20 border-t-indigo-500 dark:border-cyan-500/20 dark:border-t-cyan-400 rounded-full animate-spin" />
        <p className="text-xs text-[#64748B] dark:text-slate-400 font-medium tracking-wide">Resolving CodeMentor session...</p>
      </div>
    );
  }

  // Not logged in or guest
  if (!user || user.isGuest) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check role authorization
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    const roleDashboardMap = {
      super_admin: '/admin/dashboard',
      college_admin: '/college-admin/dashboard',
      faculty: '/faculty/dashboard',
      user: '/student/dashboard'
    };
    const userDashboard = roleDashboardMap[user.role] || '/student/dashboard';

    return (
      <div className="max-w-xl mx-auto my-16 p-8 rounded-3xl bg-white dark:bg-[#070B20]/90 border border-rose-200 dark:border-rose-500/30 shadow-xl text-center space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center mx-auto border border-rose-200 dark:border-rose-500/30">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <div className="space-y-1.5">
          <h2 className="text-xl font-bold text-[#171725] dark:text-white">Access Denied (403)</h2>
          <p className="text-xs text-[#64748B] dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            Your current account role (<span className="font-mono font-bold uppercase">{user.role?.replace('_', ' ')}</span>) does not have authorization to view this protected resource.
          </p>
        </div>
        <div className="pt-2 flex justify-center">
          <Button
            variant="primary"
            onClick={() => navigate(userDashboard)}
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Return to Authorized Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return children;
}


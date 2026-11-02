import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Navbar from './Navbar.jsx';
import AIChatbot from './AIChatbot.jsx';

export const MainLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();

  const isAIMentorPage = location.pathname.includes('/ai-mentor');

  return (
    <div className="min-h-screen bg-[#F7F5FC] dark:bg-[#030617] text-[#171725] dark:text-[#F8FAFC] flex flex-col font-sans selection:bg-indigo-600 dark:selection:bg-cyan-500 selection:text-white transition-colors duration-300">
      <div className="flex-1 flex">
        {/* Responsive Role-Aware Sidebar */}
        <Sidebar
          isCollapsed={sidebarCollapsed}
          setIsCollapsed={setSidebarCollapsed}
          mobileOpen={mobileSidebarOpen}
          setMobileOpen={setMobileSidebarOpen}
        />

        {/* Content Area with dynamic margin based on sidebar collapse */}
        <div
          className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${
            sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'
          }`}
        >
          {/* Top Sticky Navbar */}
          <Navbar
            onToggleMobileSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            sidebarCollapsed={sidebarCollapsed}
          />

          {/* Routed Nested Page Content */}
          <main className="flex-1 p-3 sm:p-6 pb-20">
            <Outlet />
          </main>

          {/* Global Footer */}
          <footer className="border-t border-[#E5E1F0] dark:border-white/10 bg-white/80 dark:bg-[#070B20]/90 backdrop-blur-md py-6 text-center text-xs text-[#64748B] dark:text-slate-400">
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="CodeMentor" className="w-5 h-5 object-contain" />
                <span className="font-semibold text-[#171725] dark:text-white">CodeMentor</span>
                <span>•</span>
                <span>Intelligent AI Programming Learning Platform</span>
              </div>
              <div className="flex items-center gap-3 text-[#64748B] dark:text-slate-400">
                <span>Python • JavaScript • Java • C • C++</span>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Floating Socratic AI Assistant (hidden on full-screen AI mentor page) */}
      {!isAIMentorPage && <AIChatbot />}
    </div>
  );
};

export default MainLayout;


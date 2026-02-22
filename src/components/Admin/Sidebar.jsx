import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Briefcase, MessageSquare, 
  Settings, LogOut, Menu, X, ChevronRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: <LayoutDashboard size={22} />, label: 'Dashboard', path: '/admin/home' },
    { icon: <Briefcase size={22} />, label: 'Projects', path: '/admin/projects' },
    { icon: <MessageSquare size={22} />, label: 'Messages', path: '/admin/messages' },
    { icon: <Settings size={22} />, label: 'Settings', path: '/admin/settings' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('Token');
    navigate('/admin');
  };

  const NavContent = () => (
    <div className="flex flex-col h-full py-6">
      {/* Brand Logo */}
      <div className="px-6 mb-10 flex items-center gap-3">
        <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)]">
          <span className="text-white font-black text-xl italic">G</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold tracking-tight leading-none">Admin</span>
          <span className="text-gray-500 text-[10px] uppercase tracking-widest font-black mt-1">Portfolio v2</span>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `
              group flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300
              ${isActive 
                ? 'bg-blue-600 text-white shadow-[0_10px_20px_rgba(37,99,235,0.2)]' 
                : 'text-gray-500 hover:text-white hover:bg-white/5'}
            `}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="font-semibold text-sm tracking-wide">{item.label}</span>
            </div>
            <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${location.pathname === item.path ? 'hidden' : ''}`} />
          </NavLink>
        ))}
      </nav>

      {/* Logout Section */}
      <div className="px-3 pt-6 border-t border-white/5">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3.5 text-red-400 hover:text-red-500 hover:bg-red-500/5 rounded-2xl transition-all font-semibold text-sm"
        >
          <LogOut size={22} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* MOBILE HEADER (Top Bar) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#080808]/80 backdrop-blur-md border-b border-white/5 z-50 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-xs">G</span>
          </div>
          <span className="text-white font-bold text-sm tracking-tight">Admin</span>
        </div>
        <button onClick={() => setIsOpen(true)} className="text-white p-2 bg-white/5 rounded-lg">
          <Menu size={20} />
        </button>
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-72 bg-[#080808] z-[70] lg:hidden shadow-2xl"
            >
              <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white p-2">
                <X size={20} />
              </button>
              <NavContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* DESKTOP SIDEBAR (Static) */}
      <aside className="hidden lg:flex w-72 h-screen bg-[#080808] border-r border-white/5 sticky top-0">
        <NavContent />
      </aside>
    </>
  );
};

export default Sidebar;
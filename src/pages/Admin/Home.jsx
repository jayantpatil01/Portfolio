import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, FileText, Plus, 
  ArrowUpRight, Globe, Code2, CloudUpload 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const navigate = useNavigate();

  const ActionButton = ({ icon: Icon, label, onClick, primary = false }) => (
    <button 
      onClick={onClick}
      className={`flex items-center justify-center gap-3 p-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all active:scale-95 ${
        primary 
        ? 'bg-white text-black hover:bg-gray-200' 
        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
      }`}
    >
      <Icon size={16} /> {label}
    </button>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/20">
            JP
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight leading-none">Jayant Patil</h1>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Software Developer
            </p>
          </div>
        </div>

      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Projects', value: '14', icon: Code2, color: 'text-blue-500', bg: 'bg-blue-500/10' },
          { label: 'Inbox', value: '08', icon: MessageSquare, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
          { label: 'CV Hits', value: '142', icon: FileText, color: 'text-purple-500', bg: 'bg-purple-500/10' },
        ].map((stat, i) => (
          <motion.div key={i} whileHover={{ y: -2 }} className="bg-[#0A0A0A] border border-white/5 p-5 rounded-[2rem] flex flex-col gap-4">
            <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <div>
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
              <h2 className="text-3xl font-black text-white leading-none mt-1">{stat.value}</h2>
            </div>
          </motion.div>
        ))}

        <motion.div 
          onClick={() => window.open('/', '_blank')}
          className="bg-blue-600 p-5 rounded-[2rem] flex flex-col justify-between cursor-pointer hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/10"
        >
          <ArrowUpRight className="text-white/50 self-end" size={20} />
          <div>
            <p className="text-white/70 text-[10px] font-black uppercase tracking-widest leading-none">Live Portfolio</p>
            <p className="text-white font-bold text-sm mt-1 flex items-center gap-1 leading-none">Visit <Globe size={12}/></p>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ActionButton icon={Plus} label="Add New Project" primary onClick={() => navigate('/admin/projects')} />
        <ActionButton icon={CloudUpload} label="Update CV" onClick={() => navigate('/admin/resume')} />
        <ActionButton icon={MessageSquare} label="View Messages" onClick={() => navigate('/admin/messages')} />
      </div>
    </div>
  );
};

export default AdminHome;
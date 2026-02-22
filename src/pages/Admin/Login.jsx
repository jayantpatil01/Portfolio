import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, Loader2, Shield, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Api from '../../../config/Api.js';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data } = await Api.post('/auth/login', formData);
      if (data.token) {
        localStorage.setItem('Token', data.token);
        navigate('/admin/home');
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 h-[100dvh] w-full bg-[#050505] flex items-center justify-center p-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[400px] z-10 relative"
      >
        <div className="text-center mb-10">
          <div className="inline-flex p-3 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
            <Shield size={28} className="text-blue-500" strokeWidth={1.5} />
          </div>
          <h1 className="text-white text-3xl font-medium tracking-tight">Welcome back</h1>
          <p className="text-gray-500 text-sm mt-2 font-light">Enter your credentials to manage your portfolio.</p>
        </div>

        {error && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500 text-sm">
            <AlertCircle size={18} /> {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-blue-500 transition-colors" size={18} />
            <input 
              type="email" required placeholder="Email Address"
              className="w-full bg-white/[0.02] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-blue-500/50 transition-all"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-blue-500 transition-colors" size={18} />
            <input 
              type={showPassword ? "text" : "password"} required placeholder="Password"
              className="w-full bg-white/[0.02] border border-white/5 rounded-2xl py-4 pl-12 pr-12 text-white outline-none focus:border-blue-500/50 transition-all"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button 
            type="submit" disabled={loading}
            className="w-full bg-white text-black font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-200 disabled:opacity-50 transition-all active:scale-[0.98] mt-6"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <>Sign In <ArrowRight size={18} /></>}
          </button>
        </form>

        <div className="mt-10 text-center text-gray-600 text-[10px] uppercase tracking-[0.3em] font-bold">
          <button onClick={() => navigate('/')} className="hover:text-blue-500 transition-colors">← Back to Portfolio</button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
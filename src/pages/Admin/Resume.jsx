import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CloudUpload, CheckCircle2, Loader2, FileText, ExternalLink } from 'lucide-react';
import Api from '../../../config/Api.js';

const Resume = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [hasResume, setHasResume] = useState(false);

  // Check if resume exists on component mount
  useEffect(() => {
    checkResumeStatus();
  }, []);

  const checkResumeStatus = async () => {
    try {
      // Calling your GET /resume route
      const response = await Api.get('/resume');
      if (response.status === 200) {
        setHasResume(true);
      }
    } catch (error) {
      setHasResume(false);
      console.log("No active resume found on server.");
    }
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    const formData = new FormData();
    formData.append('resume', file);

    try {
      await Api.post('/resume', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      alert("Resume uploaded successfully!");
      setFile(null);
      setHasResume(true); // Update status immediately
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  // Function to open the resume in a new tab
  const handleViewResume = () => {
    // This points directly to your GET route which uses res.sendFile
    const baseUrl = Api.defaults.baseURL || '';
    window.open(`${baseUrl}/resume`, '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto pt-10 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-white tracking-tight">Resume Management</h1>
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Deploy or view your professional CV</p>
        </div>

        {/* View Current Resume Button (Only if exists) */}
        {hasResume && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleViewResume}
            className="w-full mb-6 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-300 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
          >
            <ExternalLink size={14} /> View Current Live Resume
          </motion.button>
        )}

        {/* Dropzone Container */}
        <label className="group relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-white/10 rounded-[2rem] hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-pointer overflow-hidden">
          <input 
            type="file" 
            className="hidden" 
            accept=".pdf" 
            onChange={handleFileChange} 
          />
          
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className={`p-5 rounded-2xl transition-all duration-500 ${file ? 'bg-emerald-500/10' : 'bg-white/5 group-hover:rotate-6'}`}>
              <CloudUpload size={32} className={file ? 'text-emerald-500' : 'text-blue-500'} />
            </div>
            
            <div className="text-center px-6">
              <p className="text-white font-bold text-sm truncate max-w-[250px]">
                {file ? file.name : "Select New Resume PDF"}
              </p>
              <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest mt-1">
                {file ? `${(file.size / (1024 * 1024)).toFixed(2)} MB` : "Ready to Update"}
              </p>
            </div>
          </div>
        </label>

        {/* Action Button */}
        <button
          disabled={!file || uploading}
          onClick={handleUpload}
          className={`w-full mt-8 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
            file && !uploading 
            ? 'bg-white text-black hover:bg-gray-200 active:scale-[0.98]' 
            : 'bg-white/5 text-gray-500 cursor-not-allowed'
          }`}
        >
          {uploading ? (
            <Loader2 className="animate-spin" size={16} />
          ) : (
            <CheckCircle2 size={16} />
          )}
          {uploading ? "Uploading..." : "Push to Production"}
        </button>

        {/* Status Tag */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <div className={`w-1.5 h-1.5 rounded-full ${hasResume ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
          <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">
            {hasResume ? "Resume is currently live" : "No resume detected on server"}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
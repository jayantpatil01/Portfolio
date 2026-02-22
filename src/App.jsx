import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/User/Home';

// Admin Pages
import AdminLogin from './pages/Admin/Login';
import AdminHome from './pages/Admin/Home';
import Resume from './pages/Admin/Resume';

// Admin Layout
import AdminLayout from './components/Admin/AdminLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Side */}
        <Route path="/" element={<Home />} />

        {/* Admin Login - Keep this outside the layout so the sidebar doesn't show */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Admin Protected Routes - Wrap these in AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="home" element={<AdminHome />} />
           <Route path='resume' element={<Resume />} /> 

        </Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
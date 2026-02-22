import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#050505]">
      <Sidebar />
      <main className="flex-1 lg:p-10 p-6 pt-24 lg:pt-10 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
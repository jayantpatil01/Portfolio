import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

import Home from './pages/User/Home';

//Admin Pages
import AdminLogin from './pages/Admin/Login';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
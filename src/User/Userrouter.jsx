import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Usersignup from './Usersignup';
import Userlogin from './Userlogin';
import Otp from './Otp';
import Userhome from './Userhome';

function Userrouter() {
  return (

      <Routes>
        <Route path="/Signup" element={<Usersignup />} />
        <Route path="/login" element={<Userlogin />} />
        <Route path="/otp" element={<Otp />} />
        <Route path='/userhome'element={<Userhome/>}/>
        </Routes>

  );
}

export default Userrouter;

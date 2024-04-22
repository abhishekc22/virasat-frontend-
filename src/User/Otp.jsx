import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { otpapi } from '../Api/Userapi';

function Otp() {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userid;

  const [otp, setOtp] = useState('');

  const handleVerify = async () => {
    try {
      const res = await otpapi({userId:userId,otp:otp});
      if (res.status === 200) {
        navigate('/User/login')
        
      } else {
        console.log('Verification failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center bg-gray-50 py-12">
        <div className="bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">Email Verification</div>
          </div>

          <form className="mt-8">
            <div className="flex flex-col space-y-4">
              <input
                className="w-full h-12 px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 text-center"
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />

              <button type="button" onClick={handleVerify} className="py-4 bg-blue-700 text-white rounded-xl shadow-sm">
                Verify Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Otp;

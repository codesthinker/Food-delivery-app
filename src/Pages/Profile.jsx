import React, { useState } from 'react';
import { AiFillInfoCircle } from "react-icons/ai";
import { FaCheckCircle, FaFacebook, FaGoogle, FaApple } from "react-icons/fa";

const Profile = () => {
  const storageData = JSON.parse(localStorage.getItem("Login")) || {};
  const { FirstName = '', lastname = '', email = '' } = storageData;

  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneSaveEnabled, setIsPhoneSaveEnabled] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isPasswordSaveEnabled, setIsPasswordSaveEnabled] = useState(false);

  
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setIsPhoneSaveEnabled(value.trim() !== '' && value.length >= 10);
  };

  const handleCurrentPasswordChange = (e) => {
    const value = e.target.value;
    setCurrentPassword(value);
    checkIfPasswordSaveEnabled(value, newPassword);
  };

  const handleNewPasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    checkIfPasswordSaveEnabled(currentPassword, value);
  };

  const checkIfPasswordSaveEnabled = (currentPass, newPass) => {
    setIsPasswordSaveEnabled(currentPass.trim() !== '' && newPass.trim() !== '');
  };

  return (
    <div className='flex mt-20 justify-center items-center h-auto'>
      <form className='w-full max-w-lg bg-white shadow-md rounded-lg p-8'>
        <h1 className='text-2xl font-bold mb-6 flex items-center'>
          My Profile <AiFillInfoCircle className='ml-2 text-blue-500' />
        </h1>

        <div className='mb-4'>
          <input
            type="text"
            defaultValue={FirstName}
            placeholder='Enter first name'
            className='w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none'
          />
        </div>

        <div className='mb-4'>
          <input
            type="text"
            defaultValue={lastname}
            placeholder='Enter last name'
            className='w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-2'>Mobile Number</label>
          <input
            type="number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder='Your mobile number'
            className='w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none'
          />
        </div>

        <div className='mb-6'>
          <button
            type='button'
            disabled={!isPhoneSaveEnabled}  // Disable the button based on phone number input
            className={`w-full text-white font-bold py-2 px-4 rounded-lg transition ${
              isPhoneSaveEnabled ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Save
          </button>
        </div>

        <hr className='my-6' />

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-2'>Email</label>
          <input
            type="email"
            defaultValue={email}
            placeholder='Enter your email'
            className='w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none'
          />
          <p className='flex items-center mt-2 text-gray-500'>
            <FaCheckCircle className='text-green-500 mr-2' /> Verify
          </p>
        </div>

        <hr className='my-6' />

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-2'>Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
            placeholder='Current password'
            className='w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-2'>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            placeholder='New password'
            className='w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none'
          />
        </div>

        <div className='mb-6'>
          <button
            type='button'
            disabled={!isPasswordSaveEnabled}  // Disable the button based on password inputs
            className={`w-full text-white font-bold py-2 px-4 rounded-lg transition ${
              isPasswordSaveEnabled ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Save
          </button>
        </div>

        <hr className='my-6' />

        {/* Payment Section */}
        <div className='mb-4'>
          <label className='block text-sm font-medium mb-2'>My Payment</label>
          <p className='text-gray-500'>You have no saved payment options yet.</p>
        </div>

        <hr className='my-6' />

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-4'>Connect Account</label>

          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center'>
              <FaFacebook className='text-blue-600 text-2xl mr-2' />
              <p className='font-medium'>Facebook</p>
            </div>
            <button className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition'>
              Connect
            </button>
          </div>

        
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center'>
              <FaGoogle className='text-red-500 text-2xl mr-2' />
              <p className='font-medium'>Google</p>
            </div>
            <button className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition'>
              Connect
            </button>
          </div>

          {/* Apple Connect Option */}
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center'>
              <FaApple className='text-black text-2xl mr-2' />
              <p className='font-medium'>Apple</p>
            </div>
            <button className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition'>
              Connect
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;

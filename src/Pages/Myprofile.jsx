import React, { Fragment } from 'react';
import { AiFillInfoCircle } from "react-icons/ai";
import { FaCheckCircle, FaFacebook } from "react-icons/fa";


const MyProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const rawdata = new FormData(e.currentTarget)
    const data = Object.fromEntries(rawdata)
    console.log(data);
    localStorage.setItem("Login",JSON.stringify(data))
  }
  return (

    <Fragment>
      <div className='flex mt-20 justify-center items-center h-auto '>
        <form onSubmit={handleSubmit} className='w-full max-w-lg bg-white shadow-md rounded-lg p-8'>
        
          <h1 className='text-2xl font-bold mb-6 flex items-center'>
            My Profile <AiFillInfoCircle className='ml-2 text-blue-500' />
          </h1>

          {/* Input Fields */}
          <div className='mb-4'>
            
            <input
              type="text"
              name='FirstName'
              placeholder='Enter first name'
              className='w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none'
            />
          </div>

          <div className='mb-4'>
            
            <input
              type="text"
              name='lastname'
              placeholder='Enter last name'
              className='w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium mb-2'>Mobile Number</label>
            <input
              type="number"
              placeholder='Your mobile number'
              className='w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none'
            />
          </div>

          {/* Save Button */}
          <div className='mb-6'>
            <button type='submit' className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition'>
              Save
            </button>
          </div>

          <hr className='my-6' />

          {/* Email Section */}
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-2'>Email</label>
            <input
              type="email"
              name='email'
              placeholder='Enter your email'
              className='w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none'
            />
            <p className='flex items-center mt-2 text-gray-500'>
              <FaCheckCircle className='text-green-500 mr-2' /> Verify
            </p>
          </div>

          <hr className='my-6' />

          {/* Password Section */}
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-2'>Current Password</label>
            <input
              type="password"
         
              placeholder='Current password'
              className='w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium mb-2'>New Password</label>
            <input
              type="password"
              

              placeholder='New password'
              className='w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none'
            />
          </div>

          <div className='mb-6'>
            <button type='submit' className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition'>
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

          {/* Social Media Connections */}
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-4'>Connect Account</label>

            {/* Facebook Connect Option */}
            <div className='flex items-center justify-between mb-4'>
              <div className='flex items-center'>
                <FaFacebook className='text-blue-600 text-2xl mr-2' />
                <p className='font-medium'>Facebook</p>
              </div>
              <button className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition'>
                Connect
              </button>
            </div>


          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default MyProfile;

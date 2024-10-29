import React, { Fragment, useState } from 'react';
import { SiFoodpanda } from "react-icons/si";
import { Link, useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners'; // Using react-spinners for the loader
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Icons for password visibility


const Loginpage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [loading, setLoading] = useState(false); // State to show loader spinner

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    location: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Validate form fields
  const validateForm = () => {
    let formErrors = {};

    if (!formData.firstName) {
      formErrors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      formErrors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    }

    if (!formData.location) {
      formErrors.location = 'Location is required';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Set loading to true and show loader spinner
      setLoading(true);

      // Simulate delay (1 second) before navigating
      setTimeout(() => {
        setLoading(false); // Hide loader spinner
        navigate('/Restorent'); // Navigate to home page
      }, 1000);
    }
  };

  return (
    <Fragment>
      <div>
        {/* Navbar Section */}
        <nav className='flex fixed z-20 w-full justify-center items-center p-1 bg-gray-50 shadow-xl'>
          <div className='w-[90%] flex justify-between p-3'>
            <Link to={"/"}>
              <div className='flex justify-center items-center gap-2 text-[rgb(226,27,112)]'>
                <SiFoodpanda className='font-semibold text-3xl' />
                <p className='font-semibold text-2xl'>Foodpanda</p>
              </div>
            </Link>
            <button onClick={() => setForm(!form)} className='px-3 py-2 rounded text-white bg-[rgb(226,27,112)]'>
              Login
            </button>
          </div>
        </nav>


        <div
          className='w-full relative  h-[400px] md:h-[500px] bg-[url("https://images.deliveryhero.io/image/foodpanda/cms-hero.jpg")] bg-cover bg-center'
        >
          <div className='absolute flex left-1/2 transform -translate-x-1/2 top-40 md:top-60 justify-center items-center text-center'>
            <h1 className='text-2xl md:text-4xl z-0 text-white font-bold'>FOODPANDA IN THE NEWS</h1>
          </div>
        </div>
      </div>

      {form && (
        <Fragment>
          {/* Overlay - Clicking here closes the form */}
          <div onClick={() => setForm(false)} className="flex justify-center items-center z-10 absolute top-0 w-full h-full bg-black opacity-70"></div>

          {/* Form Section - Clicking inside this doesn't close the form */}
          <div className="flex justify-center items-center z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-full">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 py-6 w-full max-w-md">
              <div className='flex justify-between'>
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[rgb(226,27,112)]">Register Here</h1>
                <h1 onClick={() => setForm(false)} className='rounded-full hover:bg-gray-300 w-8 h-8 text-center cursor-pointer'>x</h1>
              </div>

              {/* First Name */}
              <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(226,27,112)] mb-1`}
              />
              {errors.firstName && <p className="text-red-500 text-sm ">{errors.firstName}</p>}

              {/* Last Name */}
              <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(226,27,112)] mb-1`}
              />
              {errors.lastName && <p className="text-red-500 text-sm mb-1">{errors.lastName}</p>}

              {/* Email */}
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(226,27,112)] mb-1`}
              />
              {errors.email && <p className="text-red-500 text-sm mb-1">{errors.email}</p>}

              {/* Password */}
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(226,27,112)] mb-1`}
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              {errors.password && <p className="text-red-500 text-sm mb-1">{errors.password}</p>}

              {/* Current Location */}
              <label htmlFor="location" className="block text-gray-700 font-semibold mb-1">Current Location</label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your location"
                className={`w-full px-4 py-2 border ${errors.location ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(226,27,112)] mb-1`}
              />
              {errors.location && <p className="text-red-500 text-sm mb-1">{errors.location}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[rgb(226,27,112)] text-white font-semibold py-2 rounded-lg mt-4 hover:bg-[rgb(200,27,112)] transition duration-300 ease-in-out"
              >
                Register
              </button>
            </form>
          </div>
        </Fragment>
      )}

      {/* Loader spinner */}
      {loading && (
        <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full bg-gray-50 bg-opacity-70">
          <FadeLoader color="#e21b70" loading={loading} size={150} />
        </div>
      )}
    </Fragment>
  );
}

export default Loginpage;

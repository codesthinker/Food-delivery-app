import React, { Fragment, useState } from 'react';
import bg from "../Images/homepage.webp";
import { MdMyLocation } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import Model from './Model';
import SyncLoader from "react-spinners/SyncLoader"; // Import loader spinner

const About = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [location, setLocation] = useState('');
    const [find, setFind] = useState(false);
    const [loading, setLoading] = useState(false); // State to control loader spinner

    // Toggle the model with a delay of 2 seconds to simulate loading
    const handleChange = () => {
        setLoading(true); // Show the loader spinner
        setTimeout(() => {
            setLoading(false); // Hide the loader after 2 seconds
            setFind(!find); // Open the model after loading is done
        }, 2000); // 2 seconds delay
    };

    return (
        <Fragment>
            <div className='min-h-[110vh] mt-6 bg-[#F7F7F7] flex flex-col md:flex-row justify-end items-center'>
                {find && <Model />} {/* Show the Model component when 'find' is true */}
                <div className='w-full md:w-[50%] text-start p-5'>
                    <h1 className='text-xl sm:text-2xl md:text-3xl text-gray-900 font-bold'>
                        It's the food and groceries you love,<br /> delivered
                    </h1>

                    <div className='bg-white shadow-2xl w-full md:w-[90%] flex flex-col md:flex-row items-center justify-between p-4 rounded mt-4'>
                        <div className='relative w-full md:w-[80%] border-gray-700 flex justify-between items-center border-[1px] p-1 rounded'>
                            {/* Dynamic label based on focus and value */}
                            <label
                                className={`absolute left-3 px-1 bg-white transition-all duration-300 ${isFocused || location ? '-top-3 text-[rgb(226,27,112)] hover:text-[rgb(85,14,45)] text-sm' : 'top-3 text-gray-500 text-base'
                                    }`}
                            >
                                {isFocused || location ? 'Enter your postal code and street no' : 'Your street and street number'}
                            </label>

                            <input
                                type="text"
                                className='w-full p-3 pt-6 pb-1 outline-none text-sm sm:text-base'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={(e) => setIsFocused(e.target.value !== '')}
                            />

                            {/* Conditionally render "Locate Me" icon or Loader */}
                            <div className='absolute right-3 top-3'>
                                {location.trim() === '' ? (
                                    <h1 onClick={handleChange} className='flex items-center gap-1 cursor-pointer hover:text-[rgb(226,27,112)]'>
                                        {/* Hide the icon when loading is true */}
                                        {loading ? (
                                            <SyncLoader size={8} color={'rgb(226,27,112)'} />
                                        ) : (
                                            <div className='flex gap-2'>
                                                <MdMyLocation className='text-[rgb(226,27,112)] text-xl sm:text-2xl font-semibold' />
                                                <h1 className='font-semibold text-sm sm:text-base'>Locate me</h1>
                                            </div>
                                        )}
                                    </h1>
                                ) : (
                                    <div
                                        className='p-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400 transition-all duration-300'
                                        onClick={() => setLocation('')} // Clear input when close button is clicked
                                    >
                                        <AiOutlineClose className='text-xl text-gray-700' />
                                    </div>
                                )}
                            </div>
                        </div>

                        <button className='rounded p-2 bg-[rgb(226,27,112)] text-white hover:scale-105 duration-300 mt-4 md:mt-0 text-sm sm:text-base'>
                            Find Food
                        </button>
                    </div>
                </div>

                <div className='w-full md:w-[40%] h-[30vh] sm:h-[40vh] md:h-[70vh] flex justify-end items-end mt-4 md:mt-0'>
                    <img src={bg} alt="Background" className='w-full h-full object-cover' />
                </div>
            </div>
        </Fragment>
    );
};

export default About;

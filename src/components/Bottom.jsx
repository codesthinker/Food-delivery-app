import React, { Fragment } from 'react';
import { SiFoodpanda } from "react-icons/si";
import { PiFootballFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Bottom = () => {
    return (
        <Fragment>
            <div className='flex flex-col md:flex-row justify-between items-center p-6'>
                {/* Foodpanda and Delivery Hero Section */}
                <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-[rgb(226,27,112)] p-2 rounded'>
                            <SiFoodpanda className='text-white text-2xl md:text-3xl' />
                        </div>
                        <h1 className='text-2xl md:text-3xl text-[rgb(226,27,112)]'>Foodpanda</h1>
                    </div>
                    <hr className='w-full md:w-[50%] h-[1px] border-t-2 border-gray-400 mx-0 md:mx-4' />
                    <div className='flex items-center gap-2'>
                        <PiFootballFill className='text-red-600 text-3xl md:text-4xl' />
                        <h1 className='text-red-600 text-2xl md:text-3xl font-semibold'>Delivery</h1>
                        <h1 className='text-red-600 text-2xl md:text-3xl font-semibold'>Hero</h1>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className='flex gap-4 mt-4 md:mt-0'>
                    <div className='bg-gray-100 hover:bg-gray-300 cursor-pointer p-3 md:p-4 rounded-full hover:border-gray-300 border-[1px] transition-all'>
                        <FaInstagram className='text-xl md:text-2xl' />
                    </div>
                    <div className='bg-gray-100 hover:bg-gray-300 cursor-pointer p-3 md:p-4 rounded-full hover:border-gray-300 border-[1px] transition-all'>
                        <FaFacebookF className='text-xl md:text-2xl' />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Bottom;

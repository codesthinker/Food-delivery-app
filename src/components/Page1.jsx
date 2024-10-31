import React, { Fragment } from 'react';
import pic from "../Images/page1.webp"; 
import { Link } from 'react-router-dom';

export const Page1 = () => {
    const getdata = [
        "List your restaurant or shop on foodpanda",
        "Would you like millions of new customers to enjoy your amazing food and groceries? So would we",
        "It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas in a heartbeat!",
        "Interested? Let's start our partnership today!"
    ];

    return (
        <Fragment>
            {/* Header Section */}
            <div className='h-[20vh] flex justify-start items-center px-5 sm:px-10 w-full bg-white'>
                <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>You prepare the food, we handle the rest</h1>
            </div>

            <div
                className='h-[50vh] sm:h-[60vh] md:h-[70vh] w-full bg-cover bg-center z-0 relative'
                style={{ backgroundImage: `url(${pic})` }}
            >
                <div className='absolute -bottom-28 sm:-bottom-36 md:-bottom-40 left-5 sm:left-10 md:left-11 rounded shadow-lg p-4 sm:p-5 md:p-8 lg:p-10 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] bg-white'>
                    {getdata.map((item, index) => (
                        <div 
                            key={index} 
                            className={`mb-2 ${index === 0 ? 'font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl' : 'text-sm sm:text-base md:text-lg'}`}
                        >
                            <p className='text-black'>{item}</p>
                        </div>
                    ))}
                    <Link to={'/Login'}>
                        <button className='bg-[rgb(226,27,112)] p-2 sm:p-3 hover:scale-105 duration-300 rounded text-white text-sm sm:text-base lg:text-lg'>
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

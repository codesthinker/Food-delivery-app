import React, { Fragment } from 'react';
import pic from "../Images/restorent1.jpeg"; 
import { Link } from 'react-router-dom';

export const VisitRestorent = () => {
    const getdata = [
        "Savor the Finest Flavors: Your Ultimate Dining Destination",
        "Would you like millions of new customers to enjoy your amazing food and groceries? So would we",
        "It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas in a heartbeat!",
        "Interested? Let's start our partnership today!"
    ];

    return (
        <Fragment>
            {/* Header Section */}
            <div className='h-[20vh] flex justify-start items-center px-5 md:px-10 mt-28 md:mt-36 w-full bg-white'>
                <h1 className='font-bold text-lg md:text-3xl border-b-2 border-[rgb(226,27,112)]'>
                    THE BEST RESTAURANT IN ALL OVER THE WORLD
                </h1>
            </div>

            {/* Main Image Section */}
            <div
                className='h-[50vh] md:h-[70vh] w-full bg-cover bg-center z-0 relative'
                style={{ backgroundImage: `url(${pic})` }}
            >
                {/* Info Box */}
                <div className='absolute -bottom-28 md:-bottom-40 left-4 md:left-11 rounded shadow-lg p-4 md:p-8 lg:p-10 w-[95%] sm:w-[85%] md:w-[60%] lg:w-[40%] bg-white'>
                    {getdata.map((item, index) => (
                        <div 
                            key={index} 
                            className={`mb-2 ${index === 0 ? 'font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl' : 'text-sm sm:text-base md:text-lg'}`}
                        >
                            <p className='text-black'>{item}</p>
                        </div>
                    ))}
                    <Link to={'/restorent'}>
                        <button className='bg-[rgb(226,27,112)] p-2 sm:p-3 md:p-3 hover:scale-105 duration-300 rounded text-white text-sm sm:text-base lg:text-lg'>
                            Visit Restaurant
                        </button>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default VisitRestorent;

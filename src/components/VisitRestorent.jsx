import React, { Fragment } from 'react';
import pic from "../Images/restorent1.jpeg"; 
import { Link } from 'react-router-dom';

export const VisitRestorent = () => {
    const getdata = [
        "Savor the Finest Flavors: Your Ultimate Dining Destination"
,
        "Would you like millions of new customers to enjoy your amazing food and groceries? So would we",
        "It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas in a heartbeat!",
        "Interested? Let's start our partnership today!"
    ];

    return (
        <Fragment>
            {/* Header Section */}
            <div className='h-[20vh] flex justify-start items-center px-10 mt-36 w-[100%] bg-white'>
                <h1 className='font-bold text-3xl border-b-2 border-[rgb(226,27,112)]'>THE BEST RESTORENT IN ALL OVER THE WORLD</h1>
            </div>

            <div
                className='h-[70vh] w-full bg-cover bg-center z-0 relative'
                style={{ backgroundImage: `url(${pic})` }}
            >
                
                <Fragment>
    <div className='absolute -bottom-40 left-11 rounded shadow-lg p-5 md:p-8 lg:p-10 w-[90%] md:w-[60%] lg:w-[40%] bg-white'>
        {getdata.map((item, index) => (
            <div key={index} className={`mb-2 ${index === 0 ? 'font-bold text-xl md:text-2xl lg:text-3xl' : 'text-base md:text-lg lg:text-lg'}`}>
                <p className='text-black'>{item}</p>
            </div>
        ))}
        <Link to={'/restorent'}>
            <button className='bg-[rgb(226,27,112)] p-2 md:p-3 hover:scale-105 duration-300 rounded text-white text-sm md:text-base lg:text-lg '>Visit Restorent</button>
        </Link>
    </div>
</Fragment>

            </div>
        </Fragment>
    );
};
export default VisitRestorent;
import React from 'react';
import Restorent from '../../Pages/Restorent';
import FilterSidebar from './FilterSidebar';

const Pickup = () => {
  return (
    <div>
      <div className='bg-green-500 absolute  top-32 w-full h-[10vh]   '>
       
          <iframe className='w-[100%] h-full'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235538.54110349098!2d71.52953474051019!3d29.465867539574276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1728987963908!5m2!1sen!2s" 
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            
          ></iframe>
       
      </div>

      <div className='flex'>
        <div className='relative  left-0 w-[20%] h-[65vh] mt-56'>
          <div className='fixed'>
            <FilterSidebar />
          </div>
        </div>

        <div className='w-[80%] mt-20'>
          <Restorent />
        </div>
      </div>
    </div>
  );
};

export default Pickup;

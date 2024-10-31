import React, { Fragment, useState } from 'react';
import sub from '../Images/subcription.png';
import pic1 from '../Images/delivery.png';
import pic2 from '../Images/bag.png';
import pic3 from '../Images/gift.png';
import { FaChevronDown } from 'react-icons/fa';

const Subscription = () => {
  const [isOpen, setIsOpen] = useState();

  const toggleDropdown = (index) => {
    setIsOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  const Monthlyperk = [
    {
      imge: pic1,
      h1: 'Unlimited Free Delivery',
      p: 'unlimited',
      para: 'Valid with a minimum order of Rs 599 for shops and pandamart',
    },
    {
      imge: pic2,
      h1: 'Up to 50% off restaurants',
      p: 'unlimited',
      para: 'Valid with a minimum order of Rs 599 for shops and pandamart',
    },
    {
      imge: pic3,
      h1: 'Surprise deals on restaurants, groceries, and pick-up',
      p: 'unlimited',
      para: 'Valid with a minimum order of Rs 599 for shops and pandamart',
    },
  ];
  const cardplan = [
    {
      month: '1 month',
      price: 'Rs. 249.00/mo.',
      lowprice: 'Rs. 249.00 billed every month',
    },
    {
      month: '6 months',
      price: 'Rs. 449.00/mo.',
      lowprice: 'Rs. 449.00 billed every month',
    },
    {
      month: '12 months',
      price: 'Rs. 649.00/mo.',
      lowprice: 'Rs. 649.00 billed every month',
    },
  ];

  return (
    <Fragment>
      <div className='mt-20 bg-[rgb(100,43,158)] h-auto px-4 md:px-8'>
        {/* Header Section */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-52 p-5'>
          <div className='text-center md:text-left'>
            <div className='h-32 w-32 md:h-40 md:w-40 mx-auto md:mx-0'>
              <img src={sub} alt='Subscription' />
            </div>
            <h1 className='text-2xl md:text-5xl font-semibold text-white'>
              Explore exclusive perks with
            </h1>
            <h1 className='mt-3 md:mt-5 text-2xl md:text-5xl font-semibold text-white'>
              pandapro
            </h1>
            <h1 className='mt-6 md:mt-8 text-2xl md:text-5xl font-semibold text-white'>
              Monthly perks
            </h1>
          </div>
          <div>
            <button className='px-6 py-2 rounded bg-white hover:bg-pink-100 text-[rgb(100,43,158)] font-semibold'>
              Choose your plan
            </button>
          </div>
        </div>

        {/* Perks Section */}
        <div className='flex flex-col gap-5 rounded-lg mx-2 md:mx-10 lg:mx-20 mt-10'>
          {Monthlyperk.map((item, index) => (
            <div
              key={index}
              className='mb-5 bg-[rgb(92,29,148)] p-4 rounded-lg'
            >
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <img
                    src={item.imge}
                    alt='Perk'
                    className='h-10 w-10 md:h-12 md:w-12'
                  />
                  <div>
                    <h1 className='text-xl md:text-3xl font-semibold text-white'>
                      {item.h1}
                    </h1>
                    <p className='text-xs md:text-sm bg-white rounded-2xl max-w-max px-2 text-gray-500'>
                      {item.p}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleDropdown(index)}
                  className='text-white'
                >
                  <FaChevronDown
                    className={`transform transition-transform duration-300 ${
                      isOpen === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              {isOpen === index && (
                <p className='mt-4 text-gray-100 border-t pt-2'>{item.para}</p>
              )}
            </div>
          ))}
        </div>
        <h1 className='text-white text-3xl font-bold p-4'>Chose your Plan</h1>
        {/* Card Plans Section */}
        <div className='flex flex-col md:flex-row gap-4 justify-evenly items-center mb-5 mt-8'>
          {cardplan.map((get, indx) => (
            <div
              key={indx}
              className='flex flex-col gap-2 justify-center p-5 w-full md:w-[30%] bg-white rounded'
            >
              <h1 className='font-semibold text-center md:text-left'>
                {get.month}
              </h1>
              <h1 className='font-bold text-xl md:text-2xl text-center md:text-left'>
                {get.price}
              </h1>
              <h1 className='text-center md:text-left'>{get.lowprice}</h1>
              <button className='mt-4 px-6 md:px-10 py-2 text-white rounded bg-[rgb(226,27,112)]'>
                Select Your Card
              </button>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Subscription;

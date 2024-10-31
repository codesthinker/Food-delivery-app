import React, { Fragment } from 'react';
import { GiStarSattelites } from 'react-icons/gi';
import { IoIosArrowForward } from 'react-icons/io';
import { FiHelpCircle } from 'react-icons/fi';
import pic from '../Images/getRewards.svg';

const Reward = () => {
  return (
    <Fragment>
      <div className='mt-16 bg-[rgb(226,27,112)] h-[50vh] flex justify-center items-center '>
        <div className='h-[25vh] p-4 bg-white rounded flex justify-between w-[70%] '>
          <div>
            <p>point</p>
            <div className='flex gap-2 items-center mt-2'>
              <GiStarSattelites />
              <p className='font-bold text-2xl'>0</p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
            <button className='px-4 py-2 text-lg font-semibold rounded bg-white text-gray-700 hover:bg-gray-200 duration-300'>
              How to earn Points
            </button>
          </div>
          <div className='flex flex-col items-end'>
            <p>
              <FiHelpCircle />
            </p>
            <div className='h-32 w-32'>
              <img src={pic} alt='Image not fetch' className='h-full w-full' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[rgb(247,247,247)] flex justify-center items-center h-[40vh]'>
        <div className='w-[70%] h-[20vh] flex flex-col items-center justify-center gap-3 bg-white rounded'>
          <h1 className='text-gray-700 font-semibold text-xl'>
            New stamp cards are coming your way!
          </h1>
          <p>
            Get ready to earn points and redeem amazing rewards. Stay tuned!
          </p>
        </div>
      </div>
      <div className='flex justify-center h-[40vh] items-center bg-[rgb(247,247,247)]'>
        <div className='h-[25vh] p-4 bg-white rounded flex justify-between w-[70%] '>
          <div>
            <p>point</p>
            <div className='flex gap-2 items-center mt-2'>
              <p>Bages</p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
            <button className='px-4 py-2 text-lg font-semibold rounded bg-white text-gray-700 hover:bg-gray-200 duration-300'>
              Complete stamp cards to earn badges
            </button>
          </div>
          <div className='flex flex-col items-end'>
            <p>see all</p>
            <div className='h-32 w-32'>
              <img src={pic} alt='Image not fetch' className='h-full w-full' />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Reward;

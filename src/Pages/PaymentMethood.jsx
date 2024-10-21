import React, { Fragment } from 'react';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { Link } from 'react-router-dom';

const PaymentMethood = () => {
  return (
    <Fragment>
      <div className='mt-24'>
        <section className='flex justify-center items-center'>
          <div className='w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] mx-auto'>
            {/* Back to previous page button */}
            <Link to={"/pandapay"} className='flex items-center space-x-2 hover:bg-gray-400 w-full sm:w-[70%] md:w-[60%] duration-300 rounded p-2 mb-4'>
              <MdOutlineKeyboardArrowLeft />
              <p>Back to Previous Page</p>
            </Link>

            
            <div className='flex flex-col bg-white p-4 rounded-lg shadow-lg'>
              <div className='mb-4'>
                <p className='text-2xl p-2 rounded  font-semibold bg-gray-100 '>Payment</p>
              </div>

             
              <div className='flex justify-between p-4 rounded-lg items-center '>
                <div><CiCreditCard1 className='text-2xl ' /></div>

                <div className='flex flex-col justify-start gap-2'>
                  <div className='flex items-center space-x-2'>
                    <p className='text-lg'>Payment Method</p>
                    <button className='rounded-3xl bg-pink-500 px-2 text-white items-center flex justify-center text-xs'>new</button>
                  </div>
                  <div>
                    <p className='text-sm text-gray-700'>Select a primary payment method</p>
                  </div>
                </div>

                <div><MdKeyboardArrowRight className='text-black text-2xl' /></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  )
}

export default PaymentMethood;

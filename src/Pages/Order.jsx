import React, { Fragment } from 'react';

const Order = () => {
  return (
    <Fragment>
      <div className='mt-16 sm:mt-20 px-4 sm:px-8'>
        <div className='flex flex-col items-start space-y-6 sm:space-y-8'>
          <div className='space-y-2 sm:space-y-3'>
            <h1 className='text-xl sm:text-2xl font-semibold'>Active Order</h1>
            <p className='text-gray-600 text-sm sm:text-base'>
              There is no active order right now
            </p>
          </div>
          <div className='space-y-2 sm:space-y-3'>
            <h1 className='text-xl sm:text-2xl font-semibold'>Past Order</h1>
            <p className='text-gray-600 text-sm sm:text-base'>
              Oops, looks like you haven't placed any orders yet.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Order;

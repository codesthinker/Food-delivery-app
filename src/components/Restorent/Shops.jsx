import React, { Fragment, useContext, useState, useEffect } from 'react';
import Restorent from '../../Pages/Restorent';
import { IoIosSearch } from "react-icons/io";
import FilterSidebar from './FilterSidebar';
import { RestaurantContext } from './Contextapi';
import { LuClover } from 'react-icons/lu';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Delivery = () => {
  const { handleSearchSubmit, searchData, setSearch, search } = useContext(RestaurantContext);
  const bool = !search.trim();

  // State to track whether the sidebar should be fixed or relative
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sidebarParent = document.querySelector('.sidebar-parent');
      const parentBottom = sidebarParent.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      // Check if the bottom of the parent is within the window height
      if (parentBottom <= windowHeight) {
        setIsFixed(false);  // Change to relative
      } else {
        setIsFixed(true);   // Keep fixed
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      {/* Search Bar */}
      <div className='bg-white w-full fixed mt-12 flex flex-col justify-center items-center z-10'>
        <div className='w-[80%] mt-20 relative'>
          <form action="#" onSubmit={handleSearchSubmit}>
            <div className='flex items-center justify-between mt-1 rounded-full bg-gray-100 w-[90%] outline-none py-5 px-4'>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder='Please Enter The Recipe Name'
                className='outline-none px-8 w-[100%] bg-gray-100'
              />
              <IoIosSearch className='text-2xl' />
            </div>
          </form>
        </div>
      </div>

    
      <div className='flex'>
       
        <div className='relative top-20 left-0 w-[20%] h-auto  mt-32 sidebar-parent'>
          <div className={`${isFixed ? 'fixed' : 'relative'} h-auto`}>
            <FilterSidebar />
          </div>
        </div>

        {/* Main Content Area */}
        <div className='w-[80%] flex flex-col mt-12'>
          {bool ? (
            <Restorent />
          ) : searchData.length > 0 ? (
            <div className="flex flex-wrap justify-evenly mt-28 gap-2 w-full p-4">
              {searchData.map((restaurant) => (
                <div className='relative mt-6 w-full sm:w-1/2 md:w-1/3 lg:w-[30%]' key={restaurant.id}>
                  <Link to={`/Shops/${restaurant.id}`} className="relative">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className='w-full h-96 object-cover rounded-lg'
                    />
                    <div className='absolute top-10 w-[70%] text-[12px] left-0 right-0 rounded-md flex justify-center items-center bg-[rgba(226,27,112,0.8)] text-white text-center py-2'>
                      <LuClover />
                      The Food Delivery on 50% Discount
                    </div>
                    <div className='bg-[rgba(226,27,112,0.8)] flex justify-center items-center gap-2 absolute text-white text-center py-2 rounded-md left-0 right-0 top-20 text-[15px] w-[40%]'>
                      <LuClover />
                      Get Offer
                    </div>
                    <div className='absolute justify-center text-2xl p-1 rounded-full items-center right-2 top-10 bg-white hover:text-white hover:bg-[rgba(226,27,112,0.8)]'>
                      <CiHeart />
                    </div>
                  </Link>
                  <div className='p-4'>
                    <h2 className='text-xl font-bold'>{restaurant.name}</h2>
                    <p className='text-gray-600'>{restaurant.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h1 className='mt-40 font-bold text-4xl'>No search criteria found</h1>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Delivery;

import React, { useContext, useState, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RestaurantContext } from '../components/Restorent/Contextapi';
import { LuClover } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

const Restorent = () => {
  const { restaurants, loading, error, difficultyArray } = useContext(RestaurantContext);
  const [favorites, setFavorites] = useState({}); // Track favorites for each restaurant

  // Toggle favorite state for a specific restaurant
  const toggleFavorite = (restaurantId, e) => {
    e.preventDefault(); // Prevent navigation to the details page
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [restaurantId]: !prevFavorites[restaurantId],
    }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Fragment>
      <div className='bg-white w-[100%] fixed top-12 flex justify-center z-10'>
        <div className='flex justify-start p-4 text-black font-semibold w-[90%] items-center gap-5'>
          <NavLink to="/Delivery" className='flex gap-2 hover:bg-gray-300 p-3 rounded duration-300 items-center'>
            <p>Delivery</p>
          </NavLink>
          <NavLink to="/Pickup" className='flex hover:bg-gray-300 p-3 rounded duration-300 gap-2 items-center'>
            <p>Pick-Up</p>
          </NavLink>
          <NavLink to="/Shops" className='flex hover:bg-gray-300 p-2 rounded duration-300 gap-2 items-center'>
            <p>Shops</p>
          </NavLink>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly mt-28 gap-2 w-full p-4">
        {(difficultyArray.length > 12 ? difficultyArray : restaurants).map((restaurant) => (
          <Link to={`/Shops/${restaurant.id}`} key={restaurant.id} className='relative mt-6 w-full sm:w-1/2 md:w-1/3 lg:w-[30%]'>
            <div className="relative">
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

             
              <div
                className={`absolute justify-center text-2xl p-1 rounded-full items-center right-2 top-10
                  ${favorites[restaurant.id] ? 'bg-pink-500' : 'bg-white'} hover:bg-[rgba(226,27,112,0.8)]`}
                onClick={(e) => toggleFavorite(restaurant.id, e)}
              >
                <CiHeart className={`${favorites[restaurant.id] ? 'text-white' : 'text-black'}`} />
              </div>
            </div>

            <div className='p-4'>
              <h2 className='text-xl font-bold'>{restaurant.name}</h2>
              <p className='text-gray-600'>{restaurant.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default Restorent;

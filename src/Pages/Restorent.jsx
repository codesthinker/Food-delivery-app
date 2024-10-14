import React, { useContext, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RestaurantContext } from '../components/Restorent/Contextapi';

const Restorent = () => {
  const { restaurants, loading, error, difficultyArray } = useContext(RestaurantContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Fragment>
      {/* Navigation Links */}
      <div className='mt-12 bg-white w-full fixed flex justify-center'>
        <div className='flex justify-start p-4 text-black font-semibold w-[90%] items-center gap-5'>
          <NavLink to="/Delivery" className='flex gap-2 items-center'>
            <p>Delivery</p>
          </NavLink>
          <NavLink to="/Pickup" className='flex gap-2 items-center'>
            <p>Pick-Up</p>
          </NavLink>
          <NavLink to="/Shops" className='flex gap-2 items-center'>
            <p>Shops</p>
          </NavLink>
        </div>
      </div>

      {/* Display Restaurants */}
      <div className="flex flex-wrap justify-evenly mt-0  w-full">
        {(difficultyArray.length > 0 ? difficultyArray : restaurants).map((restaurant) => (
          <Link to={`/Shops/${restaurant.id}`} key={restaurant.id} className='mt-6'>
            <img src={restaurant.image} alt={restaurant.name} className='w-full h-96 object-cover' />
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

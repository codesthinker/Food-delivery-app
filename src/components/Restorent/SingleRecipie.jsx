import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantContext } from './Contextapi';

const SingleRecipie = () => {
  const { BuyProducts } = useContext(RestaurantContext);
  const { id } = useParams(); // Get the id from the route
  const [recipe, setRecipe] = useState(null); // State to store recipe data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch recipe');
        }
        const data = await response.json();
        setRecipe(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='text-xl font-semibold'>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='text-red-500 text-xl font-semibold'>Error: {error}</div>
      </div>
    );
  }

  return (
    <div className='mt-7 px-4 md:px-8 lg:px-20 py-10'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8'>
        Recipe Detail
      </h1>

      {/* Image Section */}
      <div className='flex justify-center mb-8'>
        <img
          src={recipe.image}
          alt={recipe.title}
          className='w-full md:w-4/5 lg:w-2/3 h-[30vh] md:h-[40vh] lg:h-[50vh] object-contain rounded-lg'
        />
      </div>

      {/* Recipe Description */}
      <p className='text-base md:text-lg lg:text-xl text-gray-700 text-center mb-10 px-4'>
        {recipe.description}
      </p>

      {/* Recipe Info Section */}
      <div className='flex flex-col lg:w-2/3 mx-auto space-y-4'>
        <p className='text-lg md:text-xl lg:text-2xl'>
          <span className='font-semibold'>Name:</span> {recipe.name}
        </p>
        <p className='text-lg md:text-xl lg:text-2xl'>
          <span className='font-semibold'>Difficulty:</span> {recipe.difficulty}
        </p>
        <p className='text-lg md:text-xl lg:text-2xl'>
          <span className='font-semibold'>Tags:</span> {recipe.tags}
        </p>
        <p className='text-lg md:text-xl lg:text-2xl'>
          <span className='font-semibold'>Prep Time (Minutes):</span>{' '}
          {recipe.prepTimeMinutes}
        </p>
        <p className='text-lg md:text-xl lg:text-2xl'>
          <span className='font-semibold'>Cook Time (Minutes):</span>{' '}
          {recipe.cookTimeMinutes}
        </p>
        <p className='text-lg md:text-xl lg:text-2xl'>
          <span className='font-semibold'>Rating:</span> {recipe.rating}
        </p>
        <p className='text-lg md:text-xl lg:text-2xl'>
          <span className='font-semibold'>Review Count:</span>{' '}
          {recipe.reviewCount}
        </p>
        <p className='text-lg md:text-xl lg:text-2xl'>
          <span className='font-semibold'>Meal Type:</span> {recipe.mealType}
        </p>
        <p className='text-lg md:text-xl lg:text-2xl'>
          <span className='font-semibold'>User ID:</span> {recipe.userId}
        </p>
        <p className='text-lg md:text-xl lg:text-2xl'>
          <span className='font-semibold'>Ingredients:</span>{' '}
          {recipe.ingredients?.join(', ')}
        </p>
        <button
          onClick={BuyProducts(recipe)}
          className='bg-pink-600 rounded p-2 text-white font-medium '
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SingleRecipie;

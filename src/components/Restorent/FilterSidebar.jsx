import React, { useState, Fragment, useContext } from 'react';
import { RestaurantContext } from './Contextapi';

const FilterSidebar = () => {
  // State to track the selected difficulty
  const { difficulty, setDifficulty } = useContext(RestaurantContext);

  // Handler to update the selected difficulty
  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <Fragment>
      <div className='bg-gray-100 w-full overflow-y-scroll h-full py-6 px-4 md:px-5 lg:px-8'>
        <div className="flex flex-col gap-4 md:gap-5">
          <h1 className="text-2xl md:text-3xl font-semibold">Filter</h1>
          <p className="py-2 text-lg">Sort by Level</p>
        </div>
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="flex gap-3 md:gap-5 items-center">
            <input
              type="radio"
              name="difficulty"
              value="Easy"
              checked={difficulty === 'Easy'}
              onChange={handleDifficultyChange} // Handle the change event
              className="appearance-none w-4 h-4 border-2 border-gray-400 rounded-full checked:border-black checked:bg-black"
            />
            <label htmlFor="easy" className="text-base md:text-lg">Easy</label>
          </div>
          <div className="flex gap-3 md:gap-5 items-center">
            <input
              type="radio"
              name="difficulty"
              value="Medium"
              checked={difficulty === 'Medium'}
              onChange={handleDifficultyChange} // Handle the change event
              className="appearance-none w-4 h-4 border-2 border-gray-400 rounded-full checked:border-black checked:bg-black"
            />
            <label htmlFor="medium" className="text-base md:text-lg">Medium</label>
          </div>
        </div>
        {/* Display the selected difficulty */}
        <div className="mt-4">
          <p className="text-lg">Selected Difficulty: <span className="font-semibold">{difficulty}</span></p>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterSidebar;

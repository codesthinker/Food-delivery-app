import React, { createContext, useState, useEffect } from 'react';

// Create the context
const RestaurantContext = createContext();


const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [difficulty, setDifficulty] = useState(''); 
 
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        setRestaurants(data.recipes); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

//   console.log(restaurants);
  const difficultyArray = restaurants?.filter((item)=>item.difficulty === difficulty)
  console.log(difficultyArray)
  return (
    <RestaurantContext.Provider value={{ restaurants, loading, error ,difficultyArray,difficulty, setDifficulty }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantContext, RestaurantProvider };

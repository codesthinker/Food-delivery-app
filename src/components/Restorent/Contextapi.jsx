import React, { createContext, useState, useEffect } from 'react';

// Create the context
const RestaurantContext = createContext();


const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [difficulty, setDifficulty] = useState('');
const [searchData, setSearchData] = useState([])
const [search, setSearch] = useState('')
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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // const formdata = new FormData(e.target)
    // const { search } = Object.fromEntries(formdata)
    // console.log(search)
    const url = `https://dummyjson.com/recipes/search?q=${search}`

    const fetchSearchApi = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
       
        setSearchData(data.recipes)
      } catch (error) {
        console.log(error)

      }
    }
    fetchSearchApi()
  }

  const difficultyArray = restaurants?.filter((item) => item.difficulty === difficulty)
  
  return (
    <RestaurantContext.Provider value={{ restaurants, loading, error,searchData, handleSearchSubmit, difficultyArray, difficulty, setDifficulty ,setSearch,search }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantContext, RestaurantProvider };

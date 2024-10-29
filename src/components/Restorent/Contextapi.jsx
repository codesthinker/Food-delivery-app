import React, { createContext, useState, useEffect } from 'react';

const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [difficulty, setDifficulty] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState('');
  const [addcart, setAddCart] = useState([]);
  const [showmodel, setShowmodel] = useState(false)

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

  // Add to Cart functionality
  const BuyProducts = (product) => {
    const existingProduct = addcart.find((item) => item.id === product.id);

    if (existingProduct) {
   
      setAddCart(
        addcart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
     
      setAddCart([...addcart, { ...product, quantity: 1 }]);
    }
  };

const Remove = (id) =>{
const addProduct = addcart.filter(item=>item.id !==id)
setAddCart(addProduct)
}

  // Search functionality
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const url = `https://dummyjson.com/recipes/search?q=${search}`;

    const fetchSearchApi = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setSearchData(data.recipes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSearchApi();
  };

  const difficultyArray = restaurants?.filter((item) => item.difficulty === difficulty);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        BuyProducts,
        addcart,
        error,
        Remove,
        searchData,
        handleSearchSubmit,
        difficultyArray,
        difficulty,
        setDifficulty,
        setSearch,
        search,
        showmodel,
        setShowmodel

      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantContext, RestaurantProvider };

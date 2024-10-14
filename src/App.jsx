import React, { Fragment } from 'react';
import Home from './Main/Home';
import './app.css';
 
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Pandapay from './Pages/Pandapay';
import Subscription from "./Pages/Subscription";
import Order from './Pages/Order';
import Profile from './Pages/Profile';
import Voucher from './Pages/Voucher';
import Reward from './Pages/Reward';
import Help from './Pages/Help';
import Logout from './Pages/Logout';
import Loginpage from './Pages/Loginpage';
import Bahawalpur from './components/Branch/Topcites/Bahawalpur';
import Restorent from './Pages/Restorent';
import Delivery from './components/Restorent/Delivery';
import Pickup from './components/Restorent/Pickup';
import Shops from './components/Restorent/Shops';
import SingleRecipie from './components/Restorent/SingleRecipie.jsx';


// Main component to include routes
const MainApp = () => {
  const location = useLocation();

  return (
    <Fragment>
      {location.pathname !== '/Login' && <Header/>}


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pandapay' element={<Pandapay />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/order' element={<Order />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/voucher' element={<Voucher />} />
        <Route path='/Reward' element={<Reward />} />
        <Route path='/help' element={<Help />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/bah' element={<Bahawalpur />} />
        <Route path='/Login' element={<Loginpage />} />
        <Route path='/Restorent' element={<Restorent />} />
        <Route path='/Delivery' element={<Delivery />} />
        <Route path='/Pickup' element={<Pickup />} />
        <Route path='/Shops' element={<Shops />} />
        <Route path='/Shops/:id' element={<SingleRecipie />} />
        
        



      </Routes>
    </Fragment>
  );
};

// Main App component with Router
const App = () => {
  return (
    <Router>
      <MainApp/>
    </Router>
  );
};

export default App;

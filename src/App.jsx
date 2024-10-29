import React, { Fragment } from 'react';
import Home from './Main/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Pandapay from './Pages/Pandapay';
import Subscription from "./Pages/Subscription";
import Order from './Pages/Order';
import Profile from './Pages/Profile';
import Voucher from './Pages/Voucher';
import Reward from './Pages/Reward';
import Help from './Pages/Help';
import Loginpage from './Pages/Loginpage';
import Bahawalpur from './components/Branch/Topcites/Bahawalpur';
import Restorent from './Pages/Restorent';
import Delivery from './components/Restorent/Delivery';
import Pickup from './components/Restorent/Pickup';
import Shops from './components/Restorent/Shops';
import SingleRecipie from './components/Restorent/SingleRecipie.jsx';
import Footer from './components/Footer.jsx';
import Bottom from './components/Bottom.jsx';
import ByProductData from './Pages/ByProductData.jsx';
import PaymentMethood from './Pages/PaymentMethood.jsx';
import Myprofile from "./Pages/Myprofile.jsx"
import Logout from './Pages/Logout.jsx';
import Faslabad from './components/Branch/Topcites/Faslabad.jsx';
import Islamabad from './components/Branch/Topcites/Islamabad.jsx';
import Multan from './components/Branch/Topcites/Multan.jsx';
import Karachi from './components/Branch/Topcites/Karachi.jsx';
import Lodhran from './components/Branch/Topcites/Lodhran.jsx';
import Rawulpindi from './components/Branch/Topcites/Rawulpindi.jsx';
const MainApp = () => {
  const location = useLocation();
  return (
    <Fragment>
      {location.pathname !== '/Login' && <Header/>}
      <Logout/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pandapay' element={<Pandapay />} />
        <Route path='/subscription' element={<Subscription />}/>
        <Route path='/order' element={<Order />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/voucher' element={<Voucher />} />
        <Route path='/Reward' element={<Reward />} />
        <Route path='/help' element={<Help />} />
        <Route path='/bah' element={<Bahawalpur />} />
        <Route path='/fas' element={<Faslabad />} />
        <Route path='/isb' element={<Islamabad />} />
        <Route path='/mul' element={<Multan />} />
        <Route path='/Karachi' element={<Karachi />} />
        <Route path='/Lodhran' element={<Lodhran />} />
        <Route path='/Rawulpindi' element={<Rawulpindi/>} />
        <Route path='/Login' element={<Loginpage />} />
        <Route path='/Restorent' element={<Restorent />} />
        <Route path='/Delivery' element={<Delivery />} />
        <Route path='/Pickup' element={<Pickup />} />
        <Route path='/Shops' element={<Shops />} />
        <Route path='/Shops/:id' element={<SingleRecipie />} />
        <Route path='/Byproduct' element={<ByProductData />} />
        <Route path='/PaymentMethood' element={<PaymentMethood />} />
        <Route path='/Myprofile' element={<Myprofile/>}/>
      </Routes>
      <Footer/>
      <Bottom/>
    </Fragment>
  );
};

const App = () => {
  return (
    <Router>
      <MainApp/>
    </Router>
  );
};

export default App;

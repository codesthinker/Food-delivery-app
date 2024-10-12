import React, { Fragment } from 'react'
import About from '../components/About'
import { Page1 } from '../components/Page1'
import Topcities from '../components/Branch/Topcities'
import Allcitys from '../components/Branch/Allcities/Allcitys'
import Contry from '../components/Contries/Contry'
import Footer from '../components/Footer'
import Bottom from '../components/Bottom'
import VisitRestorent from '../components/VisitRestorent'





const Home = () => {

  return (
    <Fragment>
      <About />
      <Page1 />
      <VisitRestorent/>
      <Topcities/>
      <Allcitys/>
      <Contry/>
      <Footer/>
      <Bottom/>
      


    </Fragment>
  )
}

export default Home
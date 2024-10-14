import React, { Fragment } from 'react'
import Restorent from '../../Pages/Restorent';
import FilterSidebar from './FilterSidebar';

const Delivery = () => {
  return (
  <Fragment>
    
    <div className='flex '>
      
    <div className='relative  top-12  left-0 w-[20%] h-[65vh]  mt-32 '>
     <div className='fixed'>
     <FilterSidebar />
     </div>
    </div>
   
  <div className='w-[80%] flex flex-col'>
   <div>
   <input type="text" />
   </div>
  <Restorent/>
  </div>

  
   

   
    
  </div>
  </Fragment>
  )
}

export default Delivery;

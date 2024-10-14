import React from 'react'
import Restorent from '../../Pages/Restorent';
import FilterSidebar from './FilterSidebar';

const Shops = () => {
  return (
    <div className='flex '>
      
      <div className='relative  top-12  left-0 w-[20%] h-[65vh]  mt-32 '>
       <div className='fixed'>
       <FilterSidebar />
       </div>
      </div>
      
    <div className='w-[80%]'>
    <Restorent/>
    </div>

    
     

     
      
    </div>
  )
}

export default Shops;

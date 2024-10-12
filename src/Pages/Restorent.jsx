import React, { Fragment } from 'react'
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineWheelchairPickup } from "react-icons/md";
import { FaShopSlash } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';




const Restorent = () => {
  return (
    <Fragment>
        <div className='mt-16 bg-gray-50 w-full flex justify-center'>
            <div className='flex justify-start p-4 text-black font-semibold w-[90%] items-center gap-5   '>
                <NavLink to={"/Delivery"} className='flex gap-2 items-center'>
                <h1><MdDeliveryDining className='text-3xl' /></h1>
                <p>Delivery</p>
                </NavLink>
                <NavLink to={"/Pickup"}  className='flex gap-2 items-center'>
                <h1><MdOutlineWheelchairPickup className='text-3xl'/>

                </h1>
                <p>Pick-Up</p>
                </NavLink>
                <NavLink to={"/Shops"} className='flex gap-2 items-center'>
                <h1><FaShopSlash  className='text-3xl'/>

                </h1>
                <p>Shops</p>
                </NavLink>

            </div>
        </div>
        
    </Fragment>
  )
}

export default Restorent
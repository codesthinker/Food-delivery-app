import React, { Fragment } from 'react'
import { CiChat2 } from "react-icons/ci";
import { BsQuestion } from "react-icons/bs";
import { TbPaperBag } from "react-icons/tb";
import pic from "../Images/vocher.webp"




const Voucher = () => {
  return (
    <Fragment>
      <div className='flex justify-center items-center w-full mt-20 '>
        <div className='flex w-[90%] justify-between items-center  p-3'>
          <h1 className='font-bold text-3xl'>Vouchers & offers
          </h1>
          <button className='flex items-center justify-center p-3 rounded border-gray-300 border-[1px] bg-gray-50 gap-2 font-semibold hover:bg-gray-300'>
            <CiChat2 className='text-2xl' />
            <h1 className=''>Add a Voucher</h1>
          </button>
        </div>
      </div>
      <div>
      <div className='w-[30%] flex flex-col justify-center items-center'>
        <div className='flex flex-col p-0 '>
          <BsQuestion  className='text-8xl text-[rgb(233,74,143)]'/>
          <TbPaperBag className='text-9xl bg-gray-100 rounded text-[rgb(226,27,112)]'/>

        </div>
        <div>
          <h1 className='font-bold text-4xl'>No Vouchers Yet</h1>
          <p>It seems you have no vouchers yet.</p>


        </div>
      </div>
      <hr  className='w-[40%] rotate-90'/>
      <div>
        <div>
          <h1></h1>
          <img src={pic} alt="" />
        </div>
      </div>
      </div>
    </Fragment>
  )
}

export default Voucher
import React, { Fragment } from 'react';
import pic from "../Images/pandapay.png";
import pic1 from "../Images/crousal1.png";
import pic2 from "../Images/crousal2.png";
import { IoSettingsOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import navigation styles
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { FiCreditCard } from "react-icons/fi";
import { FaIdCard } from "react-icons/fa6";
import { Link } from 'react-router-dom';

// Data arrays
const swiperImages = [
  { id: 1, src: pic1, alt: 'Slide 1' },
  { id: 2, src: pic2, alt: 'Slide 2' },
];

const topUpSteps = [
  {
    id: 1,
    icon: <CiCreditCard1 className='text-2xl' />,
    step: 'Step 1 of 1',
    title: 'Top up your balance',
    description: 'Use your balance in all orders',
  },
];

const paymentMethods = [
  {
    id: 1,
    icon: <FiCreditCard className='text-2xl' />,
    title: 'Primary payment method',
    description: "Save a payment method at checkout and it'll show up here.",
    action: 'Change',
  },
];

const Pandapay = () => {
  return (
    <Fragment>
     
      <div className='h-full w-full flex flex-col justify-center items-center mt-20 space-y-8 px-4 md:px-0'>
        
        <div className='flex flex-col md:flex-row w-full md:w-[90%] justify-center md:gap-4'>
          <section className='w-full md:w-[25%] h-[30vh] rounded-lg shadow-lg flex flex-col justify-between p-4 bg-white'>
            {/* Top section with logo and settings */}
            <div className='flex justify-between items-center'>
              <div className='h-20 w-20'>
                <img src={pic} alt="Pandapay logo" className='h-full w-full object-contain' />
              </div>
              <Link to={"/PaymentMethood"}>
                <div>
                  <IoSettingsOutline className='text-black text-2xl' />
                </div>
              </Link>
            </div>

            {/* Available credit section */}
            <div className='flex flex-col items-start text-black'>
              <p className='text-sm'>Available credit</p>
              <h1 className='text-2xl font-bold'>Rs. 0.00</h1>
            </div>
          </section>

          {/* Swiper carousel section */}
          <div className='w-full md:w-[50%]  rounded-lg mt-4 md:mt-0'>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1.2} // Adjust the number of visible slides
              breakpoints={{
                640: { slidesPerView: 1.8 },
                768: { slidesPerView: 1.6 },
                1024: { slidesPerView: 1.9 },
              }}
            >
              {swiperImages.map(image => (
                <SwiperSlide key={image.id}>
                  <section className='w-full rounded-lg shadow-lg h-[30vh]'>
                    <img src={image.src} alt={image.alt} className='h-full w-full object-cover rounded-lg' />
                  </section>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Section below the first cart and carousel */}
        <div className='flex flex-col md:flex-row justify-center w-full md:items-center gap-4'>
          {/* Left Section */}
          <section className='w-full md:w-[40%] flex flex-col items-start'>
            {/* Button with top-up icon */}
            <button className='flex items-center space-x-2 bg-blue-500 text-white p-2 rounded-lg shadow-lg w-full md:w-auto'>
              <CiCreditCard1 className='text-xl' />
              <span>Top up</span>
            </button>

            {/* Steps to top-up section */}
            {topUpSteps.map(step => (
              <div key={step.id} className='mt-6 w-full md:w-[60%] bg-white p-4 rounded-lg shadow-lg'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-2'>
                    {step.icon}
                    <div>
                      <p className='text-sm font-semibold'>{step.step}</p>
                      <p className='text-lg'>{step.title}</p>
                      <p className='text-sm text-gray-600'>{step.description}</p>
                    </div>
                  </div>
                  <div className='text-gray-500'>
                    <IoIosArrowForward className='text-xl' />
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Right Section */}
          {paymentMethods.map(method => (
            <div key={method.id} className='w-full md:w-[30%] p-4 rounded-lg shadow-2xl bg-white mt-4 md:mt-0'>
              <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center space-x-2'>
                  {method.icon}
                  <span className='font-bold'>{method.title}</span>
                </div>
                <button className='text-blue-500'>{method.action}</button>
              </div>
              <div className='border-[1px] border-black p-4 rounded-lg flex justify-between'>
                <div className='flex-1'>
                  <p className='text-sm'>{method.description}</p>
                  <Link to={"/"}>
                    <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg'>Back to Home</button>
                  </Link>
                </div>
                <div className='flex items-center'>
                  <FaIdCard className='text-3xl text-pink-500' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Pandapay;

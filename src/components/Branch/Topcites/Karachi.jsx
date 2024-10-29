import React, { Fragment } from 'react';
import pic1 from "../../../Images/karachi.webp";

const Karachi = () => {
  return (
    <Fragment>
      <div
        className="mt-20 h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${pic1})` }}
      >
        <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900">
            Welcome To Karachi
          </h1>
        </div>
      </div>

      <div className="p-4 md:px-10 lg:px-20">
        <p className="text-xl md:text-2xl font-bold text-center mt-6 lg:mt-12">
          History of Karachi
        </p>
        <p className="text-base md:text-lg lg:text-xl mt-4 leading-relaxed text-justify">
          Karachi, the largest city and financial hub of Pakistan, has a rich history and vibrant culture. It is known for its diverse communities, seaside beauty, and bustling urban life.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">1. Early Beginnings</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          Karachi's origins trace back to the small fishing village of Kolachi. Over time, it developed as an important port and trade center due to its strategic coastal location on the Arabian Sea.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">2. British Colonial Era</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          During British rule, Karachi flourished as a major port city. Its modern infrastructure, including the Karachi Port, was developed, which played a crucial role in the trade and economy of the region.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">3. Post-Independence and Growth</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          Following Pakistan’s independence in 1947, Karachi became the nation’s first capital. Its population grew rapidly as people from across the country moved in, making it a cultural and economic melting pot.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">4. Cultural and Architectural Heritage</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify mb-6">
          Karachi boasts historical landmarks like the Quaid-e-Azam’s Mausoleum, Mohatta Palace, and Frere Hall. Its beaches, diverse neighborhoods, and vibrant markets make it a city full of life and history.
        </p>
      </div>
    </Fragment>
  );
};

export default Karachi;

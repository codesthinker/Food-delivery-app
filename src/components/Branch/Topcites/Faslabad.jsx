import React, { Fragment } from 'react';
import pic1 from "../../../Images/faslabad.jpg";

const Faslabad = () => {
  return (
    <Fragment>
      <div
        className="mt-20 h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${pic1})` }}
      >
        <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center px-4 lg:px-0">
            Welcome To Faisalabad
          </h1>
        </div>
      </div>

      <div className="p-4 lg:px-20">
        <p className="text-xl md:text-2xl font-bold text-center mt-6 lg:mt-12">
          History of Faisalabad
        </p>
        <p className="text-base md:text-lg lg:text-xl mt-4 leading-relaxed text-justify">
          Faisalabad, often called the "Manchester of Pakistan," is an industrial city located in the Punjab province. Known for its textile industry, Faisalabad plays a significant role in Pakistan’s economy and is home to a rich cultural history.
        </p>
        
        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">1. Early Beginnings</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          Faisalabad, formerly known as Lyallpur, was founded in the late 19th century by the British. Named after Sir James Lyall, it became a center for agriculture and trade due to the development of the canal irrigation system.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">2. Growth of the Textile Industry</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          With the rise of the textile industry, Faisalabad transformed into Pakistan's textile capital. Its production capabilities have earned it recognition worldwide, and it remains a central hub for the country's export economy.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">3. Cultural Significance</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          Faisalabad is also known for its vibrant culture, with festivals, food markets, and traditional crafts. The clock tower and eight bazaars around it are iconic landmarks and popular gathering spots.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">4. Modern Development</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify mb-6">
          Today, Faisalabad is a bustling metropolis with a mix of historic sites and modern infrastructure. It continues to grow, contributing to Pakistan's development and remaining a significant economic and cultural center.
        </p>
      </div>
    </Fragment>
  );
};

export default Faslabad;

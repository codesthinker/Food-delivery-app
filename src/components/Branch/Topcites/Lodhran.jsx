import React, { Fragment } from 'react';
import pic1 from "../../../Images/lodhran.avif";

const Lodhran = () => {
  return (
    <Fragment>
      <div
        className="mt-20 h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${pic1})` }}
      >
        <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900">
            Welcome to Lodhran
          </h1>
        </div>
      </div>

      <div className="p-4 md:px-10 lg:px-20">
        <p className="text-xl md:text-2xl font-bold text-center mt-6 lg:mt-12">
          History of Lodhran
        </p>
        <p className="text-base md:text-lg lg:text-xl mt-4 leading-relaxed text-justify">
          Lodhran, a district located in the Punjab province of Pakistan, is known for its agricultural significance and serene rural landscapes. The city has a rich cultural and historical heritage that has evolved over time.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">1. Early Development</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          Lodhran's history is rooted in agriculture and trade, as its fertile lands along the Sutlej River made it an ideal location for farming communities. The area's history stretches back to ancient times when trade routes crisscrossed the region.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">2. Colonial Period</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          During British rule, Lodhran became part of the colonial infrastructure, with an emphasis on agricultural development. Irrigation systems were introduced, leading to the establishment of large-scale farming.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">3. Post-Independence and Agricultural Significance</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          Following Pakistan's independence, Lodhran continued to grow as an agricultural hub. Its fertile land supports crops like wheat, cotton, and sugarcane, making it vital for Pakistan’s economy.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">4. Cultural and Social Landscape</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify mb-6">
          Lodhran reflects the cultural heritage of southern Punjab, with vibrant traditions in crafts, music, and festivals. Its people are known for their hospitality, and the local bazaars and rural scenery attract visitors.
        </p>
      </div>
    </Fragment>
  );
};

export default Lodhran;

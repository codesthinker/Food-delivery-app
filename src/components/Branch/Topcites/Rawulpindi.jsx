import React, { Fragment } from 'react';
import pic1 from "../../../Images/Rawal.webp";

const Rawalpindi = () => {
  return (
    <Fragment>
      <div
        className="mt-20 h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${pic1})` }}
      >
        <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white">
            Welcome To Rawalpindi
          </h1>
        </div>
      </div>

      <div className="p-4 md:px-10 lg:px-20">
        <p className="text-xl md:text-2xl font-bold text-center mt-6 lg:mt-12">
          History of Rawalpindi
        </p>
        <p className="text-base md:text-lg lg:text-xl mt-4 leading-relaxed text-justify">
          Rawalpindi, commonly known as “Pindi,” is one of Pakistan's oldest cities and serves as a gateway to the capital, Islamabad. This city has a vibrant history, rich cultural heritage, and a strategic military significance.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">1. Ancient Beginnings</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          Historically, Rawalpindi traces its roots back to the Buddhist era, with archaeological sites around the region that reveal its ancient past as a center of Gandhara civilization.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">2. British Colonial Period</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          The British established Rawalpindi as a significant military garrison, and it continues to be a major base for Pakistan's army. Colonial-era buildings and bazaars remain as vibrant reminders of this period.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">3. Independence Era</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          After Pakistan’s independence in 1947, Rawalpindi grew into a major city and, briefly, even served as the interim capital of Pakistan during the 1960s when Islamabad was being built.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">4. Cultural Heritage</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify mb-6">
          Rawalpindi’s vibrant bazaars, such as Raja Bazaar, and its cultural sites, including historic mosques and colonial-era structures, make it a fascinating blend of ancient and modern. Its bustling streets and cultural landmarks are a testament to its unique place in Pakistan’s history.
        </p>
      </div>
    </Fragment>
  );
};

export default Rawalpindi;

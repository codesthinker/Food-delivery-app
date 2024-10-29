import React, { Fragment } from 'react';
import pic1 from "../../../Images/islamabad.avif";

const Islamabad = () => {
  return (
    <Fragment>
      <div
        className="mt-20 h-[60vh] md:h-[70vh] lg:h-[80vh] bg-contain bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${pic1})` }}
      >
        <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center px-4 lg:px-0">
            Welcome To Islamabad
          </h1>
        </div>
      </div>

      <div className="p-4 lg:px-20">
        <p className="text-xl md:text-2xl font-bold text-center mt-6 lg:mt-12">
          History of Islamabad
        </p>
        <p className="text-base md:text-lg lg:text-xl mt-4 leading-relaxed text-justify">
          Islamabad, the capital city of Pakistan, was carefully planned and developed in the 1960s to serve as the administrative and political center of the country. Known for its modern infrastructure and scenic beauty, Islamabad represents a blend of cultural heritage and contemporary development.
        </p>
        
        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">1. Early Development</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          Islamabad was developed in the 1960s as part of a strategic decision to move the capital from Karachi. Its location at the foothills of the Margalla Hills provides a serene and picturesque setting, making it one of the most beautiful capitals in the world.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">2. Planned City Architecture</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          The city’s master plan was designed by the Greek architect Constantinos Apostolou Doxiadis, who laid out the sectors and zones in a grid pattern. This planned structure has made Islamabad an efficient, well-organized city with a balance of residential, commercial, and green spaces.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">3. Role in National Identity</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          As the capital, Islamabad plays a crucial role in representing Pakistan on the world stage. The city is home to numerous government institutions, foreign embassies, and iconic monuments, such as the Faisal Mosque, which is one of the largest mosques in the world and a symbol of the city.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">4. Cultural and Natural Heritage</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify mb-6">
          Islamabad is renowned for its scenic beauty and green spaces, including the Margalla Hills National Park. The city also has a vibrant cultural scene with museums, art galleries, and regular festivals celebrating Pakistan’s rich heritage.
          <br /><br />
          Islamabad stands as a symbol of progress and national pride, blending modernity with natural landscapes and traditional culture, making it an appealing destination for both residents and visitors.
        </p>
      </div>
    </Fragment>
  );
};

export default Islamabad;

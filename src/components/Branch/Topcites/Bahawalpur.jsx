import React, { Fragment } from 'react';
import pic1 from "../../../Images/noormahal.webp";

const Bahawalpur = () => {
  return (
    <Fragment>
      <div
        className="mt-20 h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover relative bg-center"
        style={{ backgroundImage: `url(${pic1})` }}
      >
        <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center px-4 lg:px-0">
            Welcome To Bahawalpur
          </h1>
        </div>
      </div>

      <div className="p-4 lg:px-20">
        <p className="text-xl md:text-2xl font-bold text-center mt-6 lg:mt-12">
          History of Bahawalpur
        </p>
        <p className="text-base md:text-lg lg:text-xl mt-4 leading-relaxed text-justify">
          Bahawalpur, located in the southern part of Punjab, Pakistan, has a rich history shaped by its cultural heritage, royal lineage, and strategic location. It was once a princely state that played a significant role in the region.
        </p>
        
        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">1. Early Beginnings</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          Bahawalpur was founded in 1748 by Nawab Bahawal Khan I, who belonged to the Abbasi dynasty. The city developed as the capital of the Bahawalpur State and quickly became a center of trade and culture. Its geographical location near the Indus River allowed it to thrive economically, and it became an important stop on the trade routes linking Central Asia, India, and the Middle East.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">2. Princely State Era</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          The Bahawalpur State was a semi-autonomous princely state under British suzerainty during British rule in India. The Nawabs of Bahawalpur maintained a degree of independence and developed a unique cultural identity. The state's rulers, particularly Nawab Sadiq Muhammad Khan IV, undertook extensive development projects, constructing palaces, forts, and mosques, including the famous Noor Mahal and Sadiq Garh Palace, which showcase stunning Islamic and Victorian architecture.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">3. Role in Independence and Accession to Pakistan</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          In 1947, when British India was divided into India and Pakistan, the Nawab of Bahawalpur, Sadiq Muhammad Khan V, opted to accede to Pakistan, and the state was formally merged in 1954. Bahawalpur’s accession to Pakistan was significant because it ensured that a large, strategically located region became part of the new nation.
        </p>

        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mt-6">4. Cultural and Architectural Heritage</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify mb-6">
          Bahawalpur is renowned for its architectural heritage. The city boasts grand palaces like Noor Mahal, Sadiq Garh Palace, and the Darbar Mahal, which reflect a blend of local and colonial architectural styles. The city is also famous for the historic Derawar Fort, a massive fort in the nearby Cholistan Desert with origins tracing back to the 9th century.
          <br /><br />
          Bahawalpur continues to be a symbol of cultural richness in Pakistan, with its legacy of art, architecture, and royal heritage playing an essential part in the nation's history. The city is also known for its unique cultural identity, with festivals, handicrafts, and traditional Sufi music that draw visitors from around the world.
        </p>
      </div>
    </Fragment>
  );
};

export default Bahawalpur;

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Allcitys = () => {
    const CityData = [
        { cname: "Bahawalpur", Link: "/bah" },
        { cname: "Faslabad", Link: "/fas" },
        { cname: "Multan", Link: "/mul" },
        { cname: "Islamabad", Link: "/isb" },
        { cname: "Karachi", Link: "/krc" },
        { cname: "Lodhran", Link: "/ldh" },
        { cname: "Rawalpindi", Link: "/rlp" },
    ];

    return (
        <Fragment>
            {/* Header Section */}
            <div className='h-[20vh] w-full flex justify-center items-end py-4'>
                <h1 className='font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 text-center'>
                    All Cities in Pakistan
                </h1>
            </div>

            {/* City Links Section */}
            <div className='p-3 flex flex-wrap justify-center gap-3'>
                {CityData.map((item, index) => (
                    <div
                        key={index}
                        className='w-[90%] sm:w-[45%] md:w-[30%] lg:w-[20%] text-center'
                    >
                        <Link to={item.Link}>
                            <p className='border-b border-gray-800 hover:border-b-2 font-semibold duration-300 py-2 text-gray-800'>
                                {item.cname}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default Allcitys;

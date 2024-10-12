import React, { Fragment, useState } from 'react';
import { RiContactsLine, RiArrowDropDownLine } from "react-icons/ri";
import { SiFoodpanda } from "react-icons/si";
import { TfiBag, TfiWorld } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { PiCrownSimpleFill } from "react-icons/pi";
import { MdBookmarkBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaVihara } from "react-icons/fa";
import { GiAbstract015 } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";
import { LuHelpCircle } from "react-icons/lu";

const Header = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const navarry = [
        {
            Logo: <RiContactsLine />, nam: "Waleed", Log1: <RiArrowDropDownLine />,
            TogglerData: [
                { p1: <SiFoodpanda />, p2: "Pandapay", Link: "/pandapay" },
                { p1: <PiCrownSimpleFill />, id: 2, p2: "Subscribe to free Delivery", Link: "/subscription" },
                { p1: <MdBookmarkBorder />, id: 3, p2: "Order & reordering", Link: "/order" },
                { p1: <CgProfile />, p2: "Profile", Link: "/profile" },
                { p1: <FaVihara />, p2: "Vouchers", Link: "/voucher" },
                { p1: <GiAbstract015 />, p2: "Panda Rewards", Link: "/Reward" },
                { p1: <LuHelpCircle />, p2: "Help Center", Link: "/help" },
                { p1: <IoIosLogOut />, p2: "Logout", Link: "/logout" },
            ]
        },
        {
            Logo: <TfiWorld />, nam: "ENG", Log1: <RiArrowDropDownLine />,
            TogglerData: [
                { p1: <SiFoodpanda />, p2: "English" },
            ]
        },
    ];

    const handleItemClick = (index) => {
        setSelectedItemIndex(index === selectedItemIndex ? null : index);
    };

    const closeDropdown = () => {
        setSelectedItemIndex(null);
    };

    return (
        <Fragment>
            <div>
                <nav className='bg-white shadow-md fixed top-0 w-full flex items-center justify-between px-6 py-4 md:py-0 md:flex-row flex-col z-50'>
                    <div className="flex justify-start items-center md:w-auto space-x-4">
                        <Link to={"/"} className="flex justify-center items-center">
                            <div className='h-16 w-24 flex items-center gap-2'>
                                <h1 className='text-[rgb(226,27,112)] text-3xl'><SiFoodpanda /></h1>
                                <h1 className='text-[rgb(226,27,112)] font-semibold text-2xl'>Foodpanda</h1>
                            </div>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4 md:space-x-0 md:hidden">
                        <div className="relative">
                            <div
                                onClick={() => handleItemClick(1)}
                                className="flex cursor-pointer hover:bg-gray-300 p-1 duration-500 rounded justify-center items-center gap-1"
                            >
                                <h1 className='text-xl'>{navarry[1].Logo}</h1>
                                <h1 className='font-semibold'>{navarry[1].nam}</h1>

                                <h1 className={`text-3xl text-[rgb(226,27,112)] transform duration-300 ${selectedItemIndex === 1 ? 'rotate-180' : ''}`}>
                                    {navarry[1].Log1}
                                </h1>
                            </div>
                            {selectedItemIndex === 1 && (
                                <div className="absolute top-full mt-3 w-32 bg-white shadow-lg rounded z-50">
                                    {navarry[1].TogglerData.map((data, idx) => (
                                        <Link
                                            to={data.Link}
                                            key={idx}
                                            className="flex items-center justify-start p-3 mb-2 hover:bg-pink-100 rounded"
                                            onClick={closeDropdown}
                                        >
                                            <h2 className={`${idx === 0 ? 'text-[rgb(226,27,112)]' : ''}`}>{data.p1}</h2>
                                            <p className="ml-2">{data.p2}</p>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="md:flex md:space-x-4 hidden">
                        {navarry.map((item, index) => (
                            <div key={index} className="relative cursor-pointer flex flex-col justify-center items-center gap-1">
                                <div
                                    onClick={() => handleItemClick(index)}
                                    className="flex cursor-pointer hover:bg-gray-300 p-1 duration-500 rounded justify-center items-center gap-1"
                                >
                                    <h1 className='text-xl'>{item.Logo}</h1>
                                    <h1 className='font-semibold'>{item.nam}</h1>
                                    <h1 className={`text-3xl text-[rgb(226,27,112)] transform duration-300 ${selectedItemIndex === index ? 'rotate-180' : ''}`}>
                                        {item.Log1}
                                    </h1>
                                </div>

                                {selectedItemIndex === index && (
                                    <div
                                        className={`absolute top-full mt-3 w-72 bg-white shadow-lg rounded z-50 right-0
                                        transition-all duration-300 ease-out transform`}
                                        style={{ transformOrigin: 'top' }}
                                    >
                                        {item.TogglerData.map((data, idx) => (
                                            <Link
                                                to={data.Link}
                                                key={idx}
                                                className="flex items-center justify-start p-3 mb-2 hover:bg-pink-100 rounded"
                                                onClick={closeDropdown}
                                            >
                                                <h2 className={`${idx === 0 ? 'text-pink-500' : ''} ${idx === 1 ? 'text-blue-500' : ''}`}>
                                                    {data.p1}
                                                </h2>
                                                <p className="ml-2">{data.p2}</p>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className='flex justify-end items-center'>
                            <h1 className='hover:bg-gray-300 duration-500 cursor-pointer rounded-full p-3 '>
                                <TfiBag />
                            </h1>
                        </div>
                    </div>
                </nav>

                {selectedItemIndex !== null && (
                    <div
                        className="fixed inset-0 top-16 bg-black bg-opacity-50 z-40"
                        onClick={closeDropdown}
                    />
                )}
            </div>
          
        </Fragment>
    );
};

export default Header;

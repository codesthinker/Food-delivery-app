import React, { Fragment, useState } from 'react';
import { RiContactsLine, RiArrowDropDownLine } from "react-icons/ri";
import { SiFoodpanda } from "react-icons/si";
import { TfiBag, TfiWorld } from "react-icons/tfi";
import { Link, useNavigate } from 'react-router-dom';
import { PiCrownSimpleFill } from "react-icons/pi";
import { MdBookmarkBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaVihara } from "react-icons/fa";
import { GiAbstract015 } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";
import { LuHelpCircle } from "react-icons/lu";

const Header = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const navigate = useNavigate(); 

    const navarry = [
        {
            Logo: <RiContactsLine />, nam: "Waleed", Log1: <RiArrowDropDownLine />,
            TogglerData: [
                { p1: <SiFoodpanda />, p2: "Pandapay", Link: "/pandapay" },
                { p1: <PiCrownSimpleFill />, p2: "Subscribe to free Delivery", Link: "/subscription" },
                { p1: <MdBookmarkBorder />, p2: "Order & reordering", Link: "/order" },
                { p1: <CgProfile />, p2: "Profile", Link: "/profile" },
                { p1: <FaVihara />, p2: "Vouchers", Link: "/voucher" },
                { p1: <GiAbstract015 />, p2: "Panda Rewards", Link: "/Reward" },
                { p1: <LuHelpCircle />, p2: "Help Center", Link: "/help" },
                { p1: <IoIosLogOut />, p2: "Logout", Link: "/Login" }, 
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

    const handleLogout = () => {
        localStorage.removeItem("Login"); 
        closeDropdown(); 
        navigate("/login"); 
    };

    return (
        <Fragment>
            <div>
                <nav className='bg-white fixed top-0 w-full flex items-center justify-between px-4 py-3 md:px-6 md:py-4 z-50'>
                    <div className="flex items-center space-x-4">
                        <Link to={"/"} className="flex items-center gap-2">
                            <SiFoodpanda className='text-[rgb(226,27,112)] text-2xl md:text-3xl' />
                            <h1 className='text-[rgb(226,27,112)] font-semibold text-xl md:text-2xl'>Foodpanda</h1>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex space-x-4">
                        {navarry.map((item, index) => (
                            <div key={index} className="relative">
                                <div
                                    onClick={() => handleItemClick(index)}
                                    className="flex items-center gap-1 cursor-pointer hover:bg-gray-300 p-1 duration-500 rounded"
                                >
                                    {item.Logo}
                                    <span className="font-semibold">{item.nam}</span>
                                    <RiArrowDropDownLine
                                        className={`text-2xl transform duration-300 ${selectedItemIndex === index ? 'rotate-180' : ''}`}
                                    />
                                </div>
                                {selectedItemIndex === index && (
                                    <div className="absolute top-full mt-3 w-32 bg-white shadow-lg rounded z-50">
                                        {item.TogglerData.map((data, idx) => (
                                            <Link
                                                to={data.Link || "#"}
                                                key={idx}
                                                className="flex items-center p-3 mb-2 hover:bg-pink-100 rounded"
                                                onClick={closeDropdown}
                                            >
                                                {data.p1}
                                                <span className="ml-2">{data.p2}</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:space-x-6">
                        {navarry.map((item, index) => (
                            <div key={index} className="relative">
                                <div
                                    onClick={() => handleItemClick(index)}
                                    className="flex items-center gap-1 cursor-pointer hover:bg-gray-300 p-1 duration-500 rounded"
                                >
                                    {item.Logo}
                                    <span className="font-semibold">{item.nam}</span>
                                    <RiArrowDropDownLine
                                        className={`text-3xl text-[rgb(226,27,112)] transform duration-300 ${selectedItemIndex === index ? 'rotate-180' : ''}`}
                                    />
                                </div>
                                {selectedItemIndex === index && (
                                    <div className="absolute top-full mt-3 w-72 bg-white shadow-lg rounded z-50 right-0">
                                        {item.TogglerData.map((data, idx) => (
                                            <Link
                                                to={data.Link || "#"}
                                                key={idx}
                                                className="flex items-center p-3 mb-2 hover:bg-pink-100 rounded"
                                                onClick={data.p2 === "Logout" ? handleLogout : closeDropdown}
                                            >
                                                {data.p1}
                                                <span className="ml-2">{data.p2}</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className='flex items-center'>
                            <Link to={"/Byproduct"} className='hover:bg-gray-300 p-3 duration-500 rounded-full'>
                                <TfiBag />
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Overlay for closing dropdown */}
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

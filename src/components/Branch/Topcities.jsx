import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Topcities.css' // Import custom CSS for animation

const Topcities = () => {
    const CityData = [
        { cname: "Bahawalpur", Link: "/bah" },
        { cname: "Faslabad", Link: "/fas" },
        { cname: "Multan", Link: "/mul" },
        { cname: "Islamabad", Link: "/isb" },
        { cname: "Karachi", Link: "/krc" },
        { cname: "Lodhran", Link: "/ldh" },
        { cname: "Rawalpindi", Link: "/rlp" },
        { cname: "Rawalpindi", Link: "/rlp" },
        { cname: "Rawalpindi", Link: "/rlp" },
    ]

    return (
        <Fragment>
            <div className='h-[50vh] w-full flex justify-center items-end'>
                <h1 className='font-semibold text-2xl md:text-3xl  lg:text-4xl'>Top Cities in Pakistan</h1>
            </div>
            <div className='p-3 flex flex-wrap justify-center gap-3'>
                {CityData.map((item, index) => {
                    return (
                        <div key={index} className='w-[80%] sm:w-[45%] md:w-[30%] lg:w-[25%]'>
                            <Link to={item.Link}>
                                <p className='border-b-[1px] border-gray-950 hover:border-gray-950 hover:border-b-2  hover:animate-borderExpand font-semibold duration-200 text-center'>
                                    {item.cname}
                                </p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default Topcities

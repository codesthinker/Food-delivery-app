import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Contry = () => {
    const CityData = [
        { cname: "Pakistan", Link: "/bah" },
        { cname: "Palestine", Link: "/fas" },
        { cname: "Saudia ", Link: "/mul" },
        { cname: "America", Link: "/isb" },
        { cname: "Afganestan", Link: "/krc" },
        { cname: "Serilanka", Link: "/ldh" },
        { cname: "Dubai", Link: "/ldh" },
        
        { cname: "Umen", Link: "/ldh" },
        { cname: "Rawalpindi", Link: "/rlp" },
        
    ]

    return (
        <Fragment>
            
            <div className='p-3 flex flex-wrap justify-center mt-12 gap-10'>
            <hr className='bg-gray-200 w-full' />
                {CityData.map((item, index) => {
                    return (
                        <div key={index} className='w-[80%] sm:w-[45%] md:w-[30%] lg:w-[6%]'>
                         
                            <Link to={item.Link}>
                                <p className='border-b-[1px] border-gray-950 hover:border-b-2 font-semibold duration-100 h-10 text-center'>
                                    {item.cname}
                                </p>
                            </Link>
                        </div>
                    )
                })}
                            <hr className='bg-gray-200 w-full' />

            </div>
        </Fragment>
    )
}

export default Contry

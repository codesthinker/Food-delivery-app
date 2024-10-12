import React, { Fragment } from 'react'
import { Bs1Circle } from "react-icons/bs";
import { Link } from 'react-router-dom'

const Footer = () => {
    const footerdata = [
        { p1: "Press", p2: "pandapay Terms and Conditions", p3: "Security", p4: "Careers", p5: "Cashback Terms and Conditions", p6: "Partner with us", p7: "All countries", p8: "pandapro - Monthly Subscription", p9: "Ramzan deals", p10: "Areas delivered in Lahore" },
        { p1: "Press", p2: "pandapay Terms and Conditions", p3: "Security", p4: "Careers", p5: "Cashback Terms and Conditions", p6: "Partner with us", p7: "All countries", p8: "pandapro - Monthly Subscription", p9: "Ramzan deals", p10: "Areas delivered in Lahore" },
        { p1: "Press", p2: "pandapay Terms and Conditions", p3: "Security", p4: "Careers", p5: "Cashback Terms and Conditions", p6: "Partner with us", p7: "All countries", p8: "pandapro - Monthly Subscription", p9: "Ramzan deals", p10: "Areas delivered in Lahore" },
    ]

    return (
        <Fragment>
            <div className='flex flex-col md:flex-row justify-evenly items-start p-6'>
                <div className='mb-6 md:mb-0'>
                    <h1 className='text-gray-600 font-semibold flex items-center gap-3 text-lg md:text-xl'>
                        <Bs1Circle />
                        Foodpanda
                    </h1>
                </div>
                
                {/* Footer Links */}
                {footerdata.map((item, index) => {
                    return (
                        <Link key={index} className='flex flex-col gap-2 md:gap-4 text-gray-700 w-full md:w-[20%]'>
                            <p className='underline'>{item.p1}</p>
                            <p className='underline'>{item.p2}</p>
                            <p className='underline'>{item.p3}</p>
                            <p className='underline'>{item.p4}</p>
                            <p className='underline'>{item.p5}</p>
                            <p className='underline'>{item.p6}</p>
                            <p className='underline'>{item.p7}</p>
                            <p className='underline'>{item.p8}</p>
                            <p className='underline'>{item.p9}</p>
                            <p className='underline'>{item.p10}</p>
                        </Link>
                    )
                })}
            </div>
            <hr className='w-full text-gray-500 bg-gray-400 mt-8' />
        </Fragment>
    )
}

export default Footer;

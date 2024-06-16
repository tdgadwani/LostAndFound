import React from 'react'
import twitter from "../assets/twitter.svg"
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"
import {Link} from "react-router-dom"
import arrow from "../assets/arrow.svg"
import sideArrow from "../assets/sideArrow.svg"

const Footer = () => {
  return (
    <>
    <div className='flex  justify-between bg-black fixed bottom-0 left-0 right-0 text-white' >
        <div className=''>
            <div className='p-2 font-bold'>Get Updates</div>

            <div className='flex' >
            <div><textarea id="w3review" name="w3review" rows="1" cols="15" placeholder='Email' className='bg-black mx-2 boreder-solid border-white text-sm' ></textarea></div>
            <div><img src={sideArrow} /></div>
            </div>

            <div className='flex place-items-center absolute '>
               <img src={twitter} className='p-2'/>
               <img src={instagram} className='p-2'/>
               <img src={facebook} className='p-2'/>
            </div>
        </div>

        <div className='flex px-20'>
            <div className='m-2'>
                <ul className="font-bold">
                <Link to = "/">
                    <li className="px-2">Lost</li>
                </Link>
                <Link to = "/">
                    <li className="px-2">Found</li>
                </Link>
                <Link to = "/">
                    <li className="px-2">Claimed </li>
                </Link>
                <Link to = "/">
                    <li className="px-2">Rewards </li>
                </Link>             
                </ul>
            </div>
            <div className='m-2'>
                <ul className=" font-bold">
                <Link to = "/">
                    <li className="px-2">Lost</li>
                </Link>
                <Link to = "/">
                    <li className="px-2">Found</li>
                </Link>
                <Link to = "/">
                    <li className="px-2">Claimed </li>
                </Link>
                <Link to = "/">
                    <li className="px-2">Rewards </li>
                </Link>             
                </ul>
            </div>
            <div className='fixed bottom-0 right-0 m-2 p-2'>
                <img src={arrow} className='size-8'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;
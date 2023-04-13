import React from 'react';
import {FaFacebook, FaTruck} from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <>
    {/* <!--Top bar for medium and large devices --> */}
    <div className=' bg-black top-0 z-50 p-2 hidden md:block'>
        <div className='max-w-6xl flex justify-between mx-auto px-3'>
            <div className='w-[52%] flex justify-start items-start space-x-1'>
                <Link className='w-full flex items-center space-x-2 ' 
                    to="https://api.whatsapp.com/send?phone=+40764378979&text=I want to place an order:&_ga=2.54150176.902906433.1680692008-950980016.1680692008"
                    target="_blank"
                    rel="noreferrer">
                    <RiWhatsappFill className='text-white text-2xl ' />
                    <p className='text-white font-Poppins font-normal text-xs hover:text-rose-200 
                    transition duration-150 ease-in-out'>
                        Telefon pentru comenzi: 0764.378.979
                    </p>
                </Link>
                <Link className='w-full flex items-center space-x-2'>
                    <FaTruck className='text-white text-2xl' />
                    <p className='text-white font-Poppins font-normal text-xs hover:text-rose-200 
                    transition duration-150 ease-in-out '>
                        Livrare gratuita pentru comenzi de 200+ lei
                    </p>
                </Link>
            </div>

            <div className='w-[38%] flex justify-end items-end'>
                <Link className='w-full flex items-center space-x-2' 
                    to="https://www.facebook.com/ohvaz.oficial?_ga=2.100360214.902906433.1680692008-950980016.1680692008"
                    target="_blank"
                    rel="noreferrer">
                    <FaFacebook className='text-white text-2xl'/>
                    <p className='text-white font-Poppins font-normal text-xs hover:text-rose-200 
                    transition duration-150 ease-in-out'>
                        Urmareste-ne pe Facebook
                    </p>
                </Link>
                <Link className='w-full flex items-center space-x-2' 
                    to="https://www.instagram.com/ohvaz_ro/?_ga=2.63154855.902906433.1680692008-950980016.1680692008"
                    target="_blank"
                    rel="noreferrer">
                    <AiFillInstagram className='text-white text-2xl'/>
                    <p className='text-white font-Poppins font-normal text-xs hover:text-rose-200 
                    transition duration-150 ease-in-out'>
                        Urmareste-ne pe Instagram
                    </p>
                </Link>
            </div>
        </div>
    </div>
    {/* <!--Top bar for mobile and small devices --> */}
    <div className='w-full bg-black top-0 z-50 p-2 block md:hidden'>
        <div className='flex items-center justify-between mx-auto'>
            <div className='flex items-center justify-between space-x-2 ml-2'>
                <Link className='w-full' 
                to="https://api.whatsapp.com/send?phone=+40764378979&text=I want to place an order:&_ga=2.54150176.902906433.1680692008-950980016.1680692008"
                target="_blank"
                rel="noreferrer">
                    <RiWhatsappFill className='text-white text-2xl' />
                </Link>
                <Link className='w-full' 
                    to="https://www.facebook.com/ohvaz.oficial?_ga=2.100360214.902906433.1680692008-950980016.1680692008"
                    target="_blank"
                    rel="noreferrer">
                    <FaFacebook className='text-white text-2xl'/>
                </Link>
                <Link className='w-full' 
                to="https://www.instagram.com/ohvaz_ro/?_ga=2.63154855.902906433.1680692008-950980016.1680692008"
                target="_blank"
                rel="noreferrer">
                    <AiFillInstagram className='text-white text-2xl'/>
                </Link>
            </div>

            <div className='justify-end'>
                <Link className=''>
                    <p className='text-white font-Poppins font-normal text-xs'>
                        Livrare gratuita comenzi de 200+ lei
                    </p>
                </Link>
            </div>
        </div>
       
    </div></>
  );
}

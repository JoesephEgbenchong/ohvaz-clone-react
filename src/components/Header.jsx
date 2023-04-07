import React, { useState } from 'react'
import { RiLoginCircleLine } from 'react-icons/ri';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);

    const pathMatchRoute = (route) => {
        if(route === location.pathname){
            return true;
        }
    }

    const textStylePath = (route) => {
        if(route === location.pathname){
            return 'text-primary';
        } else {
            return 'text-textBlack'
        }
    }



  return (
    <div className='bg-white border-b shadow-sm border-b-sectionSeparate'>
        <header className='max-w-6xl mx-auto px-3 py-2 flex justify-between items-center'>
            {/* Toggle button for mobile navbar */}
            <div className='flex md:hidden'>
                    {/* Toggle button for mobile navbar */}
                    <button type='button' className='block text-textBlack hover:text-primary focus:text-primary focus:outline-none'
                            onClick={() => setShowMenu(!showMenu)}>
                        <svg viewBox='0 0 20 20' className='w-6 h-6 fill-current'>
                            <title>Menu</title>
                            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'/>
                        </svg>
                    </button>
            </div>
             {/* Mobile navbar that displays rest of the menu items */}
             {showMenu && (
                <div className='absolute top-24 left-0 right-0 bg-white md:hidden'>
                    <ul className='flex flex-col space-y-2 justify-center items-center mb-1'>
                        <li className={` text-xs font-Poppins uppercase font-semibold hover:text-primary
                            transition duration-150 ease-in-out 
                            cursor-pointer relative ${textStylePath("/")}`} 
                            onClick={()=>{navigate("/"); setShowMenu(false)}}>
                                Home
                        </li>
                        <li className={`text-xs font-Poppins uppercase font-semibold hover:text-primary
                            transition duration-150 ease-in-out 
                            cursor-pointer relative ${textStylePath("/products")}`} 
                            onClick={()=>{navigate("/products"); setShowMenu(false)}}>
                                Products
                        </li>
                        <li className={`text-xs font-Poppins uppercase font-semibold hover:text-primary
                            transition duration-150 ease-in-out 
                            cursor-pointer relative ${textStylePath("/press")}`} 
                            onClick={()=>{navigate("/press"); setShowMenu(false)}}>
                                Press
                        </li>
                        <li className={`text-xs font-Poppins uppercase font-semibold hover:text-primary
                            transition duration-150 ease-in-out 
                            cursor-pointer relative ${textStylePath("/locations")}`} 
                            onClick={()=>{navigate("/locations"); setShowMenu(false)}}>
                                Locations
                        </li>
                        <li className={`text-xs font-Poppins uppercase font-semibold hover:text-primary
                            transition duration-150 ease-in-out 
                            cursor-pointer relative ${textStylePath("/contact")}`} 
                            onClick={()=>{navigate("/contact"); setShowMenu(false)}}>
                                Contact
                        </li>
                        <li className={`text-xs font-Poppins uppercase font-semibold hover:text-primary
                            transition duration-150 ease-in-out 
                            cursor-pointer relative ${textStylePath("/blog")}`} 
                            onClick={()=>{navigate("/blog"); setShowMenu(false)}}>
                                blog
                        </li>
                        <li className='flex items-center space-x-2'>
                            <RiLoginCircleLine className='text-2xl text-primary' />
                            <span className={`text-xs font-Poppins uppercase font-semibold 
                            hover:text-primary transition duration-150 ease-in-out cursor-pointer 
                            ${textStylePath("/sign-in")}`} onClick={()=>{navigate("/sign-in"); setShowMenu(false)}}>
                                Login
                            </span>
                        </li>
                        <li>
                            <button type='button' className='w-full text-white bg-primary text-xs uppercase
                            font-Poppins font-semibold px-5 py-2.5 rounded-full hover:bg-primary-dark-1 
                            transition duration-150 ease-in-out active:bg-primary-dark-2' 
                            onClick={()=> {navigate("/sign-up"); setShowMenu(false)}}>
                                Create an account
                            </button>
                        </li>
                    </ul>
                </div>
             )
            }
            
            <div>
                <img src="https://www.ohvaz.ro/wp-content/uploads/2021/08/ohvaz-logo.svg" alt="ohvaz-logo"
                className='cursor-pointer h-[45px] w-[150px]' onClick={() => navigate("/")}/>
            </div>

            <div className='hidden md:block'>
                <ul className='flex flex-col md:flex-row md:space-x-10'>
                    <li className={`text-sm font-Poppins uppercase font-semibold hover:text-primary
                    transition duration-150 ease-in-out 
                    cursor-pointer relative ${textStylePath("/")}`} 
                    onClick={()=>navigate("/")}>Home
                    {pathMatchRoute("/") && 
                    <span className="absolute top-[38px] left-0 h-[3px] w-full bg-primary"></span> 
                    }
                    </li>
                    <li className={`text-sm font-Poppins uppercase font-semibold 
                    hover:text-primary cursor-pointer transition duration-150 ease-in-out 
                    relative ${textStylePath("/products")}`}
                     onClick={()=>navigate("/products")}>Products
                    {pathMatchRoute("/products") && 
                    <span className="absolute top-[38px] left-0 h-[3px] w-full bg-primary"></span> 
                    }
                    </li>
                    <li className={`text-sm font-Poppins uppercase font-semibold 
                    hover:text-primary transition duration-150 ease-in-out 
                    cursor-pointer relative ${textStylePath("/press")}`} 
                    onClick={()=>navigate("/press")}>Press
                    {pathMatchRoute("/press") && 
                    <span className="absolute top-[38px] left-0 h-[3px] w-full bg-primary"></span> 
                    }
                    </li>
                    <li className={`text-sm font-Poppins uppercase font-semibold 
                    hover:text-primary transition duration-150 ease-in-out
                    cursor-pointer relative ${textStylePath("/locations")}`} 
                    onClick={()=>navigate("/locations")}>Locations
                    {pathMatchRoute("/locations") && 
                    <span className="absolute top-[38px] left-0 h-[3px] w-full bg-primary"></span> 
                    }
                    </li>
                    <li className={` text-sm font-Poppins uppercase font-semibold 
                    hover:text-primary  transition duration-150 ease-in-out 
                    cursor-pointer relative ${textStylePath("/contact")}`} 
                    onClick={()=>navigate("/contact")}>Contact
                    {pathMatchRoute("/contact") && 
                    <span className="absolute top-[38px] left-0 h-[3px] w-full bg-primary"></span> 
                    }
                    </li>
                    <li className={` text-sm font-Poppins uppercase font-semibold 
                    hover:text-primary transition duration-150 ease-in-out 
                    cursor-pointer relative ${textStylePath("/blog")}`} 
                    onClick={()=>navigate("/blog")}>Blog
                    { pathMatchRoute("/blog") &&  <span className="absolute top-[38px] left-0 h-[3px] w-full bg-primary"></span>}
                    </li>
                </ul>
            </div>

            <div className='hidden md:block'>
                <ul className='flex space-x-10'>
                    <li className='flex items-center space-x-2'>
                        <RiLoginCircleLine className='text-2xl text-primary' />
                        <span className={` text-sm font-Poppins uppercase font-semibold 
                        hover:text-primary transition duration-150 ease-in-out cursor-pointer 
                        ${textStylePath("/sign-in")}`} onClick={()=>navigate("/sign-in")}>
                            Login
                        </span>
                    </li>
                    <li>
                        <button type='button' className='w-full text-white bg-primary text-sm uppercase
                         font-Poppins font-semibold px-5 py-2.5 rounded-full hover:bg-primary-dark-1 
                         transition duration-150 ease-in-out active:bg-primary-dark-2' 
                         onClick={()=> navigate("/sign-up")}>
                            Create an account
                        </button>
                    </li>
                </ul>
            </div>

            <div className='md:hidden'>
                <MdOutlineShoppingCart className='text-3xl text-textBlack' />
            </div>
        </header>
        
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import productsData from '../productsData';

export default function Home() {

  const navigate = useNavigate();


  return (
    <div className='max-w-6xl mx-auto px-3'>
      <h1 className='mt-7 text-center text-textBlack font-Berkshire text-[40px] font-normal mb-3'>
        It's not a dessert, it's the perfect breakfast!</h1>
      <p className='text-center font-Poppins font-semibold mx-24'>
        Healthy hand-made products made with love in Romania. We don't use sugar, chemicals, or plastic packaging.
        Quick delivery everywhere in the country. Eat better, feel better!<br></br>
        <span className='text-primary cursor-pointer hover:text-primary-dark-1 transition duration-150 
        ease-in-out' onClick={()=> navigate("/contact")}>See more about us.</span>
      </p>

      <div className='w-full md:w-[50%] md:items-center md:justify-center md:mt-7 md:mx-auto'>
        <ul className='items-center flex bg-white px-[40px] py-[15px] 
        rounded-full border border-sectionSeparate justify-between'>
          <li className='text-textBlack uppercase font-Poppins font-bold 
          text-sm hover:text-primary transition duration-150 
          ease-in-out cursor-pointer'>Special</li>

          <div className="border-r-2 h-[16px] border-sectionSeparate"></div>

          <li className='text-textBlack uppercase font-Poppins font-bold 
          text-sm hover:text-primary transition duration-150 
          ease-in-out cursor-pointer'>Chia</li>

          <div className="border-r-2 h-[16px] border-sectionSeparate"></div>

          <li className='text-primary uppercase font-Poppins font-bold 
          text-sm hover:text-primary transition duration-150 
          ease-in-out cursor-pointer relative'>Oats
          <span className="absolute top-[34px] left-0 h-[3px] w-full bg-primary"></span></li>

          <div className="border-r-2 h-[16px] border-sectionSeparate"></div>

          <li className='text-textBlack uppercase font-Poppins font-bold 
          text-sm hover:text-primary transition duration-150 
          ease-in-out cursor-pointer'>Cookies</li>

          <div className="border-r-2 h-[16px] border-sectionSeparate"></div>

          <li className='text-textBlack uppercase font-Poppins font-bold 
          text-sm hover:text-primary transition duration-150 
          ease-in-out cursor-pointer'>Lemonade</li>

        </ul>
      </div>


    </div>
  )
}

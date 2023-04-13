import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import productsData from '../productsData';
import ProductItem from '../components/ProductItem';
import VerticalSeparator from '../components/VerticalSeparator';
import faqData from '../faqData';
import Accordion from '../components/Accordion';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

export default function Home() {

  const navigate = useNavigate();

  //implementing fixed scroll for product navigation in small screens
  const [isSticky, setIsSticky] = useState(false);

  useEffect(()=> {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (

    <>
    {/** Start: Product Navigation for mobile screens */}
      <div className={`fixed w-full z-40 d-md-none d-block md:hidden`}>
          <ul className={`w-full items-center flex bg-white px-[21px] py-[15px] border border-sectionSeparate justify-between`}>
            <li className='text-textBlack uppercase font-Poppins font-bold 
            text-sm hover:text-primary transition duration-150 
            ease-in-out cursor-pointer'>Special</li>

            <VerticalSeparator />

            <li className='text-textBlack uppercase font-Poppins font-bold 
            text-sm hover:text-primary transition duration-150 
            ease-in-out cursor-pointer'>Chia</li>

            <VerticalSeparator />

            <li className='text-primary uppercase font-Poppins font-bold 
            text-sm hover:text-primary transition duration-150 
            ease-in-out cursor-pointer relative'>Oats
            <span className="absolute top-[34px] left-0 h-[3px] w-full bg-primary"></span></li>

            <VerticalSeparator />

            <li className='text-textBlack uppercase font-Poppins font-bold 
            text-sm hover:text-primary transition duration-150 
            ease-in-out cursor-pointer'>Cookies</li>

            <VerticalSeparator />

            <li className='text-textBlack uppercase font-Poppins font-bold 
            text-sm hover:text-primary transition duration-150 
            ease-in-out cursor-pointer'>Lemonade</li>
          </ul>
      </div>
      {/**End: Product Navigation for mobile Screens */}


      <div className='max-w-6xl mx-auto px-3'>
        <h1 className='text-[26px] mt-16 md:mt-7 text-center text-textBlack font-Berkshire 
        md:text-[40px] font-normal mb-1 md:mb-3 mx-[20px] md:mx-auto'>
          It's not a dessert, it's the perfect breakfast!</h1>
        <p className='text-center font-Poppins md:font-semibold mx-[14px] md:mx-24 text-[13px] md:text-base'>
          Healthy hand-made products made with love in Romania. We don't use sugar, chemicals, or plastic packaging.
          Quick delivery everywhere in the country. Eat better, feel better!<br></br>
          <span className='text-primary cursor-pointer hover:text-primary-dark-1 transition duration-150 
          ease-in-out' onClick={()=> navigate("/contact")}>See more about us.</span>
        </p>

        <div className='hidden md:block w-full md:w-[50%] md:items-center md:justify-center md:mt-7 md:mx-auto'>
          <ul className='items-center flex bg-white px-[40px] py-[15px] 
          rounded-full border border-sectionSeparate justify-between'>
            <li className='text-textBlack uppercase font-Poppins font-bold 
            text-sm hover:text-primary transition duration-150 
            ease-in-out cursor-pointer'>Special</li>

            <VerticalSeparator />

            <li className='text-textBlack uppercase font-Poppins font-bold 
            text-sm hover:text-primary transition duration-150 
            ease-in-out cursor-pointer'>Chia</li>

            <VerticalSeparator />

            <li className='text-primary uppercase font-Poppins font-bold 
            text-sm hover:text-primary transition duration-150 
            ease-in-out cursor-pointer relative'>Oats
            <span className="absolute top-[34px] left-0 h-[3px] w-full bg-primary"></span></li>

            <VerticalSeparator />

            <li className='text-textBlack uppercase font-Poppins font-bold 
            text-sm hover:text-primary transition duration-150 
            ease-in-out cursor-pointer'>Cookies</li>

            <VerticalSeparator />

            <li className='text-textBlack uppercase font-Poppins font-bold 
            text-sm hover:text-primary transition duration-150 
            ease-in-out cursor-pointer'>Lemonade</li>
          </ul>
        </div>

        <div className='mt-6 mb-6'>
          <ul className='w-full grid grid-cols-2 sm:grid sm:grid-cols-2 lg:grid-cols-3'>
            {productsData.map((product) => (
              <ProductItem 
              key={product.id} 
              id={product.id} 
              product={product} />
            ))}
          </ul>
        </div>

        <div className='mb-6'>
          <h2 className='text-center font-Poppins text-textBlack font-bold text-xl md:text-2xl'>
            Frequently Asked Questions
          </h2>
          <div className='mt-6 mb-6 grid sm:grid-cols-1 md:grid-cols-2'>
            {faqData.map((faq) =>(
              <div 
                key={faq.id} 
                className='w-full'>
                <div 
                  className='bg-white p-5 mt-3 rounded-md border border-sectionSeparate shadow-md m-[10px] hover:shadow-lg'>
                  <Accordion 
                    key={faq.id} 
                    faq={faq}
                    id={faq.id} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <NewsLetter />

      </div>
      <Footer />
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai';

export default function ProductItem({product, id}) {
  return (
    <li className='relative bg-white flex flex-col justify-between items-center rounded-2xl 
     border overflow-hidden m-[10px] border-sectionSeparate shadow-md hover:shadow-xl '>
        <Link className='contents'>
            <img className="w-[172.5px] h-[125px] md:h-[250px] md:w-[380px] object-cover 
            hover:scale-105 transition-scale duration-200 ease-in" 
             loading='lazy' 
             src={process.env.PUBLIC_URL + product.imageUrl} alt={product.name} />
             {product.discount && (
                <span className='absolute top-1 md:top-2 left-0 rounded-r-full text-white bg-primary
                px-[10px] py-[5px] font-Poppins text-xs md:text-sm line-through'>{product.price} lei</span>
             )}
             <p className='absolute top-1 right-1 md:top-2 md:right-2 rounded-full bg-white 
             px-[10px] py-[5px] flex items-center'>
                <AiFillStar className='text-base md:text-lg text-[#fddd07]' />
                <span className='text-textBlack font-Poppins
                 text-sm font-semibold ml-1 hidden md:block'> {product.rating} ({product.votes})</span>
                 {/**Rating tag for small screens */}
                 <span className='text-textBlack font-Poppins
                 text-xs font-semibold ml-1 md:hidden'> {product.rating}</span>
             </p>
             
             <div className='w-full flex flex-col overflow-hidden'>
                <p className='text-textBlack font-Poppins text-sm px-[10px]
                font-bold md:text-lg md:px-[20px] truncate mt-[10px] mb-[10px]'>{product.name}</p>

                <div className='flex justify-between px-[10px] md:px-[20px] mb-[10px]'>
                    <p className='text-textBlack font-Poppins text-xs md:text-sm'>{product.weight} gr.</p>
                    <p className='text-textBlack font-Poppins text-xs md:text-sm'>{product.calories} calories</p>
                </div>

                <div className='flex flex-grow-0 justify-between items-center self-stretch mb-0'>
                    <p className='text-textBlack font-Poppins md:text-lg font-semibold text-xs 
                    pl-[10px] md:pl-[20px]'>{product.discount ? product.discountedPrice : product.price} lei</p>
                    <p className='text-primary font-Poppins text-sm font-semibold uppercase 
                    hover:text-primary-dark-1 transition duration-150 ease-in-out hidden md:block'>View details</p>
                    <button type='button' className='w-[55%] md:w-[35%] h-[40px] text-white font-Poppins 
                    bg-primary px-[5px] md:px-[10px] py-[5px] md:py-[10px] text-xs md:text-sm rounded-tl-2xl
                    hover:bg-primary-dark-1 transition duration-150 ease-in-out
                     active:bg-primary-dark-2 '>Add to cart</button>
                </div>
             </div>
        </Link>
    </li>
  )
}

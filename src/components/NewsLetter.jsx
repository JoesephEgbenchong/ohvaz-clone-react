import React, { useState } from 'react'

export default function NewsLetter() {
    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(values => ({...values, [name] : value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <>
    {/**Find Our Story for mobile version */}
        <div className='w-full md:hidden items-center text-center justify-center mx-auto mb-2'>
            <p className='text-textBlack font-Poppins font-semibold uppercase text-base '>
                Find out Our Story
            </p>
            <span className='text-textBlack font-Poppins text-sm'>
                A small business with big dreams
            </span>
        </div>
    {/** End: Find Our Story for mobile version */}

        <div className='mb-6 w-full md:w-[75%] items-center justify-center mx-auto 
        bg-white sm:py-3 pl-3 pr-0 md:p-3 rounded-full border-2 border-sectionSeparate'>
            <form className='w-full flex space-x-1 md:space-x-2' onSubmit={handleSubmit}>
                <div className='w-[0%] md:w-[70%] flex flex-col items-center'>
                    <p className='text-textBlack font-Poppins font-semibold uppercase text-base 
                    hidden md:block'>
                        Find out Our Story
                    </p>
                    <span className='text-textBlack font-Poppins text-sm hidden md:block'>
                        A small business with big dreams
                    </span>
                </div>
                <div className='w-full'>
                    <input
                        className="w-full md:bg-gray-200 text-xs md:text-sm font-Poppins text-textBlack rounded-full 
                        px-3 py-3 md:px-7 md:py-3 transition duration-150 ease-in-out bg-white" 
                        type="email" 
                        name="email" 
                        value={formData.email || ""} 
                        onChange={handleChange} 
                        placeholder="Type in your email address"/>
                    </div>
                <div className='w-[40%] md:w-[50%]'>
                    <button 
                    className='w-full bg-primary text-white px-7 py-3 shadow-md uppercase font-Poppins 
                    rounded-full hover:bg-primary-dark-1 hover:shadow-lg transition duration-200 ease-in-out 
                    active:bg-primary-dark-2 active:shadow-xl text-sm'
                    type="submit">
                        Subscribe
                    </button>
                </div>
            </form>
        </div>


    </>
  )
}

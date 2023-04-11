import React, { useState } from 'react'

export default function NewsLetter() {
    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(values => ({...values, [name] : value}));
    }

  return (
    <>
        <div className='mb-6 w-full md:w-[75%] items-center justify-center mx-auto 
        bg-white p-3 rounded-full border border-sectionSeparate'>
            <form className='w-full flex space-x-2'>
                <div className='w-[70%] flex flex-col items-center'>
                    <p className='text-textBlack font-Poppins font-semibold uppercase text-base'>
                        Find out Our Story
                    </p>
                    <span className='text-textBlack font-Poppins text-sm'>
                        A small business with big dreams
                    </span>
                </div>
                <div className='w-full'>
                    <input
                        className="w-full bg-gray-200 text-sm font-Poppins text-textBlack rounded-full 
                        px-7 py-3 transition duration-150 ease-in-out " 
                        type="email" 
                        name="email" 
                        value={formData.email || ""} 
                        onChange={handleChange} 
                        placeholder="Type in your email address"/>
                    </div>
                <div className='w-[50%]'>
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

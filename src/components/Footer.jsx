import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className='w-full bg-white border-t-2 border-t-sectionSeparate'>
            <div className='max-w-6xl mx-auto px-3 mt-6'>
                <div className='w-full flex space-x-2'>
                    <div className='w-full' id='firstRow'>
                        <div className='mb-6 text-center' id='firstTitle'>
                            <h1 className='font-semibold font-Poppins text-base uppercase'>
                                Navigation
                            </h1>
                        </div>
                        <div className='w-full flex justify-between mb-6' id='firstContent'>
                            <div className='w-full flex flex-col space-y-2 text-left' id='firstRowContent'>
                                <p className='text-primary font-Poppins font-semibold text-xs'>Magazine partenere</p>
                                <p className='text-primary font-Poppins font-semibold text-xs'>Ohvăz în presă</p>
                                <p className='text-primary font-Poppins font-semibold text-xs'>Despre Ohvăz</p>
                                <p className='text-primary font-Poppins font-semibold text-xs'>Termeni și condiții</p>
                                <p className='text-primary font-Poppins font-semibold text-xs'>Politică de confidențialitate</p>
                                <p className='text-primary font-Poppins font-semibold text-xs'>ANPC</p>
                            </div>
                            <div className='w-full flex flex-col space-y-2 text-right' id='secondRowContent'>
                                <p className='text-primary font-Poppins font-semibold text-xs'>Clătite</p>
                                <p className='text-primary font-Poppins font-semibold text-xs'>Chia</p>
                                <p className='text-primary font-Poppins font-semibold text-xs'>Ovăz</p>
                                <p className='text-primary font-Poppins font-semibold text-xs'>Sucuri</p>
                                <p className='text-primary font-Poppins font-semibold text-xs'>Biscuiți</p>
                                <p className='text-primary font-Poppins font-semibold text-xs'>Special</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full text-center' id='secondRow'>
                        <div className='mb-6' id='secondTitle'>
                            <h1 className='font-semibold font-Poppins text-base uppercase'>
                                Let’s work together
                            </h1>
                        </div>
                        <div className='w-full flex flex-col mb-6 items-center justify-center px-4' id='firstContent'>
                            <div className='w-full mb-6' id='firstRowContent'>
                                <button
                                className='w-[90%] bg-primary text-white text-xs font-Poppins rounded-full 
                                shadow-md px-7 py-3 hover:bg-primary-dark-1 transition duration-150 ease-in-out 
                                hover:shadow-lg active:bg-primary-dark-2 active:shadow-xl' 
                                type='button'>
                                    For influencers - promote Ohvaz
                                </button>
                            </div>
                            <div className='w-full' id='secondRowContent'>
                                <button
                                className='w-full bg-blue-700 text-white text-xs font-Poppins rounded-full 
                                shadow-md px-7 py-3 hover:bg-blue-800 transition duration-150 ease-in-out
                                hover:shadow-lg active:bg-blue-900 active:shadow-xl' 
                                type='button'>
                                    For companies - our partnership details
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='w-full' id='thirdRow'>
                        <div className='mb-6 text-center' id='firstTitle'>
                            <h1 className='font-semibold font-Poppins text-base uppercase'>
                                CONTACT US
                            </h1>
                        </div>
                        <div className='w-full flex mb-6' id='firstContent'>
                            <div className='w-full flex flex-col space-y-2' id='firstRowContent'>
                                <p className='text-textBlack font-Poppins font-semibold text-xs'>Telefon pentru comenzi</p>
                                <p className='text-textBlack font-Poppins font-semibold text-xs'>Telefon pentru persoane juridice</p>
                                <p className='text-textBlack font-Poppins font-semibold text-xs'>Ne găsești pe</p>
                                <p className='text-textBlack font-Poppins font-semibold text-xs'>Ne urmărești pe</p>
                                <p className='text-textBlack font-Poppins font-semibold text-xs'>Ne citești pe</p>
                                <p className='text-textBlack font-Poppins font-semibold text-xs'>Program</p>
                            </div>
                            <div className='w-full flex flex-col text-right space-y-2' id='secondRowContent'>
                                <p className='text-primary font-Poppins font-semibold text-xs'>0764.378.979</p>
                                <p className='text-primary font-Poppins font-semibold text-xs'>0753.415.064</p>
                                <p className='text-primary font-Poppins font-semibold text-xs'>Facebook</p>
                                <p className='text-primary font-Poppins font-semibold text-xs'>Instagram</p>
                                <p className='text-primary font-Poppins font-semibold text-xs'>Blogul Ohvăz</p>
                                <p className='text-primary font-Poppins font-semibold text-xs'>Special</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-white border-t-2 border-t-sectionSeparate'>
                 <div className='max-w-6xl mx-auto px-3'>
                    <div className='w-full mt-3 flex justify-between mb-3'>
                        <p className='font-Poppins text-xs text-textBlack font-semibold'>
                            Designed and Integrated by <span className='text-primary'>Joseph Ayuk E. II </span>
                        </p>
                        <p className='font-Poppins text-xs text-textBlack font-semibold'>
                            All rights reserved © Ohvăz 2023
                        </p>
                    </div>
                    
                 </div>
            </div>
            
        </footer>
    </>
  )
}

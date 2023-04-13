import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

import { motion, AnimatePresence } from 'framer-motion';

export default function Accordion({faq, id}) {
  const [show, setShow] = useState(false);

  return (
    <>
    {/*Question to FAQ */}
      <div className='flex justify-between items-center cursor-pointer' 
      onClick={()=>setShow((prevState) => (!prevState))}>
        <h1 className='text-textBlack font-Poppins text-sm md:text-base font-semibold'>{faq.question}</h1>
        <BiChevronDown className={`text-xl md:text-2xl text-textBlack 
        transition-all duration-500 ${show ? "rotate-180" : " "}`} />
      </div>

      {/*Answer Section */}
      <AnimatePresence>
        {show && (
          <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
          className='overflow-clip'>
            <p className='pt-3 text-sm md:text-base'>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

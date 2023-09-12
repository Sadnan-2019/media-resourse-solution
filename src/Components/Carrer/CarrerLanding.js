import React, { useEffect, useState } from "react";
import "./CarrerLanding.css";
import { AnimatePresence, motion } from "framer-motion";
import carrer from "../../assets/AI_HAND.jpg"
const CarrerLanding = () => {
  const sentences = [
    'Artificial intelligence (AI) is the intelligence of machines',
    'or software, as opposed to the intelligence of human beings or animals',
    
    // Add more sentences as needed
  ];
  
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
  }, 5000); // Change the duration as needed

  return () => clearInterval(interval);
}, [sentences.length]);






  return (
    <div className="animated-text-container">
      <section className="carrerlanding    blog         ">
        <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 lg:grid-cols-2  gap-5 justify-center items-center">
          <div className=" sm:max-w-xs lg:max-w-xl text-left md:ml-8   lg:mt-0">
            
            
            <div className="text-container">
    <AnimatePresence mode='wait'>
      <motion.h2
        key={currentIndex}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        style={{ lineHeight: "120%" }}
        className="animated-text md:text-[43px] font-bold text-[20px] text-left   text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        {sentences[currentIndex]}
      </motion.h2>
    </AnimatePresence>
  </div>
            

         
          </div>

          <div class=" sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-1   lg:mt-0  ">
            <img
              src={carrer}
              alt=""
              className="    "
              data-aos="fade-left"
            />
          </div>
        </div>

         
      </section>
    </div>
  );
};

export default CarrerLanding;

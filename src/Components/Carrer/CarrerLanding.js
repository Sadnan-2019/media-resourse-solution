import React from 'react';
import "./CarrerLanding.css"
import carrer from "../../assets/careearlanding.jpg"
const CarrerLanding = () => {
    return (
        <div>
            <section className="carrerlanding    blog         ">
        <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 lg:grid-cols-2  gap-5 justify-center items-center">
          <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8  order-2   lg:mt-0">
            <h2
              style={{ lineHeight: "120%" }}
              className="md:text-[43px] font-bold text-[20px] text-left   text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 "
            >
              {" "}
              Do you have what it takes to join MRS?
            </h2>

            <h1
              className="mb-5 text-lg  lg:text-2xl max-w-lg mt-7 font-bold   md:text-[25px] poppins-t "
              style={{ lineHeight: "120%", color: "white" }}
            >
              Work Together For Success{" "}
            </h1>

             
          </div>

          <div class="  sm:max-w-xs lg:max-w-sm text-left md:ml-8 lg:order-1 order-2   lg:mt-0  ">
            <img
              src={carrer}
              alt=""
              className=" rounded-full  h-5/6 w-5/6 "
              data-aos="fade-left"
            />
          </div>
        </div>

        {/* <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          
          
        </div> */}

        {/* <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stop-color="#9900ef"></stop>
              <stop offset="95%" stop-color="#abb8c3"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 82.33492822966508,185.30143540669857 164.66985645933016,170.60287081339715 267,165 C 369.33014354066984,159.39712918660285 491.6555023923445,162.88995215311004 606,172 C 720.3444976076555,181.11004784688996 826.7081339712919,195.83732057416267 901,206 C 975.2918660287081,216.16267942583733 1017.511961722488,221.76076555023923 1102,220 C 1186.488038277512,218.23923444976077 1313.244019138756,209.1196172248804 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg> */}
       
      </section>
        </div>
    );
};

export default CarrerLanding;
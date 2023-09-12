import React from "react";
import hcah from "../../assets/download.png";
import leap from "../../assets/leap.jpg";
import rose from "../../assets/mrglogo (7).png";
import mrg from "../../assets/mrglogo (1).png";
import tmcc from "../../assets/mrglogo (4).png";
import tcc from "../../assets/mrglogo (3).png";
import tgr from "../../assets/mrglogo (5).png";
import innrah from "../../assets/inaarah.jpeg";
// import tmc from "../../assets/tmc.jpg";

// import rose from "../../assets/makeover.png"
import conserns1 from "../../assets/healthcare.png";
import conserns2 from "../../assets/physical-therapy.png";
import conserns3 from "../../assets/makeover.png";
import conserns4 from "../../assets/restaurant.png";
import conserns5 from "../../assets/doctor.png";
import conserns6 from "../../assets/group.png";
import conserns7 from "../../assets/showing.png";
import conserns8 from "../../assets/clothings.png";
import hcah2 from "../../assets/hcah.jpg";
import Leap2 from "../../assets/LEAP2.jpeg";

const News = () => {  
  return (
    <div className="bg-gradient-to-r from-[#92468E] to-[#38235D] ">
      <h2 class="mb-12 text-center mt-9 text-3xl font-bold text-white py-7">Our Clients</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 mx-4  items-center justify-items-center">
        <div class="container   mx-auto md:px-6" 
        data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-delay="5000"
        data-aos-duration="3000"
        
             >
          {/* <!-- Section: Design Block --> */}
          <section class="mb-32 text-center md:text-left">
            {/* <h2 class="mb-12 text-center text-3xl font-bold">Latest articles</h2> */}

            <div class="mb-6 flex flex-wrap">
              <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                <div
                  class="relative bg-white mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img src={hcah} class="w-full" alt="Louvre" />
                  <a href="#!">
                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                <h5 class="mb-3 text-lg font-bold text-white">
                  Welcome to HealthCare At Home
                </h5>
                <div class="mb-3 gap-2 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                  <img src={conserns1} alt="" className="w-6 text-white " />
                  <p className="text-neutral-100 dark:text-neutral-300">Health & Medical</p>
                </div>
                 
                <p class="text-neutral-100 dark:text-neutral-300">
                  Pioneer of delivering professional and quality health care at
                  home in Bangladesh.
                </p>
              </div>
            </div>

            <div class="mb-6 flex flex-wrap">
              <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                <div
                  class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img src={leap} class="w-18" alt="Louvre" />
                  <a href="#!">
                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                <h5 class="mb-3 text-lg font-bold text-white">Welcome to LEAP</h5>
                <div class="mb-3 gap-2 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 md:justify-start">
                  <img src={conserns2} alt="" className="w-6 text-white" />
                  <p className="text-neutral-100">Physiotherapy Center</p>
                </div>
                
                <p class="text-neutral-100 dark:text-neutral-300">
                  LEAP - a well equipped center in Gulshan for physiotherapy,
                  rehabilitation and sports injuries.
                </p>
              </div>
            </div>

            <div class="mb-6 flex flex-wrap">
              <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                <div
                  class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-white bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img src={rose} class="w-full" alt="Louvre" />
                  <a href="#!">
                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                <h5 class="mb-3 text-lg font-bold text-white">
                  Welcome to Rose Beauty Garden
                </h5>
                <div class="mb-3 gap-2 flex items-center justify-center text-sm font-medium   md:justify-start">
                  <img src={conserns3} alt="" className="w-6 text-white" />
                  <p className="  font-bold text-white">Makeover</p>
                </div>
                 
                <p class="text-neutral-100 dark:text-neutral-300">
                  Everyone wants to look good, especially when it is the time to
                  party. 
                </p>
              </div>
            </div>
            <div class="mb-6 flex flex-wrap">
              <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                <div
                  class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-white bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img src={tgr} class="w-full" alt="Louvre" />
                  <a href="#!">
                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                <h5 class="mb-3 text-lg font-bold text-white">
                  Welcome to Tulip Garden & Resturent
                </h5>
                <div class="mb-3 gap-2 flex items-center justify-center text-sm font-medium  md:justify-start">
                  <img src={conserns4} alt="" className="w-6 text-white" />
                 <p className="text-white"> Fast food restaurant</p>
                </div>
               
              </div>
            </div>
          </section>
        </div>
        <div class="container   mx-auto md:px-6"
        data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-delay="5000"
        data-aos-duration="3000"
        >
          {/* <!-- Section: Design Block --> */}
          <section class="mb-32 text-center md:text-left">
            {/* <h2 class="mb-12 text-center text-3xl font-bold">Latest articles</h2> */}

            <div class="mb-6 flex flex-wrap">
              <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                <div
                  class="relative mb-6 overflow-hidden rounded-lg bg-white  shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img src={mrg} class="w-20" alt="Louvre" />
                  <a href="#!">
                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                <h5 class="mb-3 text-lg font-bold text-white">Welcome to MRG</h5>
                <div class="mb-3 gap-2 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                <img src={conserns6} alt="" className="w-6 text-white" />

                 <p className="text-white"> Group of Company</p>
                </div>
               
              </div>
            </div>

            <div class="mb-6 flex flex-wrap">
              <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                <div
                  class="relative mb-6 overflow-hidden rounded-lg bg-white bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img src={tmcc} class="w-18" alt="Louvre" />
                  <a href="#!">
                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                <h5 class="mb-3 text-lg font-bold text-white">
                  Welcome to Trishal Medical Center
                </h5>
                <div class="mb-3 flex items-center gap-3 justify-center text-sm font-medium text-primary dark:text-primary-400 md:justify-start">
                <img src={conserns5} alt="" className="w-6 text-white" />

                  <p className="text-white">Health & Medical</p>
                </div>
                
                <p class="text-neutral-100 dark:text-neutral-300">
                  A premier diagnostic & hospital in Trishal, Mymensingh serving
                  and caring for the people.
                </p>
              </div>
            </div>

            <div class="mb-6 flex flex-wrap">
              <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                <div
                  class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-white bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img src={tcc} class="w-18" alt="Louvre" />
                  <a href="#!">
                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                <h5 class="mb-3 text-lg font-bold text-white">
                  Welcome to Trishal Convention Center
                </h5>
                <div class="mb-3 gap-2 flex items-center justify-center text-sm font-medium   md:justify-start">
                <img src={conserns7} alt="" className="w-6 text-white" />

                  <p className="text-white">Performance & event venue</p>
                </div>
                
              </div>
            </div>
            <div class="mb-6 flex flex-wrap">
              <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                <div
                  class="relative mb-6 overflow-hidden rounded-lg bg-cover  bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img src={innrah} class="w-full" alt="Louvre" />
                  <a href="#!">
                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                <h5 class="mb-3 text-lg font-bold text-white">
                  Welcome to INAARAH Clothings
                </h5>
                <div class="mb-3 gap-2 flex items-center justify-center text-sm font-medium  md:justify-start">
                <img src={conserns8} alt="" className="w-6 text-white" />

                <p className="text-white">  Clothings Business</p>
                </div>
                 
              </div>
            </div>
          </section>
        </div>
      </div>

       
    </div>
  );
};

export default News;

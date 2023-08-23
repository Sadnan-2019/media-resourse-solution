import React from "react";
import "./WeDo.css";
import wedo from "../../assets/wedo.jpeg";
const WeDO = () => {
  return (
    <div>
      <div>
        <div className=" py-14 ">
          <div className="wedoback ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-10  py-10 justify-center items-center  ">
              <div
                class="min-h-screen    "
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-delay="5000"
                data-aos-duration="3000"
              >
                <div class="relative  p-8 border border-indigo-500 rounded-lg ">
                  <div class="  text-sm">
                    {/* <p class="mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                    <h1 className="  bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-white text-3xl text-center font-bold ">
                      WHAT WE DO
                    </h1>
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-white  text-2xl  font-bold">
                      Hyper-focused on Influence
                    </h1>
                    <h1 className="mt-2  text-left text-xl text-transparent   text-white">
                      We’re channel-agnostic and don’t want to be your media
                      agency, social agency or anything agency. We want to work
                      together to meet your objectives.
                    </h1>
                  </div>

                  <div class="absolute top-0 left-[39px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 border-l border-t border-white "></div>

                  <div class="absolute right-[39px] top-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 border-l border-t border-indigo-500"></div>

                  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 border-l border-t border-indigo-500"></div>

                  <div class="absolute top-[35px] right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 border-r border-t border-indigo-500"></div>

                  <div class="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 border-r border-t border-indigo-500"></div>

                  <div class="absolute bottom-[35px] right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 border-r border-t border-indigo-500"></div>

                  <div class="absolute left-[39px] bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 border-r border-b border-indigo-500"></div>

                  <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 border-r border-b border-indigo-500"></div>

                  <div class="absolute bottom-0 right-[39px] transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 border-r border-b border-indigo-500"></div>

                  <div class="absolute top-[35px] left-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 border-l border-b border-indigo-500"></div>

                  <div class="absolute left-0 top-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 border-l border-b border-indigo-500"></div>

                  <div class="absolute bottom-[35px] left-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 border-l border-b border-indigo-500"></div>
                </div>
              </div>

              <div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                  <div className="card-body " 
                  // data-aos="fade-left"
                  // data-aos-offset="300"
                  // data-aos-delay="5000"
                  // data-aos-duration="3000"
                  
                  >
                   

                    <div class="  newcontainer ">
                      <img src={wedo} alt="" />
                      <img src={wedo} alt="" />
                      <img src={wedo} alt="" />
                      <img src={wedo} alt="" />
                    </div>
                    {/* <div class=" lg:hidden  ">
                      <img src={wedo} alt="" />
                      
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeDO;

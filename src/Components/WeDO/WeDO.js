import React from "react";
import "./WeDo.css"
import wedo from "../../assets/wedo.jpeg"
const WeDO = () => {
  return (
    <div>
      <div>
        <div className=" py-14 ">
          <div className="wedoback ">
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-10  py-10 items-center justify-items-center">
              {/* left side */}

              

              <div className="   ">
                <div className="">
                  {/* <Map></Map> */}
                  <div>
                    <h1 className="  md:text-[43px] font-bold text-[20px] text-left  text-transparent text-8xl text-white">
                      WHAT WE DO.
                    </h1>
                    <h1 className="mt-6 md:text-[40px] font-bold text-[20px] text-left  text-transparent text-8xl text-white">
                      Hyper-focused on Influence..
                    </h1>
                    <h1 className="mt-6 md:text-[25px] font-bold text-[20px] text-left  text-transparent   text-white">
                      We’re channel-agnostic and don’t want to be your media
                      agency, social agency or anything agency. We want to work
                      together to meet your objectives.
                    </h1>
                    <div
                      className="   w-full max-w-sm    py-5   "
                      data-aos="fade-right"
                      data-aos-duration="800"
                    >
                     
                    </div>
                  </div>
                </div>
              </div>


              <div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div className="card-body">
                     <img alt="" src={wedo}/>
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

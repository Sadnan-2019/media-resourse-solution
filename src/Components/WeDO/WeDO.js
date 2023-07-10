import React from "react";
import "./WeDo.css"
const WeDO = () => {
  return (
    <div>
      <div>
        <div className=" py-14 ">
          <div className="wedoback ">
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-10  py-10 items-center justify-items-center">
              {/* left side */}

              <div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div className="card-body">
                    <form method="post">
                      <div className="flex gap-3">
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="your email"
                            className="input input-bordered w-full max-w-xs"
                          />
                        </div>

                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="your name"
                            className="input input-bordered w-full max-w-xs"
                          />
                        </div>
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Phone</span>
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          required
                          placeholder="your phone"
                          className="input input-bordered w-full max-w-xs"
                        />
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Subject</span>
                        </label>
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          required
                          placeholder="your subject"
                          className="input input-bordered w-full max-w-xs"
                        />
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Message</span>
                        </label>
                        <textarea
                          type="text"
                          name="message"
                          id="message"
                          required
                          placeholder="your message"
                          className="input input-bordered w-full max-w-xs h-32"
                        ></textarea>
                      </div>

                      <div className="py-5">
                        <input
                          type="submit"
                          className="btn bg-gradient-to-r from-[#92468E] to-[#38235D] text-white  w-full max-w-x "
                          value="Send message"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeDO;

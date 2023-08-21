import React from "react";
import video from "../../assets/VIdeoEditone.png";
import graphices from "../../assets/graphic-design (1).png";
import digitalmarketing from "../../assets/social-media (1).png";
import research from "../../assets/data&research.png";
import web from "../../assets/webdevelopment.png";
import mobile from "../../assets/mobile-app.png";
import content from "../../assets/content.png";
import broadcasting from "../../assets/brodcastiing.png";
import campaign from "../../assets/campaign.png";
import "./Service.css";
const Service = () => {
  return (
    <div>
      <div className=" bg-gradient-to-r from-[rgb(146,70,142)] to-[#38235D]  text-white">
        <div
          className=" "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h2 className="text-3xl text-center text-white py-10  font-bold poppins-b sm:text-4xl">
            Our Service
          </h2>
        </div>
        {/* <button class="my-button justify-items-center">Click me</button> */}

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 py-5 lg:px-10 lg:mx-10 items-center justify-items-center ">
          <div class=" h-96 w-11/12     lg:h-96 lg:w-11/12  card  mask mask-hexagon   text-white     max-w-sm shadow-2xl bg-gradient-to-r from-[#38235D] to-[#ab4059]  ">
            <div
              className="       "
              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-delay="5000"
              // data-aos-duration="3000"
            >
              <figure className=" rounded-lg image-container">
                <img
                  src={broadcasting}
                  alt="Shoes"
                  className="rounded-xl p-4 h-1/5 w-24 mt-3  	"
                  // style={{ height: "100px" }}
                />
              </figure>
              <div className="  text-center">
                <h2 className="font-bold text-center text-xl">
                  Media Broadcasting
                </h2>
                <p className="  p-8    lg:p-4 text-sm   text-white poppins-t text-justify">
                  This platform will enable individuals with specialized
                  expertise to provide insights to the upcoming generation and
                  interested individuals on building and constructing a better
                  and more modern business, law and order, open mindset, and
                  eventually our country Bangladesh.
                </p>
                {/* <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
              </div>
            </div>
          </div>
          <div class=" h-96 w-11/12     lg:h-96 lg:w-11/12        	  card  mask mask-hexagon   text-white     max-w-sm shadow-2xl bg-gradient-to-r from-[#38235D] to-[#ab4059]  ">
            <div
              className="       "
              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-delay="5000"
              // data-aos-duration="3000"
            >
              <figure className=" rounded-lg image-container">
                <img
                  src={campaign}
                  alt="Shoes"
                  className="rounded-xl p-4 h-1/5 w-24 mt-3  	"
                  // style={{ height: "100px" }}
                />
              </figure>
              <div className="  text-center">
                <h2 className="font-bold text-center text-xl">
                  Online Campaign & Events{" "}
                </h2>
                <p className="  p-8    lg:p-4 text-sm   text-white poppins-t text-justify">
                  Event marketing is planning, organizing, and executing an
                  event for the purpose of promoting a brand, product, or
                  service. Events can take place in-person or online, and
                  companies can either host an event, attend as an exhibitor, or
                  participate as a sponsor.
                </p>
                {/* <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
              </div>
            </div>
          </div>

          <div class="  card    h-96	w-11/12  mask mask-hexagon   text-white     max-w-sm shadow-2xl bg-gradient-to-r from-[#38235D] to-[#ab4059]  ">
            <div
              className="       "
              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-delay="5000"
              // data-aos-duration="3000"
            >
              <figure className=" rounded-lg image-container">
                <img
                  src={research}
                  alt="Shoes"
                  className="rounded-xl p-4 h-1/5 w-24 mt-3 "
                  // style={{ height: "100px" }}
                />
              </figure>
              <div className="  text-center">
                <h2 className="font-bold text-center text-xl">
                  Research,Data and Insight Solutions
                </h2>
                <p className="  p-8    lg:p-4 text-sm   text-white poppins-t text-justify">
                  The world is filled with data. The challenge is, how to
                  transform it into information that has value — for both your
                  organization and your customers. DataInsights works across the
                  complete data life cycle in all aspects required for success.
                  You’ll need DataInsights.
                </p>
                {/* <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
              </div>
            </div>
          </div>





          {/* <div
            class="  card    h-96	w-11/12  mask mask-hexagon   text-white      max-w-sm shadow-2xl bg-gradient-to-r from-[#38235D] to-[#ab4059]  "
            
          >
            <div
              className="       "
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              <figure className=" rounded-lg image-container">
                <img
                  src={content}
                  alt="Shoes"
                  className="rounded-xl p-4"
                  style={{ height: "100px" }}
                />
              </figure>
              <div className="  text-center">
                <h2 className="font-bold text-center text-xl">
                  Content Writing
                </h2>
                <p className="  p-8    lg:p-4 text-sm   text-white poppins-t text-justify">
                  Content writing is the process of planning, writing, and
                  editing web content, typically for digital marketing purposes
                  with the aim of solving a problem for a specific audience.
                </p>
               
              </div>
            </div>
          </div>

          <div class="  card h-96	w-11/12   mask mask-hexagon   text-white     max-w-sm shadow-2xl bg-gradient-to-r from-[#38235D] to-[#ab4059]  ">
            <div
              className="       "
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              <figure className=" rounded-lg image-container">
                <img
                  src={digitalmarketing}
                  alt="Shoes"
                  className="rounded-xl p-4 h-1/5 w-24 mt-3"
               
                />
              </figure>
              <div className="  text-center">
                <h2 className="font-bold text-center text-xl">
                  Digital Marketing
                </h2>
                <p className="  p-8    lg:p-4 text-sm   text-white poppins-t text-justify">
                  In practice, digital marketing typically refers to marketing
                  campaigns that appear on a computer, phone, tablet, or other
                  device. It can take many forms, including online video,
                  display ads, search engine marketing, paid social ads and
                  social media posts.
                </p>
             
              </div>
            </div>
          </div>

          <div class="  h-96 w-11/12     lg:h-96 lg:w-11/12        	  card  mask mask-hexagon   text-white     max-w-sm shadow-2xl bg-gradient-to-r from-[#38235D] to-[#ab4059]  ">
            <div
              className="       "
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              <figure className=" rounded-lg image-container">
                <img
                  src={video}
                  alt="Shoes"
                  className="rounded-xl p-4 h-1/5 w-24 mt-3  	"
                   
                />
              </figure>
              <div className="  text-center">
                <h2 className="font-bold text-center text-xl">Video Editing</h2>
                <p className="  p-8    lg:p-4 text-sm   text-white poppins-t text-justify">
                  Video editing is the manipulation and arrangement of video
                  shots. Video editing is used to structure and present all
                  video information, including films and television shows, video
                  advertisements and video essays.
                </p>
               
              </div>
            </div>
          </div>
          <div class="h-96	w-11/12   card  mask mask-hexagon   text-white      max-w-sm shadow-2xl bg-gradient-to-r from-[#38235D] to-[#ab4059]  ">
            <div
              className="       "
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              <figure className=" rounded-lg image-container">
                <img
                  src={graphices}
                  alt="Shoes"
                  className="rounded-xl p-4 h-1/5 w-24 mt-3 "
                />
              </figure>
              <div className="  text-center">
                <h2 className="font-bold text-center text-xl">
                  Graphices Design
                </h2>
                <p className="  p-8    lg:p-4 text-sm   text-white poppins-t text-justify">
                  Graphic design is a profession, academic discipline and
                  applied art whose activity consists in projecting visual
                  communications intended to transmit specific messages to
                  social groups, with specific objectives. Graphic design is an
                  interdisciplinary branch of design and of the fine arts.
                </p>
                
              </div>
            </div>
          </div>

          <div class="  card    h-96	w-11/12  mask mask-hexagon   text-white     max-w-sm shadow-2xl bg-gradient-to-r from-[#38235D] to-[#ab4059]  ">
            <div
              className="       "
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              <figure className=" rounded-lg image-container">
                <img
                  src={web}
                  alt="Shoes"
                  className="rounded-xl p-4"
                  style={{ height: "100px" }}
                />
              </figure>
              <div className="  text-center">
                <h2 className="font-bold text-center text-xl">
                  Web Application Development
                </h2>
                <p className="  p-8    lg:p-4 text-sm   text-white poppins-t text-justify">
                  A web application is an interactive program that runs on a web
                  server and is accessed through a web browser. A web app is
                  built so that the user interface provides data back to the
                  development team that designed it. This data offers insights
                  into customer interests, usage, and preferences that can prove
                  invaluable to product and marketing strategies.
                </p>
            
              </div>
            </div>
          </div>
          <div class="  card    h-96	w-11/12  mask mask-hexagon   text-white     max-w-sm shadow-2xl bg-gradient-to-r from-[#38235D] to-[#ab4059]  ">
            <div
              className="       "
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              <figure className=" rounded-lg image-container">
                <img
                  src={mobile}
                  alt="Shoes"
                  className="rounded-xl p-4"
                  style={{ height: "100px" }}
                />
              </figure>
              <div className="  text-center">
                <h2 className="font-bold text-center text-xl">
                  Mobile App Development
                </h2>
                <p className="  p-8    lg:p-4 text-sm   text-white poppins-t text-justify">
                  Mobile application development is the process of making
                  software for smartphones, tablets and digital assistants, most
                  commonly for the Android and iOS operating systems. The
                  software can be preinstalled on the device, downloaded from a
                  mobile app store or accessed through a mobile web browser.
                </p>
                 
              
              </div>
            </div>
          </div> */}
        </div>

        {/* <div
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-delay="5000"
          data-aos-duration="3000"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="white"
              fill-opacity="50"
              d="M0,192L80,202.7C160,213,320,235,480,208C640,181,800,107,960,117.3C1120,128,1280,224,1360,272L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default Service;

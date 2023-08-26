import React from "react";
import skach from "../../assets/skach.png";
import creative from "../../assets/creativeprocess.png";
import design from "../../assets/design&development.png";
import final from "../../assets/FinalProduct.png";
import "./Working.css";
import "animate.css";
import logo from "../../assets/logo.jpeg";
const Working = () => {
  return (
    <div className="py-10">
      {/* <div className="py-10">
        <div class="relative bg-gradient-to-r from-[#92468E] to-[#38235D]  border-4 border-white-600 mx-10 w-44">
        
          <div class="left-[125px] absolute bottom-0   transform -translate-x-2/2 translate-y-1/2 rotate-45 w-10 h-10 bg-white border-r border-b border-white-500"></div>
   
          <img src={logo} alt="" className="w-44" />
          <div className="font-bold text-white ">
          <p>For Service</p>
          <p>01619848555 </p>
          <p>01779848555</p>
          </div>
        </div>
      </div> */}

      <div
        className="bg-no-repeat	bg-cover py-12  "
        style={{
          backgroundImage: `url(" https://i.ibb.co/vjYby3x/ANOTHERMRS.png")`,
        }}
      >
        <div className=" md:mx-16 lg:mx-24 mx-8 ">
          <h2 className="text-3xl text-center  font-bold poppins-b sm:text-4xl text-white">
            Our Working Process
          </h2>
        </div>
        <div
          data-aos="zoom-in"
          className="zoom-in-on-scroll  grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4  mx-10 gap-10    justify-items-center py-12  "
        >
          <div
            className="  flex-shrink-0 w-full max-w-sm  shadow-2xl rounded-lg  "
            // data-aos="flip-left"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
            // style={{ height: "350px" }}
          >
            <figure className="  	">
              <img
                src={skach}
                alt="Shoes"
                className=" mx-auto	workimg  p-4  "
                style={{ height: "150px", borderRadius: "25px" }}
              />
            </figure>
            <div className=" items-center text-center text-white p-4">
              <p className="text-[20px]">Sketch</p>
              <p className="text-justify	text-[15px] poppins-t">
                A sketch might refer to a rough representation or outline of a
                user interface or a program's functionality. It helps developers
                and designers visualize the structure and flow before diving
                into detailed coding.
              </p>
            </div>
          </div>
          <div
            className=" flex-shrink-0 w-full max-w-sm  shadow-2xl rounded-lg "
            // data-aos="flip-left"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
          >
            <figure className="   	">
              <img
                src={creative}
                alt="Shoes"
                className="mx-auto	 workimg	  p-4 hover:translate-y-(-2.5)  "
                style={{ height: "150px", borderRadius: "25px" }}
              />
            </figure>
            <div className=" items-center text-center text-white p-4">
              <p className="text-[20px]">Creative Process</p>
              <p className="text-justify	text-[15px] poppins-t">
                Will Provide tools or exercises to stimulate idea generation and
                brainstorming. Enable collaboration among individuals or teams,
                allowing them to work together on creative projects. Offer ways
                to track the progress of a project, helping users stay organized
                and focused. Provide access to reference materials, examples,
                and resources that can inspire and inform the creative process.
              </p>
            </div>
          </div>
          <div
            className="  flex-shrink-0 w-full max-w-sm  shadow-2xl rounded-lg"
            // data-aos="flip-left"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
            // style={{ height: "350px" }}
          >
            <figure className="  	">
              <img
                src={design}
                alt="Shoes"
                className=" mx-auto		workimg  p-4  "
                style={{ height: "150px", borderRadius: "25px" }}
              />
            </figure>
            <div className=" items-center text-center text-white p-4">
              <p className="text-[20px]">Design & Development</p>
              <p className="text-justify	text-[15px] poppins-t">
                Include tools for creating design mockups, wireframes, and
                prototypes. This helps visualize the intended user experience
                before moving into development.Offer features that can generate
                basic code snippets based on design elements. This can help
                bridge the gap between design and development.Provide
                pre-designed components and templates that adhere to a
                consistent design system. This streamlines the development
                process and ensures visual coherence.
              </p>
            </div>
          </div>
          <div
            className="flex-shrink-0 w-full max-w-sm  shadow-2xl rounded-lg  "
            // data-aos="flip-left"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
            // style={{ height: "350px" }}
          >
            <figure className="  	">
              <img
                src={final}
                alt="Shoes"
                className=" mx-auto		workimg  p-4  "
                style={{ height: "150px", borderRadius: "25px" }}
              />
            </figure>
            <div className=" items-center text-center text-white p-4">
              <p className="text-[20px]">Final Project</p>
              <p className="text-justify	text-[15px] poppins-t">
                In an educational setting, a "final project complete" might refer
                to a student's completion of a significant assignment or project
                that concludes a course or academic term. For artists,
                designers, and creators, it could mean finishing a creative
                endeavor, such as a painting, a sculpture, a design project, or
                a musical composition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;

import React from "react";
import { BsArrowRight } from "react-icons/bs";

const MindMapLanding = () => {
  return (
    <div>
      <section class="pt-10 overflow-hidden    d:pt-0 sm:pt-16 2xl:pt-16">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 class="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                Hey 👋 Me
                <br class="block sm:hidden" />
                From Mind Map
              </h2>
              <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.                                                                                         
              </p>

              <div className=" ">
                <a
                  href="/"
                  className="  btn-sm lg:p-4 rounded-full      bg-[#38235D] inline-flex  md:inline-flex items-center     border text-white "
                >
                  <span className="text-sm font-medium lg:text-lg">
                    {" "}
                    More Info
                  </span>
                  <BsArrowRight className="text-lg hidden lg:ml-2" />
                </a>
              </div>
            </div>

            <div class="relative">
              <img
                class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MindMapLanding;

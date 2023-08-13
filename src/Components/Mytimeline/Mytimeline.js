import React from "react";
import "./Mytimeline.css";
import chat from "../../assets/chat.jpg";
import chatimg from "../../assets/chatimage.jpg";
import mid from "../../assets/Midjourney.jpg";
import bird from "../../assets/birdAi.jpg";

const Mytimeline = () => {
  return (
    <div className="py-14">
      <div class="min-h-screen timeline py-6 flex flex-col justify-center sm:py-12">
        <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
          <div class="relative text-gray-700 antialiased text-sm font-semibold">
            {/* <!-- Vertical bar running through middle --> */}
            <div class="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <div class="mt-6 sm:mt-0 sm:mb-12">
              <div class="flex flex-col sm:flex-row items-center">
                <div class="flex justify-start   mx-auto items-center ">
                  <div class="sm:w-1/2 sm:pr-8 bg-white   "
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-delay="5000"
                  data-aos-duration="3000"
                  
                  >
                    <div class="p-4   rounded shadow  w-full ">
                      <p className="text-1xl">
                        ChatGPT is a large language model-based chatbot
                        developed by OpenAI and launched on November 30, 2022,
                        notable for enabling users to refine and steer a
                        conversation towards a desired length, format, style,
                        level of detail, and language used.
                      </p>
                       

                    </div>
                  </div>
                </div>
                <div class=" absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg> */}
                  <img
                    className="rounded-full   border-white border-4 w-8 h-8"
                    src={chat}
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            <div class="mt-6 sm:mt-0 sm:mb-12">
              <div class="flex flex-col sm:flex-row items-center">
                <div class="flex justify-end w-full mx-auto items-center">
                  <div class="w-full sm:w-1/2 ">
                    <div class="p-4 bg-white rounded shadow"
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-delay="5000"
                    data-aos-duration="3000"
                    
                    >
                      ChatGPT Image Generator is an innovative AI system that
                      combines the power of Chat GPT, Text to Speech and AI
                      Image Generator in one. With its natural language
                      processing with image generation capabilities, freelancers
                      can generate contents 10X faster & save hours of work.
                    </div>
                  </div>
                </div>
                <div class="  absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <img
                    className="rounded-full   border-white border-4 w-8 h-8"
                    src={chatimg}
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <div class="mt-6 sm:mt-0 sm:mb-12">
              <div class="flex flex-col sm:flex-row items-center">
                <div class="flex justify-start w-full mx-auto items-center">
                  <div class="w-full sm:w-1/2 ">
                    <div class="p-4 bg-white rounded shadow"
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-delay="5000"
                    data-aos-duration="3000"
                    >
                      Midjourney is an independent research lab exploring new
                      mediums of thought and expanding the imaginative powers of
                      the human species. We are a small self-funded team focused
                      on design, human infrastructure, and AI. We have 11
                      full-time staff and an incredible set of advisors.
                    </div>
                  </div>
                </div>
                <div class="  absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <img
                    className="rounded-full   border-white border-4 w-8 h-8"
                    src={mid}
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            <div class="mt-6 sm:mt-0">
              <div class="flex flex-col sm:flex-row items-center">
                <div class="flex justify-end w-full mx-auto items-center">
                  <div class="w-full sm:w-1/2 ">
                    <div class="p-4 bg-white rounded shadow"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay="5000"
                    data-aos-duration="3000"
                    >
                      Bird AI’s AI-based video conferencing brings inclusivity
                      and enables seamless two-way communication. Embrace hybrid
                      meetings to connect team members across distances,
                      fostering an environment of equality and fruitful
                      collaboration for all the participants.
                    </div>
                  </div>
                </div>
                <div class="  absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <img
                    className="rounded-full   border-white border-4 w-8 h-8"
                    src={bird}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mytimeline;

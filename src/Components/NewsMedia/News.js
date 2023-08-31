import React from "react";
import hcah from "../../assets/download.png";
import leap from "../../assets/leap.jpg";
import rose from "../../assets/mrglogo (7).png";
import mrg from "../../assets/mrglogo (1).png";
import tmcc from "../../assets/mrglogo (4).png";
import tcc from "../../assets/mrglogo (3).png";
import tgr from "../../assets/mrglogo (5).png";
import innrah from "../../assets/inaarah.jpeg";
import tmc from "../../assets/tmc.jpg";

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
                {/* <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>13.01.2022</u> by
                    <a href="#!">Anna Maria Doe</a>
                  </small>
                </p> */}
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
                {/* <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>12.01.2022</u> by
                    <a href="#!"></a>

                  </small>
                </p> */}
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
                {/* <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>10.01.2022</u> by
                    <a href="#!">Joe Svan</a>
                  </small>
                </p> */}
                {/* <p class="text-neutral-500 dark:text-neutral-300">
                  Curabitur tristique, mi a mollis sagittis, metus felis mattis
                  arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                  massa volutpat feugiat. Donec.
                </p> */}
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
                {/* <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>13.01.2022</u> by
                    <a href="#!">Anna Maria Doe</a>
                  </small>
                </p> */}
               {/* <p class="text-neutral-500 dark:text-neutral-300">
                  Curabitur tristique, mi a mollis sagittis, metus felis mattis
                  arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                  massa volutpat feugiat. Donec.
                </p> */}
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
                {/* <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>12.01.2022</u> by
                    <a href="#!">Halley Frank</a>
                  </small>
                </p> */}
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
                {/* <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>10.01.2022</u> by
                    <a href="#!">Joe Svan</a>
                  </small>
                </p> */}
                {/* <p class="text-neutral-500 dark:text-neutral-300">
                  Curabitur tristique, mi a mollis sagittis, metus felis mattis
                  arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                  massa volutpat feugiat. Donec.
                </p> */}
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
                {/* <p class="mb-6 text-neutral-100 dark:text-neutral-300">
                  <small>
                    Published <u>10.01.2022</u> by
                    <a href="#!">Joe Svan</a>
                  </small>
                </p>
                <p class="text-neutral-500 dark:text-neutral-300">
                  Curabitur tristique, mi a mollis sagittis, metus felis mattis
                  arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                  massa volutpat feugiat. Donec.
                </p> */}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ////////FIRST NEWS */}
      {/* <div className="grid grid-col-1 md:grid-cols-1 gap-2 px-4 mx-4 items-center justify-items-center">
        <div class="container   mx-auto md:px-6">
       
          <section class="mb-32">
            <div class="grid gap-6 lg:grid-cols-3">
              <div
                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src={hcah2}
                  class="w-full align-middle transition duration-300 ease-linear"
                  alt=""
                />
                <a href="#!">
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                    <div class="flex h-full items-end justify-start">
                      <div class="m-6 text-white">
                        <h5 class="mb-3 text-lg font-bold">
                          HealthCare At Home
                        </h5>
                        <p>
                          <small>
                            The services are affordable, dedicated, and
                            customized for each individual client. It also
                            ensures the quality of service providers by ensuring
                            certification, training, and verification of their
                            work experience and identity, respectively.
                            Limitations such as providing patients with the
                            correct healthcare plan and personal monitoring
                            services in real-time, and providing necessary
                            logistical support, can be solved through the
                            operation module adopted by HCAH
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                </a>
              </div>

              <div
                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  alt=""
                  src={Leap2}
                  class="w-full align-middle transition duration-300 ease-linear"
                />
                <a href="#!">
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                    <div class="flex h-full items-end justify-start">
                      <div class="m-6 text-white">
                        <h5 class="mb-3 text-lg font-bold">
                          Life Enrichment Activity Program
                        </h5>
                        <p>
                          <small>
                            Published <u>12.01.2022</u> by Mark Equel
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                </a>
              </div>

              <div
                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  alt=""
                  src={tmc}
                  class="w-full align-middle transition duration-300 ease-linear"
                />
                <a href="#!">
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                    <div class="flex h-full items-end justify-start">
                      <div class="m-6 text-white">
                        <h5 class="mb-3 text-lg font-bold">
                          Life Enrichment Activity Program
                        </h5>
                        <p>
                          <small>
                            Published <u>12.01.2022</u> by Mark Equel
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                </a>
              </div>

              <div
                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/047.jpg"
                  class="w-full align-middle transition duration-300 ease-linear"
                />
                <a href="#!">
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                    <div class="flex h-full items-end justify-start">
                      <div class="m-6 text-white">
                        <h5 class="mb-3 text-lg font-bold">Let's go!</h5>
                        <p>
                          <small>
                            Published <u>09.01.2022</u> by Halley Frank
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                </a>
              </div>

              <div
                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/028.jpg"
                  class="w-full align-middle transition duration-300 ease-linear"
                />
                <a href="#!">
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                    <div class="flex h-full items-end justify-start">
                      <div class="m-6 text-white">
                        <h5 class="mb-3 text-lg font-bold">
                          A hut in the mountains
                        </h5>
                        <p>
                          <small>
                            Published <u>07.01.2022</u> by David Beak
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                </a>
              </div>

              <div
                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/049.jpg"
                  class="w-full align-middle transition duration-300 ease-linear"
                />
                <a href="#!">
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                    <div class="flex h-full items-end justify-start">
                      <div class="m-6 text-white">
                        <h5 class="mb-3 text-lg font-bold">
                          Beautiful waterfall
                        </h5>
                        <p>
                          <small>
                            Published <u>04.01.2022</u> by Joe Svan
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                </a>
              </div>
            </div>
          </section>
         </div>
      </div> */}
    </div>
  );
};

export default News;

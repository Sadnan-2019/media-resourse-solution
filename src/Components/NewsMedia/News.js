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
import hcah2 from "../../assets/hcah.jpg";
import Leap2 from "../../assets/LEAP2.jpeg";

const News = () => {  
  return (
    <div className="bg-gradient-to-r from-[#92468E] to-[#38235D] ">
      <h2 class="mb-12 text-center mt-9 text-3xl font-bold text-white py-7">Our Clients</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 mx-4  items-center justify-items-center">
        <div class="container   mx-auto md:px-6">
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
        <div class="container   mx-auto md:px-6">
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
                <div class="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-2 h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                    />
                  </svg>
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
                <div class="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-2 h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                    />
                  </svg>
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
                <div class="mb-3 flex items-center justify-center text-sm font-medium   md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-2 h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
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
                <div class="mb-3 flex items-center justify-center text-sm font-medium  md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-2 h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
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

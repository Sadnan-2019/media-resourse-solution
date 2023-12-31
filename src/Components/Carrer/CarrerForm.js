import React from 'react';

const CarrerForm = () => {
    return (
        <div>
            <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-12 gap-10  items-center justify-items-center">
          <div>
            <p className="text-neutral text-1xl p-5">
              We consider the people of MRS to be our greatest asset. We serve
              the needs of our businesses by implementing key hiring processes
              and creating a performance-driven culture for the group’s
              companies.
            </p>
            <p className="text-neutral text-1xl p-5">
              We attract, develop and retain talent, ensuring employee inclusion
              and engagement. Throughout our work, we strive to deliver clear,
              simple and effective services for the well-being of our people.
            </p>
            <p className="text-neutral text-1xl p-5">
              If you have the expertise and the desire to join MR GROUP, click
              the button below for possibilities and opportunities.
            </p>
            {/* <div className="py-2 px-5">
            <Link  to="/contact" className="btn btn-xs sm:btn-sm md:btn-md mb-4 bg-gradient-to-r from-[#303640] to-[#103264]">
              Contact
            </Link>
          </div> */}
          </div>
          <div className="py-4">
            {/* <!-- component --> */}
            <section class="max-w-4xl p-6 mx-auto bg-gradient-to-r from-[#92468E] to-[#38235D] rounded-md shadow-md dark:bg-gray-900  ">
              {/* <h1 class="text-xl font-bold text-white capitalize dark:text-white">Account settings</h1> */}
              <form>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label class="text-white dark:text-gray-200" for="username">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label
                      class="text-white dark:text-gray-200"
                      for="emailAddress"
                    >
                      Email Address
                    </label>
                    <input
                      id="emailAddress"
                      type="email"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-white">
                      CV
                    </label>
                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div class="space-y-1 text-center">
                        <svg
                          class="mx-auto h-12 w-12 text-white"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div class="flex text-sm text-gray-600">
                          <label
                            for="file-upload"
                            class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span class="">Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              class="sr-only"
                            />
                          </label>
                          {/* <p class="pl-1 text-white">Drop</p> */}
                        </div>
                        <p class="text-xs text-white">PDF OR DOC</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex justify-end mt-6">
                  <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gradient-to-r from-[#92468E] to-[#92468E] rounded-md   focus:outline-none focus:bg-gray-600">
                    Send
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div> 
        </div>
    );
};

export default CarrerForm;
import "./App.css";

function App() {
  return (
    <div className="relative overflow-hidden bimg ">
      <img
        alt=""
        data-aos="fade-right"
        className="absolute left-0"
        src="/left.png"
      />

      <img
        alt=""
        data-aos="fade-left"
        className="absolute right-0"
        src="/right.png"
      />

      <div className="container mx-auto my-4 app max-w-7xl">
        <header className="flex items-center justify-between">
          <div className="p-4 bg-white">
            <img alt="" className="" src="/logo.png" />
          </div>

          <div className="items-center justify-between hidden max-w-xl p-4 px-5 space-x-8 font-medium bg-white lg:flex">
            <div className=""> Blog</div>

            <div className="inline font-semiubold">
              Support
              <div className="w-10 mx-auto border-b-4 rounded-full border-blue"></div>
            </div>

            <div className="">How to Join</div>

            <div className=""> EdLink Buddy's Story</div>
          </div>

          <div className="flex items-center mr-4 xxl:mr-0">
            <div className="hidden font-semibold sm:flex">Login</div>
            <div className="p-1 px-6 ml-8 text-white rounded-lg md:p-3 bg-blue-lenear">
              Register
            </div>
          </div>
        </header>
      </div>

      <div className="container flex flex-col p-2 mx-auto xl:grid xl:grid-cols-2 max-w-7xl md:p-0">
        <div className="mx-auto my-auto text-center xxl:-ml-2 xl:text-left">
          <div className="z-40 w-full space-y-3 xl:space-y-12">
            <div className="inline p-2 px-8 rounded-full bg-purple text-purple">
              #1 Learning Solution in India
            </div>
            <div className="max-w-xl text-3xl font-bold md:text-5xl xl:max-w-lg text-d-blue">
              Studying just got easier without a hitch distance and time.
            </div>

            <div className="max-w-lg text-gray">
              Distance Learning platform solution (PJJ) complete with video
              conference, interactive quizzes, and integrated by SIAKAD.
            </div>

            {/* ..... */}

            <div className="items-center justify-around flex-shrink-0 max-w-2xl space-y-3 text-sm text-center sm:space-y-0 md:flex xl:max-w-lg ">
              <div className="flex items-center ">
                <span>
                  <svg
                    className="mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="24"
                      height="24"
                      rx="8"
                      fill="#1A21BC"
                      fillOpacity="0.15"
                    />
                    <path
                      d="M6.66663 12L10.6666 16L17.3333 8"
                      stroke="#1A21BC"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="9l-1">For Educators</span>
              </div>
              <div className="flex items-center ">
                <span>
                  <svg
                    className="mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="24"
                      height="24"
                      rx="8"
                      fill="#1A21BC"
                      fillOpacity="0.15"
                    />
                    <path
                      d="M6.66663 12L10.6666 16L17.3333 8"
                      stroke="#1A21BC"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                For Students
              </div>
              <div className="flex ">
                <span>
                  <svg
                    className="mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="24"
                      height="24"
                      rx="8"
                      fill="#1A21BC"
                      fillOpacity="0.15"
                    />
                    <path
                      d="M6.66663 12L10.6666 16L17.3333 8"
                      stroke="#1A21BC"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                For Parents
              </div>
            </div>
            {/*  */}

            <div className="flex md:-ml-16">
              <div className="hidden sm:inline-block">
                <img alt="" className="" src="/markarrow.png" />
              </div>
              <div className="w-full">
                <div className="sm:items-center sm:space-x-3 sm:flex">
                  <div className="inline-flex items-center p-3 px-6 text-base font-semibold text-white rounded-lg bg-purple-leanier2">
                    Try it for free!
                    <div>
                      <svg
                        width="28"
                        height="28"
                        className="font-normal"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 14.1666H23.6667"
                          stroke="white"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.5 6L23.6667 14.1667L15.5 22.3333"
                          stroke="white"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center justify-center my-10">
                    <div className="">
                      <svg
                        width="43"
                        height="43"
                        viewBox="0 0 43 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="21.5"
                          cy="21.5"
                          r="21.5"
                          fill="url(#paint0_linear)"
                        />
                        <path
                          d="M31.192 23.394L18.466 30.778C17.386 31.404 16 30.646 16 29.384V14.616C16 13.356 17.384 12.596 18.466 13.224L31.192 20.608C31.4377 20.7482 31.6419 20.9509 31.7839 21.1956C31.926 21.4402 32.0008 21.7181 32.0008 22.001C32.0008 22.2839 31.926 22.5617 31.7839 22.8063C31.6419 23.051 31.4377 23.2537 31.192 23.394V23.394Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="1.22757e-06"
                            y1="-5"
                            x2="38.5"
                            y2="60.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFC700" />
                            <stop offset="1" stopColor="#FF782D" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className="p-1 ml-3 text-base font-semibold border-b-2 xsm:mt-4 sm:mt-0 border-purple text-d-blue">
                      Play video
                    </div>
                  </div>
                </div>
                <div className="sm:items-center sm:flex">
                  <img alt="" className="" src="/people.png" />{" "}
                  <div className="ml-2 sm:w-60">
                    Join over 1200+ students and lecturers across India
                  </div>
                </div>{" "}
              </div>
            </div>

            <div className="hidden xl:block">
              <img alt="" className="" src="/down.png" />
              {/* <div class="mouse_scroll ">
                      <div class="mouse">
                        <div class="wheel"></div>
                      </div>
                      <div>
                        <span class="m_scroll_arrows unu "></span>
                        <span class="m_scroll_arrows doi"></span>
                        <span class="m_scroll_arrows trei"></span>
                      </div>
                    </div> */}
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="relative flex items-end w-10/12 mx-auto">
            {/*  */}

            <img
              className="absolute top-0 left-10 "
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
              data-aos="zoom-in"
              alt="   Subtract.png"
              src="/Subtract.png "
            />
            <div
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
              data-aos="zoom-in"
              className="rounded-full top-20 left-40 dot-yellow"
            ></div>

            <div
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              data-aos="zoom-in"
              className="w-2 top-40 dot left-20"
            ></div>
            <img
              alt="ytb"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos-anchor-placement="center-bottom"
              className="absolute top-0 right-0 w-24 delay-1000 ytb"
              src="/ytube.png"
            />

            <img
              data-aos-anchor-placement="top-bottom"
              className="absolute w-20 delay-1000 top-10 left-10 drive"
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos="fade-up-left"
              alt="drive"
              src="/drive.png"
            />

            <img
              data-aos="fade-up-left"
              data-aos-easing="linear"
              data-aos-duration="2000"
              className="absolute w-20 delay-700 gmail top-40"
              alt="gmail"
              data-aos-anchor-placement="center-center"
              src="/gmail.png"
            />

            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              alt="zoom"
              className="absolute right-0 delay-1000 w-28 top-40 "
              src="/zoom.png"
            />

            <img
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="2000"
              alt="msgcard"
              className="absolute z-30 w-40 mb-32 -ml-10 delay-1000"
              src="/msgcard.png "
            />

            {/*  */}
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="absolute"
            >
              <img
                alt=""
                className="pt-4 pb-8 pl-8 transform scale-125 rounded-b-full "
                src="/Group 310 (2).png"
              />
            </div>

            <img alt="" className="" src="/Group 398.png" />
          </div>
        </div>

        {/* sec 2 */}
        <div className="flex-col items-center hidden max-w-lg max-h-screen mx-auto md:flex xl:h-screen 2xl:max-w-xl">
          <div className="w-full md:-mt-52">
            <div className="flex">
              <div className="relative flex items-end">
                <div
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="absolute left-0 pb-56 -ml-20"
                >
                  <img alt="ytb" src="/ytube.png" />
                </div>
                <div
                  className="absolute right-0 pr-3 -mb-16 -mr-16"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  data-aos="fade-left"
                >
                  <img alt="drive" src="/drive.png" />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="absolute"
                >
                  <img
                    alt=""
                    className="pt-4 pb-8 pl-8 transform scale-125 rounded-b-full "
                    src="/Group 310 (2).png"
                  />
                </div>
                {/* 181-removebg-preview 1.png */}
                {/* Group 310 (1).png */}
                {/* <img alt="" className="" src="/mans.png" /> */}
                <img alt="" className="" src="/Group 398.png" />"
                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                  className="absolute bottom-0 left-0 -mb-20 -ml-20"
                >
                  <img src="/downarrow.png" alt="ar" />
                </div>
              </div>

              <div className="relative flex items-end ml-10 -mr-10">
                <div>
                  <div
                    data-aos="flip-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    className="absolute right-0 -mr-24"
                  >
                    <img alt="gmail" src="/gmail.png" />
                  </div>

                  <img alt="" className="mb-32 " src="/mans2.png" />
                </div>
              </div>
            </div>
            <div className="flex ">
              <div className="">
                <div className="relative">
                  <img
                    alt=""
                    className="mt-12"
                    data-aos="zoom-in"
                    src="/mansgroup3.png"
                  />
                  <div
                    data-aos="flip-up"
                    data-aos-duration="2000"
                    className="-mt-40 rounded-full -ml-28 dot-yellow"
                  >
                    {" "}
                  </div>
                  <div
                    className="absolute top-0 right-0 -mt-1 -mr-10"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="2000"
                    data-aos="zoom-in"
                  >
                    {" "}
                    <img alt="   Subtract.png" src="/Subtract.png " />
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="absolute pt-20 pl-4 -ml-48 xl:pt-0 w-72 xl:w-auto xl:pt-20 xl:-ml-72 top-50"
                >
                  <img alt="msgcard" className="" src="/msgcard.png " />
                </div>
              </div>
              <div className="relative -mt-20 -mr-32">
                {" "}
                <img
                  className="absolute top-0 right-0 pr-10 -mb-20"
                  src="/uparrow.png"
                  alt="ar"
                />
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                  className="right-0 mr-40 dot"
                >
                  <div></div>
                </div>
                <img alt="man yello" className="" src="/mansgroup4.png" />
                <img
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  alt="zoom"
                  className="absolute top-50 "
                  src="/zoom.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

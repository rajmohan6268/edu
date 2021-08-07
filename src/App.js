import "./App.css";

function App() {
  return (
    <div className="overflow-hidden bimg">
      <img alt="" className="absolute left-0" src="/left.png" />

      <img alt="" className="absolute right-0" src="/right.png" />

      <div className="container mx-auto my-4 app max-w-7xl">
        <header className="flex items-center justify-between">
          <div className="p-4 bg-white">
            <img alt="" className="" src="/logo.png" />
          </div>

          <div className="flex items-center justify-between max-w-xl p-4 px-5 space-x-8 font-medium bg-white">
            <div className=""> Blog</div>

            <div className="inline font-semibold">
              Dukungan{" "}
              <div className="w-10 mx-auto border-b-4 rounded-full border-blue"></div>
            </div>

            <div className="">Cara Bergabung</div>

            <div className=""> Cerita Sobat EdLink</div>
          </div>

          <div className="flex items-center">
            <div className="font-semibold">Masuk</div>
            <div className="p-3 px-6 ml-8 text-white rounded-lg bg-blue-lenear">
              Mendaftar
            </div>
          </div>
        </header>
      </div>

      <div className="container grid grid-cols-2 mx-auto max-w-7xl">
        <div className="mx-auto my-auto xxl:-ml-2">
          <div className="z-40 w-full space-y-12">
            <div className="inline p-2 px-8 rounded-full bg-purple text-purple">
              Solusi Pembelajaran #1 di Indonesia
            </div>
            <div className="max-w-lg text-5xl font-bold text-d-blue">
              Kuliah semakin mudah tanpa terkendala jarak dan waktu.
            </div>

            <div className="max-w-lg text-gray">
              Solusi platform Pembelajaran Jarak Jauh (PJJ) lengkap dengan video
              conference, kuis interaktif, serta terintegrasi oleh SIAKAD.
            </div>

            {/* ..... */}

            <div className="flex items-center justify-around flex-shrink-0 max-w-lg text-sm text-center ">
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
                      fill-opacity="0.15"
                    />
                    <path
                      d="M6.66663 12L10.6666 16L17.3333 8"
                      stroke="#1A21BC"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="9l-1">Untuk Tenaga Pendidik</span>
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
                      fill-opacity="0.15"
                    />
                    <path
                      d="M6.66663 12L10.6666 16L17.3333 8"
                      stroke="#1A21BC"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Untuk Mahasiswa
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
                      fill-opacity="0.15"
                    />
                    <path
                      d="M6.66663 12L10.6666 16L17.3333 8"
                      stroke="#1A21BC"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Untuk Orang Tua
              </div>
            </div>
            {/*  */}

            <div className="flex -ml-16">
              <div className="">
                <img alt="" className="" src="/markarrow.png" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="inline-flex items-center p-3 px-6 text-base font-semibold text-white rounded-lg bg-purple-leanier2">
                    Coba gratis!
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
                          stroke-width="3.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.5 6L23.6667 14.1667L15.5 22.3333"
                          stroke="white"
                          stroke-width="3.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="inline-flex items-center">
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
                            <stop stop-color="#FFC700" />
                            <stop offset="1" stop-color="#FF782D" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className="p-1 ml-3 text-base font-semibold border-b-2 border-purple text-d-blue">
                      Play video
                    </div>
                  </div>
                </div>
                <div className="">
                  <img alt="" className="" src="/people.png" />
                </div>{" "}
              </div>
            </div>

            <div className="">
              <img alt="" className="" src="/down.png" />
            </div>
          </div>
        </div>
        {/* sec 2 */}
        <div className="flex flex-col items-center h-screen max-w-lg max-h-screen 2xl:max-w-xl">
          <div className="w-full -mt-52">
            <div className="flex">
              <div className="relative flex items-end">
                <img
                  className="absolute left-0 pb-56 -ml-20"
                  alt="ytb"
                  src="/ytube.png"
                />
                <img
                  className="absolute right-0 pr-3 -mb-16 -mr-16"
                  alt="drive"
                  src="/drive.png"
                />
                <img
                  alt=""
                  className="absolute pt-4 pb-8 pl-8 transform scale-125 rounded-b-full"
                  src="/Group 310 (2).png"
                />
                {/* 181-removebg-preview 1.png */}
                {/* Group 310 (1).png */}
                {/* <img alt="" className="" src="/mans.png" /> */}

                <img alt="" className="" src="/Group 398.png" />
              </div>

              <div className="relative flex items-end ml-10 -mr-10">
                <div>
                  <img
                    alt="gmail"
                    className="absolute right-0 -mr-24"
                    src="/gmail.png"
                  />
                  <img alt="" className="mb-32 " src="/mans2.png" />
                </div>
              </div>
            </div>
            <div className="flex ">
              <div className="">
                <div className="relative">
                  <img alt="" className="mt-12" src="/mansgroup3.png" />
                  <div className="-mt-40 rounded-full -ml-28 dot-yellow"></div>{" "}
                  <img
                    alt="   Subtract.png"
                    className="absolute top-0 right-0 -mt-1 -mr-10"
                    src="/Subtract.png "
                  />
                </div>
                <img
                  alt="msgcard"
                  className="absolute pl-4 -ml-72 pt-14 top-50 "
                  src="/msgcard.png "
                />
              </div>
              <div className="relative -mt-20 -mr-32">
                <div className="right-0 mr-40 dot"></div>
                <img alt="man yello" className="" src="/mansgroup4.png" />
                <img alt="zoom" className="absolute top-50 " src="/zoom.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

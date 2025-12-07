import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header
      data-collapse="medium"
      data-animation="over-left"
      data-duration="400"
      data-w-id="556ebc81-b554-8299-bc0d-bf84370dd504"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="pt-7 md:pt-6 pb-7 md:pb-6 bg-transparent absolute left-0 top-0 right-0 w-nav"
    >
      <div className="max-w-[1268px] mx-auto px-6 flex-1 md:flex-col md:items-stretch mx-auto max-w-[940px]">
        <div className="flex justify-between items-center">
          {/* Right Section */}
          <div className="relative z-[100] flex items-center">
            <a
              href="/"
              aria-current="page"
              className="mr-8 pl-0 relative float-left no-underline text-[#333333] w--current"
              aria-label="home"
            >
              <Image
                src="/images/party_logo.webp"
                alt="Logo"
                width={150}
                height={40}
                className="w-[50px] transition-transform duration-300 ease-in-out hover:translate-y-[2px]"
              />
            </a>

            <nav role="navigation" className="relative float-right">
              <ul
                role="list"
                className="flex mt-0 !mb-0 pl-0 justify-end items-center list-none"
              >
                <li className="block mr-[28px]">
                  <a
                    href="/"
                    aria-current="page"
                    className="!text-white hover:!text-[#ff344c] !no-underline transition-colors duration-[350ms] ease-in-out"
                  >
                    Home
                  </a>
                </li>

                <li className="block mr-[28px]">
                  <a
                    href="/about"
                    className="!text-white hover:!text-[#ff344c] !no-underline transition-colors duration-[350ms] ease-in-out"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Left Section */}
          {/* <div className="relative z-[99] flex items-center">
            <div className="flex flex-wrap items-start">
              <a
                href="/community"
                className="button-secondary small button-white _2-buttons-inside-menu w-button"
              >
                Join our community
              </a>

              <a href="/donate" className="button-primary small w-button">
                Donate
              </a>
            </div>
          </div> */}
        </div>
      </div>

      <div
        className="w-nav-overlay"
        data-wf-ignore=""
        id="w-nav-overlay-0"
      ></div>
    </header>
  );
};

export default Header;

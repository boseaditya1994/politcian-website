import React from "react";

const Footer = () => {
  return (
    <footer className="block pt-[140px] pb-8 border-t border-[#e0e2e7] !bg-[#1f3584]">
      <div className="max-w-[1268px] mx-auto px-6 flex-1">
        <div className="opacity-100 transform-gpu flex justify-between mb-[65px]">
          <div className="max-w-[334px] mr-10">
            <a
              href="/"
              aria-current="page"
              className="inline-block max-w-full mb-6 text-[#0e121e] underline bg-transparent 
              transition-colors duration-300 ease-in-out"
            >
              <img
                src="/images/party_logo.webp"
                alt="Politician X Logo"
                loading="eager"
                className="inline-block w-[204px] max-w-full align-middle border-0"
              />
            </a>

            <p className="text-[#0e121e] font-semibold">মা মাটি মানুষ</p>

            <div className="footer-contact-links-wrapper">
              <a
                href="mailto:contact@politician.com?subject=Contact"
                className="flex
  items-center
  mb-4
  max-w-full
  !no-underline
  text-[#0e121e]
  bg-transparent
  transition-colors
  duration-300
  ease-in-out"
              >
                <img
                  src="/images/mail-to.svg"
                  alt="Email icon"
                  loading="eager"
                  className="mr-4"
                />
                <div>contact@politicianx.com</div>
              </a>

              <a
                href="mailto:contact@polotician.com?subject=Contact"
                className="flex
  items-center
  mb-4
  max-w-full
  !no-underline
  text-[#0e121e]
  bg-transparent
  transition-colors
  duration-300
  ease-in-out"
              >
                <img
                  src="/images/call-to.svg"
                  alt="Phone icon"
                  loading="eager"
                  className="mr-4"
                />
                <div>(+91) 9876 54 3210</div>
              </a>
            </div>
          </div>

          <div className="flex max-w-[360px] justify-between mr-10">
            <div className="mr-10">
              <div className="mb-8 text-[#0e121e] leading-[20px] font-bold tracking-[0.06em] uppercase">
                Menu
              </div>
              <div className="flex justify-between items-start">
                <ul role="list" className="mt-0 mb-0 pl-0 list-none">
                  {[
                    ["Home", "/"],
                    ["About", "/about"],
                    ["Socials", "/socials"],
                    ["Contact", "/contact"],
                  ].map(([label, href]) => (
                    <li key={label} className="mb-3">
                      <a
                        href={href}
                        className="text-[#0e121e]
  !no-underline
  whitespace-nowrap
  bg-transparent
  transition-colors
  duration-[350ms]
  ease-in-out"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="opacity-100
  transform-gpu
  flex
  flex-wrap
  justify-between
  items-end
  pt-8
  border-t
  border-[#e0e2e7]"
        >
          <div className="footer-small-print">Copyright © Politician X</div>

          <div className="flex flex-wrap -mx-2 -mb-2">
            {[
              ["https://www.facebook.com/", ""],
              ["https://twitter.com/", ""],
              ["https://www.instagram.com/", ""],
              ["https://www.youtube.com/", ""],
            ].map(([href, icon]) => (
              <a
                key={href}
                href={href}
                className="flex
  w-8
  h-8
  mx-2
  mb-2
  justify-center
  items-center
  border
  border-[#ff344c]
  rounded-full
  bg-[#ff344c]
  text-white
  text-[15px]
  leading-[1em]
  no-underline
  transition
  duration-300
  ease-in-out
  font-['Icons_politician_x_template',sans-serif]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

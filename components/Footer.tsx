const Footer = () => {
  return (
    <footer
      className="block pt-[140px] pb-8 border-t border-[#e0e2e7] bg-[#1f3584]"
      id="footer"
    >
      <div className="max-w-[1268px] mx-auto px-6 flex-1">
        {/* TOP SECTION */}
        <div className="opacity-100 transform-gpu flex flex-col lg:flex-row gap-12 mb-[65px] items-center lg:items-start lg:justify-between">
          {/* LOGO BLOCK */}
          <div className="max-w-[334px] text-center lg:text-left">
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

            <p className="text-white font-semibold">মা মাটি মানুষ</p>

            {/* <div className="footer-contact-links-wrapper">
              ...
            </div> */}
          </div>

          {/* MENU */}
          <div className="max-w-[360px] text-center lg:text-left">
            <div className="mb-8 text-white leading-[20px] font-bold tracking-[0.06em] uppercase">
              Menu
            </div>

            <ul role="list" className="mt-0 mb-0 !pl-0 list-none">
              {[
                ["Home", "/"],
                ["About", "/#about"],
                ["Socials", "/#socials"],
                ["Contact", "/#footer"],
              ].map(([label, href]) => (
                <li key={label} className="mb-3">
                  <a
                    href={href}
                    className="text-white !no-underline whitespace-nowrap bg-transparent transition-colors duration-[350ms] ease-in-out"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* DUPLICATE LOGO BLOCK */}
          <div className="max-w-[400px] text-center lg:text-left">
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

            <p className="text-white font-semibold">মা মাটি মানুষ</p>
          </div>

          {/* <NEWSLETTER CARD — KEPT AS IS /> */}
        </div>

        {/* BOTTOM SECTION */}
        <div className="opacity-100 transform-gpu flex flex-col sm:flex-row flex-wrap gap-6 justify-between items-center pt-8 border-t border-[#e0e2e7] text-white">
          <div className="footer-small-print text-center sm:text-left">
            Copyright © Politician X
          </div>

          <div className="flex flex-wrap -mx-2 -mb-2 justify-center">
            {[
              ["https://www.facebook.com/", ""],
              ["https://twitter.com/", ""],
              ["https://www.instagram.com/", ""],
              ["https://www.youtube.com/", ""],
            ].map(([href, icon]) => (
              <a
                key={href}
                href={href}
                className="
                  flex w-8 h-8 mx-2 mb-2 justify-center items-center
                  border border-[#ff344c]
                  rounded-full
                  bg-[#ff344c]
                  hover:bg-[#1f3584]
                  text-white text-[15px] leading-[1em]
                  !no-underline
                  transition duration-300 ease-in-out
                  font-['Icons_politician_x_template',sans-serif]
                "
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

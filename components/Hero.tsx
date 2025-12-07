import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="text-[#edeff5]
  bg-[#1f3584]
  bg-[url('/images/pattern.svg')]
  bg-no-repeat
  bg-[length:100%]
  bg-[position:50%_100%]
  flex
  items-center
  min-h-screen
  relative
  overflow-hidden
  pb-[200px]"
    >
      <div className="max-w-[1268px] mx-auto px-6 flex-1">
        <div>
          <div className="grid items-center auto-cols-fr gap-[40px] grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="max-w-[500px]">
              <h1 className="text-[114px] leading-[1em] font-extrabold tracking-[0.08em] uppercase !text-white mt-0 mb-6">
                Lorem Ipsum
              </h1>

              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing eli sem
                quisque cras arcu mi gravida libero feugiat.
              </p>

              {/* <div className="_2-button-wrap home-hero">
                <a
                  href="/donate"
                  className="button-primary _2-buttons white w-button"
                >
                  Donate
                </a>
                <a
                  href="/community"
                  className="button-secondary button-white w-button"
                >
                  Join our community
                </a>
              </div> */}
            </div>

            {/* RIGHT IMAGE */}
            <div id="w-node-_987d4117-4e6a-631b-68f3-253dc4da915f-d8e78c68">
              <Image
                className="opacity-100 transform-gpu block w-full max-w-full align-middle border-0"
                src="/images/politician.png"
                width={634}
                height={800}
                alt="Hero Image"
                loading="eager"
                data-w-id="f4a8fad3-eec3-4e25-888d-64c0acd4603b"
                sizes="(max-width: 479px) 100vw, 
                       (max-width: 767px) 84vw, 
                       (max-width: 991px) 76vw, 
                       (max-width: 1439px) 47vw, 
                       674.2890625px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

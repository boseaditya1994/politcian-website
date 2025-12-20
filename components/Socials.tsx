import React from "react";

const Socials = () => {
  return (
    <section className="py-[200px]" id="socials">
      <div className="max-w-[1268px] mx-auto px-6 flex-1">
        <div>
          <div
            className="opacity-100 transform-gpu flex flex-col justify-start items-center text-center 
            mx-auto max-w-[600px] mb-[40px]"
          >
            <div className="subtitle">Socials</div>
          </div>

          {/* Socials Grid */}
          <div className="grid auto-cols-fr grid-cols-2 gap-4">
            {[
              {
                id: "c93e96f6-d957-9e65-e9da-3187ac08b988",
                img: "/images/facebook.svg",
                title: "Facebook",
              },
              {
                id: "b0adc1fe-72c1-d639-1e9a-393df6613da9",
                img: "/images/instagram.svg",
                title: "Instagram",
              },
            ].map((item) => (
              <div
                key={item.id}
                data-w-id={item.id}
                className="opacity-100 transform-gpu flex flex-col justify-start items-center text-center
                            overflow-hidden py-[56px] px-8 border border-[#f2f2f4] rounded-[16px] 
                            bg-white shadow-[0_5px_14px_0_rgba(14,18,30,0.04)] text-[#717379] 
                            no-underline"
              >
                <img
                  src={`${item.img}`}
                  loading="eager"
                  width={50}
                  alt="Social icon"
                  className="align-middle border-0"
                />
                <div className="mt-10">
                  <h3>{item.title}</h3>
                  {/* <!---Socials ---> */}
                  <></>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;

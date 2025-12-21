"use client";

import React, { useEffect } from "react";
import Script from "next/script";

const Socials = () => {
  /* Re-process Instagram embeds on mount */
  useEffect(() => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="py-[200px]" id="socials">
      <div className="max-w-[1268px] mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col items-center text-center max-w-[600px] mx-auto mb-10">
          <div className="subtitle">Socials</div>
        </div>

        {/* Socials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              id: "facebook",
              img: "/images/facebook.svg",
              title: "Facebook",
              type: "facebook",
              url:
                "https://www.facebook.com/plugins/page.php" +
                "?href=https://www.facebook.com/profile.php?id=61583978173791" +
                "&tabs=timeline" +
                "&width=500" +
                "&height=600" +
                "&adapt_container_width=true" +
                "&small_header=true" +
                "&hide_cover=false" +
                "&show_facepile=false",
            },
            {
              id: "instagram",
              img: "/images/instagram.svg",
              title: "Instagram",
              type: "instagram",
              url: "https://www.instagram.com/p/DSFhNT3Acle/",
              profile: "https://www.instagram.com/YOUR_USERNAME/",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center overflow-hidden
                         py-14 px-8
                         bg-white shadow-[0_5px_14px_0_rgba(14,18,30,0.04)]"
            >
              {/* Icon */}
              <img
                src={item.img}
                width={50}
                alt={`${item.title} icon`}
                className="mb-6"
              />

              <h3 className="mb-6">{item.title}</h3>

              {/* FACEBOOK EMBED */}
              {item.type === "facebook" && (
                <div className="w-full flex justify-center">
                  <div className="w-full max-w-[500px] overflow-hidden">
                    <div className="relative w-full h-[600px]">
                      <iframe
                        src={item.url}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        title="Facebook Page Timeline"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* INSTAGRAM EMBED (POST) */}
              {item.type === "instagram" && (
                <div className="w-full">
                  <blockquote
                    className="instagram-media w-full"
                    data-instgrm-permalink={item.url}
                    data-instgrm-version="14"
                    style={{ margin: 0 }}
                  />
                </div>
              )}

              {/* OPTIONAL CTA FALLBACK */}
              {/* {item.type === "instagram" && (
                <a
                  href={item.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center w-full
                             rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
                             py-3 text-white font-semibold transition hover:opacity-90"
                >
                  Visit Instagram Profile
                </a>
              )} */}
            </div>
          ))}
        </div>
      </div>

      {/* Instagram embed script */}
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </section>
  );
};

export default Socials;

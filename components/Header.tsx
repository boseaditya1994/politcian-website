"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Blogs", "/blogs"],
  ["Contact", "/contact"],
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* ✅ Close menu on route change */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* ✅ Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* HEADER BAR */}
      <header className="fixed top-0 left-0 right-0 z-[1000] bg-[#1f3584]">
        <div className="max-w-[1268px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <a href="/" className="flex items-center">
              <Image
                src="/images/party_logo.webp"
                alt="Logo"
                width={150}
                height={40}
                className="w-[50px]"
              />
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-7">
                {navItems.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-white !no-underline transition-colors hover:text-[#ff344c]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white text-2xl"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm"
            />

            {/* SLIDE PANEL (LEFT → RIGHT) */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 30,
              }}
              className="fixed top-0 left-0 z-[1000] h-full w-[80%] max-w-[320px] bg-[#1f3584] shadow-xl"
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-white/20">
                <span className="text-white font-semibold">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white text-2xl"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <nav className="mt-8">
                <ul className="flex flex-col gap-6 px-6">
                  {navItems.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-white text-lg !no-underline transition-colors hover:text-[#ff344c]"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* HEADER OFFSET */}
      <div className="h-[88px]" />
    </>
  );
};

export default Header;

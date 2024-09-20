"use client";

import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black/85" aria-labelledby="footer-heading">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-16 sm:pt-24 lg:pt-32 w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img
              className="h-16 sm:h-20 rounded-lg"
              src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Fizz%20Wizz%20Logo%20-%20light-02.png?updatedAt=1726098204228"
              alt="Company name"
            />
            <p className="text-sm sm:text-md leading-6 text-white font-bold poppins">
              Creative Group Creative <br />
              solutions for creative people
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white/70">
                Fizz Wizz
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-sm leading-6 text-white hover:text-white/70"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-sm leading-6 text-white hover:text-white/70"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm leading-6 text-white hover:text-white/70"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <button
                    className="text-sm leading-6 text-white hover:text-white/70"
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white/70">
                Contact
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a
                    href="mailto:info@fizzwizz.in"
                    className="text-sm leading-6 text-white hover:text-white/70"
                  >
                    info@fizzwizz.in
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917297062504"
                    className="text-sm leading-6 text-white hover:text-white/70"
                  >
                    +91 72970 62504
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm leading-6 text-white hover:text-white/70"
                  >
                    08, Shakti Nagar, 1st Street, Paota &rsquo;c&rsquo; Road,
                    Jodhpur, Rajasthan, 342001
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between space-y-4 sm:space-y-0">
              <div className="flex space-x-6">
                <Link
                  href="https://www.instagram.com/_fizz_wizz_/"
                  target="_blank"
                >
                  <Instagram color="#fff" size={28} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/fizzwizz/"
                  target="_blank"
                >
                  <Linkedin color="#fff" size={28} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-[#fff]">
            &copy; {new Date().getFullYear()} Fizz Wizz Media, All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

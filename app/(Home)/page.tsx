"use client";

import { useEffect, useState } from "react";
import { Quote } from "../(Components)/Quote";
import { ChevronUp } from "lucide-react";
import Contact from "../(Components)/Contact";
import HomeServices from "../(Components)/HomeServices";
import { Clients } from "../(Components)/Clients";
import Header from "../(Components)/Header";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header
        image="https://ik.imagekit.io/umdiwr6ma/fizzwizz/test.png?updatedAt=1726094238939"
        subText="ICONIC"
        text="Making Brands"
      />
      <div className="flex flex-col justify-center items-center">
        <Quote />
        <div
          className="relative flex flex-col justify-center items-center h-[80vh] bg-black/85 w-full"
          id="services"
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold transition duration-300 ease-in-out transform hover:scale-110">
              Our Services
            </h1>
            <img
              src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/shape-16.png?updatedAt=1726091956823"
              alt="Shapes"
              className="hidden md:block absolute bottom-[41rem] z-10"
            />
            <p className="text-white text-base sm:text-lg mt-14 mb-4">
              We Provide The Best Services For Your Business.
            </p>
          </div>
          <HomeServices />
          {/* Shapes */}
          <div className="hidden md:block absolute top-[20rem] left-[12rem] rotate-45 w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-lg transition-transform duration-500 ease-in-out transform hover:-rotate-45 z-10"></div>
          <div className="hidden md:block absolute top-20 right-20 w-12 h-12 md:w-16 md:h-16 bg-red-500 rounded-full transition-transform duration-500 ease-in-out transform hover:scale-125 z-10"></div>
        </div>

        <div
          className="relative flex flex-col justify-center items-center h-[80vh] bg-black/85 w-full"
          id="clients"
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold transition duration-300 ease-in-out transform hover:scale-110">
              Case Studies
            </h1>
            <img
              src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/shape-16.png?updatedAt=1726091956823"
              alt="Shapes"
              className="hidden md:block absolute bottom-[39rem] z-10"
            />
            <p className="text-white text-base sm:text-lg mt-14">
              We Have Worked With Some Amazing Brands.
            </p>
          </div>
          <Clients />
          {/* Shapes */}
          <div className="hidden md:block absolute top-[17rem] left-24 w-12 h-12 md:w-16 md:h-16 animate-bounce -rotate-45 bg-orange-500 rounded-lg transition-transform duration-500 ease-in-out transform hover:rotate-45 z-10"></div>
          <div className="hidden md:block absolute top-20 right-20 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full transition-transform duration-500 ease-in-out transform hover:scale-125 z-10"></div>
        </div>

        <div
          className="flex flex-col justify-center items-center h-[100vh] bg-black/85 w-full"
          id="contact"
        >
          <Contact />
        </div>
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 p-3 bg-[#ff841a] text-white rounded-full shadow-lg hover:bg-[#ff841a]/80 transition duration-300"
          >
            <ChevronUp size={24} />
          </button>
        )}
      </div>
    </>
  );
}

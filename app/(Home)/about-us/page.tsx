"use client";

import React, { useState, useEffect } from "react";

import { AboutUsHeader } from "./_component/AboutUsHeader";
import { ChevronUp } from "lucide-react";
import { process } from "../../constants/processs";

const AboutUs = () => {
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
      <AboutUsHeader />

      <div
        className="relative flex flex-col justify-center items-center min-h-[80vh] bg-black/85 w-full"
        id="about-us"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div className="relative flex justify-center items-center p-5 w-full h-[50vh] lg:h-full overflow-hidden">
            <img
              src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/wedding-151.jpg?updatedAt=1726114412578"
              alt="About Us"
              className="w-full h-full object-cover rounded-2xl
              transition duration-300 ease-in-out transform hover:scale-110 hover:-rotate-12
              "
            />
          </div>
          <div className="flex flex-col items-start p-4 sm:p-8 text-justify">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold transition duration-300 ease-in-out transform hover:scale-110">
              About Us
            </h1>
            <img
              src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/shape-16.png?updatedAt=1726091956823"
              alt="Shapes"
              className="absolute bottom-[37rem] z-10 hidden lg:block"
            />
            <div className="space-y-4 mt-6 lg:mt-14">
              <p className="text-white text-sm sm:text-base lg:text-xl">
                Fizz Wizz Media is a creative group that focuses on making
                brands iconic. With consistent branding practices, a product or
                a brand develops a bubble around it and that is where we come in
                the picture to pop it.
              </p>
              <p className="text-white text-sm sm:text-base lg:text-xl">
                For us, it&apos;s never about playing it safe with branding, we
                shun conformity. We build an architecture of reason that allows
                your brand to stand any season of marketing.
              </p>
              <p className="text-white text-sm sm:text-base lg:text-xl">
                We bring unconventional ideas to the table because we believe
                whoever brings authentic content, owns the digital landscape.
                Content is the king and we are the king makers.
              </p>
              <p className="text-white text-sm sm:text-base lg:text-xl">
                We bring a kind of rebellious spirit to a brand so that your
                product or service is not only seen but is also felt.
              </p>
            </div>
          </div>
        </div>
        {/* Shapes */}
        <img
          src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/shape-13.png?updatedAt=1726097221238"
          alt="quote"
          className="hidden lg:block absolute top-[36rem] right-[40%]  h-16 w-16 lg:h-36 lg:w-36 transition-transform duration-500 ease-in-out transform hover:-rotate-45"
        />
        <div className="hidden lg:block absolute bottom-20 right-[15%] rotate-45 w-8 h-8 lg:w-16 lg:h-16 bg-[#ff841a] rounded-lg transition-transform duration-500 ease-in-out transform hover:-rotate-45 z-10"></div>
        <div className="hidden lg:block absolute bottom-[10rem] right-[10%] w-8 h-8 lg:w-16 lg:h-16 bg-white rounded-full transition-transform duration-500 ease-in-out transform hover:scale-125"></div>
        <div className="hidden lg:block absolute bottom-20 right-[5%] w-8 h-8 lg:w-16 lg:h-16 bg-blue-500 rounded-full transition-transform duration-500 ease-in-out transform hover:scale-125"></div>
      </div>

      <div
        className="relative flex flex-col justify-center items-center p-4 sm:p-8 space-y-4 sm:space-y-8 min-h-[30vh] w-full"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/umdiwr6ma/fizzwizz/pexels-pixabay-210243.jpg?updatedAt=1726157779465')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#E6B31E] to-black opacity-75"></div>
        <h1 className="relative text-3xl sm:text-4xl lg:text-6xl text-white font-bold transition duration-500 ease-in-out transform hover:scale-110">
          Our Process
        </h1>
      </div>

      <div className="relative flex flex-col justify-center items-center p-4 sm:p-8 space-y-4 sm:space-y-8 min-h-[70vh] w-full bg-gradient-to-br from-[#E6B31E] to-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {process.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center gap-2 items-center p-4 text-center bg-white/60 rounded-lg
              transition duration-300 ease-in-out transform hover:scale-90 hover:bg-[#E6B31e]/80
              "
            >
              <h2 className="text-white text-xl sm:text-2xl font-bold bg-[#000] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full">
                {item.id}
              </h2>
              <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
                {item.title}
              </h1>
              <p className="text-white text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-3 bg-[#ff841a] text-white rounded-full shadow-lg hover:bg-[#ff841a]/80 transition duration-300"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default AboutUs;

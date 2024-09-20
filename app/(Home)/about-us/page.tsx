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
        className="relative flex flex-col justify-center items-center min-h-[50vh] bg-black/85 w-full"
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
            <h1 className="mt-5 text-white text-3xl sm:text-4xl lg:text-6xl font-bold transition duration-300 ease-in-out transform hover:scale-110">
              About Us
            </h1>

            <div className="space-y-8 mt-6 lg:mt-14">
              <p className="text-white text-sm sm:text-base lg:text-xl">
                Fizz Wizz Media is a Brand House with expertise in Design,
                Branding & Strategy. We believe in more than just catching
                trends—we’re here to build brands that stand the test of time
              </p>
              <p className="text-white text-sm sm:text-base lg:text-xl">
                Our goal is to make your brand presence iconic and impactful.
              </p>
              <p className="text-white text-sm sm:text-base lg:text-xl">
                For us, consistency beats perfection. We believe in raw,
                authentic content that’s all about delivering true value—not
                just chasing numbers.
              </p>
              <p className="text-white text-sm sm:text-base lg:text-xl">
                At Fizz Wizz, we’re all about creating lasting brand stories.
                It’s not just about the numbers—it’s about building connections
                that resonate with your audience. When you work with us, we
                handle the strategy, branding, and growth, so you can focus on
                what you do best. Let’s build something iconic together,
                starting now.
              </p>
            </div>
          </div>
        </div>
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

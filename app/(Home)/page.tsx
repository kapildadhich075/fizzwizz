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
          className="relative flex flex-col justify-center items-center lg:h-[80vh] h-full bg-black/85 w-full lg:m-0 m-8"
          id="services"
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold transition duration-300 ease-in-out transform hover:scale-110">
              Services
            </h1>

            <p className="text-white text-base sm:text-lg mt-2 mb-8">
              We Provide A Wide Range Of Services.
            </p>
          </div>
          <HomeServices />
        </div>

        <div
          className="relative flex flex-col justify-center items-center lg:h-[80vh] h-[700px] bg-black/85 w-full m-8"
          id="clients"
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold transition duration-300 ease-in-out transform hover:scale-110">
              Case Studies
            </h1>

            <p className="text-white text-base sm:text-lg mt-2 ">
              We Have Worked With Some Amazing Brands.
            </p>
          </div>
          <Clients />
        </div>

        <div
          className="flex flex-col justify-center items-center h-[50vh] bg-black/85 w-full"
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

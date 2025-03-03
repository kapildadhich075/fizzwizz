"use client";

import { useEffect, useState } from "react";
import { Quote } from "../(Components)/Quote";
import { ChevronUp } from "lucide-react";
import Contact from "../(Components)/Contact";
import HomeServices from "../(Components)/HomeServices";
import { Clients } from "../(Components)/Clients";
import Header from "../(Components)/Header";
import React from "react";
import { Marquee } from "@/components/magicui/marquee";

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
      <Quote />
      <div
        className="flex flex-col justify-center items-center gap-5 w-full mt-10"
        id="services"
      >
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold transition duration-300 ease-in-out transform hover:scale-110">
          Services
        </h1>
        <HomeServices />
      </div>

      <Marquee pauseOnHover={true} className="[--duration:5s]">
        <div className="flex gap-5 py-5 items-center">
          <img
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/amazon-prime.png?updatedAt=1741000684938"
            alt="client"
            className="h-40"
          />
          <img
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/kotak.png?updatedAt=1740991332899"
            alt="client"
            className="h-40"
          />
          <img
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/mountain-tribe.png?updatedAt=1741000770660"
            alt="client"
            className="h-40"
          />
          <img
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/logo.png?updatedAt=1740991801661"
            alt="client"
            className="h-40 bg-white p-2 rounded-xl"
          />
          <img
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/velvex.jpg?updatedAt=1740992975132"
            alt="client"
            className="h-40 rounded-xl"
          />
          <img
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/happy%20wagon.jpg?updatedAt=1741002426865"
            alt="client"
            className="h-40 rounded-xl"
          />
        </div>
      </Marquee>
      <Marquee reverse pauseOnHover={true} className="[--duration:5s]">
        <div className="flex gap-5 py-5 items-center">
          <img
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/blitzpoker_logo.jpeg?updatedAt=1740994064604"
            alt="client"
            className="h-40 rounded-lg"
          />
          <img
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/backstagewithmillionaires_logo.jpeg?updatedAt=1740999545313"
            alt="client"
            className="h-40 rounded-lg"
          />
          <img
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/Mafatlal_logo.png?updatedAt=1741000440316"
            alt="client"
            className="h-40 rounded-lg"
          />
          <img
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/zee5.png?updatedAt=1741000304949"
            alt="client"
            className="h-40 rounded-lg bg-white p-2"
          />
          <img
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/naturalland.jpeg?updatedAt=1741000521028"
            alt="client"
            className="h-40 rounded-lg"
          />
          <img
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/bikaji.png?updatedAt=1741000952082"
            alt="client"
            className="h-40 rounded-xl"
          />
          <img
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/Logo-1-1.png?updatedAt=1741002577545"
            alt="client"
            className="h-40 rounded-xl"
          />
        </div>
      </Marquee>

      <div
        className="flex flex-col justify-center items-center gap-5 w-full mt-10"
        id="clients"
      >
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold transition duration-300 ease-in-out transform hover:scale-110">
          Case Studies
        </h1>
        <Clients />
      </div>

      <div
        className="flex flex-col justify-center items-center  bg-black/85 w-full mt-10"
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
    </>
  );
}

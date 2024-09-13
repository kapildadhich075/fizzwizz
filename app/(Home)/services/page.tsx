"use client";

import React, { useState, useEffect } from "react";
import { ServicesHeader } from "./_component/ServicesHeader";
import { WhyUs } from "./_component/WhyUs";
import { OurServices } from "./_component/OurServices";
import { ChevronUp } from "lucide-react";

const Services = () => {
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
      <ServicesHeader />
      <WhyUs />
      <OurServices />
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

export default Services;

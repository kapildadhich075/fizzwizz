import { ChevronLeft, ChevronRight, Link2 } from "lucide-react";
import React, { useEffect, useState, useCallback } from "react";
import { caseStudies } from "../constants/processs";

export const Clients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const totalSlides = caseStudies.length;

  const updateSlidesToShow = useCallback(() => {
    if (window.innerWidth < 640) {
      setSlidesToShow(1);
    } else if (window.innerWidth < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  }, []);

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, [updateSlidesToShow]);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - slidesToShow) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  }, [currentSlide, totalSlides, slidesToShow]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(totalSlides - slidesToShow);
    }
  }, [currentSlide, totalSlides, slidesToShow]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenModal(false);
    }
  };

  return (
    <div className="relative w-full max-w-6xl px-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 gap-5"
          style={{
            transform: `translateX(-${(currentSlide / slidesToShow) * 100}%)`,
          }}
        >
          {caseStudies?.map((caseStudy, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg
                transition-transform duration-500 hover:shadow-lg hover:-translate-y-1 hover:border-slate-300
                focus:shadow-lg focus:-translate-y-1 focus:border-slate-300
                active:shadow-none active:-translate-y-0 active:border-slate-200
              "
            >
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  src={caseStudy.imageUrl}
                  alt="card-image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  {caseStudy.clientName}
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  {caseStudy.title}
                </p>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <button
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  onClick={() => {
                    setActiveSlide(index);
                    setOpenModal(true);
                  }}
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex justify-center items-center gap-5 mt-4 
      
      "
      >
        <button
          onClick={prevSlide}
          className="bg-[#ff841a] text-white p-2 rounded-full"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#ff841a] text-white p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Modal */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 pointer-events-auto z-20"
          onClick={handleBackgroundClick}
        >
          <div
            className="bg-white p-6 rounded-lg relative max-w-lg w-full pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-2 right-2 text-red-600 font-bold"
            >
              X
            </button>
            <div className="flex flex-col items-center text-justify">
              <img
                src="https://via.placeholder.com/150"
                alt="Client Work"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h1 className="text-2xl font-semibold mb-2 text-black">
                {caseStudies[activeSlide].clientName}
              </h1>
              <p className="text-gray-700 mb-4">
                {caseStudies[activeSlide].title}
              </p>
              <p className=" text-gray-700 mb-4">
                <span>
                  <strong>Challenge: </strong>
                </span>
                {caseStudies[activeSlide].challenge}
              </p>
              <p className=" text-gray-700 mb-4">
                <span>
                  <strong>Solution: </strong>
                </span>
                {caseStudies[activeSlide].solution}
              </p>
              <p className=" text-gray-700 mb-4">
                <span>
                  <strong>Results: </strong>
                </span>
                {caseStudies[activeSlide].result}
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link2 className=" text-black" size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;

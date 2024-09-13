import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import React, { useState } from "react";

export const Clients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const totalSlides = 10;
  const slidesToShow = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === totalSlides - slidesToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - slidesToShow : prev - 1
    );
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenModal(false);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 gap-5"
          style={{
            transform: `translateX(-${(currentSlide / slidesToShow) * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/3 flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg
                transition-transform duration-500 hover:shadow-lg hover:-translate-y-1 hover:border-slate-300
                focus:shadow-lg focus:-translate-y-1 focus:border-slate-300
                active:shadow-none active:-translate-y-0 active:border-slate-200
              "
            >
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                  alt="card-image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Website Review Check
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to &quot;Naviglio&quot; where you can
                  enjoy the main night life in Barcelona.
                </p>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <button
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  onClick={() => setOpenModal(true)}
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-[1rem] md:left-[-4rem] transform -translate-y-1/2 bg-[#ff841a] text-white p-2 rounded-full"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-[1rem] md:right-[-4rem] transform -translate-y-1/2 bg-[#ff841a] text-white p-2 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* Modal */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center px-4"
          onClick={handleBackgroundClick}
        >
          <div className="bg-white p-6 rounded-lg relative max-w-lg w-full">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-2 right-2 text-red-600"
            >
              X
            </button>
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Client Work"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h1 className="text-2xl font-semibold mb-2">Client Work</h1>
              <p className="text-gray-700 mb-4">
                This is a description of the client&apos;s work. It highlights
                the key aspects and achievements of the project.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={24} className="text-blue-600" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={24} className="text-blue-400" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={24} className="text-pink-600" />
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

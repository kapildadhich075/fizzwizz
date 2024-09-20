import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export const homeServices = [
  {
    title: "Social Media",
    image:
      "https://ik.imagekit.io/umdiwr6ma/fizzwizz/7ed1231d0d8f63b21fc832765ce188d5.jpg?updatedAt=1726694277174",
  },
  {
    title: "Branding",
    image:
      "https://ik.imagekit.io/umdiwr6ma/fizzwizz/pexels-eva-bronzini-7661590.jpg?updatedAt=1726110156067",
  },
  {
    title: "Videos",
    image:
      "https://ik.imagekit.io/umdiwr6ma/fizzwizz/pexels-pixabay-257904.jpg?updatedAt=1726110873829",
  },
  {
    title: "1:1 Consultation",
    image:
      "https://ik.imagekit.io/umdiwr6ma/fizzwizz/IMG_4210.jpg?updatedAt=1726111117296",
  },
  {
    title: "Personal Branding",
    image:
      "https://ik.imagekit.io/umdiwr6ma/fizzwizz/wedding-165.jpg?updatedAt=1726111583538",
  },
  {
    title: "Voice Over",
    image:
      "https://ik.imagekit.io/umdiwr6ma/fizzwizz/pexels-ferartstudio-27677834.jpg?updatedAt=1726110113538",
  },
];

const HomeServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = homeServices.length;
  const slidesToShow = 3;

  const nextSlide = () => {
    if (currentSlide < totalSlides - slidesToShow) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(totalSlides - slidesToShow);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/services">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 gap-5"
              style={{
                transform: `translateX(-${
                  (currentSlide * 100) / slidesToShow
                }%)`,
              }}
            >
              {homeServices.map((service, index) => (
                <div
                  key={index}
                  className="relative grid h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem] w-1/2 sm:w-1/3 md:w-1/3 flex-shrink-0 flex-col items-end justify-center overflow-hidden rounded-lg bg-white"
                >
                  <div
                    className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                  </div>
                  <div className="relative text-center p-4 sm:p-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-14">
                    <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-medium text-white">
                      {service.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Link>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 sm:left-6 md:left-8 lg:left-10 transform -translate-y-1/2 bg-[#ff841a] text-white p-2 rounded-full"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 sm:right-6 md:right-8 lg:right-10 transform -translate-y-1/2 bg-[#ff841a] text-white p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default HomeServices;

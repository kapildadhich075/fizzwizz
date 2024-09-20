import { routes } from "@/app/(Components)/Header";
import HeaderLogo from "@/app/(Components)/HeaderLogo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const ServicesHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://ik.imagekit.io/umdiwr6ma/fizzwizz/Screenshot%202024-09-13%20at%201.51.03%E2%80%AFAM.png?updatedAt=1726172540559)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#bdbdbd] to-black opacity-50 z-10"></div>

        <div className="relative z-20 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex items-center justify-between py-6 sm:py-10">
            <div className="flex items-center">
              <HeaderLogo />
            </div>
            <div className="hidden sm:flex flex-wrap justify-end items-center gap-4 sm:gap-5 lg:gap-8">
              {routes.map((route) => (
                <Link
                  key={route.name}
                  href={route.href}
                  className="text-white text-base sm:text-lg font-bold poppins transition duration-500 ease-in-out transform hover:scale-110"
                >
                  {route.name}
                </Link>
              ))}
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="sm:hidden text-white">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="bottom" className="w-full bg-black/85">
                <div className="flex flex-col gap-6 mt-10">
                  {routes.map((route) => (
                    <Link
                      key={route.name}
                      href={route.href}
                      className="text-white text-xl mb-5 font-bold poppins transition duration-500 ease-in-out transform hover:scale-110"
                      onClick={() => setIsOpen(false)}
                    >
                      {route.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex flex-col mt-32 items-center justify-center max-w-5xl mx-auto text-center min-h-[50vh] gap-8">
            <h1 className="text-white text-4xl lg:text-5xl xl:text-7xl font-black">
              Here’s what we can do for you and even more{" "}
              <span className="text-4xl lg:text-5xl xl:text-7xl">🚀</span>
            </h1>
            <div className="flex items-center justify-center">
              <button
                className="text-[#fff] text-lg font-bold  poppins py-3 px-8 rounded-lg mt-16 transition duration-500 ease-in-out transform hover:scale-110"
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <ChevronDown size={48} className="animate-pulse-slow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

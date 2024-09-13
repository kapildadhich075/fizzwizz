"use client";

import Link from "next/link";
import HeaderLogo from "./HeaderLogo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about-us",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Case Studies",
    href: "/#clients",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

interface HeaderProps {
  image: string;
  text: string;
  subText?: string;
}

export default function Header({ image, text, subText }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#ff841a] to-black opacity-50 z-10"></div>

      <div className="relative z-20 max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <HeaderLogo />
          </div>
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                className="text-white text-base lg:text-lg font-bold poppins transition duration-500 ease-in-out transform hover:scale-110"
              >
                {route.name}
              </Link>
            ))}
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden text-white">
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

        <img
          src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/shape-08.svg?updatedAt=1726251001608"
          alt="Shape"
          className="absolute top-[18rem] left-0  z-20 
                h-14 w-14
          "
        />

        <img
          src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/shape-03.svg?updatedAt=1726091976543"
          alt="Shape"
          className="absolute top-[38rem] left-[10rem] z-20 h-10 animate-bounce hidden lg:block "
        />
        <div className="absolute top-80 items-center justify-center z-20 p-4 mx-4">
          <h1
            className="text-white text-4xl lg:text-9xl font-black mb-8 poppins
             transition duration-500 ease-in-out transform hover:scale-110
          "
          >
            {text}
          </h1>
          {subText && (
            <h1 className="text-white text-2xl sm:text-4xl lg:text-9xl xl:text-8xl font-black mb-4 sm:mb-8 poppins transition duration-500 ease-in-out transform hover:scale-110">
              {subText}
            </h1>
          )}
          <div className="">
            <button
              className="bg-white text-[#ff841a] text-lg font-bold poppins py-3 px-8 rounded-lg mt-16 transition duration-500 ease-in-out transform hover:scale-110"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

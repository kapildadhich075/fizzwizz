import { Calendar } from "lucide-react";
import Link from "next/link";

export const CalendlyButton = () => {
  return (
    <Link
      href={"https://calendly.com/bhaskar-fizzwizz/30min"}
      target="_blank"
      className="cursor-pointer flex space-x-2 bg-blue-500 py-2 text-center px-2 justify-center w-52 rounded-lg items-center mt-4"
    >
      <Calendar color="#fff" size={24} />
      <p className="text-lg text-white">Book a meeting</p>
    </Link>
  );
};

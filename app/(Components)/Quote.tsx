import Marquee from "react-fast-marquee";

export const Quote = () => {
  return (
    <Marquee
      gradient={true}
      speed={120}
      pauseOnHover
      className="bg-white relative h-[15vh] max-w-full mx-auto flex items-center justify-center "
    >
      <h1 className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-8xl font-extrabold text-black poppins p-5">
        We don’t do <span>FADS</span>, We do <span>FOREVER</span>
      </h1>
    </Marquee>
  );
};

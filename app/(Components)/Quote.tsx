import Marquee from "react-fast-marquee";

export const Quote = () => {
  return (
    <div className="relative h-[15vh] w-screen max-w-full mx-auto flex items-center justify-center bg-[#fff] overflow-hidden ">
      <Marquee gradient={false} speed={100} pauseOnHover>
        <h1 className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-8xl font-extrabold text-black poppins">
          We don’t do <span>FADS</span>, We do <span>FOREVER</span>
        </h1>
      </Marquee>
    </div>
  );
};

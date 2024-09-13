export const Quote = () => {
  return (
    <>
      <div className="relative h-[60vh] w-screen max-w-full mx-auto flex items-center justify-center bg-[#E6B31E]">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white transition duration-500 ease-in-out transform hover:scale-110 mb-5 poppins">
            We don’t do <span className="text-black">FADS</span>,
          </h1>
          <div className="h-1 w-3/4 sm:w-1/2 bg-white mx-auto mb-5 rounded-lg animate-bounce shadow-md"></div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-[#000] font-black  transition duration-500 ease-in-out transform hover:scale-110 ">
            We do <span className="text-white">FOREVER</span>
          </h1>
        </div>

        {/* Animated Shapes */}
        <img
          src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/shape-13.png?updatedAt=1726097221238"
          alt="quote"
          className="hidden md:block absolute top-[22rem] left-[27rem] h-24 w-24 md:h-36 md:w-36 transition-transform duration-500 ease-in-out transform hover:-rotate-12"
        />

        <div className="hidden md:block absolute bottom-24 left-64 h-12 w-12 md:h-16 md:w-16 bg-white/70 animate-spin-slow rounded-lg"></div>
        <div className="hidden md:block absolute bottom-14 right-72 h-12 w-12 md:h-16 md:w-16 bg-neutral-900 animate-bounce rounded-lg"></div>
        <div className="hidden md:block absolute bottom-0 right-0 h-0 w-0 border-l-4 border-r-4 md:border-l-8 md:border-r-8 border-b-8 md:border-b-16 border-transparent border-b-slate-300 animate-bounce"></div>
      </div>
    </>
  );
};

import { stone } from "@/app/constants/processs";

export const WhyUs = () => {
  return (
    <>
      <div
        className="relative flex flex-col justify-center items-center min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8"
        id="why-us"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/umdiwr6ma/fizzwizz/pexels-krisof-1252890.jpg?updatedAt=1726174931444')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div>
        <div className="relative text-white text-center z-10 max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Why Us?
          </h1>
          <h4 className="text-base sm:text-lg lg:text-xl mt-4 max-w-2xl mx-auto">
            We are a bunch of Avengers and collectively we carry our Infinity
            Stones
          </h4>

          <div className="mt-12 sm:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
              {stone.map((item, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <img
                    src={item.icon}
                    alt="why-us"
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 hover:animate-bounce-slow transition-all duration-500 ease-in-out transform"
                  />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mt-4">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg mt-2 max-w-xs mx-auto">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

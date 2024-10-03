import { services } from "@/app/constants/processs";

export const OurServices = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center 
        max-w-7xl mx-auto
       py-12 px-4 sm:px-6 lg:px-8 bg-black/85"
    >
      <div className="relative text-white text-center z-10 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold lg:mb-5">
          Our Services
        </h1>
        <h4 className="text-base sm:text-lg lg:text-xl   max-w-2xl mx-auto">
          We Provide The Best Services For Your Business.
        </h4>
      </div>
      {services.map((service, index) => (
        <div
          key={index}
          className={`grid grid-cols-1 md:grid-cols-2 
            gap-4 md:gap-8 justify-center my-8
              items-center w-full  ${
                index % 2 === 0 ? "md:grid-cols-2-reverse" : ""
              }`}
        >
          <div className="w-full flex justify-center relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[30rem] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black lg:opacity-55 opacity-0 rounded-lg hover:opacity-0"></div>
          </div>
          <div className="w-full p-6 flex flex-col justify-center items-center md:items-start">
            <h2 className="text-3xl font-bold mb-4 text-white italic">
              {service.title}
            </h2>
            {service?.points?.map((point, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-start mb-4"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.pointHead[index]}
                </h3>
                <p className="text-white text-justify">
                  {service.points[index]}
                </p>
              </div>
            ))}
            {service.description && (
              <p className="text-lg text-white text-justify mt-4">
                {service.description}
              </p>
            )}
          </div>
        </div>
      ))}

      {/* Shapes */}
    </div>
  );
};

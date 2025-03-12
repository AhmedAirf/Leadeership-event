import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Hero.mp4"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 w-full max-w-6xl">
          {/* Main Title */}
          <h1 className="text-[2.5rem] leading-tight sm:text-6xl md:text-[4rem] lg:text-[5rem] xl:text-[4rem] font-bold mb-4 md:mb-8">
            <span className="text-primary underline decoration-4 md:decoration-[6px]">
              LEADERSHIP
            </span>
            <span className="text-white block mt-2 md:mt-4">
              CONFERENCE 2025
            </span>
          </h1>

          {/* Date/Location Badge */}
          <div className="my-6 md:my-10">
            <p className="text-white text-base sm:text-lg md:text-xl border-2 border-white inline-block px-6 py-2 md:px-8 md:py-3">
              July 12-18, 2025 | New York City, NY
            </p>
          </div>

          {/* Past Events Gallery */}
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap mt-8 md:mt-12">
            {[2022, 2023, 2024].map((year) => (
              <div
                key={year}
                className="group relative overflow-hidden rounded-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={`/highlight/${year}.jpg`}
                  alt={`${year} Highlight`}
                  className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />
                <span className="absolute bottom-3 left-3 text-white text-sm md:text-base lg:text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

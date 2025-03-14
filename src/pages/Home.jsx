import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Hero.mp4"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10" />

      <div className="relative h-full flex items-center justify-center z-20">
        <div className="text-center px-4 container max-w-7xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            <span className="text-primary underline decoration-4 sm:decoration-6 md:decoration-8 decoration-primary/80">
              LEADERSHIP
            </span>
            <span className="text-white block mt-2 sm:mt-3 md:mt-4 lg:mt-6 tracking-tighter">
              CONFERENCE 2025
            </span>
          </h1>

          <div className="my-6 sm:my-8 md:my-12 lg:my-16">
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl border-2 border-white/80 inline-block px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              July 12-18, 2025 | New York City, NY
            </p>
          </div>

          <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            {[2022, 2023, 2024].map((year) => (
              <div
                key={year}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 cursor-pointer transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:z-30"
              >
                <img
                  src={`/highlight/${year}.jpg`}
                  alt={`${year} Highlight`}
                  className="w-full h-full object-cover absolute inset-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/10" />
                <span className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30 backdrop-blur-sm">
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

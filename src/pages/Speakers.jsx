import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Speakers = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6 md:gap-10 mx-auto pt-12 md:pt-20 bg-section px-4">
      {/* Main Speaker Section */}
      <section>
        <div className="flex flex-col lg:flex-row justify-between items-center container mx-auto gap-6 md:gap-8">
          <div className="flex flex-col gap-2 md:gap-3 w-full lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Our <span className="underline text-primary">Speakers</span>
            </h1>
            <p className="text-P text-base md:text-lg lg:text-xl w-full lg:w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut dolore
            </p>
          </div>

          {/* Featured Speaker Card */}
          <div className="relative group w-full lg:w-1/2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2">
            <div className="p-4 md:p-6">
              <div className="relative h-56 md:h-64 lg:h-72 w-4/5 mx-auto overflow-hidden rounded-xl">
                <img
                  src="/avatar/1.jpg"
                  alt="Logan Wilson"
                  className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-center mt-4 md:mt-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                  Logan Wilson
                </h3>
                <p className="text-gray-600 font-medium text-sm md:text-base">
                  CEO / Co-Founder
                </p>
              </div>
              <div className="flex justify-center gap-4 md:gap-6 mt-3 md:mt-4">
                <a
                  href="#facebook"
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                >
                  <FaFacebookF className="text-lg md:text-xl" />
                </a>
                <a
                  href="#twitter"
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                >
                  <FaTwitter className="text-lg md:text-xl" />
                </a>
                <a
                  href="#instagram"
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                >
                  <FaInstagram className="text-lg md:text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Grid */}
      <section className="mb-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {[2, 3, 4].map((num) => (
            <div
              key={num}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2"
            >
              <div className="p-4 md:p-6">
                <div className="relative h-48 md:h-56 lg:h-60 w-4/5 mx-auto overflow-hidden rounded-xl">
                  <img
                    src={`/avatar/${num}.jpg`}
                    alt={`Speaker ${num}`}
                    className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-center mt-4 md:mt-6">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">
                    {{ 2: "Thomas", 3: "Natalie", 4: "Isablla" }[num]}
                  </h3>
                  <p className="text-gray-600 font-medium text-sm md:text-base">
                    {
                      {
                        2: "Startup Coach",
                        3: "Event Manger",
                        4: "Event Planner",
                      }[num]
                    }
                  </p>
                </div>
                <div className="flex justify-center gap-4 md:gap-6 mt-3 md:mt-4">
                  <a
                    href="#facebook"
                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    <FaFacebookF className="text-base md:text-lg" />
                  </a>
                  <a
                    href="#twitter"
                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    <FaTwitter className="text-base md:text-lg" />
                  </a>
                  <a
                    href="#instagram"
                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    <FaInstagram className="text-base md:text-lg" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Speakers;

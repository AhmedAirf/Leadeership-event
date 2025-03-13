import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="px-4 md:px-0 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-14 container mx-auto gap-8 md:gap-12 py-12 md:py-24">
        {/* Left Section */}
        <section className="w-full md:w-1/2">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Our <span className="underline text-primary">Story</span>
            </h1>
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700">
              The importance of Leadership Conference in 2022
            </h4>
            <p className="text-gray-600 text-base md:text-lg w-full md:w-4/5 leading-relaxed">
              Leadership Event is a multi-page Tailwind CSS layout for your
              website. Created by AHMED, available for contact to create more
              amazing websites.
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-4">
              <Link to={"/speakers"}>
                <Button className="bg-primary rounded-full py-3 px-8 text-sm md:text-base ">
                  Meet Speakers
                </Button>
              </Link>
              <Link to={"/schedules"}>
                <Button className="bg-nav hover:bg-nav-dark text-white rounded-full py-3 px-8 text-sm md:text-base ">
                  Check Schedule
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 bg-gray-50 p-6 rounded-xl">
          <div className="flex flex-col gap-4">
            <h4 className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut dolore
            </h4>
            <div className="border-b-2 border-primary w-1/4 md:w-1/3"></div>
          </div>

          <div className="flex items-center gap-4 md:gap-6 mt-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="relative group">
                  <img
                    src={`/avatar/${num}.jpg`}
                    alt={`Speaker ${num}`}
                    className="w-12 h-12 rounded-full border-2 border-white hover:border-primary transition-all duration-300 object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-gray-600 text-sm md:text-base font-medium">
                120+ Professionals attending with us
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

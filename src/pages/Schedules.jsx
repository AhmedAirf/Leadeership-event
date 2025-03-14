import React, { useState } from "react";
import { FaClock, FaLocationCrosshairs } from "react-icons/fa6";

const Schedules = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const dayContent = {
    1: (
      <div className="space-y-8">
        {/* Session 1 */}
        <div className="session-container group hover:bg-primary/5 transition-all">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl">
            <div className="md:col-span-1">
              <img
                src="/schedule/1.jpg"
                alt="Session visual"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>

            <div className="md:col-span-2 space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-primary">
                  Startup Development Ideas
                </h1>
                <p className="text-gray-600 prose">
                  You are free to download any HTML CSS template from TemplateMo
                  website. You can use any template for business purposes. You
                  are not allowed to redistribute the downloadable ZIP file on
                  any other template website. Thank you.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <img
                    src="/avatar/1.jpg"
                    alt="Logan Wilson"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <strong className="block font-semibold">
                      Logan Wilson
                    </strong>
                    <span className="text-sm text-gray-500">CEO / Founder</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <FaClock className="w-5 h-5 text-primary" />
                  <time className="font-medium">9:00 - 9:45 AM</time>
                </div>

                <div className="flex items-center gap-2">
                  <FaLocationCrosshairs className="w-5 h-5 text-primary" />
                  <span className="font-medium">Conference Hall 3</span>
                </div>
              </div>
            </div>
          </section>
          <div className="border-t border-dashed border-gray-200 my-6" />
        </div>

        {/* Session 2 */}
        <div className="session-container group hover:bg-primary/5 transition-all">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl">
            <div className="md:col-span-1">
              <img
                src="/schedule/2.jpg"
                alt="Session visual"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>

            <div className="md:col-span-2 space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-primary">
                  Advanced Marketing Strategies
                </h1>
                <p className="text-gray-600 prose">
                  Learn cutting-edge marketing techniques from industry leaders.
                  Discover how to leverage digital platforms for maximum brand
                  exposure.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <img
                    src="/avatar/3.jpg"
                    alt="Logan Wilson"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <strong className="block font-semibold">Natlia</strong>
                    <span className="text-sm text-gray-500">Event Planner</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="w-5 h-5 text-primary" />
                  <time className="font-medium">10:00 - 10:45 AM</time>
                </div>

                <div className="flex items-center gap-2">
                  <FaLocationCrosshairs className="w-5 h-5 text-primary" />
                  <span className="font-medium">100-d Room</span>
                </div>
              </div>
            </div>
          </section>
          <div className="border-t border-dashed border-gray-200 my-6" />
        </div>

        {/* Session 3  */}
        <div className="session-container group hover:bg-primary/5 transition-all">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl">
            <div className="md:col-span-1">
              <img
                src="/schedule/3.jpg"
                alt="Session visual"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>

            <div className="md:col-span-2 space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-primary">
                  Future Technologies
                </h1>
                <p className="text-gray-600 prose">
                  Explore emerging technologies that will shape the future of
                  business and innovation in the next decade.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <img
                    src="/avatar/2.jpg"
                    alt="Logan Wilson"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <strong className="block font-semibold">Thomas</strong>
                    <span className="text-sm text-gray-500">Startup Coach</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="w-5 h-5 text-primary" />
                  <time className="font-medium">11:00 - 11:45 AM</time>
                </div>

                <div className="flex items-center gap-2">
                  <FaLocationCrosshairs className="w-5 h-5 text-primary" />
                  <span className="font-medium"> 100-B Room</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    ),
    2: (
      <div>
        <div className="space-y-8">
          {/* Session 1 */}
          <div className="session-container group hover:bg-primary/5 transition-all">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl">
              <div className="md:col-span-1">
                <img
                  src="/schedule/4.jpg"
                  alt="Session visual"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>

              <div className="md:col-span-2 space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold text-primary">
                    Building a famous company
                  </h1>
                  <p className="text-gray-600 prose">
                    Quisque mollis, ante non semper ultricies, nulla sapien
                    sollicitudin augue, id scelerisque nunc turpis nec urna.
                    Class aptent taciti sociosqu ad litora torquent per conubia.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src="/avatar/4.jpg"
                      alt="Isabella"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <strong className="block font-semibold">Isabella</strong>
                      <span className="text-sm text-gray-500">
                        Event Manager
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaClock className="w-5 h-5 text-primary" />
                    <time className="font-medium">9:00 - 9:45 AM</time>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaLocationCrosshairs className="w-5 h-5 text-primary" />
                    <span className="font-medium">Conference Hall 2</span>
                  </div>
                </div>
              </div>
            </section>
            <div className="border-t border-dashed border-gray-200 my-6" />
          </div>

          {/* Session 2 */}
          <div className="session-container group hover:bg-primary/5 transition-all">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl">
              <div className="md:col-span-1">
                <img
                  src="/schedule/3.jpg"
                  alt="Session visual"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>

              <div className="md:col-span-2 space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold text-primary">
                    Dev Ops life in corporate
                  </h1>
                  <p className="text-gray-600 prose">
                    Learn cutting-edge marketing techniques from industry
                    leaders. Discover how to leverage digital platforms for
                    maximum brand exposure.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src="/avatar/3.jpg"
                      alt="Logan Wilson"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <strong className="block font-semibold">Natlia</strong>
                      <span className="text-sm text-gray-500">
                        Event Planner
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="w-5 h-5 text-primary" />
                    <time className="font-medium">10:00 - 10:45 AM</time>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaLocationCrosshairs className="w-5 h-5 text-primary" />
                    <span className="font-medium">100-C Room</span>
                  </div>
                </div>
              </div>
            </section>
            <div className="border-t border-dashed border-gray-200 my-6" />
          </div>
        </div>
      </div>
    ),
    3: (
      <div>
        <div>
          <div className="space-y-8">
            {/* Session 1 */}
            <div className="session-container group hover:bg-primary/5 transition-all">
              <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl">
                <div className="md:col-span-1">
                  <img
                    src="/schedule/1.jpg"
                    alt="Session visual"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                </div>

                <div className="md:col-span-2 space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-primary">
                      Maintaining a successful business
                    </h1>
                    <p className="text-gray-600 prose">
                      Quisque mollis, ante non semper ultricies, nulla sapien
                      sollicitudin augue, id scelerisque nunc turpis nec urna.
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <img
                        src="/avatar/4.jpg"
                        alt="Isabella"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <strong className="block font-semibold">
                          Isabella
                        </strong>
                        <span className="text-sm text-gray-500">
                          Event Manager
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaClock className="w-5 h-5 text-primary" />
                      <time className="font-medium">9:00 - 9:45 AM</time>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaLocationCrosshairs className="w-5 h-5 text-primary" />
                      <span className="font-medium">Conference Hall 1</span>
                    </div>
                  </div>
                </div>
              </section>
              <div className="border-t border-dashed border-gray-200 my-6" />
            </div>

            {/* Session 2 */}
            <div className="session-container group hover:bg-primary/5 transition-all">
              <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl">
                <div className="md:col-span-1">
                  <img
                    src="/schedule/2.jpg"
                    alt="Session visual"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                </div>

                <div className="md:col-span-2 space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-primary">
                      Working Life in Corporate Environment
                    </h1>
                    <p className="text-gray-600 prose">
                      Learn cutting-edge marketing techniques from industry
                      leaders. Discover how to leverage digital platforms for
                      maximum brand exposure.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <img
                        src="/avatar/2.jpg"
                        alt="Logan Wilson"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <strong className="block font-semibold">Thomas</strong>
                        <span className="text-sm text-gray-500">
                          Startup Coach
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="w-5 h-5 text-primary" />
                      <time className="font-medium">10:00 - 10:45 AM</time>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaLocationCrosshairs className="w-5 h-5 text-primary" />
                      <span className="font-medium">100-C Room</span>
                    </div>
                  </div>
                </div>
              </section>
              <div className="border-t border-dashed border-gray-200 my-6" />
            </div>
          </div>
        </div>
      </div>
    ),
    4: (
      <div>
        {" "}
        <div className="session-container group hover:bg-primary/5 transition-all">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl">
            <div className="md:col-span-1">
              <img
                src="/schedule/5.jpg"
                alt="Session visual"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>

            <div className="md:col-span-2 space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-primary">
                  After Party at the fullest
                </h1>
                <p className="text-gray-600 prose">
                  Quisque mollis, ante non semper ultricies, nulla sapien
                  sollicitudin augue, id scelerisque nunc turpis nec urna. Class
                  aptent taciti sociosqu ad litora torquent per conubia.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <FaClock className="w-5 h-5 text-primary" />
                  <time className="font-medium">9:00 - 9:45 AM</time>
                </div>

                <div className="flex items-center gap-2">
                  <FaLocationCrosshairs className="w-5 h-5 text-primary" />
                  <span className="font-medium">Conference Hall 1</span>
                </div>
              </div>
            </div>
          </section>
          <div className="border-t border-dashed border-gray-200 my-6" />
        </div>
      </div>
    ),
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center items-center gap-8 mt-20 h-full">
        <div className="text-4xl font-bold     lg:font-bold lg:text-6xl ">
          <h3>
            Next <span className="underline text-primary">Schedule</span>
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-between w-full md:w-3/4 px-4 md:px-0">
          {[1, 2, 3, 4].map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`group flex flex-col items-start px-4 py-2 md:pl-6 md:px-8 md:py-4 rounded-xl transition-all duration-300 border-2 border-transparent border-l-primary transform-gpu
              ${
                selectedDay === day
                  ? "bg-primary text-white border-primary shadow-xl"
                  : "hover:scale-105 hover:shadow-lg hover:bg-primary/10 hover:border-primary/30"
              }
              w-full md:w-auto`}
            >
              <span className="text-base md:text-lg font-semibold">
                Day{" "}
                {day === 1
                  ? "One"
                  : day === 2
                  ? "Two"
                  : day === 3
                  ? "Three"
                  : "Four"}
              </span>
              <p
                className={`text-xs md:text-sm transition-colors duration-300 ${
                  selectedDay === day
                    ? "text-white/80"
                    : "text-gray-500 group-hover:text-primary-dark"
                }`}
              >
                July {11 + day}, 2025
              </p>
              <div
                className={`h-0.5 mt-1 md:mt-2 transition-all duration-300 ${
                  selectedDay === day
                    ? "bg-white w-full"
                    : "bg-primary w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="mt-8 w-full md:w-3/4 p-4 md:p-6 rounded-xl bg-white shadow-lg">
          {dayContent[selectedDay]}
        </div>
        <div className="w-full mt-12 md:mt-16 relative">
          <img
            src="/schedule/schedule-hero.jpg"
            alt="Event speakers session"
            className="w-full h-64 md:h-96 object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Become an{" "}
              <span className="text-primary underline">event speaker?</span>
            </h1>
            <p className="text-gray-200 max-w-2xl md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut dolore
            </p>
            <button className="mt-4 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Register Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Schedules;

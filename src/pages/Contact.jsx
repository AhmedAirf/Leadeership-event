import React from "react";

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-12">
      <div className="absolute inset-0 z-0">
        <img
          src="/Footer.jpg"
          alt="Contact background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 transition-all duration-300 hover:shadow-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Please Say <span className="text-primary">Hi</span>
          </h1>
          <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            We'd love to hear from you! Send us a message and we'll get back to
            you as soon as possible.
          </p>
        </div>

        <form className="grid grid-cols-1  md:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-4 sm:space-y-6 ">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none  hover:border-primary/50  transform transition-all duration-300 hover:scale-105 group-hover:shadow-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none  hover:border-primary/50  transform transition-all duration-300 hover:scale-105 group-hover:shadow-lg"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none  hover:border-primary/50  transform transition-all duration-300 hover:scale-105 group-hover:shadow-lg"
            />
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none  hover:border-primary/50  transform transition-all duration-300 hover:scale-105 group-hover:shadow-lg"
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center mt-4 sm:mt-6">
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

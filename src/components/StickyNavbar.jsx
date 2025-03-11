import React, { useState } from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const StickyNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-nav">
        <div className="flex items-center justify-between text-white">
          {/* Logo */}
          <Typography
            as={Link} // Use Link for the logo
            to="/"
            className="ml-12 cursor-pointer py-1.5 text-cyan-400 text-xl font-bold leading-tight"
          >
            Leadership <br /> Event
          </Typography>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Speakers", path: "/speakers" },
                { name: "Schedules", path: "/schedules" },
                { name: "Pricing", path: "/pricing" },
                { name: "Venue", path: "/venue" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <Typography
                  key={item.name}
                  as="li"
                  variant="small"
                  className="p-1 font-normal"
                >
                  <Link
                    to={item.path} // Use Link for navigation
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition"
                  >
                    {item.name}
                  </Link>
                </Typography>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="text"
            className="lg:hidden h-6 w-6 text-white"
            onClick={toggleNav}
          >
            {isNavOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </Button>

          {/* Buy Ticket Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Button className="bg-blue-500 hover:bg-blue-600 transition rounded-2xl px-4 py-2 text-white">
              Buy Tickets
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isNavOpen ? "block" : "hidden"}`}>
          <ul className="mt-4 pb-2 flex flex-col gap-2">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Speakers", path: "/speakers" },
              { name: "Schedules", path: "/schedules" },
              { name: "Pricing", path: "/pricing" },
              { name: "Venue", path: "/venue" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Typography
                key={item.name}
                as="li"
                variant="small"
                className="p-1 font-normal"
              >
                <Link
                  to={item.path} // Use Link for navigation
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition"
                >
                  {item.name}
                </Link>
              </Typography>
            ))}
            {/* Buy Ticket Button - Mobile */}
            <Button className="mt-2 bg-blue-500 hover:bg-blue-600 transition rounded-2xl text-white w-full">
              Buy Tickets
            </Button>
          </ul>
        </div>
      </Navbar>
    </div>
  );
};

export default StickyNavbar;

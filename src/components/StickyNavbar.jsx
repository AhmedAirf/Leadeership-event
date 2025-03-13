import React, { useState } from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const StickyNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Speakers", path: "/speakers" },
    { name: "Schedule", path: "/schedule" },
    { name: "Pricing", path: "/pricing" },
    { name: "Venue", path: "/venue" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Navbar className="sticky top-0 z-50 h-max w-full max-w-full rounded-none border-none px-4 py-3 lg:px-8 lg:py-4 bg-nav shadow-sm">
      <div className="flex items-center justify-between text-white">
        {/* Logo */}
        <Typography
          as={Link}
          to="/"
          className="ml-4 md:ml-12 cursor-pointer py-1.5 text-primary text-xl font-bold"
        >
          <span className="block leading-tight">Leadership</span>
          <span className="block leading-tight">Conference</span>
        </Typography>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <Typography
                key={item.name}
                as="li"
                variant="small"
                className="group relative"
              >
                <Link
                  to={item.path}
                  className="flex items-center text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </Typography>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <Button
            size="sm"
            className="bg-primary hover:bg-primary-dark rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-300"
          >
            Buy Tickets
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="text"
          className="lg:hidden h-10 w-10 p-2.5 text-white hover:bg-white/10 rounded-full"
          onClick={toggleNav}
        >
          {isNavOpen ? "✕" : "☰"}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden ${isNavOpen ? "block" : "hidden"} mt-4`}>
        <ul className="flex flex-col gap-2 border-t border-white/10 pt-4">
          {navItems.map((item) => (
            <Typography
              key={item.name}
              as="li"
              variant="small"
              className="group relative"
            >
              <Link
                to={item.path}
                onClick={toggleNav}
                className="flex items-center text-white/90 hover:text-white py-2 px-4 rounded-lg hover:bg-white/5 transition-colors duration-200"
              >
                {item.name}
              </Link>
            </Typography>
          ))}

          {/* Mobile CTA Button */}
          <Button
            fullWidth
            className="mt-4 bg-primary hover:bg-primary-dark rounded-full py-3 text-sm font-semibold transition-colors duration-300"
          >
            Buy Tickets
          </Button>
        </ul>
      </div>
    </Navbar>
  );
};

export default StickyNavbar;

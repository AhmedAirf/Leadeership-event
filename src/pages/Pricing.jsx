import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

const Pricing = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-8 md:gap-12 px-4 py-8 md:py-12">
      {/* Title Section */}
      <div className="mt-8 md:mt-14 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Get Your <span className="text-primary underline">Tickets</span>
        </h1>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 xl:gap-28 mb-8 md:mb-16 w-full justify-center items-center">
        {/* Standard Card */}
        <div className="w-full md:max-w-[20rem]">
          <Card
            color="white"
            variant="gradient"
            className="w-full p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <CardHeader
              floated={false}
              shadow={false}
              className="m-0 mb-6 md:mb-8 rounded-xl md:rounded-2xl border-b border-white/10 pb-6 md:pb-8 text-center bg-nav"
            >
              <Typography
                variant="small"
                color="white"
                className="text-xs md:text-sm font-normal uppercase"
              >
                standard
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mt-4 md:mt-6 flex justify-center gap-1 text-5xl md:text-6xl lg:text-7xl font-normal"
              >
                <span className="mt-1 md:mt-2 text-2xl md:text-3xl lg:text-4xl">
                  $
                </span>
                29{" "}
                <span className="self-end text-2xl md:text-3xl lg:text-4xl">
                  /mo
                </span>
              </Typography>
            </CardHeader>
            <CardBody className="p-0 flex flex-col gap-3 md:gap-4">
              <ul className="flex flex-col gap-3 md:gap-4">
                <li className="flex items-center gap-3 md:gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="text-sm md:text-base font-normal">
                    All-Day Coffee + Snacks
                  </Typography>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="text-sm md:text-base font-normal">
                    After Party Access
                  </Typography>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="text-sm md:text-base font-normal">
                    24/7 Support
                  </Typography>
                </li>
              </ul>
              <div className="border-t-2 my-3 md:my-4"></div>
              <p className="text-sm md:text-base text-gray-600">
                Essential conference access
              </p>
            </CardBody>
            <CardFooter className="mt-8 md:mt-12 p-0">
              <Button
                size="lg"
                className="text-sm md:text-base hover:bg-primary text-white rounded-lg 
                  transform transition-all duration-300 hover:scale-105 px-4 py-2 md:px-6 md:py-3 bg-nav"
                fullWidth={true}
              >
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Gold Card */}
        <div className="w-full md:max-w-[20rem]">
          <Card
            color="white"
            variant="gradient"
            className="w-full p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <CardHeader
              floated={false}
              shadow={false}
              className="m-0 mb-6 md:mb-8 rounded-xl md:rounded-2xl border-b border-white/10 pb-6 md:pb-8 text-center bg-nav"
            >
              <Typography
                variant="small"
                color="white"
                className="text-xs md:text-sm font-normal uppercase"
              >
                gold
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mt-4 md:mt-6 flex justify-center gap-1 text-5xl md:text-6xl lg:text-7xl font-normal"
              >
                <span className="mt-1 md:mt-2 text-2xl md:text-3xl lg:text-4xl">
                  $
                </span>
                59{" "}
                <span className="self-end text-2xl md:text-3xl lg:text-4xl">
                  /mo
                </span>
              </Typography>
            </CardHeader>
            <CardBody className="p-0 flex flex-col gap-3 md:gap-4">
              <ul className="flex flex-col gap-3 md:gap-4">
                <li className="flex items-center gap-3 md:gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="text-sm md:text-base font-normal">
                    Premium Snacks + Drinks
                  </Typography>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="text-sm md:text-base font-normal">
                    VIP After Party
                  </Typography>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="text-sm md:text-base font-normal">
                    Priority Support
                  </Typography>
                </li>
              </ul>
              <div className="border-t-2 my-3 md:my-4"></div>
              <p className="text-sm md:text-base text-gray-600">
                Premium experience package
              </p>
            </CardBody>
            <CardFooter className="mt-8 md:mt-12 p-0">
              <Button
                size="lg"
                className="text-sm md:text-base hover:bg-primary text-white rounded-lg 
                  transform transition-all duration-300 hover:scale-105 px-4 py-2 md:px-6 md:py-3 bg-nav"
                fullWidth={true}
              >
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Platinum Card */}
        <div className="w-full md:max-w-[20rem]">
          <Card
            color="white"
            variant="gradient"
            className="w-full p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <CardHeader
              floated={false}
              shadow={false}
              className="m-0 mb-6 md:mb-8 rounded-xl md:rounded-2xl border-b border-white/10 pb-6 md:pb-8 text-center bg-nav"
            >
              <Typography
                variant="small"
                color="white"
                className="text-xs md:text-sm font-normal uppercase"
              >
                platinum
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mt-4 md:mt-6 flex justify-center gap-1 text-5xl md:text-6xl lg:text-7xl font-normal"
              >
                <span className="mt-1 md:mt-2 text-2xl md:text-3xl lg:text-4xl">
                  $
                </span>
                99{" "}
                <span className="self-end text-2xl md:text-3xl lg:text-4xl">
                  /mo
                </span>
              </Typography>
            </CardHeader>
            <CardBody className="p-0 flex flex-col gap-3 md:gap-4">
              <ul className="flex flex-col gap-3 md:gap-4">
                <li className="flex items-center gap-3 md:gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="text-sm md:text-base font-normal">
                    Exclusive Lounge Access
                  </Typography>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="text-sm md:text-base font-normal">
                    Backstage Pass
                  </Typography>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="text-sm md:text-base font-normal">
                    Dedicated Concierge
                  </Typography>
                </li>
              </ul>
              <div className="border-t-2 my-3 md:my-4"></div>
              <p className="text-sm md:text-base text-gray-600">
                Exclusive VIP treatment
              </p>
            </CardBody>
            <CardFooter className="mt-8 md:mt-12 p-0">
              <Button
                size="lg"
                className="text-sm md:text-base hover:bg-primary text-white rounded-lg 
                  transform transition-all duration-300 hover:scale-105 px-4 py-2 md:px-6 md:py-3 bg-nav"
                fullWidth={true}
              >
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

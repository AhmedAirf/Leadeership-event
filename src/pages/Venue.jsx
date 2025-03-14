import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Venue = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Here you go <span className="underline text-primary">Venue</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl">
        <div className="flex-1 h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full  "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.091461689997!2d-73.9866630916883!3d40.758001294831736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855a96da09d%3A0x860bf5a5e1a00a68!2sTimes%20Square%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2ssg!4v1643035529098!5m2!1sen!2ssg"
            loading="lazy"
            allowFullScreen
            title="Venue Location Map"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/3">
          <Card className="h-full shadow-lg  transform transition-all duration-300 hover:scale-105 group-hover:shadow-lg">
            <CardBody className="flex flex-col gap-4">
              <Typography
                variant="h3"
                className="text-2xl font-bold text-secondary"
              >
                Times Square Venue
              </Typography>
              <Typography className="text-gray-600">
                Located in the heart of New York City, our venue is just steps
                away from:
              </Typography>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-gray-600">Broadway theaters</li>
                <li className="text-gray-600">World-class restaurants</li>
                <li className="text-gray-600">Major subway lines</li>
                <li className="text-gray-600">Iconic NYC landmarks</li>
              </ul>
              <Typography className="text-gray-600 mt-4">
                The venue features state-of-the-art facilities with easy access
                to public transportation and nearby hotels.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                fullWidth
                className="bg-secondary hover:bg-primary-dark text-white rounded-lg 
                  transform transition-all duration-300 hover:scale-105"
              >
                Get Directions
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Venue;

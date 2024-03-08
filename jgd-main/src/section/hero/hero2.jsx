import React from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import gehu from "../../assets/gehu.jpg";
import "../../css/hero.css";

const Hero2 = () => {
  return (
    <section
      id="hero1"
      className="lg:min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white relative"
      style={{
        backgroundImage: `url(${gehu})`,
        backgroundColor: "rgba(0, 0, 0)",
      }}
    >
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center">
        <h1 className="text-4xl animate-pulse font-bold tracking-tight from-red-600 via-orange-600 to-green-500 bg-gradient-to-b bg-clip-text text-transparent leading-none md:text-5xl xl:text-6xl dark:text-white">
          Revolutionizing Agriculture with Cutting-Edge Solutions
        </h1>
        <p className="max-w-2xl mx-auto mb-8 backdrop-blur-sm lg:mb-10 md:text-lg lg:text-xl dark:text-gray-400">
          At Jai Gurudev Industries, we are at the forefront of innovation,
          harnessing the power of technology to transform the agriculture
          landscape. From state-of-the-art machinery to sustainable solutions,
          we empower farmers to cultivate the future. Join us on the journey
          towards a more efficient, sustainable, and bountiful harvest. Discover
          the next era of agriculture with us - where innovation meets
          cultivation.
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-flex items-baseline justify-center px-5 py-3 mr-3 text-base font-medium text-center bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 rounded-lg"
          >
            Explore
            <FaArrowRight size={13} className="ml-2" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border bg-gray-100 border-gray-300 rounded-lg hover:bg-gray-400 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
      </div>
      <div>
        <FaArrowDown size={30} color="green"/>
      </div>
    </section>
  );
};

export default Hero2;

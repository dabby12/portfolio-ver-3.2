import React from "react";
import { Link } from "react-router-dom"; // Import Link component
import LearnMoreButton from "../SpecialComponents/LearnMore";

const CTAButtons = () => {
  return (
    <div className="flex justify-center items-center w-full">
      {/* Buttons Wrapper */}
      <div className="flex space-x-4">
        {/* LearnMoreButton wrapped with Link to redirect to About page */}
        <Link to="/about">
          <LearnMoreButton />
        </Link>

        {/* Contact Me button */}
        <button className="relative px-4 py-2 rounded-md overflow-hidden border border-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-medium group hover:brightness-150 active:opacity-75 outline-none duration-300">
          {/* Animated Gradient Background */}
          <span className="absolute -top-[150%] left-0 w-full h-[5px] rounded-md opacity-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] group-hover:top-[150%] duration-500"></span>

          {/* Button Text */}
          <Link to="/contact">
            <span className="relative z-10">Contact Me</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CTAButtons;

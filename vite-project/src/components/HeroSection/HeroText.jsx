import React from "react";

const HeroText = () => {
  return (
    <div className="mb-6">
      <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 animate-fade-up transition-transform transform hover:scale-110 duration-300 ease-in-out ">
        Ian Tay
      </h1>
      <h2 className="text-lg lg:text-3xl font-semibold text-gray-600 mb-4 animate-fade-up animation-delay-200  transition-transform duration-300 transform hover:scale-105 hover:text-yellow-300 ">
        Professional front-end developer/ UI and UX designer 
      </h2>
      <p className="text-xl text-black-100 animate-fade-up animation-delay-400">
      
I'm a passionate problem-solver who loves to create innovative and intuitive web experiences.
      </p>
    </div>
  );
};

export default HeroText;

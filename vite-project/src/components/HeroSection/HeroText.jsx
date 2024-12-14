import React from "react";

const HeroText = () => {
  return (
    <div className="mb-6">
      <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 animate-fade-up">
        Ian Tay
      </h1>
      <h2 className="text-2xl lg:text-3xl font-semibold text-gray-600 mb-4 animate-fade-up animation-delay-200">
        Professional Front-end developer
      </h2>
      <p className="text-lg text-black-100 animate-fade-up animation-delay-400">
        A short tagline or description about you, highlighting your passion or
        skills in 1-2 sentences.
      </p>
    </div>
  );
};

export default HeroText;

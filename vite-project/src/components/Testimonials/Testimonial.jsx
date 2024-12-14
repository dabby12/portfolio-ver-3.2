// src/components/Testimonials/Testimonial.jsx
import React from "react";

const Testimonial = ({ name, feedback, designation, animationClass }) => {
  return (
    <div
      className={`bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${animationClass}`}
    >
      <p className="text-lg italic text-white">{`"${feedback}"`}</p>
      <div className="mt-4 text-right">
        <p className="font-semibold text-xl text-white">{name}</p>
        <p className="text-sm text-gray-200">{designation}</p>
      </div>
    </div>
  );
};

export default Testimonial;

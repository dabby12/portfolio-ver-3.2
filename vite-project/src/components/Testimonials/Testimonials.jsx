// src/components/Testimonials/Testimonials.jsx
import React from "react";
import Testimonial from "./Testimonial"; // Import individual Testimonial component

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "John Doe",
      feedback: "This service was amazing! It helped me achieve my goals in no time.",
      designation: "CEO, TechCorp",
    },
    {
      name: "Jane Smith",
      feedback: "A fantastic experience! The team was professional and delivered beyond expectations.",
      designation: "Product Manager, Innovate Ltd.",
    },
    {
      name: "Mike Johnson",
      feedback: "Highly recommend! The quality and service were top-notch.",
      designation: "Freelancer",
    },
    {
      name: "Anna Lee",
      feedback: "The best team I've worked with! Their attention to detail is unmatched.",
      designation: "Marketing Director, BrandTech",
    },
    {
      name: "Chris Brown",
      feedback: "Exceeded my expectations. The work was delivered quickly and efficiently.",
      designation: "Founder, WebSolutions",
    },
    {
      name: "Emily Davis",
      feedback: "Absolutely thrilled with the results. The service was top-tier.",
      designation: "Creative Director, Design Hub",
    },
  ];

  return (
    <div className="ml-64 min-h-screen p-8 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-40 transform rotate-45"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-gradient-to-l from-yellow-400 to-red-500 opacity-30"></div>

      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8">
        Testimonials
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            feedback={testimonial.feedback}
            designation={testimonial.designation}
            animationClass={getAnimationClass(index)} // Assign the animation based on index
          />
        ))}
      </div>
    </div>
  );
};

// Function to get animation class based on index
const getAnimationClass = (index) => {
  switch (index % 3) {
    case 0:
      return "animate-slide-right"; // Animation for moving right
    case 1:
      return "animate-slide-left"; // Animation for moving left
    case 2:
      return "animate-slide-right"; // Animation for moving right
    default:
      return "";
  }
};

export default Testimonials;

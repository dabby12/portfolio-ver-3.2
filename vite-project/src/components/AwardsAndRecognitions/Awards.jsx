// src/components/Awards/Awards.jsx
import React from 'react';

const Awards = () => {
  return (
    <div className="ml-64 min-h-screen p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
      <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 animate-fade-up">
        My Awards
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <AwardCard
          title="Best Web Design"
          year="2023"
          description="Awarded for outstanding web design at Design Expo"
        />
        <AwardCard
          title="Excellence in User Experience"
          year="2022"
          description="Recognized for creating user-friendly and intuitive designs."
        />
        <AwardCard
          title="Top Developer"
          year="2021"
          description="Awarded for best contributions to open-source projects."
        />
        <AwardCard
          title="Innovative Solutions"
          year="2020"
          description="Recognized for innovation and creativity in web development."
        />
        <AwardCard
          title="Best Collaboration"
          year="2019"
          description="Awarded for seamless collaboration on cross-functional projects."
        />
        <AwardCard
          title="Design Excellence"
          year="2018"
          description="Recognized for exceptional design skills and creative ideas."
        />
      </div>
    </div>
  );
};

const AwardCard = ({ title, year, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-3">
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 mb-4">
        <div className="absolute inset-0 bg-opacity-30 bg-gradient-to-r from-indigo-500 to-pink-500"></div>
        <h3 className="text-3xl font-semibold text-white relative z-10">{title}</h3>
      </div>
      <p className="text-xl text-gray-500">{year}</p>
      <p className="text-lg text-gray-700 mt-4">{description}</p>
    </div>
  );
};

export default Awards;

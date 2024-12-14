import React from "react";
import Ian from '../../assets/Ian.jpg'; // Correct relative path

const HeroImage = () => {
  return (
    <div className="hidden lg:block w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg">
      <img
        src={Ian} // Use the imported image here
        alt="Your Name"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroImage;

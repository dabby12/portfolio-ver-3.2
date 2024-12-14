import { FaLaptopCode } from 'react-icons/fa'; // Add any icon from react-icons you prefer

const CareerPath = () => {
  return (
    <section className="career-path mb-8 animate-fade-up bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 p-6 rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-white mb-4 transition-transform duration-300 transform hover:scale-105 hover:text-yellow-300">
        My Career Journey
      </h2>
      <p className="text-xl text-white mt-4 transition-all duration-300 hover:text-gray-200">
        I started my career as a graphic designer, where I honed my visual design skills. After realizing my passion for web development, I transitioned into coding and became a full-stack developer. Over the years, I've worked on various exciting projects, constantly learning and evolving in this fast-paced industry.
      </p>
    </section>
  );
};

export default CareerPath;

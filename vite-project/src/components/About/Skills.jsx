import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa"; // Importing icons

const Skills = () => {
  return (
    <section className="skills mb-8 animate-fade-up p-6 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-white mb-6">Skills & Expertise</h2>
      <div className="flex justify-center gap-8">
        <div className="icon-container">
          <FaHtml5 className="text-5xl text-white transition-transform duration-300 transform hover:scale-110 hover:text-orange-500" />
        </div>
        <div className="icon-container">
          <FaCss3Alt className="text-5xl text-white transition-transform duration-300 transform hover:scale-110 hover:text-blue-500" />
        </div>
        <div className="icon-container">
          <FaJsSquare className="text-5xl text-white transition-transform duration-300 transform hover:scale-110 hover:text-yellow-500" />
        </div>
        <div className="icon-container">
          <FaReact className="text-5xl text-white transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500" />
        </div>
        <div className="icon-container">
          <FaNodeJs className="text-5xl text-white transition-transform duration-300 transform hover:scale-110 hover:text-green-500" />
        </div>
        <div className="icon-container">
          <FaGithub className="text-5xl text-white transition-transform duration-300 transform hover:scale-110 hover:text-gray-700" />
        </div>
        <div className="icon-container">
          <FaFigma className="text-5xl text-white transition-transform duration-300 transform hover:scale-110 hover:text-pink-500" />
        </div>
      </div>
    </section>
  );
};

export default Skills;

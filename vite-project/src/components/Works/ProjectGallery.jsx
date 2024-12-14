import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "E-Commerce Store",
    description: "A full-stack e-commerce platform with shopping cart and admin dashboard.",
    techStack: ["Node.js", "Express", "MongoDB", "React"],
  },
  {
    title: "Blog Application",
    description: "A blogging platform with authentication and real-time comments.",
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Weather App",
    description: "A weather forecasting app with real-time data and elegant design.",
    techStack: ["React", "OpenWeather API", "CSS"],
  },
  {
    title: "Game Development",
    description: "A 2D platformer game built using Unity and C#.",
    techStack: ["Unity", "C#"],
  },
];

const ProjectGallery = () => {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-2 text-purple-600">{project.title}</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;

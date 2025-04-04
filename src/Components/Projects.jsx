import React from "react";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
const projects = [
  {
    title: "Airbnb Clone",
    description: "A clone of Airbnb with features like property listing and booking.",
    github: "https://github.com/yourusername/airbnb-clone",
    live: "https://airbnb-clone.example.com",
  },
  {
    title: "Conference",
    description: "A simple Todo app to manage tasks with React and Tailwind CSS.",
    github: "https://github.com/Sarthakkeche/Conference",
    live: "https://dypcoe.iccss2025.org",
  },
  {
    title: "Portfolio",
    description: "My personal portfolio showcasing my skills and projects.",
    github: "https://github.com/ghuge123/MyPortfolio",
    live: "https://portfolio.example.com",
  },
  {
    title: "Amazon Clone",
    description: "A clone of Amazon with product listings, cart, and checkout.",
    github: "https://github.com/yourusername/amazon-clone",
    live: "https://amazon-clone.example.com",
  },
  {
    title: "Car Rental Website",
    description: "An all-in-one platform for renting cars online.",
    github: "https://github.com/Sarthakkeche/pbl-2nd-year",
    live: "https://car-rental.example.com",
  },
];
const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-10"><span ><EmojiObjectsIcon sx={{ fontSize: 60 }} className="pb-3"></EmojiObjectsIcon></span>My <span className="text-orange-700">Projects</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Card Front */}
            <div className="p-12">
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>

            {/* Card Back (Hover Content) */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 flex flex-col justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-sm mb-4 text-center">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-blue-500 rounded-lg font-medium shadow-md hover:shadow-lg transition"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-blue-500 rounded-lg font-medium shadow-md hover:shadow-lg transition"
                >
                  View Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import { projectsArr } from "../constants";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

const Projects = ({ state, projectsRef }) => {
  const wrapperRef = useRef(null);

  return (
    <section
      ref={projectsRef}
      className={`overflow-hidden border-t-[1px] border-b-[1px] border-stone-800 shadow-md mt-40 ${
        state.openNav ? "blur-sm" : "blur-none"
      } space-y-16 flex flex-col justify-center py-16 sm:py-20 md:py-24`}
    >
      <div className="flex flex-col space-y-2 text-center px-6 sm:px-12 md:px-24">
        <h1 className="text-[33px] md:text-[38px] font-semibold font-[Sora]">
          Featured Projects.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          I craft ideas into seamless, user-friendly experiences that bring
          creativity and purpose to life on the web.
        </p>
      </div>

      <div
        ref={wrapperRef}
        className="
      flex flex-col
      items-center
      gap-8 md:gap-24
      w-full
      px-6 sm:px-12 md:px-16 lg:px-24
      mb-8 md:mb-0 lg:mr-80
    "
      >
        {projectsArr.map((project) => (
          <div
            key={project.id}
            className="
          flex flex-col lg:flex-row items-center lg:gap-7
          w-full sm:w-[85vw] md:w-[80vw] flex-none
        "
          >
            <img
              src={project.photo}
              alt={project.name}
              className="
            w-full lg:w-[50vw]
            rounded-xl
            transition-transform duration-300
            hover:scale-105 hover:opacity-95
            mb-4 lg:mb-0
          "
            />
            <div className="space-y-3 sm:space-y-5 lg:space-y-7 text-center lg:text-left px-4 lg:px-0">
              <h1 className="text-lg sm:text-2xl lg:text-4xl font-semibold font-[Ramilas]">
                {project.name}
              </h1>
              <p className="text-sm sm:text-base md:text-[17px]">
                {project.description}
              </p>
              <a
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="
              inline-flex items-center justify-center lg:justify-start
              gap-2
              text-sm md:text-base font-medium
              transition-all duration-200
              hover:opacity-80
            "
              >
                View Project
                <ExternalLink className="w-4 h-4 transition-transform duration-200 hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 md:mt-12">
        <a
          id="hire-nav"
          href="#hire"
          className={`py-1 px-10 md:text-xl transition duration-300 cursor-pointer rounded-4xl bg-[#32FF87] text-[#0a0a0a] hover:opacity-80 hover:scale-95 hover:bg-[#ffff]`}
        >
          View All
        </a>
      </div>
    </section>
  );
};

export default Projects;

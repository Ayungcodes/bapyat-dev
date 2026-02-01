import { projectsArr } from "../constants";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

const Projects = ({ state, projectsRef }) => {
  const wrapperRef = useRef(null);

  return (
    <section
      ref={projectsRef}
      className={`overflow-hidden border-t-[3px] border-b-[3px] border-stone-800 shadow-md mt-40 ${
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
      group relative
      flex flex-col lg:flex-row
      w-full sm:w-[85vw] md:w-[80vw] flex-none
      rounded-2xl
      bg-stone-900/80 backdrop-blur
      border border-stone-700
      shadow-lg shadow-black/40
      overflow-hidden
      transition-all duration-500
      hover:shadow-xl hover:shadow-black/60 hover:border-stone-500
    "
          >
            {/* image */}
            <div className="relative w-full lg:w-[50%] overflow-hidden">
              <img
                src={project.photo}
                alt={project.name}
                className="
          w-full h-full object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-[1.04]
        "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* content */}
            <div className="flex flex-col justify-center gap-4 sm:gap-5 lg:gap-6 p-6 lg:p-10 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-[Sora] tracking-tight">
                {project.name}
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-xl">
                {project.description}
              </p>

              <a
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="
          inline-flex items-center gap-2
          text-sm md:text-base font-medium
          text-white
          w-fit mx-auto lg:mx-0
          transition-all duration-300
          hover:text-stone-200
        "
              >
                View Project
                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 md:mt-12">
        <a
          id="view-all-projects"
          href="https://github.com/Ayungcodes?tab=repositories"
          target="_blank"
          className={`py-1 px-10 md:text-xl transition duration-500 cursor-pointer rounded-4xl bg-[#32FF87] text-[#0a0a0a] hover:opacity-80 hover:scale-95 hover:bg-[#ffff]`}
        >
          View All
        </a>
      </div>
    </section>
  );
};

export default Projects;

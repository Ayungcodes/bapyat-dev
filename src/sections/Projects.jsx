import { useGSAP } from "@gsap/react";
import { projectsArr } from "../constants";
import { ExternalLink } from "lucide-react";
import gsap from "gsap";
import { useRef } from "react";

const Projects = ({ state, projectsRef }) => {
  const wrapperRef = useRef(null);

  useGSAP(() => {
    const scrollAmount = wrapperRef.current.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "2% top",
        end: `+=${scrollAmount}px`,
        pin: true,
        scrub: true,
      },
    });
    tl.to(wrapperRef.current, {
      x: `-${scrollAmount}px`,
      ease: "power1.inOut",
    });
  });

  return (
    <section
      ref={projectsRef}
      className={`overflow-hidden ${
        state.darkMode ? "bg-black" : "bg-gray-100"
      } shadow-md mt-40 ${
        state.openNav ? "blur-sm" : "blur-none"
      } space-y-24 flex flex-col justify-center py-24`}
    >
      <div className="flex flex-col space-y-6 ">
        <h1 className="text-3xl font-semibold text-center underline underline-offset-10 decoration-[#635bff] md:text-[36px] tracking-tight font-[Ramilas]">
          Featured Projects
        </h1>
        <p className="text-center mx-8 md:mx-24 lg:mx-36 text-lg md:text-xl">
          I craft ideas into seamless, user-friendly experiences that bring
          creativity and purpose to life on the web.
        </p>
      </div>

      <div
        ref={wrapperRef}
        className="w-full flex md:flex-row flex-col items-center md:mx-10 lg:mx-24 md:gap-24 gap-7 flex-nowrap mb-8 md:mb-0"
      >
        {projectsArr.map((project) => {
          return (
            <div
              key={project.id}
              className={`w-[90vw] md:w-[70vw] md:h-[40vh] flex flex-col items-center lg:flex-row lg:gap-7 flex-none`}
            >
              <img
                src={project.photo}
                alt="savora"
                className="w-full lg:w-[42vw] transition-all duration-200 hover:scale-102 hover:opacity-95 mb-4"
              />
              <div className="space-y-2 lg:space-y-7">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold font-[Ramilas]">
                  {project.name}
                </h1>
                <p className="md:text-[17px]">{project.description}</p>
                <a
                  href="https://savora-restaurant.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm md:text-[16px] font-medium transition-all duration-200 hover:opacity-80"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mx-auto flex justify-center duration-200 hover:scale-95 md:mt-12 lg:mt-0">
        <a
          id="hire-nav"
          href="#hire"
          className={`py-1 px-7 md:text-xl rounded-4xl bg-[#635bff] transition duration-300 cursor-pointer ${
            state.darkMode ? "hover:opacity-80" : "hover:bg-black text-white"
          } animate-pulse`}
        >
          View All
        </a>
      </div>
    </section>
  );
};

export default Projects;

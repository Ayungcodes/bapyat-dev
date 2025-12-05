import htmlIcon from "../assets/html-5.png";
import cssIcon from "../assets/css-3.png";
import jsIcon from "../assets/js.png";
import tailwindIcon from "../assets/icons8-tailwind-css-100.png";
import reactIcon from "../assets/react.png";
import gitIcon from "../assets/icons8-git-48.png";

const TechStack = ({ state, skillsRef }) => {
  return (
    <section
        ref={skillsRef}
        className={`border-t-[3px] border-b-[3px] border-stone-800 py-20 shadow-md mt-40 ${state.openNav ? "blur-sm" : "blur-none"}`}
      >
        <div className="flex flex-col justify-center items-center space-y-6 mx-6">
          <div className="flex flex-col gap-2 justify-center items-center tracking-tight">
            <h1 className="text-[33px] font-semibold text-center md:text-[38px] tracking-tight font-[Sora]">
              Technologies I Use.
            </h1>
            <p className="text-lg text-center tracking-tight md:text-xl mx-8 md:mx-24 lg:mx-36">
              These are the tools and technologies I work with to design, build,
              and deploy efficient, scalable, and user-friendly applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-evenly items-center text-sm md:text-[16px]">
            <div
              className={` flex-col justify-center items-center shadow-sm cursor-pointer hover:scale-110 transition duration-200 w-[75px] h-[90px] md:w-[85px] md:h[100] m-3 rounded-2xl p-3 bg-[#1f1f1f]/40 border-[2px] border-stone-800 backdrop-blur-lg`}
            >
              <img className="w-full" src={htmlIcon} alt="HTML5" />
              HTML5
            </div>

            <div
              className={`flex flex-col justify-center items-center shadow-sm cursor-pointer hover:scale-110 transition duration-200 w-[75px] h-[90px] md:w-[85px] md:h[100] m-3 rounded-2xl p-3 bg-[#1f1f1f]/40 border-[2px] border-stone-800 backdrop-blur-lg`}
            >
              <img className="w-full" src={cssIcon} alt="CSS3" />
              CSS3
            </div>

            <div
              className={`flex flex-col justify-center items-center shadow-sm cursor-pointer hover:scale-110 transition duration-200 w-[75px] h-[90px] md:w-[85px] md:h[100] m-3 rounded-2xl p-3 bg-[#1f1f1f]/40 border-[2px] border-stone-800 backdrop-blur-lg`}
            >
              <img className="w-full" src={jsIcon} alt="JS" />
              JS
            </div>

            <div
              className={`flex flex-col justify-center items-center shadow-sm cursor-pointer hover:scale-110 transition duration-200 w-[75px] h-[90px] md:w-[85px] md:h[100] m-3 rounded-2xl p-3 bg-[#1f1f1f]/40 border-[2px] border-stone-800 backdrop-blur-lg`}
            >
              <img className="w-full" src={tailwindIcon} alt="Tailwind" />
              Tailwind
            </div>

            <div
              className={`flex flex-col justify-center items-center shadow-sm cursor-pointer hover:scale-110 transition duration-200 w-[75px] h-[90px] md:w-[85px] md:h[100] m-3 rounded-2xl p-3 bg-[#1f1f1f]/40 border-[2px] border-stone-800 backdrop-blur-lg`}
            >
              <img className="w-full" src={reactIcon} alt="React" />
              React
            </div>
            <div
              className={`flex flex-col justify-center items-center shadow-sm cursor-pointer hover:scale-110 transition duration-200 w-[75px] h-[90px] md:w-[85px] md:h[100] m-3 rounded-2xl p-3 bg-[#1f1f1f]/40 border-[2px] border-stone-800 backdrop-blur-lg`}
            >
              <img className="w-full" src={gitIcon} alt="Git" />
              Git
            </div>
          </div>

          <div
            className={`flex flex-col justify-center items-center shadow-sm h-40 w-[87vw] rounded-4xl text-center text-md md:h-48 md:w-[440px] transition-all duration-200 hover:scale-105 bg-[#1f1f1f]/40 border-[2px] border-stone-800 backdrop-blur-lg`}
          >
            <div className="py-3 space-y-0.5 mx-3">
              <h2 className="text-lg font-semibold md:text-[25px] font-[Ramilas]">
                Always Learning
              </h2>
              <p className="md:text-[18px]">
                Learning never stops. I make it a habit to push beyond my
                comfort zone, experiment with new ideas, and expand my knowledge
                to deliver better solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TechStack

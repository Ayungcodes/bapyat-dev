import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

const NavBar = ({ scrollToSection, refs, state, setState, toggleNav }) => {
  const { welcomeRef, aboutRef, projectsRef, skillsRef, contactRef, logoRef } =
    refs;

  return (
    <nav
      className={`py-4 w-screen flex items-center fixed backdrop-blur-sm z-9999`}
    >
      <div className="md:px-5 md:py-3 lg:px-7 flex items-center justify-between px-3 w-screen">
        {/* logo */}
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => {
              scrollToSection(welcomeRef);
            }}
            ref={logoRef}
            className="
    font-[fredoka] text-xl md:text-3xl
    cursor-pointer z-50
    transition-all duration-500 ease-out
    hover:scale-105
  "
          >
            <span
              className="
      text-[#32ff87]
      transition-all duration-300
      hover:[text-shadow:0_0_8px_#32ff87,0_0_16px_#32ff87,0_0_32px_#32ff87]
    "
            >
              Bapyat
            </span>
            <span
              className="
      transition-all duration-300
      hover:[text-shadow:0_0_6px_#ffffff,0_0_14px_#32ff87]
    "
            >
              .dev
            </span>
          </button>
        </div>

        {/* desktop  */}
        <div className="flex items-center justify-center gap-3 lg:gap-9 z-99999">
          <div className="hidden lg:flex space-x-11 font-semibold text-[17px]">
            <button
              onClick={() => scrollToSection(welcomeRef)}
              className="cursor-pointer duration-200 hover:scale-110"
            >
              <div className="relative group inline-block">
                <span className="transition-all duration-300 hover:opacity-60">
                  Home
                </span>
                {/* <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFD43D] transition-all duration-500 ease-in-out group-hover:w-full"></span> */}
              </div>
            </button>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="cursor-pointer duration-200 hover:scale-110"
            >
              <div className="relative group inline-block">
                <span className="transition-all duration-300 hover:opacity-60">
                  About
                </span>
                {/* <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFD43D] transition-all duration-500 ease-in-out group-hover:w-full"></span> */}
              </div>
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="cursor-pointer duration-200 hover:scale-110"
            >
              <div className="relative group inline-block">
                <span className="transition-all duration-300 hover:opacity-60">
                  Projects
                </span>
                {/* <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFD43D] transition-all duration-500 ease-in-out group-hover:w-full"></span> */}
              </div>
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="cursor-pointer duration-200 hover:scale-110"
            >
              <div className="relative group inline-block">
                <span className="transition-all duration-300 hover:opacity-60">
                  Skills
                </span>
                {/* <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFD43D] transition-all duration-500 ease-in-out group-hover:w-full"></span> */}
              </div>
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="cursor-pointer duration-200 hover:scale-110"
            >
              <div className="relative group inline-block">
                <span className="transition-all duration-300 hover:opacity-60">
                  Contact
                </span>
                {/* <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFD43D] transition-all duration-500 ease-in-out group-hover:w-full"></span> */}
              </div>
            </button>
          </div>
          {/* toggleBtn */}
          <button
            onClick={toggleNav}
            className={`
    relative block lg:hidden
    w-10 h-10
    cursor-pointer
    z-50
    rounded-full
    transition-transform duration-500
    ${state.openNav ? "hover:rotate-[90deg]" : ""}
  `}
          >
            <span
              className={`
      absolute left-1/2 top-1/2
      h-[2px] w-7 md:w-8
      bg-white rounded-full
      transition-all duration-500 ease-in-out
      -translate-x-1/2 -translate-y-1/2
      ${state.openNav ? "rotate-45" : "-translate-y-1.5"}
    `}
            />

            <span
              className={`
      absolute left-1/2 top-1/2
      h-[2px] w-7 md:w-8
      bg-white rounded-full
      transition-all duration-500 ease-in-out
      -translate-x-1/2 -translate-y-1/2
      ${state.openNav ? "-rotate-45" : "translate-y-1.5"}
    `}
            />
          </button>
        </div>
      </div>

      {/* mobile nav */}
      <div
        className={`
    fixed top-0 left-0 w-full h-screen
    z-50
    bg-black/80 backdrop-blur-sm
    transition-all duration-700 ease-out
    ${
      state.openNav
        ? "translate-y-0 opacity-100 pointer-events-auto"
        : "translate-x-full opacity-0 pointer-events-none"
    }
  `}
      >
        <div className="text-center absolute top-0 right-0 transition-transform lg:hidden">
          <div className="flex flex-col justify-around items-start h-screen w-screen py-20 md:text-xl">
            <div className="flex flex-row w-full justify-around items-center mx-auto mt-6">
              <div className="flex flex-col items-start space-y-7 transition-all duration-200 hover:text-stone-500 font-semibold">
                {/* nav for mobile */}
                <h3 className={`text-[16px] md:text-[18px] text-gray-300`}>
                  Menu
                </h3>
                <button
                  onClick={() => {
                    scrollToSection(welcomeRef);
                    setState((state.openNav = false));
                  }}
                  className={`transition duration-200 cursor-pointer hover:text-white`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    scrollToSection(aboutRef);
                    setState((state.openNav = false));
                  }}
                  className={`transition duration-200 cursor-pointer hover:text-white`}
                >
                  About
                </button>
                <button
                  onClick={() => {
                    scrollToSection(projectsRef);
                    setState((state.openNav = false));
                  }}
                  className={`transition duration-200 cursor-pointer hover:text-white`}
                >
                  Projects
                </button>
                <button
                  onClick={() => {
                    scrollToSection(skillsRef);
                    setState((state.openNav = false));
                  }}
                  className={`transition duration-200 cursor-pointer hover:text-white`}
                >
                  Skills
                </button>
                <button
                  onClick={() => {
                    scrollToSection(contactRef);
                    setState((state.openNav = false));
                  }}
                  className={`transition duration-200 cursor-pointer hover:text-white`}
                >
                  Contact
                </button>
              </div>
              {/* socials */}
              <div className="flex flex-col items-start space-y-7 text-center transition-all duration-200 hover:text-stone-500 font-semibold">
                <h3 className={`text-[16px] md:text-[18px] text-gray-300`}>
                  Socials
                </h3>
                <a
                  id="linkedin"
                  href="https://www.linkedin.com/in/gaius-emmanuel-b10279202/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`underline transition-all duration-200 hover:text-white`}
                >
                  LinkedIn
                </a>
                <a
                  id="github"
                  href="https://github.com/Ayungcodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`underline transition-all duration-200 hover:text-white`}
                >
                  GitHub
                </a>
                <a
                  id="twitter"
                  href="https://x.com/Ayungclassics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`underline transition-all duration-200 hover:text-white`}
                >
                  Twitter/X
                </a>
                <a
                  id="instagram"
                  href="https://www.instagram.com/ayungclassic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`underline transition-all duration-200 hover:text-white`}
                >
                  Instagram
                </a>
                <a
                  id="fiverr"
                  href="https://www.fiverr.com/s/0bxeZ3v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`underline transition-all duration-200 hover:text-white`}
                >
                  Fiverr
                </a>
              </div>
            </div>

            <div className="mx-auto duration-200 hover:scale-95 md:text-xl">
              <button
                onClick={() => {
                  scrollToSection(contactRef);
                  setState((state.openNav = false));
                }}
                className={`py-1 px-7 md:px-12 transition duration-500 cursor-pointer hover:opacity-80 hover:bg-[#ffff] rounded-4xl bg-[#32ff87] text-[#0A0A0A]`}
              >
                Hire Me
              </button>
            </div>
            {/* footer for mobile menu area */}
            <div className="absolute bottom-0 flex items-center w-screen h-10 p-4 border-gray-800 text-[14px] lg:justify-center md:text-xl botttom-0">
              <h2>
                Crafted by{" "}
                <span className="text-[#32ff87]">Gaius Emmanuel.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

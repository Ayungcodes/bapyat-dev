const NavBar = ({
  scrollToSection,
  refs,
  state,
  setState,
  toggleNav,
  toggleTheme,
}) => {
  const { welcomeRef, aboutRef, projectsRef, skillsRef, contactRef, logoRef } =
    refs;

  return (
    <nav
      className={`${
        state.darkMode ? "bg-black/50" : "bg-[light]/50"
      } py-5 w-screen flex items-center fixed backdrop-blur-sm z-9999`}
    >
      <div className="flex items-center justify-between mx-6 w-screen">
        {/* logo */}
        <button
          onClick={() => {
            scrollToSection(welcomeRef);
          }}
          useRef={logoRef}
          className="font-[fredoka] text-xl md:text-3xl transition-transform duration-200 hover:scale-105 z-99999"
        >
          <span
            className={`${
              state.darkMode ? "text-[#635bff]" : "text-[#635bff]"
            }`}
          >
            Bapyat
          </span>
          <span>.dev</span>
        </button>

        {/* desktop  */}
        <div className="flex items-center justify-center gap-3 lg:gap-9 z-99999">
          <div className="hidden lg:flex space-x-11 font-semibold text-[17px]">
            <button onClick={() => scrollToSection(welcomeRef)}>
              <div className="relative group inline-block">
                <span className="transition-all duration-300 hover:opacity-80">
                  Home
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#635bff] transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </div>
            </button>
            <button onClick={() => scrollToSection(aboutRef)}>
              <div className="relative group inline-block">
                <span className="transition-all duration-300 hover:opacity-80">
                  About
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#635bff] transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </div>
            </button>
            <button onClick={() => scrollToSection(projectsRef)}>
              <div className="relative group inline-block">
                <span className="transition-all duration-300 hover:opacity-80">
                  Projects
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#635bff] transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </div>
            </button>
            <button onClick={() => scrollToSection(skillsRef)}>
              <div className="relative group inline-block">
                <span className="transition-all duration-300 hover:opacity-80">
                  Skills
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#635bff] transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </div>
            </button>
            <button onClick={() => scrollToSection(contactRef)}>
              <div className="relative group inline-block">
                <span className="transition-all duration-300 hover:opacity-80">
                  Contact
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#635bff] transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </div>
            </button>
          </div>
          {/* toggleMenu & toggleTheme BTNs */}
          <button
            onClick={toggleTheme}
            className={`flex items-center text-[15px] md:text-[19px] gap-2
        px-3 py-1 rounded-2xl font-medium transition-all duration-300
        transition-colors duration-300 cursor-pointer ${
          state.darkMode ? "bg-gray-50 text-black" : "bg-black text-white"
        }`}
          >
            {state.darkMode ? "🌞 Light" : "🌙 Dark"}
          </button>

          {/* toggleBtn */}
          <button
            onClick={toggleNav}
            className="block lg:hidden space-y-1.5 cursor-pointer transition-transform duration-300 hover:scale-110 z-50"
          >
            <span
              className={`${
                state.darkMode ? "bg-white" : "bg-black"
              } h-[2px] w-7 block rounded-full transition-all duration-200 ${
                state.openNav ? "rotate-45" : "rotate-0"
              }`}
            ></span>
            <span
              className={`${
                state.darkMode ? "bg-white" : "bg-black"
              } h-[2px] w-[19px] block rounded-full transition-all duration-200 ${
                state.openNav ? "-rotate-45" : "rotate-0"
              }`}
            ></span>
          </button>
        </div>
      </div>
      {/* mobile nav */}

      <div
        className={`fixed top-0 w-full h-screen transition-all duration-300 ease-linear z-9999 text-[18px] md:text-2xl ${
          state.darkMode ? "bg-black/80" : "bg-gray-100/80"
        } ${
          state.openNav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="text-center absolute top-0 right-0 transition-transform lg:hidden">
          <div className="flex flex-col justify-around items-start h-screen w-screen py-20 md:text-xl">
            <div className="flex flex-row w-full justify-around items-center mx-auto mt-6">
              <div className="flex flex-col items-start space-y-7 transition-all duration-200 hover:text-stone-500 font-[Ramilas]">
                {/* nav for mobile */}
                <h3
                  className={`text-[16px] md:text-[18px] ${
                    state.darkMode ? "text-gray-300" : "text-black"
                  }`}
                >
                  Menu
                </h3>
                <button
                  onClick={() => {
                    scrollToSection(welcomeRef);
                    setState((state.openNav = false));
                  }}
                  className={`transition duration-200 cursor-pointer ${
                    state.darkMode ? "hover:text-white" : "hover:text-black"
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    scrollToSection(aboutRef);
                    setState((state.openNav = false));
                  }}
                  className={`transition duration-200 cursor-pointer ${
                    state.darkMode ? "hover:text-white" : "hover:text-black"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => {
                    scrollToSection(projectsRef);
                    setState((state.openNav = false));
                  }}
                  className={`transition duration-200 cursor-pointer ${
                    state.darkMode ? "hover:text-white" : "hover:text-black"
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => {
                    scrollToSection(skillsRef);
                    setState((state.openNav = false));
                  }}
                  className={`transition duration-200 cursor-pointer ${
                    state.darkMode ? "hover:text-white" : "hover:text-black"
                  }`}
                >
                  Skills
                </button>
                <button
                  onClick={() => {
                    scrollToSection(contactRef);
                    setState((state.openNav = false));
                  }}
                  className={`transition duration-200 cursor-pointer ${
                    state.darkMode ? "hover:text-white" : "hover:text-black"
                  }`}
                >
                  Contact
                </button>
              </div>
              {/* socials */}
              <div className="flex flex-col items-start space-y-7 text-center transition-all duration-200 hover:text-stone-500 font-[Ramilas]">
                <h3
                  className={`text-[16px] md:text-[18px] ${
                    state.darkMode ? "text-gray-300" : "text-black"
                  }`}
                >
                  Socials
                </h3>
                <a
                  id="linkedin"
                  href="#"
                  target="_blank"
                  className={`underline transition-all duration-200 ${
                    state.darkMode ? "hover:text-white" : "hover:text-black"
                  }`}
                >
                  LinkedIn
                </a>
                <a
                  id="github"
                  href="https://github.com/Ayungcodes"
                  target="_blank"
                  className={`underline transition-all duration-200 ${
                    state.darkMode ? "hover:text-white" : "hover:text-black"
                  }`}
                >
                  GitHub
                </a>
                <a
                  id="twitter"
                  href="https://x.com/Ayungclassics"
                  target="_blank"
                  className={`underline transition-all duration-200 ${
                    state.darkMode ? "hover:text-white" : "hover:text-black"
                  }`}
                >
                  Twitter/X
                </a>
                <a
                  id="instagram"
                  href="https://www.instagram.com/ayungclassic/"
                  target="_blank"
                  className={`underline transition-all duration-200 ${
                    state.darkMode ? "hover:text-white" : "hover:text-black"
                  }`}
                >
                  Instagram
                </a>
                <a
                  id="fiverr"
                  href="https://www.fiverr.com/s/0bxeZ3v"
                  target="_blank"
                  className={`underline transition-all duration-200 ${
                    state.darkMode ? "hover:text-white" : "hover:text-black"
                  }`}
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
                className={`py-1 px-7 md:px-12 rounded-4xl bg-[#635bff] transition duration-300 cursor-pointer ${
                  state.darkMode
                    ? "hover:opacity-80"
                    : "hover:bg-black text-white"
                } animate-pulse`}
              >
                Hire Me
              </button>
            </div>
            {/* footer for mobile menu area */}
            <div className="absolute bottom-0 flex items-center w-screen h-10 p-2 border-gray-800 text-[14px] lg:justify-center md:text-xl botttom-0 font-[Ramilas]">
              <h2>
                Crafted by{" "}
                <span className="text-[#635bff]/90">Gaius Emmanuel.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import { useState, useRef, useEffect } from "react";
import Lenis from "lenis";
import { ExternalLink } from "lucide-react";
import myImage from "../src/assets/MyPhoto.JPG";
import htmlIcon from "../src/assets/html-5.png";
import cssIcon from "../src/assets/css-3.png";
import jsIcon from "../src/assets/js.png";
import tailwindIcon from "../src/assets/icons8-tailwind-css-100.png";
import reactIcon from "../src/assets/react.png";
import gitIcon from "../src/assets/icons8-git-48.png";
import savora from "../src/assets/savora.png";
import cookieJar from "../src/assets/cookieJar.png";
import luxuryWatch from "../src/assets/luxuryWatch.png";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [hireState, setHireState] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/mrbarzay", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const welcomeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToWelcome = () => {
    welcomeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const handleHireTrue = () => {
    setHireState(true);
  };

  const handleHireFalse = () => {
    setTimeout(() => {
      setHireState(false);
    }, 3000);
  };

  return (
    <div
      className={`${
        darkMode ? "dark text-white" : "light text-stone-800"
      } min-h-screen max-w-[100vw] overflow-x-hidden selection:bg-[#635bff]`}
    >
      {/* navigation area */}
      <nav
        className={`${
          darkMode ? "bg-black/50" : "bg-[light]/80"
        } py-4 w-screen flex items-center fixed backdrop-blur-sm z-9999`}
      >
        <div className="flex items-center justify-between mx-6 w-screen">
          {/* logo */}
          <button
            onClick={() => {
              scrollToWelcome();
            }}
            className="font-[fredoka] text-xl md:text-3xl transition-transform duration-200 hover:scale-105 z-99999"
          >
            <span
              className={`${darkMode ? "text-[#635bff]" : "text-[#635bff]"}`}
            >
              Bapyat
            </span>
            <span>.dev</span>
          </button>

          {/* desktop  */}
          <div className="flex items-center justify-center gap-3 lg:gap-9 z-99999">
            <div className="hidden lg:flex space-x-11 font-semibold text-[17px]">
              <button onClick={scrollToWelcome}>
                <div className="relative group inline-block">
                  <span className="transition-all duration-300 hover:opacity-80">
                    Home
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#635bff] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </div>
              </button>
              <button onClick={scrollToAbout}>
                <div className="relative group inline-block">
                  <span className="transition-all duration-300 hover:opacity-80">
                    About
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#635bff] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </div>
              </button>
              <button onClick={scrollToProjects}>
                <div className="relative group inline-block">
                  <span className="transition-all duration-300 hover:opacity-80">
                    Projects
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#635bff] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </div>
              </button>
              <button onClick={scrollToSkills}>
                <div className="relative group inline-block">
                  <span className="transition-all duration-300 hover:opacity-80">
                    Skills
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#635bff] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </div>
              </button>
              <button onClick={scrollToContact}>
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
              className={`flex items-center md:text-2xl gap-2
        px-3 py-1 rounded-2xl font-medium
        transition-colors duration-300 cursor-pointer ${
          darkMode ? "bg-gray-50 text-black" : "bg-black text-white"
        }`}
            >
              {darkMode ? "🌞 Light" : "🌙 Dark"}
            </button>

            {/* toggleBtn */}
            <button
              onClick={toggleNav}
              className="block lg:hidden space-y-1.5 cursor-pointer transition-transform duration-300 hover:scale-110 z-50"
            >
              <span
                className={`${
                  darkMode ? "bg-white" : "bg-black"
                } h-[2px] w-7 block rounded-full transition-all duration-200 ${
                  openNav ? "rotate-45" : "rotate-0"
                }`}
              ></span>
              <span
                className={`${
                  darkMode ? "bg-white" : "bg-black"
                } h-[2px] w-[19px] block rounded-full transition-all duration-200 ${
                  openNav ? "-rotate-45" : "rotate-0"
                }`}
              ></span>
            </button>
          </div>
        </div>
        {/* mobile nav */}

        <div
          className={`fixed top-0 w-full h-screen transition-all duration-300 ease-linear z-9999 text-[18px] md:text-2xl ${
            darkMode ? "bg-black/80" : "bg-gray-100/80"
          } ${
            openNav
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="text-center absolute top-0 right-0 transition-transform lg:hidden">
            <div className="flex flex-col justify-around items-start h-screen w-screen py-20 md:text-xl">
              <div className="flex flex-row w-full justify-around items-center mx-auto mt-6">
                <div className="flex flex-col items-start space-y-7">
                  {/* nav for mobile */}
                  <h3
                    className={`text-[16px] md:text-[18px] ${
                      darkMode ? "text-gray-300" : "text-black"
                    }`}
                  >
                    Menu
                  </h3>
                  <button
                    onClick={() => {
                      scrollToWelcome();
                      setOpenNav(false);
                    }}
                    className="hover:opacity-80 transition duration-200 cursor-pointer"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => {
                      scrollToAbout();
                      setOpenNav(false);
                    }}
                    className="hover:opacity-80 transition duration-200 cursor-pointer"
                  >
                    About
                  </button>
                  <button
                    onClick={() => {
                      scrollToProjects();
                      setOpenNav(false);
                    }}
                    className="hover:opacity-80 transition duration-200 cursor-pointer"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => {
                      scrollToSkills();
                      setOpenNav(false);
                    }}
                    className="hover:opacity-80 transition duration-200 cursor-pointer"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => {
                      scrollToContact();
                      setOpenNav(false);
                    }}
                    className="hover:opacity-80 transition duration-200 cursor-pointer"
                  >
                    Contact
                  </button>
                </div>
                {/* socials */}
                <div className="flex flex-col items-start space-y-7 text-center">
                  <h3
                    className={`text-[16px] md:text-[18px] ${
                      darkMode ? "text-gray-300" : "text-black"
                    }`}
                  >
                    Socials
                  </h3>
                  <a
                    id="linkedin"
                    href="#"
                    target="_blank"
                    className="underline hover:opacity-80 transition duration-300"
                  >
                    LinkedIn
                  </a>
                  <a
                    id="github"
                    href="https://github.com/Ayungcodes"
                    target="_blank"
                    className="underline hover:opacity-80 transition duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    id="twitter"
                    href="https://x.com/Ayungclassics"
                    target="_blank"
                    className="underline hover:opacity-80 transition duration-300"
                  >
                    Twitter/X
                  </a>
                  <a
                    id="instagram"
                    href="https://www.instagram.com/ayungclassic/"
                    target="_blank"
                    className="underline hover:opacity-80 transition duration-300"
                  >
                    Instagram
                  </a>
                  <a
                    id="fiverr"
                    href="https://www.fiverr.com/s/0bxeZ3v"
                    target="_blank"
                    className="underline hover:opacity-80 transition duration-300"
                  >
                    Fiverr
                  </a>
                </div>
              </div>

              <div className="mx-auto duration-200 hover:scale-95 md:text-xl">
                <button
                  onClick={() => {
                    scrollToContact();
                    setOpenNav(false);
                  }}
                  className={`py-1 px-7 md:px-12 rounded-4xl bg-[#635bff] transition duration-300 cursor-pointer ${
                    darkMode ? "hover:opacity-80" : "hover:bg-black text-white"
                  } animate-pulse`}
                >
                  Hire Me
                </button>
              </div>
              {/* footer for mobile menu area */}
              <div className="absolute bottom-0 flex items-center w-screen h-10 p-2 border-gray-800 text-[14px] lg:justify-center md:text-xl botttom-0">
                <h2>
                  Crafted by{" "}
                  <span className="text-[#635bff]/90">Gaius Emmanuel.</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* welcome section */}
      <div
        ref={welcomeRef}
        className={`flex flex-col space-y-16 h-[100vh] w-screen items-center justify-center ${
          openNav ? "blur-sm" : "blur-none"
        }`}
      >
        <p className="text-2xl md:text-[26px]">Hi there!</p>
        <div className="flex flex-col justify-center items-center space-y-3">
          <h1 className="text-2xl tracking-tight md:text-[32px]">
            I'm <span className="font-semibold">Gaius Emmanuel</span>
          </h1>
          <p
            className={`mx-8 text-lg text-center tracking-tight md:text-[22px] leading-7 ${
              darkMode ? "text-gray-300" : "text-black"
            }`}
          >
            A{" "}
            <span className="text-[#635bff] font-semibold">
              Frontend Developer
            </span>{" "}
            with a passion for clean code and seamless user experience.
          </p>
          <div className="flex items-center gap-2 text-center">
            <button
              onClick={scrollToProjects}
              className={`py-1 px-8 bg-[#635bff] text-white rounded-3xl transition-all duration-200 md:text-xl mt-7 hover:scale-95 ${
                darkMode ? "hover:opacity-80" : "hover:bg-black"
              } animate-pulse`}
            >
              View Projects
            </button>
            <button onClick={scrollToAbout}>
              <i className="fa-solid fa-arrow-down text-xl animate-bounce"></i>
            </button>
            <button
              onClick={scrollToContact}
              className={`py-1 px-8 border-[1.5px] border-[#635bff] rounded-3xl transition-all duration-200 md:text-xl mt-7 hover:scale-95 ${
                darkMode ? "hover:opacity-80" : "hover:opacity-80"
              } animate-pulse`}
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>

      {/* about section */}
      <div
        ref={aboutRef}
        className={`${
          darkMode ? "bg-black" : "bg-gray-100"
        } py-14 pb-32 shadow-md ${openNav ? "blur-sm" : "blur-none"}`}
      >
        <h1 className="text-center font-semibold text-3xl underline underline-offset-10 decoration-[#635bff] md:text-[36px] py-7">
          Developer in Focus
        </h1>
        <div className="lg:mx-14 flex flex-col items-center justify-center lg:space-y-0 -space-y-16 lg:flex-row lg:justify-around rounded-3xl">
          <div className="text-lg space-y-5 mx-6 md:text-xl lg:w-[48%]">
            <p>
              As a driven and innovative front-end developer with over 3 years
              of experience, I specialize in crafting captivating user
              interfaces that blend functionality with flawless design. With a
              strong foundation in modern CSS frameworks, JavaScript and React,
              I expertly bridge the gap between aesthetics and functionality,
              delivering seamless web experiences that engage and inspire.
            </p>

            <p>
              Passionate about staying at the forefront of industry trends, I
              continually expand my skill set to incorporate cutting-edge
              technologies and best practices. My expertise spans responsive
              design, component-driven development, and efficient coding
              methodologies. With a keen eye for detail and dedication to
              precision, I consistently deliver high-quality solutions that
              exceed client expectations.
            </p>

            <p>
              Collaboration and continuous learning are at the core of my
              approach. I thrive in team environments, sharing knowledge and
              expertise to drive collective growth. With a portfolio showcasing
              diverse projects and a relentless pursuit of excellence, I'm
              committed to pushing the boundaries of what's possible in
              front-end development.
            </p>
          </div>

          {/* photo card */}
          <div
            className={`flex flex-col justify-center space-y-1.5 items-center h-[60vh] md:h-[62vh] w-[90%] lg:w-[45%] lg:h-[60vh] ${
              darkMode ? "bg-gray-900/70" : "bg-gray-300/60"
            } mx-auto mt-32 shadow-sm rounded-2xl`}
          >
            <div className="relative h-[180px] md:h-[230px] md:w-[230px] lg:h-[200px] lg:w-[200px] w-[180px]">
              <img
                src={myImage}
                alt="my photo"
                className="h-full w-full object-cover rounded-full border-[1.5px] border-[#635bff]"
                onMouseEnter={handleHireTrue}
                onMouseLeave={handleHireFalse}
              />
              <div
                className={`absolute top-1/2 left-1/2 flex justify-center items-center -translate-x-1/2 -translate-y-1/2 text-center transition-all ease-in-out duration-500 ${
                  hireState
                    ? "opacity-100 bg-black/50 h-[180px] w-[180px] md:h-[230px] md:w-[230px] lg:h-[200px] lg:w-[200px] border-[1.5px] border-[#635bff] rounded-full"
                    : "h-0 opacity-0"
                }`}
              >
                <button
                  onClick={scrollToContact}
                  className="cursor-pointer bg-[#635bff] py-1 px-4 rounded-4xl transition-all duration-200 hover:scale-95 md:text-xl"
                >
                  <a href="#hire-me">Hire Me</a>
                </button>
              </div>
            </div>
            <h1 className="text-[26px] md:text-3xl font-semibold">
              Gaius Emmanuel
            </h1>
            <h2 className="-mt-1 text-[#635bff] font-semibold text-[20px] md:text-[24px]">
              Frontend Web Developer
            </h2>
            <p className="text-center mx-4 -mt-1 text-lg md:text-xl">
              I turn ideas into smooth, interactive experiences. Code is my
              language and the browser is my canvas.
            </p>
          </div>
        </div>
      </div>

      {/* projects */}
      <div
        ref={projectsRef}
        className={`${
          darkMode ? "bg-black" : "bg-gray-100"
        } py-14 shadow-md mt-40 ${openNav ? "blur-sm" : "blur-none"}`}
      >
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-semibold text-center underline underline-offset-10 decoration-[#635bff] md:text-[36px]">
            Featured Projects
          </h1>
          <p className="text-center mx-4 lg:mx-8 text-lg md:text-xl">
            I love turning ideas into interactive, user-friendly experiences.
            These projects highlight my growth, creativity, and ability to bring
            concepts to life on the web.
          </p>
        </div>

        <div className="flex flex-col lg:justify-around justify-center items-center mx-4 space-y-8">
          <div
            className={`flex flex-col lg:flex-row justify-center items-center lg:space-x-14 md:w-[80vw] space-y-4 mx-auto mt-12 rounded-2xl`}
          >
            <img
              src={savora}
              alt="savora"
              className="w-full lg:w-[50vw] transition-all duration-200 hover:scale-102 hover:opacity-95"
            />
            <div className="space-y-2 lg:space-y-7">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
                Savora
              </h1>
              <p className="md:text-[17px]">
                Crafted in React and Tailwind, this piece combines minimalist
                design with a luxurious atmosphere and fluid motion. Every
                element moves with purpose — a perfect balance between art,
                code, and modern digital craftsmanship.
              </p>
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

          <div
            className={`flex flex-col lg:flex-row justify-center items-center lg:space-x-14 md:w-[80vw] space-y-4 mx-auto mt-12 rounded-2xl`}
          >
            <img
              src={cookieJar}
              alt="The Cookie Jar"
              className="w-full lg:w-[50vw] transition-all duration-200 hover:scale-102 hover:opacity-95"
            />
            <div className="space-y-2 lg:space-y-7">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
                The Cookie Jar
              </h1>
              <p className="md:text-[17px]">
                The Cookie Jar is a playful and responsive cookie shop built
                using React and TailwindCSS. Every detail — from the animations
                to the color palette — was crafted to give it a warm, inviting
                bakery feel while keeping it fast, modern, and buttery smooth on
                any device.
              </p>
              <a
                href="https://cookie-jar-mu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm md:text-[16px] font-medium transition-all duration-200 hover:opacity-80"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div
            className={`flex flex-col lg:flex-row justify-center items-center lg:space-x-14 md:w-[80vw] space-y-4 mx-auto mt-12 rounded-2xl`}
          >
            <img
              src={luxuryWatch}
              alt="Luxury watch site"
              className="w-full lg:w-[50vw] transition-all duration-200 hover:scale-102 hover:opacity-95"
            />
            <div className="space-y-2 lg:space-y-7">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
                Luxury Watch E-commerce Site
              </h1>
              <p className="md:text-[17px]">
                A luxury watch shop built with React and Tailwind CSS, blending
                performance and design into a smooth, elegant experience. Every
                scroll, hover, and transition mirrors the precision and polish
                of the timepieces themselves.
              </p>
              <a
                href="https://luxury-watch-shop-neon.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm md:text-[16px] font-medium transition-all duration-200 hover:opacity-80"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mx-auto flex justify-center duration-200 hover:scale-95 mt-12">
            <a
              id="hire-nav"
              href="#hire"
              className={`py-1 px-7 md:text-xl rounded-4xl bg-[#635bff] transition duration-300 cursor-pointer ${
                darkMode ? "hover:opacity-80" : "hover:bg-black text-white"
              } animate-pulse`}
            >
              View All
            </a>
          </div>
        </div>
      </div>

      {/* tech stack */}
      <div
        ref={skillsRef}
        className={`${
          darkMode ? "bg-black" : "bg-gray-100"
        } py-14 shadow-md mt-40 ${openNav ? "blur-sm" : "blur-none"}`}
      >
        <div className="flex flex-col justify-center items-center space-y-6 mx-6">
          <div className="flex flex-col gap-4 justify-center items-center tracking-tight">
            <h1 className="text-3xl font-semibold text-center underline underline-offset-10 decoration-[#635bff] md:text-[36px]">
              Technologies I Use
            </h1>
            <p className="text-lg text-center tracking-tight md:text-xl">
              These are the tools and technologies I work with to design, build,
              and deploy efficient, scalable, and user-friendly applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-evenly items-center text-sm md:text-[16px]">
            <div
              className={`flex flex-col justify-center items-center shadow-sm cursor-pointer hover:scale-105 transition duration-200 w-[75px] h-[90px] md:w-[85px] md:h[100] m-3 rounded-2xl p-3 ${
                darkMode ? "bg-gray-900/70" : "bg-gray-300/60"
              }`}
            >
              <img className="w-full" src={htmlIcon} alt="HTML5" />
              HTML5
            </div>

            <div
              className={`flex flex-col justify-center items-center shadow-sm cursor-pointer hover:scale-105 transition duration-200 w-[75px] h-[90px] md:w-[85px] md:h[100] m-3 rounded-2xl p-3 ${
                darkMode ? "bg-gray-900/70" : "bg-gray-300/60"
              }`}
            >
              <img className="w-full" src={cssIcon} alt="CSS3" />
              CSS3
            </div>

            <div
              className={`flex flex-col justify-center items-center shadow-sm cursor-pointer hover:scale-105 transition duration-200 w-[75px] h-[90px] md:w-[85px] md:h[100] m-3 rounded-2xl p-3 ${
                darkMode ? "bg-gray-900/70" : "bg-gray-300/60"
              }`}
            >
              <img className="w-full" src={jsIcon} alt="JS" />
              JS
            </div>

            <div
              className={`flex flex-col justify-center items-center shadow-sm cursor-pointer hover:scale-105 transition duration-200 w-[75px] h-[90px] md:w-[85px] md:h[100] m-3 rounded-2xl p-3 ${
                darkMode ? "bg-gray-900/70" : "bg-gray-300/60"
              }`}
            >
              <img className="w-full" src={tailwindIcon} alt="Tailwind" />
              Tailwind
            </div>

            <div
              className={`flex flex-col justify-center items-center shadow-sm cursor-pointer hover:scale-105 transition duration-200 w-[75px] h-[90px] md:w-[85px] md:h[100] m-3 rounded-2xl p-3 ${
                darkMode ? "bg-gray-900/70" : "bg-gray-300/60"
              }`}
            >
              <img className="w-full" src={reactIcon} alt="React" />
              React
            </div>
            <div
              className={`flex flex-col justify-center items-center shadow-sm cursor-pointer hover:scale-105 transition duration-200 w-[75px] h-[90px] md:w-[85px] md:h[100] m-3 rounded-2xl p-3 ${
                darkMode ? "bg-gray-900/70" : "bg-gray-300/60"
              }`}
            >
              <img className="w-full" src={gitIcon} alt="Git" />
              Git
            </div>
          </div>

          <div
            className={`flex flex-col justify-center items-center shadow-sm h-40 w-[87vw] rounded-4xl text-center text-md md:h-48 md:w-[440px] transition-all duration-200 hover:scale-105 ${
              darkMode ? "bg-gray-900/70" : "bg-gray-300/60"
            }`}
          >
            <div className="py-3 space-y-0.5 mx-3">
              <h2 className="text-md font-semibold md:text-[25px]">
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
      </div>

      {/* connect/hire me */}
      <div
        ref={contactRef}
        className={`${
          darkMode ? "bg-black" : "bg-gray-100"
        } py-14 mt-32 shadow-md ${openNav ? "blur-sm" : "blur-none"}`}
      >
        <div className="flex flex-col space-y-5 items-center justify-center mx-6">
          <h1 className="text-3xl md:text-[36px] font-semibold underline underline-offset-10 decoration-[#635bff]">
            Let’s Create Magic
          </h1>
          <p className="text-center text-lg md:text-xl lg:mx-36">
            Creativity isn’t just a skill — it’s an energy. Together, we’ll
            channel that energy into something beautiful, bold, and alive. I’ll
            take your vision and code it into reality, blending art and tech to
            create pure digital magic.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-7 lg:flex-row lg:space-x-14">
          <div className="flex flex-col space-y-8 items-center justify-center h-[48vh] w-[90%] lg:w-[37vw]">
            <div
              className={`flex flex-col justify-center w-full h-full ${
                darkMode ? "bg-gray-900/70" : "bg-gray-300/60"
              } mx-auto mt-12 shadow-sm rounded-2xl transition-all duration-200 p-6 items-start space-y-4`}
            >
              <h1 className="text-[25px] font-semibold mt-10 mb-7 tracking-tight md:text-3xl underline underline-offset-10 decoration-[#635bff]">
                Let's Connect
              </h1>
              <div className="-ml-1">
                <div className="flex flex-row items-center gap-2">
                  <i className="fa-regular fa-id-badge text-3xl md:text-4xl"></i>
                  <div className="text-lg -space-y-1">
                    <h2 className="text-lg tracking-tight">Gaius Emmanuel</h2>
                    <h3 className="text-gray-600">Frontend Web Developer</h3>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-row items-center gap-2 -ml-1">
                  <i className="fa-regular fa-user text-[29px] md:text-4xl"></i>
                  <div className="text-lg">
                    <div className="flex flex-col -space-y-1">
                      <a
                        href="mailto:gaiusemmanuel12@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="group">
                          <span className="transition-all duration-300 hover:opacity-65">
                            gaiusemmanuel12@gmail.com
                          </span>
                        </div>
                      </a>
                      <a
                        href="tel:+2347011372616"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <div className="group">
                          <span className="transition-all duration-300 hover:opacity-65">
                            +234 701 137 2616
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-3 mb-6">
                <div className="-ml-2">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin text-[42px] hover:text-gray-600 hover:scale-110 transition duration-200"></i>
                  </a>
                  <a
                    href="https://github.com/Ayungcodes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github text-[42px] hover:text-gray-600 hover:scale-110 transition duration-200"></i>
                  </a>
                  <a
                    href="https://x.com/Ayungclassics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-x-twitter text-[42px] hover:text-gray-600 hover:scale-110 transition duration-200"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/ayungclassic/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram text-[42px] hover:text-gray-600 hover:scale-110 transition duration-200"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* contact form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-8 mt-9 w-[90%] lg:w-[35vw]"
          >
            <h2 className="text-left text-[25px] font-semibold md:text-3xl underline underline-offset-10 decoration-[#635bff]">
              Shoot a message
            </h2>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className={`rounded-xl p-2.5 w-full focus:border-0 ${
                darkMode ? "bg-gray-900/70" : "bg-gray-300/60"
              }`}
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Adress"
              className={`rounded-xl p-2.5 w-full ${
                darkMode ? "bg-gray-900/70" : "bg-gray-300/60"
              }`}
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="Let’s start the conversation..."
              className={`rounded-xl p-2.5 w-full h-28 ${
                darkMode ? "bg-gray-900/70" : "bg-gray-300/60"
              }`}
              required
            ></textarea>
            <button
              type="submit"
              disabled={status === "sending"}
              className="py-1 px-20 bg-[#635bff] cursor-pointer rounded-full transition duration-300 md:px-30 md:text-xl hover:scale-95 animate-pulse"
            >
              {status === "sending" ? "Shooting..." : "Shoot"}
            </button>
            {status === "success" && (
              <p className="text-green-500 text-sm mt-2">
                Message sent successfully 🎉
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm mt-2">
                Oops! Something went wrong. Try again.
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center mt-32">
        <button onClick={scrollToWelcome}>
          <i className="fa-solid fa-arrow-up text-xl animate-bounce"></i>
        </button>
      </div>

      {/* footer */}
      <footer className="w-screen shadow-2xl">
        <div
          className={`flex items-center w-screen h-full p-7 text-md mt-30 justify-center md:text-xl shadow-xl ${
            darkMode ? "bg-gray-900/70" : "bg-gray-300/60"
          } ${openNav ? "blur-sm" : "blur-none"}`}
        >
          <h2>©Copyright - Gaius Emmanuel 2025</h2>
        </div>
      </footer>
    </div>
  );
};

export default App;

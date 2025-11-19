import { useState, useRef, useEffect } from "react";
import Lenis from "lenis";
// import { BallTriangle } from "react-loader-spinner";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

import NavBar from "./sections/NavBar";
import AboutSection from "./sections/AboutSection";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import ContactMe from "./sections/ContactMe";
import CosmicHero from "./sections/CosmicHero";
import Starfield from "../components/Starfield";
gsap.registerPlugin(ScrollSmoother, ScrollSmoother, ScrollTrigger);

const App = () => {
  const [state, setState] = useState({
    openNav: false,
    hireState: false,
    status: "idle",
    // loading: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      status: "sending",
    }));

    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/mrbarzay", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setState((prevState) => ({
        ...prevState,
        status: "success",
      }));
      e.target.reset();
    } else {
      setState((prevState) => ({
        ...prevState,
        status: "error",
      }));
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

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setTimeout(() => {
  //       setState((prevState) => ({
  //         ...prevState,
  //         loading: false,
  //       }));
  //     }, 2000);
  //   };

  //   window.addEventListener("load", handleLoad);

  //   return () => window.removeEventListener("load", handleLoad);
  // }, []);

  const welcomeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const logoRef = useRef();

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleNav = () => {
    setState((prevState) => ({
      ...prevState,
      openNav: !prevState.openNav,
    }));
  };

  const handleHireTrue = () => {
    setState((prevState) => ({
      ...prevState,
      hireState: !prevState.hireState,
    }));
  };

  const handleHireFalse = () => {
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        hireState: false,
      }));
    }, 3000);
  };

  return (
    <main
      className={`min-h-screen max-w-[100vw] overflow-x-hidden selection:bg-gray-500`}
    >
      {state.loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#0d1117] z-99999">
          {/* <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#635bff"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            /> */}
        </div>
      )}

      <Starfield />
      {/* navigation area */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <NavBar
            scrollToSection={scrollToSection}
            refs={{
              welcomeRef,
              aboutRef,
              projectsRef,
              skillsRef,
              contactRef,
              logoRef,
            }}
            state={state}
            setState={setState}
            toggleNav={toggleNav}
          />

          {/* welcome section */}
          <CosmicHero state={state} />
        </div>
      </div>

      {/* about section */}
      <AboutSection
        state={state}
        refs={{ aboutRef, contactRef }}
        handleHireTrue={handleHireTrue}
        handleHireFalse={handleHireFalse}
        scrollToSection={scrollToSection}
      />

      {/* projects */}
      <Projects state={state} projectsRef={projectsRef} />

      {/* tech stack */}
      <TechStack state={state} skillsRef={skillsRef} />

      {/* connect/hire me */}
      <ContactMe
        state={state}
        handleSubmit={handleSubmit}
        contactRef={contactRef}
      />

      <div className="flex justify-center items-center mt-32">
        <div
          className={`w-7 h-11 md:w-9 md:h-14 rounded-full border-2 backdrop-blur-sm bg-[#1e1e1e]/40 border-[#32FF87]/70 shadow-[0_0_15px_#0A3A1D] flex justify-center pt-3`}
        >
          <div
            className={`w-1 h-2 md:h-2.5 md:w-1 bg-[#32FF87] rounded-full animate-scroll`}
          ></div>
        </div>
      </div>

      {/* footer */}
      <footer className="w-screen shadow-2xl font-[Sora]">
        <div
          className={`flex items-center w-screen h-full p-7 text-[13px] mt-30 justify-center md:text-[18px] shadow-xl bg-[#1f1f1f]/40 border-t-[3px] border-stone-800 ${
            state.openNav ? "blur-sm" : "blur-none"
          }`}
        >
          <h2>©Copyright - Gaius Emmanuel 2025</h2>
        </div>
      </footer>
    </main>
  );
};

export default App;

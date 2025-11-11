import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const WelcomeSection = ({ state, refs, scrollToSection }) => {
  useGSAP(() => {
    const welcomeTextSlipt = SplitText.create(welcomeRef, {
      type: "chars",
    });
    const tl = gsap.timeline({
      delay: 1,
    });
    tl.to(".hero-text", {
      opacity: 1,
      y: 25,
      ease: "power1.inOut",
    });
    tl.to(
      ".hero-main-text",
      {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ-out",
      },
      "-=0.5"
    );
    tl.from(welcomeTextSlipt.chars, {
      yPercent: 150,
      stagger: 0.05,
      ease: "power2.out",
    });
  });

  const { welcomeRef, aboutRef, projectsRef, contactRef } = refs;

  return (
    <section
      ref={welcomeRef}
      className={`hero-text opacity-0 flex flex-col space-y-16 h-[100vh] w-screen items-center justify-center ${
        state.openNav ? "blur-sm" : "blur-none"
      }`}
    >
      <p className="text-2xl md:text-[26px] font-[Ramilas]">Hi there!</p>
      <div className="flex flex-col justify-center items-center space-y-3">
        <h1 className="text-2xl tracking-tight md:text-[32px]">
          I'm{" "}
          <span className="font-semibold font-[Ramilas]">Gaius Emmanuel</span>
        </h1>
        <p
          style={{
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%);",
          }}
          className={`hero-main-text mx-8 md:mx-24 lg:mx-36 text-lg text-center tracking-tight md:text-[22px] leading-7 ${
            state.darkMode ? "text-gray-300" : "text-black"
          }`}
        >
          A{" "}
          <span className="text-[#635bff] selection:bg-gray-300 font-semibold font-[Ramilas]">
            Frontend Developer
          </span>{" "}
          with a passion for clean code and seamless user experience.
        </p>
        <div className="flex items-center gap-1.5 text-center">
          <button
            onClick={() => scrollToSection(projectsRef)}
            className={`py-1 px-5 md:px-8 bg-[#635bff] text-white rounded-3xl transition-all duration-200 md:text-xl mt-7 hover:scale-95 ${
              state.darkMode ? "hover:opacity-80" : "hover:bg-black"
            } animate-pulse`}
          >
            View Projects
          </button>
          <button onClick={() => scrollToSection(aboutRef)}>
            <i className="fa-solid fa-arrow-down text-[18px] md:text-xl animate-bounce"></i>
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className={`py-1 px-5 md:px-8 border-[1.5px] border-[#635bff] rounded-3xl transition-all duration-200 md:text-xl mt-7 hover:scale-95 ${
              state.darkMode ? "hover:opacity-80" : "hover:opacity-80"
            } animate-pulse`}
          >
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

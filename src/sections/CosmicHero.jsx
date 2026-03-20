import { useEffect, useRef } from "react";
import gsap from "gsap";
import Starfield from "../components/Starfield";

function CosmicHero({
  state,
  welcomeRef,
  contactRef,
  projectsRef,
  scrollToSection,
}) {
  const textRef = useRef(null);

  const starRef = useRef(null);
  useEffect(() => {
    if (!state.loading) {
      const tl = gsap.timeline();

      gsap.set(starRef.current, {
        x: -300,
        y: -120,
        opacity: 0,
        scale: 0.6,
        rotate: 20,
      });

      gsap.set(textRef.current, {
        opacity: 0,
        scale: 0.6,
      });

      tl.to(starRef.current, {
        opacity: 1,
        duration: 0.2,
      })
        .to(starRef.current, {
          x: window.innerWidth / 2 - 40,
          y: 80,
          duration: 0.9,
          ease: "power3.out",
        })

        .to(starRef.current, {
          scale: 3.5,
          opacity: 0,
          duration: 0.25,
          ease: "power2.inOut",
        })

        .to(
          textRef.current,
          {
            opacity: 1,
            y: 40,
            scale: 0.95,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.1",
        );
    }
  }, [state.loading]);

  return (
    <section
      ref={welcomeRef}
      className={`w-full min-h-screen flex flex-col items-center justify-center ${
        state.openNav ? "blur-sm" : "blur-none"
      }`}
    >
      <div className="w-full h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 md:gap-14">
        <Starfield state={state} />
        <div className="w-[85vw] md:w-[70vw] lg:w-[60vw]">
          <div ref={starRef} className="absolute opacity-0 pointer-events-none">
            {/* head */}
            <div className="meteor-head" />

            {/* tail */}
            <div className="meteor-tail" />
          </div>
          <div
            ref={textRef}
            className="flex flex-col justify-center items-center opacity-0 scale-90 gap-5 text-center"
          >
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#32FF87]/30 bg-[#32FF87]/5 text-[#32FF87] text-[9px] font-semibold font-[Sora] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#32FF87] shadow-[0_0_6px_#32FF87] animate-pulse" />
              Available for freelance & full-time roles
            </div>

            <h1 className="text-3xl md:text-6xl font-extrabold font-[Sora] leading-tight max-w-3xl">
              I'm{" "}
              <span className="text-[#32FF87] drop-shadow-[0_0_12px_rgba(50,255,135,0.4)]">
                Gaius Emmanuel
              </span>{" "}
              — I build fast, beautiful web apps that help businesses grow.
            </h1>

            <div className="w-10 h-0.5 rounded-full bg-gradient-to-r from-[#32FF87] to-transparent opacity-60" />

            <p className="text-sm md:text-base font-[Sora] text-white/50 max-w-lg leading-relaxed">
              <span className="text-white/80 font-semibold">
                React · Node.js · MongoDB
              </span>{" "}
              · Full-stack developer crafting responsive, high-quality
              experiences for startups and businesses worldwide.
            </p>

            <div className="flex gap-3 flex-wrap justify-center mt-1">
              <button
                onClick={() => scrollToSection(projectsRef)}
                className="px-6 py-2 rounded-full bg-[#32ff87] text-black font-bold font-[Sora] text-sm hover:shadow-[0_0_20px_rgba(50,255,135,0.4)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                See my work
              </button>

              <button
                onClick={() => scrollToSection(contactRef)}
                className="px-6 py-2 rounded-full border border-[#32FF87]/40 text-white font-bold font-[Sora] text-sm hover:border-[#32FF87] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          className={`w-7 h-11 md:w-9 md:h-14 rounded-full border-2 backdrop-blur-sm bg-[#1e1e1e]/40 border-[#32FF87]/70 shadow-[0_0_15px_#0A3A1D] flex justify-center pt-3`}
        >
          <div
            className={`w-1 h-2 md:h-2.5 md:w-1 bg-[#32FF87] rounded-full animate-scroll`}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default CosmicHero;

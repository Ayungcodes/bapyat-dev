import { useEffect, useRef } from "react";
import gsap from "gsap";
import Starfield from "../../components/Starfield";

function CosmicHero({ state }) {
  const textRef = useRef(null);
  const welcomeTextRef = useRef(null);

  const starRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(starRef.current, {
      x: -200,
      y: -50,
      opacity: 0,
      scale: 0.3,
      filter: "blur(2px)",
    });

    gsap.set(textRef.current, {
      opacity: 0,
      scale: 0.6,
    });

    tl.to(starRef.current, {
      opacity: 1,
      duration: 1,
    })
      .to(starRef.current, {
        x: window.innerWidth / 2 - 50,
        y: 60,
        scale: 0.6,
        duration: 1.5,
        ease: "power3.out",
      })

      .to(starRef.current, {
        scale: 2.5,
        opacity: 0,
        duration: 0.3,
        filter: "blur(8px)",
        ease: "power2.inOut",
      })

      .to(
        textRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.2"
      );
  }, []);

  useEffect(() => {
    const letters = welcomeTextRef.current.querySelectorAll("span");

    gsap.to(letters, {
      filter: "drop-shadow(0 0 6px rgba(99,91,255,0.6))",
      duration: 2.8,
      yoyo: true,
      color: "#32ff87",
      repeat: -1,
      ease: "sine.inOut",
      stagger: 0.06,
      overwrite: "auto",
    });
  }, []);

  return (
    <section
      className={`w-full min-h-screen flex flex-col items-center justify-center ${
        state.openNav ? "blur-sm" : "blur-none"
      }`}
    >
      <div className="w-full h-[80vh] flex flex-col mt-11 md:flex-row items-center justify-center px-6 md:gap-14">
        <Starfield />
        <div className="w-[85vw] md:w-[70vw] lg:w-[60vw]">
          <div
            ref={starRef}
            className="absolute w-3 h-3 rounded-full bg-white shadow-[0_0_15px_5px_white]"
          ></div>
          <div
            ref={textRef}
            className="flex flex-col justify-center items-center"
          >
            <h1
              ref={welcomeTextRef}
              className={`text-[26px] font-[Cormorant] font-semibold flex flex-wrap gap-[1px]`}
            >
              <span>H</span>
              <span>i</span>
              <span>&nbsp;</span>
              <span>a</span>
              <span>n</span>
              <span>d</span>
              <span>&nbsp;</span>
              <span>w</span>
              <span>e</span>
              <span>l</span>
              <span>c</span>
              <span>o</span>
              <span>m</span>
              <span>e</span>
              <span>🧙🏾‍♂️</span>
            </h1>

            <p className="text-center text-[30px] md:text-[38px] font-extrabold font-[Sora] leading-11">
              I'm{" "}
              <span
                className={`text-transparent font-extralight [-webkit-text-stroke:2px_#fff]`}
              >
                Gaius Emmanuel,
              </span>{" "}
              a Frontend Web Developer &{" "}
              <span className="">
                Musical Artist blending code with cosmic energy to craft
                interfaces that feel alive.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center animate-bounce">
        <div
          className={`w-7 h-11 rounded-full border-2 backdrop-blur-sm bg-[#1e1e1e]/40 border-[#32FF87]/70 shadow-[0_0_15px_#0A3A1D] flex justify-center pt-3`}
        >
          <div
            className={`w-1 h-2 bg-[#32FF87] rounded-full animate-scroll`}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default CosmicHero;

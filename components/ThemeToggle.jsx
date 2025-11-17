import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.to(iconRef.current, {
      duration: 0.6,
      morphSVG: dark ? "#moon" : "#sun",
      ease: "power2.inOut",
      fill: dark ? "#ffffff" : "#000000",
    });

    // Animate background color
    gsap.to("html", {
      duration: 0.6,
      backgroundColor: dark ? "#1e1e1e" : "#ffffff",
      color: dark ? "#ffffff" : "#101010",
      ease: "power2.inOut",
    });
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent cursor-pointer"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        ref={iconRef}
        className="transition-all duration-300"
      >
        {/* SUN SHAPE */}
        <path
          id="sun"
          d="M50 30a20 20 0 1 1 0 40a20 20 0 1 1 0-40z
             M50 5v15 M50 80v15
             M5 50h15 M80 50h15
             M20 20l10 10 M70 70l10 10
             M20 80l10-10 M70 20l10-10"
          fill="currentColor"
        />

        {/* MOON SHAPE */}
        <path
          id="moon"
          d="M65 50a30 30 0 1 1-20-48
             A24 24 0 1 0 65 50z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default ThemeToggle;

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Starfield = ({ state, count = 120 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!state.loading) {
      const stars = gsap.utils.toArray(containerRef.current.children);

      // Twinkle anim
      gsap.to(stars, {
        opacity: () => gsap.utils.random(0.2, 1),
        scale: () => gsap.utils.random(1, 1.7),
        duration: () => gsap.utils.random(1.5, 3),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          each: 0.03,
          repeat: -1,
        },
      });

      gsap.to(stars, {
        x: () => gsap.utils.random(-15, 15),
        y: () => gsap.utils.random(-15, 15),
        duration: () => gsap.utils.random(8, 14),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, [state.loading]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Create stars */}
      {[...Array(count)].map((_, i) => {
        const size = gsap.utils.random(1, 3);
        const layer = gsap.utils.random(1, 3);
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: size + "px",
              height: size + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: layer === 1 ? 0.9 : layer === 2 ? 0.6 : 0.3,
              filter: layer === 1 ? "drop-shadow(0 0 6px white)" : "none",
            }}
          />
        );
      })}
    </div>
  );
};

export default Starfield;

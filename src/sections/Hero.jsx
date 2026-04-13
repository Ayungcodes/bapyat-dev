function Hero({
  state,
  welcomeRef,
  contactRef,
  projectsRef,
  scrollToSection,
}) {
  return (
    <section
      ref={welcomeRef}
      className={`w-full min-h-screen flex items-center px-6 md:px-12 ${
        state.openNav ? "blur-sm" : "blur-none"
      }`}
    >
      <div className="max-w-3xl w-full flex flex-col items-start gap-6">
        
        <p className="text-[15px] text-yellow-600 font-medium tracking-wide">
          Hello World
        </p>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          I’m{" "}
          <span className="text-yellow-600">
            Gaius Emmanuel
          </span>
          <br />
          a full-stack web developer.
        </h1>

        {/* Subtext (short + clean) */}
        <p className="text-white/75 max-w-md text-[15px] md:text-base leading-relaxed">
          I build fast, responsive web apps that help businesses grow and stand out online.
        </p>

        {/* CTA */}
        <div className="flex gap-3 mt-2">
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="px-6 py-2 rounded-full bg-yellow-600 text-black font-semibold text-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            View Work
          </button>

          <button
            onClick={() => scrollToSection(contactRef)}
            className="px-6 py-2 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-yellow-600 hover:text-yellow-500 transition-all duration-200"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
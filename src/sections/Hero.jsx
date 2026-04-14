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
      className={`relative w-full min-h-screen flex items-center px-6 md:px-12 lg:px-24 overflow-hidden bg-black ${
        state.openNav ? "blur-sm" : "blur-none"
      }`}
    >
      {/* grid bg */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #404040 1px, transparent 1px),
            linear-gradient(to bottom, #404040 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
        }}
      />
      
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-yellow-600/15 animate-pulse duration-700 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full flex flex-col items-start gap-6">
        
        <p className="text-[15px] text-yellow-600 font-medium tracking-wide">
          <span className="text-white/60">—</span> Hello 👋🏾
        </p>

        {/* heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
          I’m{" "}
          <span className="text-yellow-600">
            Gaius Emmanuel
          </span>
          <br />
          a full-stack web developer.
        </h1>

        {/* subtext */}
        <p className="text-white/75 max-w-md text-[15px] md:text-base leading-relaxed">
          I build fast, responsive web apps that help businesses grow and stand out online.
        </p>

        {/* CTA */}
        <div className="flex gap-3 mt-2">
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="px-6 py-2 rounded-full bg-yellow-600 text-black font-semibold text-sm hover:-translate-y-0.5 hover:shadow-md hover:bg-white transition-all duration-300 cursor-pointer"
          >
            View Work
          </button>

          <button
            onClick={() => scrollToSection(contactRef)}
            className="px-6 py-2 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-yellow-600 hover:text-yellow-500 transition-all duration-200 cursor-pointer"
          >
            Contact
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;
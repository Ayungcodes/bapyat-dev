import myImage from '../assets/MyPhoto.JPG'

const AboutSection = ({state, refs, handleHireTrue, handleHireFalse, scrollToSection}) => {

  const { aboutRef, contactRef } = refs;

  return (
    <section
      ref={aboutRef}
      className={`border-t-[3px] border-b-[3px] border-stone-800 py-14 pb-28 shadow-md ${state.openNav ? "blur-sm" : "blur-none"}`}
    >
      <h1 className="text-center text-[33px] md:text-[38px] py-4 tracking-tight font-semibold font-[Sora]">
        Developer in Focus.
      </h1>
      <div className="lg:mx-14 flex flex-col items-center justify-center lg:space-y-0 -space-y-16 lg:flex-row lg:justify-around rounded-3xl">
        <div className="text-lg space-y-5 mx-6 md:text-xl lg:w-[48%]">
          <p className="aboutTxt">
            As a driven and innovative front-end developer with over 3 years of
            experience, I specialize in crafting captivating user interfaces
            that blend functionality with flawless design. With a strong
            foundation in modern CSS frameworks, JavaScript and React, I
            expertly bridge the gap between aesthetics and functionality,
            delivering seamless web experiences that engage and inspire.
          </p>

          <p className="aboutTxt">
            Passionate about staying at the forefront of industry trends, I
            continually expand my skill set to incorporate cutting-edge
            technologies and best practices. My expertise spans responsive
            design, component-driven development, and efficient coding
            methodologies. With a keen eye for detail and dedication to
            precision, I consistently deliver high-quality solutions that exceed
            client expectations.
          </p>

          <p className="aboutTxt">
            Collaboration and continuous learning are at the core of my
            approach. I thrive in team environments, sharing knowledge and
            expertise to drive collective growth. With a portfolio showcasing
            diverse projects and a relentless pursuit of excellence, I'm
            committed to pushing the boundaries of what's possible in front-end
            development.
          </p>
        </div>

        {/* photo card */}
        <div
          className={`flex flex-col justify-center space-y-1.5 items-center h-[59vh] md:h-[56vh] w-[91%] lg:w-[45%] lg:h-[60vh] bg-[#1f1f1f]/40 border-[2px] border-stone-800 mx-auto mt-32 shadow-sm rounded-2xl backdrop-blur-2xl`}
        >
          <div className="relative h-[180px] md:h-[230px] md:w-[230px] lg:h-[200px] lg:w-[200px] w-[180px]">
            <img
              src={myImage}
              alt="my photo"
              className="h-full w-full object-cover rounded-full border-[2px] border-[#32FF87] shadow-md"
              onMouseEnter={handleHireTrue}
              onMouseLeave={handleHireFalse}
            />
            <div
              className={`absolute top-1/2 left-1/2 flex justify-center items-center -translate-x-1/2 -translate-y-1/2 text-center transition-all ease-in-out duration-500 ${
                state.hireState
                  ? "opacity-100 bg-black/50 h-[180px] w-[180px] md:h-[230px] md:w-[230px] lg:h-[200px] lg:w-[200px] border-[1.5px] border-[#32FF87] rounded-full"
                  : "h-0 opacity-0"
              }`}
            >
              <button
                onClick={() => scrollToSection(contactRef)}
                className={`cursor-pointer bg-[#32FF87] rounded-4xl text-[#0A0A0A] py-1 px-4 transition-all duration-200 hover:scale-95 hover:bg-[#ffff] md:text-[18px]`}
              >
                <a href="#hire-me">Hire Me</a>
              </button>
            </div>
          </div>
          <h1 className="text-[26px] md:text-3xl font-semibold font-[Ramilas]">
            Gaius Emmanuel
          </h1>
          <h2 className="-mt-1 font-semibold text-[19px] md:text-[22px] font-[Ramilas]">
            Frontend Web Developer
          </h2>
          <p className="text-center mx-8 md:mx-16 -mt-1 text-lg md:text-xl">
            I turn ideas into smooth, interactive experiences. Code is my
            language and the browser is my canvas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

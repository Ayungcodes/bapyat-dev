const ContactMe = ({ state, handleSubmit, contactRef }) => {
  return (
    <div
      ref={contactRef}
      className={`border-t-[3px] border-b-[3px] border-stone-800 py-20 mt-32 shadow-md ${state.openNav ? "blur-sm" : "blur-none"} backdrop-blur-xl`}
    >
      <div className="flex flex-col space-y-2 items-center justify-center mx-6">
        <h1
          className="heading text-[33px] md:text-[38px] font-semibold tracking-tight font-[Sora]"
        >
          Let’s Create Magic.
        </h1>
        <p className="text-center text-lg md:text-xl mx-8 md:mx-24 lg:mx-36">
          Creativity isn’t just a skill — it’s an energy. Together, we’ll
          channel that energy into something beautiful, bold, and alive. I’ll
          take your vision and code it into reality, blending art and tech to
          create pure digital magic.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center space-y-7 lg:flex-row lg:space-x-14">
        <div className="flex flex-col space-y-8 items-center justify-center h-[36vh] lg:h-[38vh] w-[92%] md:w-[90%] lg:w-[40vw]">
          <div
            className={`flex flex-col justify-center w-full h-full bg-[#1f1f1f]/40 border-[2px] border-stone-800 mx-auto mt-12 shadow-sm rounded-2xl transition-all duration-200 p-6 items-start space-y-4 backdrop-blur-xl`}
          >
            <div className="flex flex-col justify-center md:mx-5 lg:mx-0 space-y-3 mt-4">
              <h1 className="text-[25px] font-semibold tracking-tight md:text-3xl font-[Sora]">
                Let's Connect:
              </h1>
              <div>
                <div className="flex flex-row items-center gap-2">
                  <i className="fa-regular fa-id-badge text-3xl md:text-4xl"></i>
                  <div className="text-[18px] md:text-xl -space-y-1">
                    <h2 className="tracking-tight">Gaius Emmanuel</h2>
                    <h3 className="text-gray-400 text-[15px] md:text-[18px]">
                      Frontend Web Developer
                    </h3>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-row items-center gap-2">
                  <i className="fa-regular fa-user text-[29px] md:text-4xl"></i>
                  <div className="text-[16px] md:text-xl">
                    <div className="flex flex-col -space-y-1">
                      <a
                        href="mailto:gaiusemmanuel12@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="group">
                          <span className="transition-all duration-500 hover:opacity-65">
                            gaiusemmanuel12@gmail.com
                          </span>
                        </div>
                      </a>
                      <a
                        href="tel:+2348137297521"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <div className="group">
                          <span className="transition-all duration-500 hover:opacity-65 tracking-tighter">
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
                <div className="space-x-1.5">
                  <a
                    href="https://www.linkedin.com/in/gaius-emmanuel-b10279202/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin text-[28px] hover:text-gray-400/95 hover:scale-105 transition duration-500"></i>
                  </a>
                  <a
                    href="https://github.com/Ayungcodes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github text-[28px] hover:text-gray-400/95 hover:scale-105 hover: transition duration-500"></i>
                  </a>
                  <a
                    href="https://x.com/Ayungclassics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-x-twitter text-[28px] hover:text-gray-400/95 hover:scale-105 transition duration-500"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/ayungclassic/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram text-[28px] hover:text-gray-400/95 hover:scale-105 transition duration-500"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-8 mt-9 w-[90%] lg:w-[28vw]"
        >
          <h2 className="text-left text-[25px] font-semibold md:text-3xl tracking-tight font-[Sora]">
            Shoot a message
          </h2>
          <div className="space-y-6">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className={`rounded-xl p-2.5 w-full focus:outline-1 focus:border-stone-700 outline-stone-800 bg-[#1f1f1f]/40 border-[2px] border-stone-800 backdrop-blur-2xl`}
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Adress"
              className={`rounded-xl p-2.5 w-full focus:outline-1 focus:border-stone-700 outline-stone-800 bg-[#1f1f1f]/40 border-[2px] border-stone-800 backdrop-blur-2xl`}
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="Let’s start the conversation..."
              className={`rounded-xl p-2.5 w-full h-24 focus:outline-1 focus:border-stone-700 outline-stone-800 resize-none bg-[#1f1f1f]/40 border-[2px] border-stone-800 backdrop-blur-2xl`}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={state.status === "sending"}
            className={`py-1 px-20 cursor-pointer transition duration-500 md:px-30 md:text-xl hover:scale-95 hover:bg-[#ffff] bg-[#32FF87] text-[#0a0a0a] rounded-full`}
          >
            {state.status === "sending" ? "Shooting..." : "Shoot"}
          </button>
          {state.status === "success" && (
            <p className="text-green-500 text-sm mt-2 text-center">
              Message sent successfully 🎉
            </p>
          )}
          {state.status === "error" && (
            <p className="text-red-500 text-sm mt-2 text-center">
              Oops! Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;

import { promises } from "../constants";

const PromiseSection = ({ state }) => {
  return (
    <section
      className={`overflow-hidden border-t-[3px] border-b-[3px] border-stone-800 shadow-md mt-40 ${
        state.openNav ? "blur-sm" : "blur-none"
      } space-y-16 flex flex-col justify-center py-20 sm:py-24 md:py-28`}
    >
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-5">
          <h1 className="text-[33px] md:text-[38px] font-semibold font-[Sora]">
            How I Work.
          </h1>
        </div>
        {/* promise cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promises.map((promise) => (
            <div
              key={promise.id}
              className="flex gap-3 bg-stone-900 border border-stone-700 rounded-xl p-6 mx-3 md:mx-5 hover:border-stone-500 transition-all duration-300"
            >
              <span className="text-[#32FF87] text-xl">✔</span>
              <div>
                <h2 className="text-lg font-bold mb-2">{promise.title}</h2>
                <p className="text-sm text-stone-300">{promise.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;

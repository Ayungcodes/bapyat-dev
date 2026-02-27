import { useEffect, useState } from "react";

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      
      {/* roller */}
      <div className="relative w-20 h-20">
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent animate-spin"
          style={{
            borderTopColor: "#32FF87",
            borderRightColor: "#32FF87",
          }}
        />
      </div>

      {/* site Name */}
      <h1
        className="mt-6 text-lg tracking-widest font-semibold"
        style={{ color: "#32FF87" }}
      >
        bapyat.dev
      </h1>
    </div>
  );
}

export default Loader;
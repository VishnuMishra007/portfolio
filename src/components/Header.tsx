import { useState } from "react";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md min-w-100vw h-20">
      <div>
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-pink-400 to-blue-600 drop-shadow-lg text-center tracking-wide">
            Vishnu Mishra, Sr. Consultant (Development) @Infogain
          </h1>
            {/* Hamburger Icon (visible on small screens) */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
          </button>

          {/* Nav Items (visible on medium+ screens) */}
          <nav className="hidden md:flex gap-6 font-semibold">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-2 py-1 rounded-lg cursor-pointer hover:bg-[#0c718de3] hover:text-white hover:border transform hover:scale-105 transition-transform duration-200 will-change-transform overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Menu (visible when hamburger is clicked) */}
        {isOpen && (
          <nav className={`md:hidden fixed top-20 right-0 h-fit w-40 shadow-lg z-50 rounded-lg bg-transparent transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="flex flex-col px-6 py-8 gap-2 font-semibold rounded-lg">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <><a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-500 transition-colors bg-white w-30 rounded-lg"
              >
                {item}
              </a>
              <hr/>
              </>
            ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

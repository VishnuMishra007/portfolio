// export const Header: React.FC = () => {
//   return (
//     <header className="fixed flex justify-between min-w-100vw top-0 z-50 w-full h-17">
//       {/* // <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex "> */}
//       <h1 className="p-1 flex text-[clamp(0.5rem, 1vw, 1rem)] font-semibold min-w-[20vw]">
//         Vishnu Mishra
//       </h1>
//       <nav className="flex justify-end min-w-[75vw] max-h-fit text-[clamp(1rem, 2.5vw, 2rem)] font-bold">
//         <ul className="flex gap-x-3 font-semibold">
//           {["Home", "About", "Projects", "Contact"].map((item, idx) => (
//             <li
//               key={idx}
//               className="px-2 py-1 rounded-lg cursor-pointer hover:bg-[#0c718de3] hover:text-white hover:border transform hover:scale-105 transition-transform duration-200 will-change-transform overflow-hidden text-ellipsis whitespace-nowrap"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

import { useState } from "react";

// import { useState } from "react";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md min-w-100vw h-20">
      <div>
        <div className="flex items-center justify-between px-6 py-4"> {/* from-[#609bbe] via-pink-500 to-[#499529] */}
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
          <nav className="md:hidden px-6 pb-4 flex flex-col gap-4 font-semibold">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

import { useCallback, useEffect, useState } from "react";
import { headingText } from "../constants/constants";
export const ProfileDescription: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  const updateText = useCallback(() => {
    if (index < headingText.length) {
      setDisplayedText((prev) => prev + headingText[index]);
      setIndex((prev) => prev + 1);
    } else {
      setDisplayedText("");
      setIndex(0);
    }
  }, [index, headingText]);

  useEffect(() => {
    const timeout = setTimeout(
      updateText,
      index < headingText.length ? 50 : 500
    );
    return () => clearTimeout(timeout);
  }, [updateText]);

  return (
    <div id="home" className="flex justify-between">
      <div className="flex items-start flex-col p-6 mt-[25dvh] max-w-7/12 ">
        <a
          href="https://github.com/VishnuMishra007/portfolio/raw/refs/heads/main/public/Vishu.Mishra_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center gap-2 bg-[#0a4b5de3] text-white font-bold w-45 text-sm p-2 rounded shadow-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-200">
            Download Resume
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQufS70hj8RecdNq3Zx4UsqqZnEZNWNEKK0TQ&s"
              alt="Download icon"
              className="w-5 h-5"
            />
          </button>
        </a>
        {/* <div className="flex items-start flex-col p-6 mt-[25dvh] sm:pl-[2vw] w-full sm:w-[45vw] shadow-lg transition-all"> */}
        <h1 className="font-extrabold text-5xl pt-0 pb-2">Hi, I am Vishnu</h1>
        {/* <h2 className="flex flex-wrap text-2xl pt-2 pb-2 font-bold">I am a Front-End / Full-Stack Developer. I am currently working at Infogain as a Consultant Development.</h2> */}
        <h2 className="flex flex-wrap text-2xl pt-2 pb-2 font-bold">
          {displayedText}
          <span className="animate-pulse ml-1">|</span> {/* Blinking cursor */}
        </h2>
      </div>

      <div className="flex justify-end h-screen items-center p-4  ">
        {/* <div className="flex justify-end h-screen items-center p-4 sm:pl-[2vw] w-full sm:w-[45vw] shadow-lg transition-all">" */}
        <img
          className="max-h-8/12 rounded hover:scale-105 transition-transform duration-200 opacity-95"
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*JCKZrUQQCt4onMqqJAgePQ.jpeg"
          alt="developer-doodle"
        />
      </div>
    </div>
  );
};

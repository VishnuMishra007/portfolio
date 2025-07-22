import { Footer, Header } from "./components";
import { About } from "./components/About";
import { ProfileDescription } from "./components/ProfileDescription";
import React, { useEffect, useState } from "react";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ConnectionModalUI from "./utils/ConnectionModalUI";
import Shimmer from "./ShimmerUI/Shimmer";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 1500); // Simulate a loading time of 1.5 second

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div id="app" className="app">
      {isLoading ? (
        <>
          <div className="relative z-10 w-full md:flex md:w-auto">
            <Header />
            <main>
              <div className="profile-description bg-no-repeat bg-cover bg-center min-h-[100vh]">
                <ProfileDescription />
              </div>
              <div className="flex flex-col mt-10">
                <About />
              </div>
              <div className="flex flex-wrap flex-col mt-8 justify-center max-h-[100vh]">
                <Projects />
              </div>
              <div className="flex flex-wrap flex-col mt-8 justify-center max-h-[100vh]">
                <Contact />
              </div>
            </main>
          </div>
          <ConnectionModalUI />
          <Footer />
        </>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default App;

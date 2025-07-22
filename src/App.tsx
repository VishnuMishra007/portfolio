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
          <div className="relative z-10 w-full">
            <Header />

            <main className="flex flex-col w-full">
              <section className="profile-description bg-no-repeat bg-cover bg-center min-h-screen">
                <ProfileDescription />
              </section>

              <section className="flex flex-col mt-10">
                <About />
              </section>

              <section className="flex flex-col mt-16 px-4 gap-24">
                <Projects />
              </section>

              <section className="flex flex-col mt-16 px-4 gap-24">
                <Contact />
              </section>
            </main>

            <ConnectionModalUI />
            <Footer />
          </div>
        </>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default App;

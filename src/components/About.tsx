
export const About: React.FC = () => {
  return (
    <>
      <div id="about" className="flex flex-wrap flex-col mt-8 justify-center">
        <h1 className="flex justify-center text-center text-4xl font-bold">
          About Me
        </h1>
        <div className="p-8 flex flex-wrap flex-col items-center justify-center shadow-lg pb-4">
          <p className=" flex text-lg">
            I am a passionate Front-End / Full-Stack Developer with a strong
            focus on creating dynamic and responsive web applications. My
            journey in web development has equipped me with a diverse skill set,
            including proficiency in HTML, CSS, JavaScript, and various
            frameworks such as React and Node.js. I thrive on challenges and
            enjoy collaborating with teams to bring innovative ideas to life.
            Currently, I am working at Infogain as a Consultant Development,
            where I continue to grow and contribute to exciting projects.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap flex-col mt-8 justify-center">
        <h1 className="flex justify-center text-center text-4xl font-bold">
          Tech Stack
        </h1>
        <div className="flex flex-wrap mt-8 justify-evenly shadow-lg pb-4">
          {[
            {
              label: "Javascript",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
              label: "React",
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
            },
            {
              label: "TypeScript",
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
            },
            {
              label: "Redux",
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
            },
            {
              label: "Redux Saga",
              src: "https://redux-saga.js.org/img/Redux-Saga-Logo.png",
            },
            {
              label: "HTML",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
              label: "CSS3",
              src: "https://icon.icepanel.io/Technology/svg/CSS3.svg",
            },
            {
              label: "Tailwind CSS",
              src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
            },
            {
              label: "Material UI",
              src: "https://icon.icepanel.io/Technology/svg/Material-UI.svg",
            },
            {
              label: "Bootstrap",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
            },
            {
              label: "Core Java",
              src: "https://icon.icepanel.io/Technology/svg/Java.svg",
            },
            {
              label: "NodeJS",
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
            },
            {
              label: "Sass",
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
            },
            {
              label: "MySQL",
              src: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
            },
            {
              label: "Postman",
              src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
            },
            { label: "Bruno", src: "https://docs.usebruno.com/bruno.png" },
            {
              label: "Jest",
              src: "https://icon.icepanel.io/Technology/svg/Jest.svg",
            },
            {
              label: "Enzyme",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
            },
            {
              label: "Webpack",
              src: "https://icon.icepanel.io/Technology/svg/Webpack.svg",
            },
            {
              label: "NPM",
              src: "https://icon.icepanel.io/Technology/svg/NPM.svg",
            },
            {
              label: "JSON",
              src: "https://icon.icepanel.io/Technology/svg/JSON.svg",
            },
            {
              label: "JQuery",
              src: "https://icon.icepanel.io/Technology/svg/jQuery.svg",
            },
            {
              label: "Git",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
            },
            {
              label: "C Language",
              src: "https://icon.icepanel.io/Technology/svg/C.svg",
            },
          ].map((tech, idx) => (
            <div
              key={idx}
              className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-48 w-40"
            >
              <img src={tech.src} alt={tech.label} className="w-12" />
              <h4 className="text-md ml-4">{tech.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

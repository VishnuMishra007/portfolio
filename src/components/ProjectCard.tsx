const ProjectCard = ({ project }) => {
  return (
    <div className="project-card flex flex-col flex-wrap border p-4 m-2 rounded-lg hover:shadow-xl duration-300 sm:pl-[2vw] w-full sm:w-[45vw] shadow-lg transition-all">
      <h2 className="project-title font-bold text-2xl text-cyan-700">{project.title}</h2>
      <p className="project-description">{project.description}</p>  
        <div className="project-links flex justify-end gap-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link"> <div
              className="relative group py-2 px-1 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-9 w-8"
            >
              <img src="https://icon.icepanel.io/Technology/svg/GitHub.svg" alt='GitHub' className="w-12" />
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    GitHub Repository Link
                </span>
            </div></a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                <div
              className="relative group py-2 px-1 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-9 w-8"
            >
              <img src="https://img.freepik.com/premium-vector/demo-video-sign-icon_1178600-9545.jpg" alt='Demo' className="w-12" />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                     Demo on GitHub Pages
                </span>
            </div>
            </a>
        </div>
        <div className="flex flex-wrap mt-8 justify-start items-center">
            <button className="bg-[#67b5cce3] text-white px-4 py-2 rounded hover:bg-[#0c718de3] transition-colors duration-300 cursor-pointer shadow-lg">View Details<span className="text-lg font-bold"> → </span></button>
        </div>
    </div>
  );
};

export default ProjectCard;
import { useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectContext from "../store/ProjectContext";
import { ProjectContextType } from "../types/project";

const Projects: React.FC = () => {
  const { projects } = useContext(ProjectContext) as ProjectContextType;
  return (
    <div id="projects" className="flex flex-wrap flex-col mt-8 justify-center">
            <h1 className="flex justify-center text-center text-4xl font-bold ">
                 Personal Projects
            </h1>
            <div className="flex flex-wrap mt-8 justify-start  pl-[2dvw] shadow-lg pb-4">
                {!!projects.length && projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
             </div>
        </div>
  );
}

export default Projects;
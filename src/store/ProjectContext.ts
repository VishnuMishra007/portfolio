import { createContext } from "react";
import { ProjectContextType } from "../types/project";

const ProjectContext: React.Context<ProjectContextType>  = createContext<ProjectContextType>({
    projects: [
        {
            title: 'QuickFeast — Restaurant Discovery & Ordering App',
            description: 'QuickFeast is a modern, single-page web application built for seamless restaurant browsing, dynamic menu rendering, and quick ordering workflows. Designed with a mobile-first mindset, it uses dummy restaurant data to simulate real-world user journeys like search, filter, and checkout — all while staying lean, performant, and scalable.',
            demo: 'https://vishnumishra007.github.io/foodordering_app/',
            github: 'https://github.com/VishnuMishra007/foodordering_app'
        },
        {
            title: 'ToDo App — Minimal, Scalable Task Manager',
            description: 'This lightweight yet powerful CRUD application showcases how a clean UI and efficient state management can work hand in hand. Built with React and Redux Toolkit, it offers intuitive task operations wrapped in a sleek, responsive layout powered by Tailwind CSS.',
            demo: 'https://vishnumishra007.github.io/todoapp-react/',
            github: 'https://github.com/VishnuMishra007/todoapp-react'
        }
    ]
});

export default ProjectContext;
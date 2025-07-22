/* ## TypeScript interfaces and types */

export interface IAddMessageAction { 
    type: string;
    payload: IMessage;
}


export interface IMessage {
    id: string;
    name: string;
    email: string;
    message: string;
}

export interface Project {
  title: string;
  description: string;
  demo: string;
  github: string;
}

export interface ProjectContextType {
  projects: Project[];
}
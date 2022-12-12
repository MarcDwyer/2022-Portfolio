export interface WorkExperience {
  companyName: string;
  duration?: string;
  title: string;
  descriptionRole: string[];
  currentJob?: boolean;
}
const WorkExp: WorkExperience[] = [
  {
    companyName: "Magnus Technologies",
    title: "Frontend Developer",
    descriptionRole: [
      "Design and architecture of SPAs using React, TypeScript and Redux Toolkit/Mobx",
      "Refactoring of applications to improve performance and fix bugs",
      "Setting up development and production environment of new React projects",
      "Unit testing using popular testing tools like Jest and Enzyme",
    ],
    currentJob: true,
  },
  {
    companyName: "M&D Technologies",
    title: "Full-Stack Developer",
    descriptionRole: [
      "Design and architecture of SPAs and PWAs using React, TypeScript and Redux/Mobx",
      "Development of React Native mobile application",
      "Built backend REST endpoints using TypeScript, NodeJS, Postgres and Go",
      "Integration of TypeScript, applying OOP principles",
      "Developing and documenting of third party modules for Deno",
    ],
    currentJob: false,
  },
  {
    companyName: "Institute of Human and Machine Cognition",
    title: "Full-Stack Developer",
    currentJob: false,
    duration: "",
    descriptionRole: [
      "Worked on Full-Stack administrative tool that was used to manage IHMC's projects",
      "Introduced new deployment methods such as Docker",
      "Communicated with Project Manager and Lead Developer on UI designs, tech stack and best possible solutions to create tool",
      "Created front-end and back-end using modern technologies such as TypeScript, NodeJS and ReactJS",
    ],
  },
];

export default WorkExp;

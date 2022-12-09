import { ProjectsType } from "../appData/projectData.ts";
import { LinkButton } from "./LinkButton.tsx";

type Props = {
  project: ProjectsType;
  isOdd: boolean;
};

export function ProjectCard({ project, isOdd }: Props) {
  return (
    <div className="flex sm:flex-col w-11/12 ml-auto mr-auto border-b-1">
      {isOdd && (
        <img
          style={project.dimensions ?? { width: "550px", height: "350px" }}
          className="m-auto"
          src={project.url}
        />
      )}
      <div className="flex-col flex">
        <h3 className="font-bold text-2xl">
          {`${project.title} -- hosted on ${project.hosted ?? "the Internet"}`}
        </h3>
        <div className="flex flex-nowrap">
          {project.links?.map(({ link, title, download }) => {
            return (
              <LinkButton
                linkTo={link}
                key={link}
              >
                {title}
              </LinkButton>
            );
          })}
        </div>
        <span>Stack: {project.stack}</span>
        <p>{project.details}</p>
      </div>
      {!isOdd && (
        <img
          style={project.dimensions ?? { width: "550px", height: "350px" }}
          className="m-auto"
          src={project.url}
        />
      )}
    </div>
  );
}

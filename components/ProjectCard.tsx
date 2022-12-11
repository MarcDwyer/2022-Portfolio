import { ProjectsType } from "../appData/projectData.ts";
import { LinkButton } from "./LinkButton.tsx";

type Props = {
  project: ProjectsType;
  isOdd: boolean;
};

export function ProjectCard({ project, isOdd }: Props) {
  return (
    <div className="flex w-11/12 ml-auto mr-auto border-b-1">
      <div className="mt-10 mb-10 ml-auto mr-auto flex flex-wrap">
        <img
          style={project.dimensions ?? { height: "350px", width: "550px" }}
          className={`${
            isOdd ? "xl:order-first" : "xl:order-last"
          } m-auto lg:order-first`}
          src={project.url}
        />
        <div className="flex-col flex w-3/6 m-auto lg:w-full">
          <h3 className="font-bold text-2xl">
            {`${project.title} -- hosted on ${
              project.hosted ?? "the Internet"
            }`}
          </h3>
          <div className="flex flex-nowrap mb-2 mt-2">
            {project.links?.map(({ link, title }) => {
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
          <span className="mt-2 mb-2">Stack: {project.stack}</span>
          <p>{project.details}</p>
        </div>
      </div>
    </div>
  );
}

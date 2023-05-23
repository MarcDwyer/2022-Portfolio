import { ProjectsType } from "../appData/projectData.ts";
import { GitHub, Link } from "../components/Icons.tsx";
import ShowMore from "../islands/ShowMore.tsx";
import { GithubLink } from "./GithubLink.tsx";

type Props = {
  project: ProjectsType;
};

function ProjectCard({ project }: Props) {
  return (
    <div className="flex ml-auto mr-auto w-full max-w-sm mx-auto group bg-cardColor rounded-md">
      <div class="flex flex-col m-auto">
        <img
          aria-describedby="project"
          data-hint={project.details}
          src={project.url}
          alt={project.title}
          width={600}
          height={337}
          style={{ aspectRatio: "16/9" }}
          class="object-cover shadow-lg group-hover:(shadow-xl opacity-70)"
        />
        <div class="flex flex-col pr-5 pl-5 pb-5">
          <div class="mt-4 flex items-center">
            <span class="font-bold flex-1">
              {project.title}
            </span>
            {project.link && (
              <a
                class="ml-2 hover:text-slate-100"
                href={project.link}
                target="_blank"
              >
                <Link />
              </a>
            )}
            {project.repo && (
              <GithubLink
                link={project.repo}
                classes="ml-2 hover:text-slate-100"
              />
            )}
          </div>
          <div>
            <ShowMore text={project.details} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

import { ProjectsType } from "../appData/projectData.ts";
import { GitHub, Link } from "../components/Icons.tsx";
import MyToolTip from "../islands/MyTooltip.tsx";

type Props = {
  project: ProjectsType;
};

function ProjectCard({ project }: Props) {
  const targetId = String(project.id);

  return (
    <div className="flex flex-col ml-auto mr-auto w-full max-w-sm mx-auto group">
      <img
        aria-describedby="project"
        data-hint={project.details}
        src={project.url}
        alt={project.title}
        width={600}
        height={337}
        style={{ aspectRatio: "16/9" }}
        class="object-cover shadow-lg group-hover:(shadow-xl opacity-70) rounded-lg"
      />
      <div class="mt-4 flex items-center">
        <span class="flex-1 group-hover:text-underline">
          {project.title}
        </span>
        {project.link && (
          <a
            class="ml-2 hover:text-gray-700"
            href={project.link}
            target="_blank"
          >
            <Link />
          </a>
        )}
        {project.repo && (
          <a
            class="ml-2 hover:text-gray-700"
            href={project.repo}
            target="_blank"
          >
            <GitHub />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;

import ProjectData from "../appData/projectData.ts";
import { MainContainer } from "../components/MainContainer.tsx";
import ProjectCard from "../components/ProjectCard.tsx";
import { Skills } from "../components/Skills.tsx";
import { PathMatches } from "../routes.ts";

export default function Projects() {
  return (
    <>
      <MainContainer
        path="/projects"
        title="Projects"
        description="My Projects"
        pathMatch={PathMatches.Projects}
      >
        <div class="w-full flex overflow-y-auto mb-10">
          <div class="flex flex-col max-w-screen-lg mx-auto px(4 sm:6 md:8) space-y-4">
            <Skills />
            <h1 class="text(3xl) font-bold mt-auto mb-auto mt-auto">
              Projects
            </h1>
            <p class="mt-2">
              Below is a selection of projects that I've built over the past 6
              years or so.
            </p>
            <div class="pt-8 grid grid-cols-1 md:grid-cols-3 items-center gap-20 h-full">
              {ProjectData.map((project) => {
                return <ProjectCard project={project} />;
              })}
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
}

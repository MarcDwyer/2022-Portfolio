import ProjectData from "../appData/projectData.ts";
import { MainContainer } from "../components/MainContainer.tsx";
import ProjectCard from "../islands/ProjectCard.tsx";
import { Skills } from "../components/Skills.tsx";

export default function Projects() {
  return (
    <div id="main-content">
      <MainContainer path="/projects">
        <div class="w-full h-full overflow-y-auto flex flex-col pb-10">
          <div class="mb-auto m-auto w-4/5 flex flex-col">
            <Skills />
            <h1 class="text(3xl) font-bold mt-auto mb-auto mt-auto">
              Projects
            </h1>
            <p class="mt-2">
              Below is a selection of projects that I've built over the past 6
              years or so.
            </p>
            <div class="pt-8 grid grid-cols-1 md:grid-cols-3 items-center gap-20">
              {ProjectData.map((project) => {
                return (
                  <ProjectCard
                    project={project}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

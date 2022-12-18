import { Head } from "$fresh/runtime.ts";
import ProjectData from "../appData/projectData.ts";
import { MainContainer } from "../components/MainContainer.tsx";
import ProjectCard from "../components/ProjectCard.tsx";
import { Skills } from "../components/Skills.tsx";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Marc's Projects</title>
      </Head>
      <MainContainer path="/projects">
        <div class="w-full h-full flex overflow-y-auto mb-10">
          <div class="flex flex-col max-w-screen-lg mx-auto px(4 sm:6 md:8) space-y-4">
            <Skills />
            <h1 class="text(3xl) font-bold mt-auto mb-auto mt-auto">
              Projects
            </h1>
            <p class="mt-2">
              Below is a selection of projects that I've built over the past 6
              years or so.
            </p>
            <div
              style={{
                gridAutoRows: "1fr",
              }}
              class="pt-8 grid grid-cols-1 md:grid-cols-3 items-center gap-20"
            >
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
    </>
  );
}

import ProjectData from "../appData/projectData.ts";
import { MainContainer } from "../components/MainContainer.tsx";
import { ProjectCard } from "../components/ProjectCard.tsx";

export default function Projects() {
  return (
    <div id="main-content">
      <MainContainer path="/projects">
        <div className="flex-col bg-nav w-full h-full flex bg-myBackground overflow-y-auto">
          <div className="mt-10 mb-10 ml-auto mr-auto ">
            {ProjectData.map((project, index) => {
              const isOdd = (index & 1) === 1;
              return (
                <ProjectCard project={project} key={project.id} isOdd={isOdd} />
              );
            })}
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

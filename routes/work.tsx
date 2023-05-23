import WorkExp from "../appData/workData.ts";
import { MainContainer } from "../components/MainContainer.tsx";
import { WorkCard } from "../components/WorkCard.tsx";

export default function Work() {
  return (
    <>
      <MainContainer path="/work" title="Work" description="My Work History">
        <div class="w-full h-full flex overflow-y-auto mb-10">
          <div class="flex flex-col max-w-screen-lg mx-auto my-16 px(4 sm:6 md:8) space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-4 grid-flow-row auto-rows-fr">
              {WorkExp.map((work) => {
                return <WorkCard work={work} />;
              })}
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
}

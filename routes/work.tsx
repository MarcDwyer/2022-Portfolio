import { Head } from "$fresh/runtime.ts";
import WorkExp from "../appData/workData.ts";
import { MainContainer } from "../components/MainContainer.tsx";
import { WorkCard } from "../components/WorkCard.tsx";

export default function Work() {
  return (
    <>
      <Head>
        <title>Marc's Work</title>
      </Head>
      <MainContainer path="/work">
        <div class="mx-auto w-4/5 flex flex-col">
          <div class="pt-8 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
            {WorkExp.map((work) => {
              return <WorkCard work={work} />;
            })}
          </div>
        </div>
      </MainContainer>
    </>
  );
}

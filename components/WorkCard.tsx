import { WorkExperience } from "../appData/workData.ts";

type Props = {
  work: WorkExperience;
};
export function WorkCard({ work }: Props) {
  return (
    <div class="flex bg-nav p-5 rounded-lg h-full">
      <div class="m-auto flex flex-col">
        <h2 class="font-bold">{work.companyName}</h2>
        <h3 class="font-bold">{work.title}</h3>
        <p class="mt-5">{work.descriptionRole}</p>
      </div>
    </div>
  );
}

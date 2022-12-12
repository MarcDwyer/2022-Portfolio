import { WorkExperience } from "../appData/workData.ts";

type Props = {
  work: WorkExperience;
};
export function WorkCard({ work }: Props) {
  return (
    <div class="flex flex-col">
      <h2 class="font-bold">{work.companyName}</h2>
      <h3>{work.title}</h3>
      <p>{work.descriptionRole}</p>
    </div>
  );
}

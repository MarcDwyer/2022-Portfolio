export function Skills() {
  const skills = [
    "React",
    "TypeScript",
    "NodeJS",
    "Deno",
    "Go",
  ];
  return (
    <div class="mb-10 mt-10 p-10 flex flex-col border-b-1 border-t-1">
      <h1 class="text(2xl) font-bold mt-auto mb-auto mt-auto">
        Most commonly used technologies:
      </h1>
      <div class="flex flex-nowrap">
        {skills.map((skill) => {
          return <Skill skill={skill} />;
        })}
      </div>
      <div class="flex flex-nowrap mt-5">
        <h1 class="text(2xl) font-bold mt-auto mb-auto mt-auto">
          Fluent In:
        </h1>
        <div class="flex flex-nowrap ml-2">
          <Skill skill="spanish" />
          <Skill skill="english" />
        </div>
      </div>
    </div>
  );
}

function Skill({ skill }: { skill: string }) {
  return (
    <div class="border-1 rounded mr-2 mt-1">
      <span class="p-2">{skill}</span>
    </div>
  );
}

import { GitHub } from "./Icons.tsx";

type Props = {
  classes?: string;
};

export function GithubLink({ classes }: Props) {
  const github = "https://github.com/MarcDwyer";

  return (
    <a
      href={github}
      class={`hover:text-green-600 inline-block ${classes ?? ""}`}
      target="_blank"
      aria-label="Github"
    >
      <GitHub />
    </a>
  );
}

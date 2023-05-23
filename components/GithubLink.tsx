import { GitHub } from "./Icons.tsx";

type Props = {
  classes?: string;
  link: string;
};

export function GithubLink({ classes, link }: Props) {
  return (
    <a
      href={link}
      class={`hover:text-green-600 inline-block ${classes ?? ""}`}
      target="_blank"
      aria-label="Github"
    >
      <GitHub />
    </a>
  );
}

import { LinkedIn } from "./Icons.tsx";

type Props = {
  classes?: string;
  link: string;
};
export function LinkedInLink({ classes, link }: Props) {
  return (
    <a
      href={link}
      class={`hover:text-green-600 inline-block ${classes ?? ""}`}
      aria-label="LinkedIn"
      target="_blank"
    >
      <LinkedIn />
    </a>
  );
}

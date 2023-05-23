import { LinkedIn } from "./Icons.tsx";

type Props = {
  classes?: string;
};
export function LinkedInLink({ classes }: Props) {
  return (
    <a
      href="https://www.linkedin.com/in/marc-dwyer-53087339/"
      class={`hover:text-green-600 inline-block ${classes ?? ""}`}
      aria-label="LinkedIn"
      target="_blank"
    >
      <LinkedIn />
    </a>
  );
}

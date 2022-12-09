import { ComponentChild } from "https://esm.sh/v99/preact@10.11.0/src/index";

type Props = {
  children: ComponentChild;
  linkTo: string;
};

export function LinkButton({ children, linkTo }: Props) {
  return (
    <a
      className="border-1 border-gray-300 p-3 mr-3"
      href={linkTo}
    >
      {children}
    </a>
  );
}

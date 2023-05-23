import { GithubLink } from "./GithubLink.tsx";
import { GitHub, LinkedIn } from "./Icons.tsx";
import { LinkedInLink } from "./LinkedInLink.tsx";

type Props = {
  path: string;
};

export default function Navbar({ path }: Props) {
  const links = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Projects",
      to: "/projects",
    },
    {
      label: "Work",
      to: "/work",
    },
  ];
  return (
    <nav className={`w-full flex bg-nav h-20`}>
      <div className="flex flex-nowrap mt-auto mb-auto ml-auto flex">
        {links.map((link) => {
          const opacity = link.to === path ? "opacity-100" : "opacity-75";
          return (
            <a
              className={`${opacity} font-bold text-lg mt-auto mb-auto mr-8 hover:opacity-100`}
              href={link.to}
              aria-label={link.label}
            >
              {link.label}
            </a>
          );
        })}
        <GithubLink classes="mr-5" />
        <LinkedInLink classes="mr-5" />
      </div>
    </nav>
  );
}

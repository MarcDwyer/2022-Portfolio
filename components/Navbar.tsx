import { Links } from "../appData/links.ts";
import { GithubLink } from "./GithubLink.tsx";
import { LinkedInLink } from "./LinkedInLink.tsx";

type Props = {
  path: string;
  match: keyof typeof PathMatches;
};

export enum PathMatches {
  Games = "Games",
  Home = "Home",
  Work = "Work",
  Blog = "Blog",
  Projects = "Projects",
}

export default function Navbar({ match }: Props) {
  const links = [
    {
      label: "Home",
      to: "/",
      match: PathMatches.Home,
    },
    {
      label: "Projects",
      to: "/projects",
      match: PathMatches.Projects,
    },
    {
      label: "Work",
      to: "/work",
      match: PathMatches.Work,
    },
    {
      label: "Blog",
      to: "/blog",
      match: PathMatches.Blog,
    },
    // {
    //   label: "Games",
    //   to: "/games/",
    //   match: PathMatches.Games,
    // },
  ];

  return (
    <nav className={`w-full flex bg-nav h-20`}>
      <div className="flex flex-nowrap mt-auto mb-auto ml-auto flex">
        {links.map((link) => {
          const opacity = link.match === match ? "opacity-100" : "opacity-75";
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
        <GithubLink classes="mr-5" link={Links.Github} />
        <LinkedInLink classes="mr-5" link={Links.LinkedIn} />
      </div>
    </nav>
  );
}

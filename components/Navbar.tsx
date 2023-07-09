import { GithubLink } from "./GithubLink.tsx";
import { LinkedInLink } from "./LinkedInLink.tsx";
import { PathMatches, Routes } from "../routes.ts";
import { Links } from "../appData/links.ts";

type Props = {
  path: string;
  match: keyof typeof PathMatches;
};

export default function Navbar({ match }: Props) {
  return (
    <nav className={`w-full flex bg-nav h-20`}>
      <div className="flex flex-nowrap mt-auto mb-auto ml-auto flex">
        {Routes.map((link) => {
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

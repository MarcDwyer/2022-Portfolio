import { GitHub, LinkedIn } from "./Icons.tsx";

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
    <nav className={`w-full flex bg-nav h-20 flex`}>
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
        <a
          href="https://github.com/MarcDwyer"
          class="hover:text-green-600 inline-block mr-8"
          target="_blank"
          aria-label="Github"
        >
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/marc-dwyer-53087339/"
          class="hover:text-green-600 inline-block mr-8"
          aria-label="LinkedIn"
          target="_blank"
        >
          <LinkedIn />
        </a>
      </div>
    </nav>
  );
}

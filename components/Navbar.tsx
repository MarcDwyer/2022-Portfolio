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
      label: "Projects/Skills",
      to: "/projects",
    },
    {
      label: "Work",
      to: "/work",
    },
    {
      label: "Contact",
      to: "/contact",
    },
  ];
  return (
    <nav className={`flex-none w-96 flex bg-nav`}>
      <div className="flex flex-col m-auto">
        <div className=" m-auto flex flex-wrap">
          <img
            src="https://i.imgur.com/F4iPL1v.png"
            className=" h-32 w-32 rounded-full ml-auto mb-auto mt-5 mr-5 border-4 border-gray-600"
          />
          <div className="m-auto flex flex-col">
            <h1 className="m-auto font-bold text-2xl">Marc Dwyer</h1>
            <h4 className="m-auto font-bold">Front End Engineer</h4>
            <h4 className="m-auto font-bold">US/EU Citizenship</h4>
          </div>
        </div>
        <div className="flex flex-col m-auto mt-5">
          {links.map((link) => {
            const opacity = link.to === path ? "opacity-1" : "opacity-75";
            return (
              <a className={`${opacity} font-bold text-lg mt-5`} href={link.to}>
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

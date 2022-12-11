import { ComponentChildren } from "preact";
import Navbar from "./Navbar.tsx";

type Props = {
  path: string;
  children: ComponentChildren;
};

export function MainContainer({ path, children }: Props) {
  return (
    <div className="flex flex-col font-mySans h-screen text-textColor bg-myBackground">
      <Navbar path={path} />
      {children}
    </div>
  );
}

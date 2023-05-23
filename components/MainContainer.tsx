import { ComponentChildren } from "preact";
import Navbar from "./Navbar.tsx";
import { Head } from "https://deno.land/x/fresh@1.1.2/runtime.ts";

const DESCRIPTION = "This is Marc Dwyer's Portfolio page made with Deno Fresh";
const TITLE = "Marc's Portfolio";
const defaultBgColor = "bg-myBackground";

type Props = {
  path: string;
  title?: string;
  description?: string;
  bgColor?: string;
  children: ComponentChildren;
};

export function MainContainer(
  {
    path,
    children,
    title = TITLE,
    description = DESCRIPTION,
    bgColor = defaultBgColor,
  }: Props,
) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="author" content="Marc Dwyer" />
        <meta name="keywords" content="Marc Dwyer, Marc, Dwyer, Portfolio" />
      </Head>
      <div
        class={`flex flex-col font-mySans min-h-screen h-full text-textColor ${bgColor}`}
      >
        <Navbar path={path} />
        {children}
      </div>
    </>
  );
}

export enum PathMatches {
  Home = "Home",
  Work = "Work",
  Projects = "Projects",
  Comments = "Comments",
}

export const Routes = [
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
    label: "Comments",
    to: "/comments",
    match: PathMatches.Comments,
  },
];

export interface ProjectsType {
  id: number;
  title: string;
  details: string;
  url?: string;
  links?: Links[];
  stack: string;
  hosted?: string;
  dimensions?: {
    width: string;
    height: string;
  };
  repo?: string;
  link?: string;
}

export interface Links {
  title: string;
  link: string;
  download?: boolean;
}

const gopoll: ProjectsType = {
  id: 1,
  title: "GoPoll.me",
  details: "A real-time poll voting application.",
  url: "https://i.imgur.com/0SGMtnu.png",
  links: [
    // { title: "Live Demo", link: "https://gopoll.marcdwyer.dev/" },
  ],
  stack: "React, Go and MongoDB",
  hosted: "DigitalOcean",
  repo: "https://github.com/MarcDwyer/GoPoll",
};

const nsa: ProjectsType = {
  id: 3,
  title: "Netflix-Stop-Autoplay",
  details: "Chrome extension that prevents Netflix from auto-playing videos.",
  url:
    "https://lh3.googleusercontent.com/NBuD6tD6HwVSVhIQT7bxffIHLEoLpwz898ufCR2H901Y9plbFLqr0SJrsmcHrMnrLuJak7w7=w640-h400-e365",
  links: [
    {
      title: "Store Link",
      link:
        "https://chrome.google.com/webstore/detail/netflix-stop-autoplay/fbcmkdogjehincilpicohipinoobijem",
    },
  ],
  stack: "TypeScript",
  repo: "https://github.com/MarcDwyer/netflix-stop-autoplay",
};

const tf: ProjectsType = {
  id: 69,
  title: "Twitch Followers",
  details: "Find out who follows who on Twitch.",
  url: "https://i.imgur.com/Gedd4uj.png",
  links: [
    // {
    //   title: "Live Demo",
    //   link: "https://twitch-followers.marcdwyer.dev/",
    // },
  ],
  stack: "React and Deno",
  repo: "https://github.com/MarcDwyer/twitch-followers",
};
const hc: ProjectsType = {
  id: 0,
  title: "Hue Desktop Controller",
  details: "An desktop application used to control your Philips Hue lights.",
  url:
    "https://github.com/MarcDwyer/hue-desktop-controller/raw/master/icons/hue1.png",
  links: [
    { title: "View Website", link: "https://hue-controller.netlify.com/" },
  ],
  stack: "React and Electron",
  repo: "https://github.com/MarcDwyer/electron-hue-controller",
};

const td: ProjectsType = {
  id: 2,
  title: "Twitch-Discovery",
  details:
    "A React app that randomizes a selection of streamers every 30 minutes.",
  url: "https://imgur.com/PNX97H4.png",
  links: [
    // { title: "Live Demo", link: "https://discover.marcdwyer.dev" },
  ],
  stack: "React and NodeJS",
  hosted: "DigitalOcean",
  repo: "https://github.com/MarcDwyer/twitch-discovery",
};

const typer: ProjectsType = {
  id: 69,
  title: "Arcade Type Racer",
  details: "A fun game that allows you to show off your typing skills.",
  url: "https://i.imgur.com/kwt6Ej0.png",
  links: [
    // { title: "Live Demo", link: "https://typer.marcdwyer.dev/" },
  ],
  stack: "React, TypeScript and Deno",
  hosted: "DigitalOcean",
  repo: "https://github.com/MarcDwyer/arcade-typeracer",
};
const TMI: ProjectsType = {
  id: 10001,
  title: "tmi.ts",
  details:
    "Twitch Messaging Interface, tmi.ts allows users to join twitch channels to automate certain tasks. This is very similar to Node's package tmi.js.",
  url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg",
  links: [{ title: "deno.land", link: "https://deno.land/x/tmi" }],
  stack: "TypeScript",
  hosted: "deno.land",
  repo: "https://github.com/MarcDwyer/tmi.ts",
};

const OkChat: ProjectsType = {
  id: 10101,
  title: "Ok-Chat",
  details: "A Twitch IRC application.",
  url:
    "https://camo.githubusercontent.com/ab1ecbf1579fa62974b4c73ea1df4b0fdb3575331c4ca05e1d204007df15dba4/68747470733a2f2f692e696d6775722e636f6d2f485759387235712e706e67",
  links: [],
  stack: "TypeScript, React and Electron",
  hosted: "Github",
  repo: "https://github.com/MarcDwyer/Ok-Chat",
};

const Fitbit: ProjectsType = {
  id: 12312,
  title: "Fitbit Clockfaces",
  details: "Fitbit clockfaces created using JavaScript and CSS.",
  url:
    "https://gallery-assets.fitbit.com/public/NM0kDY.qOYBlNIFmAIWYOY.hC2JtCXotBIVpAL7qO23tOYNrB5BqBV/C2_XBI3sCIFhNYOWNHooBL7rAIVsBnJhNYVtNq7nD5JpOIGX@1x.png",
  links: [
    {
      title: "Cool Watch",
      link:
        "https://gallery.fitbit.com/details/ee2777d4-95b6-4f3f-b75c-1f8812f43e80",
    },
    {
      title: "Smooth",
      link:
        "https://gallery.fitbit.com/details/f09cc032-1319-426a-8e83-ea9ad8033bac",
    },
  ],
  stack: "TypeScript and CSS",
  hosted: "Fitbit",
  dimensions: {
    width: "275px",
    height: "275px",
  },
  link:
    "https://gallery.fitbit.com/details/ee2777d4-95b6-4f3f-b75c-1f8812f43e80",
  repo: "",
};
const Portfolio: ProjectsType = {
  id: 1231212312313121,
  title: "This Portfolio",
  details: "A server side rendered app built using Deno Fresh & TailWindCSS.",
  stack: "TypeScript & TailWindCSS",
  hosted: "Github",
  repo: "https://github.com/MarcDwyer/2022-Portfolio",
  url:
    "https://fresh.deno.dev/illustration/lemon-squash.svg?__frsh_c=ekmg2w5q4drg",
};
const ProjectData: Array<ProjectsType> = [
  Portfolio,
  Fitbit,
  TMI,
  OkChat,
  gopoll,
  tf,
  typer,
  nsa,
  hc,
  td,
];

export default ProjectData;

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
  details:
    "This app was inspired by Strawpoll.me. In my opinion a good web app is one that has a simple UI and an interactive experience. With the use of WebSockets and the power of Go, I created websocket rooms using Gorilla's incredible websocket package. With Websocket rooms, I can efficiently broadcast to users viewing specific types of content. In this case, I broadcast only to users viewing the same poll. This application allows the client to create and monitor poll results in real-time!",
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
  details:
    "This is a chrome extension that prevents Netflix from autoplaying videos in desktop enviroments. It was developed using TypeScript.",
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
  details:
    "An application that allows the client to lookup who users are following on TwitchTV. Also includes a pretty unique implementation oh recent search history",
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
  details:
    "Hue Controller, built using the Electron Framework, allows the client to modify lights connected to their Philips Hue Bridge. It accomplishes this by sending http requests with the modified data to the bridge's own API. The app allows the client to modify the selected lights color values, brightness, power status and much more.",
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
    "Twitch Discovery! The purpose of this experimental project is to grant more exposure to streams that have a lower viewership. From my experience, there is an average total of 40,000 livestreams on Twitch at any given time. However, only the top 50 have above 1,000 viewers. The large majority have around 1 - 50 viewers. Twitch, at the current moment sort the streamers by viewership, so it is quite difficult to find content creators with lower viewership. The backend (NodeJS) randomly pulls an array of streamers every 2 hours and then updates the current list of streamers every 6 minutes (to check if they are still live). The frontend (React) allows the client to view the streamers status, viewership and stream details. Oh, and it also lets you interact with the streamer using the embedded twitch chat! The app is still experimental and gets updates on daily basis",
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
  details:
    "An arcady type racing game that features both a single and multi player game mode. Practice your skills in single player than challenge other opponents in mulit-player.",
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
  details:
    "Ok-Chat is a Desktop application that allows users to join Twitch streamer’s IRC channels. Ok-Chat includes a plethora of features such as user search prediction, color coded messages, efficient memory management, easy to use UI, followed streams tracker and the use of 3rd party emotes like BTTV. It’s important to note that this software is very early in the development process and some of these features may be buggy or not exist yet, but trust me, they will come.",
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
  details:
    "Fitbit clockfaces are developed using JavaScript or TypeScript and CSS.  Fitbit allows access to it's sensors such as the heart, body presence and much more",
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
const ProjectData: Array<ProjectsType> = [
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

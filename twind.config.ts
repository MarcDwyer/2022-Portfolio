import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "nav": "rgb(21, 25, 28)",
        "myBackground": "rgb(35, 38, 43)",
        "btnColor": "rgb(35, 38, 43)",
        "textColor": "rgb(180, 186, 194)",
        cardColor: "#383B40",
      },
      fontFamily: {
        mySans: ['"Source Sans Pro"', "sans-serif"],
      },
      gridTemplateRows: {
        25: "55px",
      },
    },
  },
} as Options;

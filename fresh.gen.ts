// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/api/thread/save.ts";
import * as $2 from "./routes/games/index.tsx";
import * as $3 from "./routes/games/snake.tsx";
import * as $4 from "./routes/index.tsx";
import * as $5 from "./routes/projects.tsx";
import * as $6 from "./routes/thread/create.tsx";
import * as $7 from "./routes/thread/index.tsx";
import * as $8 from "./routes/work.tsx";
import * as $$0 from "./islands/CreateThreadForm.tsx";
import * as $$1 from "./islands/ShowMore.tsx";
import * as $$2 from "./islands/Snake.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/api/thread/save.ts": $1,
    "./routes/games/index.tsx": $2,
    "./routes/games/snake.tsx": $3,
    "./routes/index.tsx": $4,
    "./routes/projects.tsx": $5,
    "./routes/thread/create.tsx": $6,
    "./routes/thread/index.tsx": $7,
    "./routes/work.tsx": $8,
  },
  islands: {
    "./islands/CreateThreadForm.tsx": $$0,
    "./islands/ShowMore.tsx": $$1,
    "./islands/Snake.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;

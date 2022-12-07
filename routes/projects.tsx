import { Handlers } from "$fresh/server.ts";
import { MainContainer } from "../components/MainContainer.tsx";

export const handler: Handlers<{ path: string }> = {
  GET(res, ctx) {
    const params = new URL(res.url);
    return ctx.render({ path: params.pathname });
  },
};

export default function Projects() {
  return (
    <div id="main-content">
      <MainContainer path="/projects">
      </MainContainer>
    </div>
  );
}

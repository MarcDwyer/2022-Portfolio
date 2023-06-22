import type { Handlers, PageProps } from "$fresh/server.ts";
import { MainContainer } from "../../components/MainContainer.tsx";
import { PathMatches } from "../../components/Navbar.tsx";
import { ThreadPreview } from "../../components/ThreadPreview.tsx";
import {
  ThreadPreviewType,
  getThreadPreviews,
} from "../../db-actions/thread-actions.ts";

export const handler: Handlers<ThreadPreviewType[] | null> = {
  async GET(_req, ctx) {
    try {
      const threads = await getThreadPreviews();
      return ctx.render(threads);
    } catch (e) {
      return new Response("Project not found", { status: 404 });
    }
  },
};

export default function Thread({
  data,
}: PageProps<ThreadPreviewType[] | null>) {
  return (
    <MainContainer
      title="Threads"
      path="/thread"
      pathMatch={PathMatches.Thread}
    >
      <div class="mt-10 mb-auto mr-auto ml-auto w-3/4 p-5">
        <a
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/thread/create"
        >
          Create Thread
        </a>
        <div className="blog-container mt-5 grid grid-cols-3 gap-2">
          {data &&
            data.map((preview, i) => {
              return <ThreadPreview key={i} threadPreview={preview} />;
            })}
        </div>
      </div>
    </MainContainer>
  );
}

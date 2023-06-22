import type { Handlers, PageProps } from "$fresh/server.ts";
import { MainContainer } from "../../components/MainContainer.tsx";
import { PathMatches } from "../../components/Navbar.tsx";
import { ThreadCard } from "../../components/ThreadCard.tsx";
import { ThreadType, threadActions } from "../../db-actions/thread-actions.ts";

export const handler: Handlers<ThreadType | null> = {
  async GET(_req, ctx) {
    const { id } = ctx.params as { id: string };
    try {
      const thread = await threadActions.getSingleEntry([id]);
      if (!thread) throw new Error("Project not found");
      return ctx.render(thread);
    } catch (e) {
      return new Response("Project not found", { status: 404 });
    }
  },
};
export default function ThreadView(props: PageProps<ThreadType | null>) {
  const thread = props.data;
  return (
    <MainContainer
      path="/thread/{id}"
      pathMatch={PathMatches.Thread}
      title={`${thread?.title ?? "Searching..."}`}
    >
      <div class="mt-10 mb-auto mr-auto ml-auto w-3/4 p-5">
        <a
          href="/thread"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Threads
        </a>
        {thread && <ThreadCard thread={thread} />}
      </div>
    </MainContainer>
  );
}

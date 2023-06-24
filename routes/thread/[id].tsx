import type { Handlers, PageProps } from "$fresh/server.ts";
import Comments from "../../islands/Comments.tsx";
import { MainContainer } from "../../components/MainContainer.tsx";
import { PathMatches } from "../../components/Navbar.tsx";
import { ThreadCard } from "../../components/ThreadCard.tsx";
import {
  ThreadType,
  threadDBActions,
} from "../../db-actions/thread-actions.ts";

export const handler: Handlers<ThreadType | null> = {
  async GET(_req, ctx) {
    const { id } = ctx.params as { id: string };
    try {
      const thread = await threadDBActions.getSingleEntry([id]);
      if (!thread) throw new Error("Project not found");
      if (!thread.comments) {
        threadDBActions.deleteEntry([id]);
        throw {
          message: `Thread ${id} was deleted as it didn't have comments`,
        };
      }
      return ctx.render(thread);
    } catch (e: any) {
      let msg = "Project not found";
      if ("message" in e) {
        msg = e.message;
      }
      return new Response(msg, { status: 404 });
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
        {thread && (
          <>
            <ThreadCard thread={thread} />
            <div class="p-16">
              <Comments comments={thread.comments} threadUUID={thread.uuid} />
            </div>
          </>
        )}
      </div>
    </MainContainer>
  );
}

import { MainContainer } from "../components/MainContainer.tsx";
import { PathMatches } from "../routes.ts";
import Comments from "../islands/Comments/main.tsx";
import { Comment, commentActions } from "../db-actions/comment-actions.ts";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.6/server.ts";

export const handler: Handlers<Comment[]> = {
  async GET(_, ctx) {
    const comments = await commentActions.get();

    return ctx.render(comments);
  },
};
type A = {
  b: number;
};

export default function CommentsPage(props: PageProps<Comment[]>) {
  const comments = props.data;
  return (
    <MainContainer
      path={"/comments"}
      pathMatch={PathMatches.Comments}
      title="Comments"
    >
      <div class="ml-auto mr-auto mb-auto mt-5 w-9/12">
        <h2 class="font-bold text-lg">Leave a Comment</h2>
        <Comments comments={comments} />
      </div>
    </MainContainer>
  );
}

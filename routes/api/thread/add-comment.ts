import { Handlers } from "https://deno.land/x/fresh@1.1.6/server.ts";
import { threadDBActions } from "../../../db-actions/thread-actions.ts";

export type AddCommentBody = {
  threadUUID: string;
  commentText: string;
};

export const handler: Handlers<Comment> = {
  async POST(req) {
    const { threadUUID, commentText } = (await req.json()) as AddCommentBody;

    const comment = await threadDBActions.saveComment(threadUUID, commentText);

    return new Response(JSON.stringify(comment), {
      status: 200,
    });
  },
};

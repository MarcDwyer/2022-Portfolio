import { Handlers } from "https://deno.land/x/fresh@1.1.6/server.ts";
import {
  Comment,
  PostCommentPayload,
  commentActions,
} from "../../../db-actions/comment-actions.ts";

export const handler: Handlers<Comment> = {
  async POST(req) {
    const commentPayload = (await req.json()) as PostCommentPayload;

    const comment = await commentActions.post(commentPayload);

    return new Response(JSON.stringify(comment), {
      status: 200,
    });
  },
};

import { Handlers } from "https://deno.land/x/fresh@1.1.6/server.ts";
import { checkIfPasswordMatch } from "../../../util/password-util.ts";
import { CreateThreadType } from "../../../islands/CreateBlogForm.tsx";
import {
  ThreadType,
  createThread,
  threadActions,
} from "../../../db-actions/thread-actions.ts";

export const handler: Handlers<void> = {
  async POST(req) {
    try {
      const thread = (await req.json()) as CreateThreadType;
      if (!checkIfPasswordMatch(thread.password)) {
        return new Response(null, {
          status: 401,
        });
      }

      const createdThread = createThread(thread);

      await threadActions.saveEntry<ThreadType>(createdThread, [
        createdThread.uuid,
      ]);

      return new Response(JSON.stringify(createdThread), {
        status: 200,
      });
    } catch (e) {
      return new Response(e, {
        status: 500,
      });
    }
  },
};

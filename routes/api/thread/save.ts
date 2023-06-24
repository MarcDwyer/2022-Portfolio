import { Handlers } from "https://deno.land/x/fresh@1.1.6/server.ts";
import { CreateThreadType } from "../../../islands/CreateThreadForm.tsx";
import {
  createThread,
  threadDBActions,
} from "../../../db-actions/thread-actions.ts";

export const handler: Handlers<void> = {
  async POST(req) {
    try {
      const thread = (await req.json()) as CreateThreadType;

      const createdThread = createThread(thread);

      await threadDBActions.saveEntry(createdThread, [createdThread.uuid]);

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

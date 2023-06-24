import { db } from "../db.ts";
import { GeneralDBActions, GeneralDBProps } from "./general-actions.ts";

export const THREAD = ["thread"];

export type Comment = {
  author: string;
  text: string;
  uuid: string;
  date: number;
};
export type ThreadType = {
  title: string;
  author: string;
  description: string;
  body: string;
  uuid: string;
  comments: Comment[];
  date: number;
};
export type ThreadPreviewType = {
  title: string;
  author: string;
  description: string;
  uuid: string;
};

export const createThread = (
  thread?: Omit<ThreadType, "uuid" | "comments">
): ThreadType => ({
  uuid: crypto.randomUUID(),
  title: "",
  author: "",
  description: "",
  body: "",
  comments: [],
  date: Date.now(),
  ...thread,
});

export const createPreviewFromThread = ({
  title,
  author,
  description,
  uuid,
}: ThreadType): ThreadPreviewType => ({
  title,
  author,
  description,
  uuid,
});
export const createComment = (commentText: string): Comment => ({
  text: commentText,
  author: "",
  uuid: crypto.randomUUID(),
  date: Date.now(),
});
class ThreadDBActions extends GeneralDBActions<ThreadType> {
  constructor(props: GeneralDBProps) {
    super(props);
  }

  async getThreadPreviews() {
    const threadPreview: ThreadPreviewType[] = [];

    for await (const thread of this.iterateEntries()) {
      threadPreview.push(createPreviewFromThread(thread));
    }
    return threadPreview;
  }
  async saveComment(threadUUID: string, commentText: string) {
    const comment = createComment(commentText);
    const thread = await this.getSingleEntry([threadUUID]);
    if (!thread) {
      throw new Error(`Cannot find thread: ${threadUUID}`);
    }
    thread.comments.unshift(comment);

    await this.saveEntry(thread, [threadUUID]);

    return thread.comments;
  }
}

export const threadDBActions = new ThreadDBActions({
  db,
  entryKey: "threads",
});

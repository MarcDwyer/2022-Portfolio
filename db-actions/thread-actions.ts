import { db } from "../db.ts";
import { GeneralDBActions, GeneralDBProps } from "./general-actions.ts";

export const THREAD = ["thread"];

export type Comment = {
  author: string;
  text: string;
};
export type ThreadType = {
  title: string;
  author: string;
  description: string;
  body: string;
  uuid: string;
  comments: Comment[];
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
}

export const threadDBActions = new ThreadDBActions({
  db,
  entryKey: "threads",
});

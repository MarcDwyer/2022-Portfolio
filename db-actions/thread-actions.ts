import { db } from "../db.ts";
import { GeneralDBActions } from "./general-actions.ts";

export const THREAD = ["thread"];

export type ThreadType = {
  title: string;
  author: string;
  description: string;
  body: string;
  uuid: string;
};
export type ThreadPreviewType = {
  title: string;
  author: string;
  description: string;
  uuid: string;
};

export const createThread = (
  thread?: Omit<ThreadType, "uuid">
): ThreadType => ({
  uuid: crypto.randomUUID(),
  title: "",
  author: "",
  description: "",
  body: "",
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

export const threadActions = new GeneralDBActions<ThreadType>({
  db,
  entryKey: "threads",
});

export const getThreadPreviews = async () => {
  const threadPreview: ThreadPreviewType[] = [];

  for await (const thread of threadActions.iterateEntries()) {
    threadPreview.push(createPreviewFromThread(thread));
  }
  return threadPreview;
};

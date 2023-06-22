import { ThreadType } from "../db-actions/thread-actions.ts";

type Props = {
  thread: ThreadType;
};

export const ThreadCard = ({ thread }: Props) => {
  return (
    <div className="flex flex-col p-5 bg-gray-700 rounded-md mt-5">
      <h1 class="font-bold text-2xl">{thread.title}</h1>
      <p class="p-5 border-1 border-nav rounded-md m-5">{thread.body}</p>
      <span>By: {thread.author}</span>
    </div>
  );
};

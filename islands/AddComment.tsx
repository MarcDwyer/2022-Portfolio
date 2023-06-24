import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import { AddCommentBody } from "../routes/api/thread/add-comment.ts";
import { Comment } from "../db-actions/thread-actions.ts";

type Props = {
  threadUUID: string;
  setComments: (comments: Comment[]) => void;
};
export default function AddComment({ threadUUID, setComments }: Props) {
  const [commentText, setCommentText] = useState("");

  async function handleSubmit(e: JSX.TargetedEvent<HTMLFormElement, Event>) {
    e.preventDefault();
    try {
      const body: AddCommentBody = {
        threadUUID,
        commentText,
      };
      const commentsResp = await fetch("/api/thread/add-comment", {
        body: JSON.stringify(body),
        method: "POST",
      });
      const updatedComments = (await commentsResp.json()) as Comment[];
      console.log({ updatedComments });
      setComments(updatedComments);
      setCommentText("");
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      class="md:flex md:items-center mb-6 flex flex-col"
    >
      <div class="md:w-1/3 flex mr-auto">
        <label
          class="block font-bold md:text-right mb-1 md:mb-0 pr-4 mr-auto"
          for="inline-full-name"
        >
          Add a Comment
        </label>
      </div>
      <div class="w-full">
        <textarea
          class="mt-2 mb-2 w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          onChange={(e) => setCommentText((e.target as HTMLInputElement).value)}
          value={commentText}
        />
      </div>
      <div class="w-full flex">
        <button
          type="submit"
          class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Comment
        </button>
      </div>
    </form>
  );
}

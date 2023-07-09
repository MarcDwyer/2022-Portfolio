import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import {
  Comment,
  PostCommentPayload,
} from "../../db-actions/comment-actions.ts";

type Props = {
  handleSuccess: (newComment: Comment) => void;
};
export default function AddComment({ handleSuccess }: Props) {
  const [commentText, setCommentText] = useState("");
  const [author, setAuthor] = useState("");

  async function handleSubmit(e: JSX.TargetedEvent<HTMLFormElement, Event>) {
    e.preventDefault();
    try {
      if (!commentText.length) throw new Error("No message provided");
      const postComment: PostCommentPayload = {
        message: commentText,
        author,
      };
      const commentResp = await fetch("/api/comments/post", {
        method: "POST",
        body: JSON.stringify(postComment),
      });
      const newComment = await commentResp.json();
      setCommentText("");
      handleSuccess(newComment);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      class="md:flex md:items-center mb-6 flex flex-col"
    >
      <div class="md:w-1/3 flex mr-auto"></div>
      <div class="w-full">
        <textarea
          class="mt-2 mb-2 w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          onChange={(e) => setCommentText((e.target as HTMLInputElement).value)}
          value={commentText}
          placeholder="What would you like to say?"
        />
        <input
          class="mt-2 mb-2 w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="Would you like to provide your name?"
          value={author}
          //@ts-ignore
          onChange={(e) => setAuthor(e.target.value)}
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

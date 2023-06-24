import { useEffect, useState } from "preact/hooks";
import { Comment } from "../db-actions/thread-actions.ts";
import AddComment from "./AddComment.tsx";

type Props = {
  comments: Comment[];
  threadUUID: string;
};
function Comment({ comment }: { comment: Comment }) {
  const author = comment.author === "" ? "Anonymous" : comment.author;
  return (
    <div class="flex flex-col p-2 rounded-md bg-gray-700 mb-2">
      <p class="mb-2">{comment.text}</p>
      <span class="text-sm">By: {author}</span>
    </div>
  );
}
export default function Comments({ comments, threadUUID }: Props) {
  const [cachedComents, _setCachedComments] = useState<Comment[] | null>(null);

  useEffect(() => {
    _setCachedComments(comments);
  }, [comments]);

  const setComments = (comments: Comment[]) => _setCachedComments(comments);
  return (
    <div>
      <AddComment threadUUID={threadUUID} setComments={setComments} />
      <div class="flex flex-col">
        {cachedComents &&
          cachedComents.map((comment) => <Comment comment={comment} />)}
      </div>
    </div>
  );
}

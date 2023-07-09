import { Comment } from "../db-actions/comment-actions.ts";

type Props = {
  comment: Comment;
};
export const CommentCard = ({ comment }: Props) => {
  return (
    <div class="flex flex-col bg-nav mb-2 p-2 rounded">
      <p>{comment.message}</p>
      <span class="font-bold">By {comment.author}</span>
    </div>
  );
};

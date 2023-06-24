import { Comment } from "../db-actions/thread-actions.ts";

type Props = {
  comments: Comment[];
};

function Comment({ comment }: { comment: Comment }) {
  return (
    <div class="flex flex-col">
      <p>{comment.text}</p>
      <span>{comment.author}</span>
    </div>
  );
}
export function Comments({ comments }: Props) {
  return (
    <div class="flex flex-col">
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}

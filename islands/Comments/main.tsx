import { useEffect, useState } from "preact/hooks";
import AddComment from "./AddComment.tsx";
import { Comment } from "../../db-actions/comment-actions.ts";
import { CommentCard } from "../../components/CommentCard.tsx";

type Props = {
  comments: Comment[];
};
export default function Comments({ comments }: Props) {
  const [cachedComments, setCachedComments] = useState<Comment[] | null>(null);

  const handlePostSuccess = (newComment: Comment) => {
    if (cachedComments) {
      setCachedComments([newComment, ...cachedComments]);
    }
  };
  useEffect(() => {
    setCachedComments(comments);
  }, [comments, setCachedComments]);

  return (
    <div>
      <AddComment handleSuccess={handlePostSuccess} />
      {cachedComments &&
        cachedComments.map((comment) => <CommentCard comment={comment} />)}
    </div>
  );
}

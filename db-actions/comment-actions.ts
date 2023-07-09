import { db } from "../db.ts";

export type Comment = {
  message: string;
  author: string;
  date: number;
  uuid: string;
};
export type PostCommentPayload = Omit<Comment, "uuid" | "date">;

const completeCommentData = (commentPayload: PostCommentPayload): Comment => ({
  ...commentPayload,
  uuid: crypto.randomUUID(),
  date: Date.now(),
  author: commentPayload.author.length ? commentPayload.author : "Anonymous",
});
type CommentActionsProps = {
  db: Deno.Kv;
};
export class CommentActions {
  private db: Deno.Kv;
  constructor({ db }: CommentActionsProps) {
    this.db = db;
  }
  async post(partialComment: PostCommentPayload) {
    const { value } = await this.db.get<Comment[]>(["comments"]);
    let comments = value;
    if (!comments) {
      comments = [];
    }
    const newComment = completeCommentData(partialComment);
    comments.unshift(newComment);
    await this.db.set(["comments"], comments);
    return newComment;
  }

  async get() {
    const { value } = await this.db.get<Comment[]>(["comments"]);
    return value ? value : [];
  }
}

export const commentActions = new CommentActions({ db });

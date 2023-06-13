import { BlogPreviewType } from "../db.ts";
import { BlogPostType } from "../db.ts";

export const getPreviewFromBlog = ({
  uuid,
  author,
  description,
  title,
}: BlogPostType): BlogPreviewType => ({
  uuid,
  title,
  author,
  description,
});

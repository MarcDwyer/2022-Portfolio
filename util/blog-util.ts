import { BlogPostType, BlogPreviewType } from "../db-actions/blog-actions.ts";

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

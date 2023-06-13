import { BlogPreviewType } from "../db.ts";

type Props = {
  blogPreview: BlogPreviewType;
};

export const BlogPreview = ({ blogPreview }: Props) => {
  const { title, author, description, uuid } = blogPreview;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>By: {author}</span>
      <a href={`/blog/${uuid}`}>Read More</a>
    </div>
  );
};

import { BlogPreviewType } from "../db.ts";

type Props = {
  blogPreview: BlogPreviewType;
};

export const BlogPreview = ({ blogPreview }: Props) => {
  const { title, author, description, uuid } = blogPreview;
  return (
    <a
      href={`/blog/${uuid}`}
      class="flex flex-col bg-nav p-5 rounded-md cursor-pointer"
    >
      <h2 class="font-bold text-2xl">{title}</h2>
      <p>{description}</p>
      <span>By: {author}</span>
    </a>
  );
};

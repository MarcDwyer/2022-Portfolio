import { BlogPostType } from "../db-actions/blog-actions.ts";

type Props = {
  blogPost: BlogPostType;
};

export const BlogPost = ({ blogPost }: Props) => {
  return (
    <div class="bg-nav p-5 rounded-md">
      <h2 class="text-2xl font-bold">{blogPost.title}</h2>
      <p>{blogPost.body}</p>
    </div>
  );
};

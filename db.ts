export type BlogPostType = {
  title: string;
  author: string;
  description: string;
  body: string;
  uuid: string;
};

export const createBlogPost = (
  blogPost?: Omit<BlogPostType, "uuid">
): BlogPostType => ({
  uuid: crypto.randomUUID(),
  title: "",
  author: "Marc Dwyer",
  description: "",
  body: "",
  ...blogPost,
});

export const db = await Deno.openKv();

const BLOGS = "blogs";

export async function getBlogs() {
  const blogs: BlogPostType[] = [];
  for await (const { value } of db.list<BlogPostType>({ prefix: [BLOGS] })) {
    blogs.push(value);
  }
  return blogs;
}

export function saveBlog(blogPost: BlogPostType) {
  return db.set([BLOGS, blogPost.uuid], blogPost);
}

export type BlogPost = {
  title: string;
  author: string;
  description: string;
  body: string;
  uuid: string;
};

export const createBlogPost = (
  blogPost?: Omit<BlogPost, "uuid">
): BlogPost => ({
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
  const blogs: BlogPost[] = [];
  for await (const { value } of db.list<BlogPost>({ prefix: [BLOGS] })) {
    blogs.push(value);
  }
  return blogs;
}

export function saveBlog(blogPost: BlogPost) {
  return db.set([BLOGS, blogPost.uuid], blogPost);
}

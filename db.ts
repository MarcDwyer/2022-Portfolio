export type BlogPost = {
  title: string;
  author: string;
  description: string;
  body: string;
};

export const createBlogPost = (blogPost?: BlogPost): BlogPost => ({
  title: "",
  author: "Marc Dwyer",
  description: "",
  body: "",
  ...blogPost,
});

export const db = await Deno.openKv();

const BLOGS = ["blogs"];
export async function getBlogs() {
  const res = await db.get<BlogPost[]>(BLOGS);
  return res.value;
}

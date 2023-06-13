import type { Handlers, PageProps } from "$fresh/server.ts";
import { BlogPost } from "../../components/BlogPost.tsx";
import { MainContainer } from "../../components/MainContainer.tsx";
import { PathMatches } from "../../components/Navbar.tsx";
import { BlogPostType, getBlogs } from "../../db.ts";

export const handler: Handlers<BlogPostType[] | null> = {
  async GET(_req, ctx) {
    try {
      const blogs = await getBlogs();
      return ctx.render(blogs);
    } catch (e) {
      return new Response("Project not found", { status: 404 });
    }
  },
};

export default function Blog({ data }: PageProps<BlogPostType[] | null>) {
  console.log({ data });
  return (
    <MainContainer title="Blog" path="/blog" pathMatch={PathMatches.Blog}>
      <div class="mt-10 mb-auto mr-auto ml-auto w-3/4 p-5">
        <a
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/blog/create"
        >
          Create Blog
        </a>
        <div className="blog-container mt-5 grid grid-cols-1 gap-2">
          {data &&
            data.map((blog, i) => {
              return <BlogPost key={i} blogPost={blog} />;
            })}
        </div>
      </div>
    </MainContainer>
  );
}

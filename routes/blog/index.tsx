import type { Handlers, PageProps } from "$fresh/server.ts";
import { MainContainer } from "../../components/MainContainer.tsx";
import { PathMatches } from "../../components/Navbar.tsx";
import { BlogPost, getBlogs } from "../../db.ts";

export const handler: Handlers<BlogPost[] | null> = {
  async GET(_req, ctx) {
    try {
      const blogs = await getBlogs();
      console.log({ blogs });

      return ctx.render(blogs);
    } catch (e) {
      return new Response("Project not found", { status: 404 });
    }
  },
};

export default function Blog(props: PageProps<BlogPost[] | null>) {
  return (
    <MainContainer title="Blog" path="/blog" pathMatch={PathMatches.Blog}>
      <div class="mt-10 mb-auto mr-auto ml-auto w-3/6 p-5">
        <a
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/blog/create"
        >
          Create Blog
        </a>
      </div>
    </MainContainer>
  );
}

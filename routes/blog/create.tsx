import { Handlers } from "https://deno.land/x/fresh@1.1.6/server.ts";
import { MainContainer } from "../../components/MainContainer.tsx";
import { PathMatches } from "../../components/Navbar.tsx";
import { BlogPost, createBlogPost, saveBlog } from "../../db.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render();
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const blogPost = createBlogPost({
      title: (form.get("title") as string) ?? "",
      body: (form.get("body") as string) ?? "",
      author: "",
      description: "",
    });
    await saveBlog(blogPost);
    const headers = new Headers();
    headers.set("location", "/blog");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
};

export default function CreateBlog() {
  return (
    <MainContainer
      title="Create"
      path="/blog/create"
      pathMatch={PathMatches.Blog}
    >
      <div class="mt-10 mb-auto mr-auto ml-auto w-3/6 p-5">
        <form
          method="post"
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Title
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Title"
              name="title"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Body
            </label>
            <textarea
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="body"
              type="text"
              name="body"
              placeholder="Waddaya wanna talk about uwu"
            />
            <p class="text-red-500 text-xs italic">
              Please add content to your blog
            </p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </MainContainer>
  );
}

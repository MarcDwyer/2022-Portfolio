import { Handlers } from "https://deno.land/x/fresh@1.1.6/server.ts";
import { MainContainer } from "../../components/MainContainer.tsx";
import { PathMatches } from "../../components/Navbar.tsx";
import { createBlogPost, saveBlog } from "../../db.ts";
import { checkIfPasswordMatch } from "../../util/password-util.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render();
  },
  async POST(req, ctx) {
    const headers = new Headers();

    const form = await req.formData();
    const password = form.get("password") ?? "";

    const isAllowed = checkIfPasswordMatch(password as string);

    if (!isAllowed) {
      headers.set("location", "/blog/create");
      return new Response(null, {
        status: 401,
      });
    }

    const blogPost = createBlogPost({
      title: (form.get("title") as string) ?? "",
      body: (form.get("body") as string) ?? "",
      author: (form.get("author") as string) ?? "",
      description: "",
    });
    await saveBlog(blogPost);
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
        <a
          href="/blog"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go back
        </a>
        <form
          method="post"
          class="bg-gray-700 shadow-md rounded-md px-8 pt-6 pb-8 mb-4 mt-4"
        >
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="title">
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
              class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="body"
              type="text"
              name="body"
              placeholder="What would you like to talk about?"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="author">
              Author
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="author"
              type="text"
              placeholder="Author"
              name="author"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="Whats the super secret password?"
              name="password"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </MainContainer>
  );
}

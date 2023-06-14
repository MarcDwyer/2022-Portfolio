import { Handlers } from "https://deno.land/x/fresh@1.1.6/server.ts";
import { CreateBlogFormType } from "../../islands/CreateBlogForm.tsx";
import { checkIfPasswordMatch } from "../../util/password-util.ts";
import { db } from "../../db.ts";
import { BLOGS, createBlogPost } from "../../db-actions/blog-actions.ts";

export const handler: Handlers<void> = {
  async POST(req) {
    try {
      const blogForm = (await req.json()) as CreateBlogFormType;
      if (!checkIfPasswordMatch(blogForm.password)) {
        return new Response(null, {
          status: 401,
        });
      }

      const blogPost = createBlogPost(blogForm);

      const keys = [BLOGS, blogPost.uuid];
      await db.set(keys, blogPost);

      const savedBlog = await db.get(keys);

      return new Response(JSON.stringify(savedBlog), {
        status: 200,
      });
    } catch (e) {
      return new Response(e, {
        status: 500,
      });
    }
  },
};

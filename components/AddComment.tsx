import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render();
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const comment = form.get("comment")?.toString();
    console.log({ comment });
    // Add email to list.

    // Redirect user to thank you page.
    const headers = new Headers();
    // headers.set("location", "/thanks-for-subscribing");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
};

type Props = {
  threadUUID: string;
};

export function AddComment({ threadUUID }: Props) {
  return (
    <form method="post" class="flex flex-col">
      <label>Add a comment</label>
      <textarea type="text" name="comment" value="" />
      <button type="submit">Submit</button>
    </form>
  );
}

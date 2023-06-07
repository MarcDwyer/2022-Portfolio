import { MainContainer } from "../components/MainContainer.tsx";
import { PathMatches } from "../components/Navbar.tsx";

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
// export const handler: Handlers<BlogPost[]> = {
//   async GET(_req, ctx) {
//     try {
//       const data = await db.get<BlogPost[]>(["blog_posts"]);
//       if (!data.value) {
//         return new Response("Blog posts not found", { status: 404 });
//       }
//       return ctx.render(data.value);
//     } catch (e) {
//       return new Response("Project not found", { status: 404 });
//     }
//   },
// };

export default function Blog() {
  return (
    <MainContainer title="Blog" path="/blog" pathMatch={PathMatches.Blog}>
      <span>WIP</span>
    </MainContainer>
  );
}

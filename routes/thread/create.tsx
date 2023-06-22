import { MainContainer } from "../../components/MainContainer.tsx";
import { PathMatches } from "../../components/Navbar.tsx";
import CreateThreadForm from "../../islands/CreateBlogForm.tsx";

export default function CreateBlog() {
  return (
    <MainContainer
      title="Create"
      path="/blog/create"
      pathMatch={PathMatches.Blog}
    >
      <CreateThreadForm />
    </MainContainer>
  );
}

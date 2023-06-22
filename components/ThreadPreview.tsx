import { ThreadPreviewType } from "../db-actions/thread-actions.ts";

type Props = {
  threadPreview: ThreadPreviewType;
};

export const ThreadPreview = ({ threadPreview }: Props) => {
  const { title, author, description, uuid } = threadPreview;
  return (
    <a
      href={`/thread/${uuid}`}
      class="flex flex-col bg-nav p-5 rounded-md cursor-pointer"
    >
      <h2 class="font-bold text-2xl">{title}</h2>
      <p>{description}</p>
      <span>By: {author}</span>
    </a>
  );
};

import { useState } from "preact/hooks";

type Props = {
  text: string;
};

const ShowMore = ({ text }: Props) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const showClassNames = "cursor-pointer text-sm";
  return (
    <div>
      {showMore ? (
        <div>
          <div class="mt-5 mb-5">
            <p class="border-t-1 border-b-1 p-2 border-sky-500">{text}</p>
          </div>
          <span class={showClassNames} onClick={() => setShowMore(false)}>
            Show less
          </span>
        </div>
      ) : (
        <span class={showClassNames} onClick={() => setShowMore(true)}>
          Show more
        </span>
      )}
    </div>
  );
};

export default ShowMore;

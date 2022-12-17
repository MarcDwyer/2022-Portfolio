import { useEffect, useState } from "preact/hooks";
import * as Popper from "https://unpkg.com/@popperjs/core@2";

type Props = {
  targetId: string;
  text: string;
};
export default function MyToolTip({ targetId, text }: Props) {
  const [refEle, setRefEle] = useState<null | Element>(null);
  const [show, setShow] = useState<boolean>(false);
  // const [tooltip, setTooltip] = useState<null | Element>(null);
  const [popperEle, setPopperEle] = useState<HTMLElement | null>(null);

  const showEvents = ["mouseenter", "focus"];
  const hideEvents = ["mouseleave", "blur"];

  useEffect(() => {
    setRefEle(document.querySelector(`[data-targetid="${targetId}"]`));
  }, [targetId]);

  useEffect(() => {
    if (refEle && popperEle) {
      const instance = Popper.createPopper(refEle, popperEle, {
        placement: "bottom",
      });
      showEvents.forEach((evt) =>
        refEle.addEventListener(evt, () => {
          if (instance) {
            instance.update();
          }
          setShow(true);
        })
      );
      hideEvents.forEach((evt) =>
        refEle.addEventListener(evt, () => {
          setShow(false);
        })
      );
    }
  }, [refEle, popperEle]);

  return (
    <div
      ref={setPopperEle}
      role="tooltip"
      class={`${show ? "block" : "hidden"} bg-gray-900`}
    >
      <p>
        {text}
      </p>
    </div>
  );
}

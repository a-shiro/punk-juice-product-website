// Hooks
import { useRef } from "react";
import useTriggerAnimation from "../../../../../common/hooks/useTriggerAnimation";

function Paragraph({ text, image, index }) {
  const paragraph = useRef();

  useTriggerAnimation([paragraph]);

  return (
    <div ref={paragraph}>
      <p>{text}</p>
      {index === 2 && <img src={image} alt="" />}
    </div>
  );
}

export default Paragraph;

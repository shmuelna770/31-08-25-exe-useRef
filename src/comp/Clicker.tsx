import React, { use, useRef, useState } from "react";

export default function Clicker() {
  const clickCount = useRef(0);
  const [show, setShow] = useState(false);

  const hendelClick = () => {
    clickCount.current += 1;
  };

  const hendlShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      <button onClick={hendelClick}>click me</button>
      <button onClick={hendlShow}>show total</button>

      {show&&<p>Total Clicks: {clickCount.current}</p>}
    </div>
  );
}

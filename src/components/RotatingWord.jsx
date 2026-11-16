import { useEffect, useState } from "react";

export default function RotatingWord({ words, interval = 2400 }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let swap;
    const id = setInterval(() => {
      setVisible(false);
      swap = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 350);
    }, interval);
    return () => { clearInterval(id); clearTimeout(swap); };
  }, [words.length, interval]);

  return (
    <span
      className="rot"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(14px)" }}
    >
      {words[index]}
    </span>
  );
}

import { useEffect, useState } from "react";

const columnsFor = (w) => (w < 640 ? 1 : w < 980 ? 2 : 3);

// Number of masonry columns for the current viewport width.
export default function useColumns() {
  const [n, setN] = useState(() => columnsFor(window.innerWidth));

  useEffect(() => {
    const onResize = () => setN(columnsFor(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return n;
}

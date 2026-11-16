import { useState } from "react";

// Image that quietly disappears if it fails to load, revealing the gradient behind it.
export default function Thumb({ src, lazy = false }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  return <img alt="" src={src} loading={lazy ? "lazy" : undefined} onError={() => setFailed(true)} />;
}

import useScrollProgress from "../hooks/useScrollProgress.js";

export default function ScrollBar() {
  const pct = useScrollProgress();
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed", top: 0, left: 0, height: 3, width: `${pct}%`, zIndex: 50,
        background: "linear-gradient(90deg,var(--acc),var(--acc2),var(--acc4))",
      }}
    />
  );
}

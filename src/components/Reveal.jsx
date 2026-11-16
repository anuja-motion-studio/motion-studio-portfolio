import useReveal from "../hooks/useReveal.js";

// Fades and slides its content in when it scrolls into view.
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, seen] = useReveal();
  return (
    <Tag ref={ref} className={`rv ${seen ? "in" : ""} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}

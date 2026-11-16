import { site } from "../data/site.js";

export default function Footer() {
  return (
    <footer style={{ padding: "28px 0 40px", color: "var(--mute)", fontSize: ".85rem" }}>
      © {new Date().getFullYear()} {site.name}. All rights reserved.
    </footer>
  );
}

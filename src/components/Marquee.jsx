import { site } from "../data/site.js";
import "./Marquee.css";

export default function Marquee() {
  // list is doubled so the -50% translate loops seamlessly
  const items = [...site.marquee, ...site.marquee];
  return (
    <div className="mq" aria-hidden="true">
      <div>{items.map((t, i) => <span key={i}>{t} ✦</span>)}</div>
    </div>
  );
}

import { projects, gradients, aspectRatio } from "../data/projects.js";
import { thumbnailFor } from "../utils/youtube.js";
import Thumb from "./Thumb.jsx";

const shapes = ["tall", "wide", "square"];

// Three floating cards in the hero, one per aspect ratio.
export default function HeroCards() {
  return (
    <div className="hr">
      {shapes.map((shape, i) => {
        const p = projects.find((x) => x.shape === shape) || projects[0];
        const [a, b] = gradients[i];
        return (
          <a
            key={shape}
            className={`hc c${i + 1}`}
            href={p.yt}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={p.title}
            style={{ "--a": a, "--b": b, "--ar": aspectRatio[shape] }}
          >
            <Thumb src={thumbnailFor(p)} />
            <i className="mini" />
          </a>
        );
      })}
    </div>
  );
}

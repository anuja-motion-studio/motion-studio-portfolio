import Reveal from "./Reveal.jsx";
import Thumb from "./Thumb.jsx";
import { aspectRatio, gradients, typeLabel } from "../data/projects.js";
import { thumbnailFor } from "../utils/youtube.js";

export default function WorkCard({ project, index }) {
  const [a, b] = gradients[index % gradients.length];

  // subtle 3D tilt that follows the pointer
  const tilt = (e) => {
    const t = e.currentTarget, r = t.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    t.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  };
  const untilt = (e) => { e.currentTarget.style.transform = ""; };

  return (
    <Reveal as="a" className="work" href={project.yt} target="_blank" rel="noopener noreferrer">
      <div
        className="thumb"
        style={{ "--a": a, "--b": b, "--ar": aspectRatio[project.shape] || "16/9" }}
        onPointerMove={tilt}
        onPointerOut={untilt}
      >
        <Thumb src={thumbnailFor(project)} lazy />
        <span className="chip">{project.type}</span>
        <div className="play"><i /></div>
      </div>
      <h3>{project.title}</h3>
      <small>{typeLabel[project.type]}</small>
    </Reveal>
  );
}

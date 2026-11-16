import { useMemo, useState } from "react";
import Reveal from "./Reveal.jsx";
import WorkCard from "./WorkCard.jsx";
import useColumns from "../hooks/useColumns.js";
import { projects, filters, shapeHeight } from "../data/projects.js";
import "./Work.css";

export default function Work() {
  const [filter, setFilter] = useState("All");
  const n = useColumns();

  // Masonry: put each project into the currently shortest column.
  const columns = useMemo(() => {
    const cols = Array.from({ length: n }, () => []);
    const heights = Array(n).fill(0);
    projects
      .filter((p) => filter === "All" || p.type === filter)
      .forEach((p, index) => {
        const k = heights.indexOf(Math.min(...heights));
        heights[k] += (shapeHeight[p.shape] || 0.5625) + 0.25;
        cols[k].push({ project: p, index });
      });
    return cols;
  }, [filter, n]);

  return (
    <section id="work">
      <Reveal as="h2">Selected work</Reveal>
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button key={f.value} type="button" aria-pressed={filter === f.value} onClick={() => setFilter(f.value)}>
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid">
        {columns.map((col, i) => (
          <div className="mc" key={`${filter}-${i}`}>
            {col.map(({ project, index }) => (
              <WorkCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

import { useRef, useState } from "react";
import { timelineTracks, rulerMarks } from "../data/timeline.js";
import "./Timeline.css";

function timecode(p) {
  const s = p * 60;
  const frames = Math.floor((s % 1) * 24);
  return `00:${String(Math.floor(s)).padStart(2, "0")}:${String(frames).padStart(2, "0")}`;
}

// Decorative video-editor timeline with a draggable playhead.
export default function Timeline() {
  const ref = useRef(null);
  const [p, setP] = useState(0.38);

  const move = (x) => {
    const r = ref.current.getBoundingClientRect();
    setP(Math.min(1, Math.max(0, (x - r.left) / r.width)));
  };

  return (
    <div
      className="tl"
      ref={ref}
      aria-hidden="true"
      onPointerMove={(e) => move(e.clientX)}
      onPointerDown={(e) => move(e.clientX)}
    >
      <div className="ruler">{rulerMarks.map((m) => <span key={m}>{m}</span>)}</div>
      <div style={{ position: "relative" }}>
        {timelineTracks.map((track, i) => (
          <div className="track" key={i}>
            {track.map((c) => (
              <div key={c.label} className={`clip ${c.kind}`} style={{ left: `${c.left}%`, width: `${c.width}%` }}>
                {c.label}
              </div>
            ))}
          </div>
        ))}
        <div className="head" style={{ left: `${p * 100}%` }}><span>{timecode(p)}</span></div>
      </div>
    </div>
  );
}

import Reveal from "./Reveal.jsx";
import { site } from "../data/site.js";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="cols">
        <Reveal>
          <h2>About</h2>
          {site.about.map((text) => <p key={text}>{text}</p>)}
          <div className="tools">
            {site.tools.map((t) => <span key={t}>{t}</span>)}
          </div>
        </Reveal>
        <Reveal>
          <h2>Services</h2>
          <ul className="list">
            {site.services.map((s) => (
              <li key={s.name}>{s.name} <span>{s.detail}</span></li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

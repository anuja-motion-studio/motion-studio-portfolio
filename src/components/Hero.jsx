import RotatingWord from "./RotatingWord.jsx";
import HeroCards from "./HeroCards.jsx";
import Timeline from "./Timeline.jsx";
import { site } from "../data/site.js";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <i className="blob" style={{ width: 420, height: 420, background: "var(--acc)", right: -60, top: -40 }} />
      <i className="blob" style={{ width: 320, height: 320, background: "var(--acc2)", right: 240, top: 260, animationDelay: "-5s" }} />
      <i className="blob" style={{ width: 260, height: 260, background: "var(--acc3)", left: -80, top: 120, animationDelay: "-9s" }} />

      <div className="hgrid">
        <div>
          <h1>I make <RotatingWord words={site.rotatingWords} /> people remember.</h1>
          <p>{site.heroText}</p>
          <div className="cta">
            <a className="btn p" href="#work">See my work</a>
            <a className="btn" href="#contact">Book a project</a>
          </div>
        </div>
        <HeroCards />
      </div>

      <Timeline />
    </div>
  );
}

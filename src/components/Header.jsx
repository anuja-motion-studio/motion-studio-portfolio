import Logo from "./Logo.jsx";
import useTheme from "../hooks/useTheme.js";
import { site } from "../data/site.js";
import "./Header.css";

export default function Header() {
  const toggleTheme = useTheme();
  return (
    <header className="site-header">
      <b className="brand"><Logo />{site.name}</b>
      <nav>
        <a className="h" href="#work">Work</a>
        <a className="h" href="#about">About</a>
        <a className="h" href="#contact">Contact</a>
        <button id="theme" type="button" aria-label="Switch light or dark theme" onClick={toggleTheme}>Theme</button>
      </nav>
    </header>
  );
}

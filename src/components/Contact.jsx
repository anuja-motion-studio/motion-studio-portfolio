import { useState } from "react";
import Reveal from "./Reveal.jsx";
import Icon from "./Icons.jsx";
import { site } from "../data/site.js";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState("");

  // No backend needed: the form opens the visitor's email app with the message filled in.
  const onSubmit = (e) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Name: ${d.get("name")}\nEmail: ${d.get("email")}\nProject: ${d.get("type")}\n\n${d.get("msg")}`;
    window.location.href =
      `mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry from ${d.get("name")}`)}&body=${encodeURIComponent(body)}`;
    setStatus(`Opening your email app. If nothing opens, write to ${site.email}.`);
  };

  return (
    <section className="contact" id="contact">
      <div className="cols">
        <div>
          <Reveal as="h2">Let’s work together</Reveal>
          <p>Have a video or animation in mind? Send me a message and I’ll reply soon.</p>
          <Reveal as="a" className="big" href={`mailto:${site.email}`}>{site.email}</Reveal>
          <div className="social">
            {site.social.map((s) => (
              <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <Icon name={s.id} />
              </a>
            ))}
          </div>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <label>Your name<input name="name" required autoComplete="name" /></label>
          <label>Your email<input name="email" type="email" required autoComplete="email" /></label>
          <label>What do you need?
            <select name="type">
              {site.requestTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
          <label>Message<textarea name="msg" required /></label>
          <button className="btn p" type="submit">Send message</button>
          <p id="fs" role="status">{status}</p>
        </form>
      </div>
    </section>
  );
}

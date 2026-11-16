import ScrollBar from "./components/ScrollBar.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Work from "./components/Work.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <ScrollBar />
      <div className="wrap">
        <Header />
        <main>
          <Hero />
          <Marquee />
          <Work />
          <About />
        </main>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import Logo from "./Logo";
import "./Header.css";

export default function Header() {
  // Switch the header between light text (over dark sections) and dark text
  // (over the light Works/About sections) as they cross under the header.
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    const lightSections = document.querySelectorAll("[data-header='light']");
    if (!lightSections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setOnLight(true);
          else {
            // if no light section still crosses the header line, go dark
            const anyLight = Array.from(lightSections).some((el) => {
              const r = el.getBoundingClientRect();
              return r.top <= 48 && r.bottom >= 48;
            });
            setOnLight(anyLight);
          }
        });
      },
      { rootMargin: "-48px 0px -100% 0px", threshold: 0 }
    );

    lightSections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header ${onLight ? "is-light" : ""}`}>
      <a href="#top" className="site-header__logo" aria-label="goBIG Creatives home">
        <Logo variant="horizontal" />
      </a>

      <nav className="site-header__center">
        <a href="#works" className="label">
          Works
        </a>
      </nav>

      <nav className="site-header__right">
        <a href="#talents" className="label">
          Talents
        </a>
        <a href="#contact" className="label">
          Contact
        </a>
        <a href="#about" className="label">
          About
        </a>
      </nav>
    </header>
  );
}

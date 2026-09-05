import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import "./Header.css";

export default function Header() {
  const [onLight, setOnLight] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Switch the header between light text (over dark sections) and dark text
  // (over the light Works/About sections) as they cross under the header.
  // Re-run whenever the route changes so it observes the new page's sections.
  useEffect(() => {
    const onProject = location.pathname.startsWith("/work/");
    // Project pages have a light background from the top.
    if (onProject) {
      setOnLight(true);
      return;
    }
    setOnLight(false);

    const lightSections = document.querySelectorAll("[data-header='light']");
    if (!lightSections.length) return;

    const check = () => {
      const anyLight = Array.from(lightSections).some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= 48 && r.bottom >= 48;
      });
      setOnLight(anyLight);
    };

    const observer = new IntersectionObserver(check, {
      rootMargin: "-48px 0px -100% 0px",
      threshold: 0,
    });
    lightSections.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", check, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", check);
    };
  }, [location.pathname]);

  // Navigate to a section: go home first if we're on another page, then scroll.
  function goToSection(e, id) {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(id), 120);
    } else {
      scrollToId(id);
    }
  }

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className={`site-header ${onLight ? "is-light" : ""}`}>
      <Link to="/" className="site-header__logo" aria-label="goBIG Creatives home">
        <Logo tone="auto" />
      </Link>

      <nav className="site-header__center">
        <a href="/#works" className="label" onClick={(e) => goToSection(e, "works")}>
          Works
        </a>
      </nav>

      <nav className="site-header__right">
        <a href="/#contact" className="label" onClick={(e) => goToSection(e, "contact")}>
          Contact
        </a>
        <a href="/#about" className="label" onClick={(e) => goToSection(e, "about")}>
          About
        </a>
      </nav>
    </header>
  );
}

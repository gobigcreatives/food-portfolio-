import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import "./Header.css";

export default function Header() {
  const [onLight, setOnLight] = useState(false);
  const location = useLocation();

  // The landing page is dark (the hero); every other page is light.
  useEffect(() => {
    setOnLight(location.pathname !== "/");
  }, [location.pathname]);

  return (
    <header className={`site-header ${onLight ? "is-light" : ""}`}>
      <Link to="/" className="site-header__logo" aria-label="goBIG Creatives home">
        <Logo tone="auto" />
      </Link>

      <nav className="site-header__center">
        <Link to="/works" className="label">
          Works
        </Link>
      </nav>

      <nav className="site-header__right">
        <Link to="/contact" className="label">
          Contact
        </Link>
        <Link to="/about" className="label">
          About
        </Link>
      </nav>
    </header>
  );
}

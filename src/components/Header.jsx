import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="site-header__logo" aria-label="Cipher home">
        cīphər
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

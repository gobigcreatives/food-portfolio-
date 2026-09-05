import Logo from "./Logo";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__lockup">
        <Logo tone="white" className="footer__logo" />
        <span className="footer__tagline">THINK BIGGER, BRAVER, BOLDER.</span>
      </div>

      <div className="footer__cols">
        <div className="footer__col">
          <span className="label label--xs">goBIG Creatives</span>
          <span className="label label--xs">Brand &amp; Design Studio</span>
        </div>
        <div className="footer__col">
          <span className="label label--xs">Bigger · Braver</span>
          <span className="label label--xs">Bolder</span>
        </div>
        <div className="footer__col" id="talents">
          <span className="label label--xs">Work With Us</span>
          <a className="label label--xs" href="mailto:info@gobigcreatives.com">
            info@gobigcreatives.com
          </a>
        </div>
        <div className="footer__col footer__col--right">
          <a className="label label--xs" href="#top">
            Instagram
          </a>
          <a className="label label--xs" href="#top">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__lockup">
        <span className="footer__brand">
          CIPHER
          <sup className="footer__brand-sup">© PROD</sup>
        </span>
        <span className="footer__tagline">
          <span className="footer__tagline-for">FOR</span>
          <em>CULTURE</em>
          <span className="footer__tagline-and">
            AND
            <br />
            ITS
          </span>
          COUNTER
        </span>
      </div>

      <div className="footer__cols">
        <div className="footer__col">
          <span className="label label--xs">7 Impasse Franchemont</span>
          <span className="label label--xs">Paris&nbsp;&nbsp;&nbsp;11</span>
        </div>
        <div className="footer__col">
          <span className="label label--xs">For Culture</span>
          <span className="label label--xs">And Its Counter</span>
        </div>
        <div className="footer__col" id="talents">
          <span className="label label--xs">Work With Us</span>
          <a className="label label--xs" href="mailto:prod@cipher.tv">
            prod@cipher.tv
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

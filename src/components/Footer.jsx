import Logo from "./Logo";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__lockup">
        <Logo tone="white" className="footer__logo" />
        <span className="footer__tagline">
          LET&rsquo;S MAKE YOUR FOOD IMPOSSIBLE TO SCROLL PAST.
        </span>
      </div>

      <div className="footer__cols">
        <div className="footer__col">
          <span className="label label--xs">goBIG Creatives</span>
          <span className="label label--xs">Food Video &amp; Photo</span>
        </div>
        <div className="footer__col">
          <span className="label label--xs">Restaurants · Brands</span>
          <span className="label label--xs">Cafes · Chefs</span>
        </div>
        <div className="footer__col">
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

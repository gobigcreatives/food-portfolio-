import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import "./ContactPage.css";

const EMAIL = "info@gobigcreatives.com";

export default function ContactPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function sendEmail() {
    const subject = encodeURIComponent("New enquiry — goBIG Creatives");
    const body = encodeURIComponent(message || "");
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="contact">
      <div className="contact__grid">
        {/* left — brand + details */}
        <aside className="contact__aside">
          <div className="contact__mark">
            <Logo tone="blue" />
          </div>
          <span className="contact__rule" />

          <div className="contact__block">
            <p>167&ndash;169 Great Portland Street</p>
            <p>5th Floor . London . W1W 5PF</p>
          </div>

          <div className="contact__block">
            <p>
              phone . <a href="tel:+447721875437">+44 7721 875437</a>
            </p>
            <p>
              mail . <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>

          <span className="contact__rule contact__rule--bottom" />
          <p className="contact__copy">© {new Date().getFullYear()}</p>
        </aside>

        {/* right — message + send */}
        <section className="contact__form">
          <h1 className="contact__hi">Hello goBIG&nbsp;Creatives,</h1>
          <label htmlFor="contact-message" className="contact__label">
            <textarea
              id="contact-message"
              className="contact__textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Drop us a line with your name, brand and what you need — a shoot, a monthly retainer, or content for your next launch. We'll get back to you as soon as we can."
              rows={4}
            />
          </label>

          <div className="contact__actions">
            <button type="button" className="contact__send" onClick={sendEmail}>
              Send email
            </button>
          </div>
        </section>
      </div>

      <div className="contact__bigword" aria-hidden="true">
        CONTACT
      </div>
    </main>
  );
}

import Placeholder from "./Placeholder";
import "./About.css";

const stackTop = [
  "Bold Brands Built Big",
  "Bigger Braver Bolder Always",
  "Design Content Social Results",
  "Creativity Meets Real Impact",
];

export default function About() {
  return (
    <section className="about" id="about" data-header="light">
      {/* Concentric title stack that mirrors then repeats CIPHER */}
      <div className="about__stack">
        {stackTop.map((line) => (
          <p key={line} className="about__stack-line about__stack-line--big">
            {line}
          </p>
        ))}

        <div className="about__stack-cipher">
          {Array.from({ length: 7 }).map((_, i) => (
            <p key={i} className="about__stack-line about__stack-line--cipher">
              goBIG
            </p>
          ))}
          <span className="about__copyright about__copyright--left" aria-hidden>
            ©
          </span>
          <span className="about__copyright about__copyright--right" aria-hidden>
            ©
          </span>
        </div>

        {[...stackTop].reverse().map((line) => (
          <p
            key={line + "-r"}
            className="about__stack-line about__stack-line--big"
          >
            {line}
          </p>
        ))}
      </div>

      {/* twin video blocks */}
      <div className="about__videos">
        <Placeholder tone="#0a0a0c" w={1} h={1} className="about__video" />
        <Placeholder tone="#151310" w={1} h={1} className="about__video" />
      </div>

      <h2 className="about__headline">
        Think bigger, braver,
        <br />
        and bolder.
      </h2>

      <p className="about__statement">
        We dive deep into who you are and what makes your business unique, then
        bring it all to life. goBIG Creatives shapes the future of brands —
        combining design, content, and social with a focus on real results.
      </p>
      <p className="about__statement about__statement--faint">
        Bold &amp; long-lasting.
      </p>
    </section>
  );
}

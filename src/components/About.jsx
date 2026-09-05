import Placeholder from "./Placeholder";
import "./About.css";

const stackTop = [
  "Classics Creators Club",
  "Cautious Curators Collective",
  "Creative Crafters Constellation",
  "Counterculture Creating Culture",
];

export default function About() {
  return (
    <section className="about" id="about">
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
              Cipher
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
        Creators, capable crafters,
        <br />
        and cautious curators.
      </h2>

      <p className="about__statement">
        We build, bend, break, and rebuild — crafting classics while exploring
        what comes next. Cipher is a creative production company working between
        the established and the experimental.
      </p>
      <p className="about__statement about__statement--faint">
        And the experimental.
      </p>
    </section>
  );
}

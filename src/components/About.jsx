import Media from "./Media";
import Reveal from "./Reveal";
import { aboutVideos } from "../data/works";
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
        {aboutVideos.map((v, i) => (
          <Reveal key={i} delay={i * 120} y={30} className="about__video-wrap">
            <Media item={v} className="about__video" />
          </Reveal>
        ))}
      </div>

      <Reveal as="h2" className="about__headline">
        Think bigger, braver,
        <br />
        and bolder.
      </Reveal>

      <Reveal as="p" className="about__statement" y={24}>
        We dive deep into who you are and what makes your business unique, then
        bring it all to life. goBIG Creatives shapes the future of brands —
        combining design, content, and social with a focus on real results.
      </Reveal>
      <Reveal as="p" className="about__statement about__statement--faint" y={20}>
        Bold &amp; long-lasting.
      </Reveal>
    </section>
  );
}

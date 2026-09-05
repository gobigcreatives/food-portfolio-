import Media from "./Media";
import Reveal from "./Reveal";
import { aboutVideos } from "../data/works";
import "./About.css";

const stackTop = [
  "Shoot For The Scroll",
  "Food That Stops Feeds",
  "Made For Reels And TikTok",
  "Video And Photo Done Right",
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
            <img
              key={i}
              className="about__stack-logo"
              src="/brand/gobig-blue.png"
              alt="goBIG Creatives"
            />
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
        Shoot for the scroll,
        <br />
        not the portfolio.
      </Reveal>

      <Reveal as="p" className="about__statement" y={24}>
        goBIG Creatives is the video-and-photo arm built for one job: making
        food content that actually stops the scroll. We shoot mostly video,
        but every frame is composed like a photo first. You work directly with
        the person shooting, editing and strategising your content, start to
        finish.
      </Reveal>
      <Reveal as="p" className="about__statement about__statement--faint" y={20}>
        Made to perform, not just to look nice.
      </Reveal>
    </section>
  );
}

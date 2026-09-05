import { Link } from "react-router-dom";
import { works, slugify } from "../data/works";
import Media from "./Media";
import Reveal from "./Reveal";
import "./Works.css";

// Per-work grid placement to recreate the scattered editorial layout.
// col: [start / end] on a 12-track grid. mt: top offset in vh-ish rem.
const layout = {
  // The Kitchen (portrait trio)
  "001": { col: "2 / 5", mt: 0 },
  "002": { col: "8 / 11", mt: 7 },
  "003": { col: "5 / 8", mt: 4 },
  // Pinnova (three portrait + one landscape carousel)
  "004": { col: "2 / 5", mt: 6 },
  "005": { col: "6 / 9", mt: 1 },
  "006": { col: "9 / 12", mt: 8 },
  "007": { col: "3 / 9", mt: 4 }, // landscape carousel
  // Utsav (portrait trio)
  "008": { col: "2 / 5", mt: 6 },
  "009": { col: "6 / 9", mt: 2 },
  "010": { col: "9 / 12", mt: 7 },
};

export default function Works() {
  return (
    <section className="works" id="works" data-header="light">
      <Reveal as="p" className="works__tagline" y={24}>
        We help brands goBIG&nbsp;&mdash; bold, unforgettable, and built to
        make a long-lasting&nbsp;impression.
      </Reveal>

      <div className="works__grid">
        {works.map((work) => {
          const place = layout[work.id] || { col: "2 / 6", mt: 0 };
          return (
            <Reveal
              as={Link}
              key={work.id}
              to={`/work/${slugify(work.title)}`}
              className="work"
              style={{
                gridColumn: place.col,
                marginTop: `${place.mt}rem`,
              }}
            >
              <div className="work__media">
                <Media item={work} />
              </div>
              <div className="work__meta">
                <span className="label label--xs work__id">+ {work.id}</span>
                <span className="label work__title">
                  {work.title}
                  {work.subtitle && (
                    <span className="work__subtitle"> — {work.subtitle}</span>
                  )}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

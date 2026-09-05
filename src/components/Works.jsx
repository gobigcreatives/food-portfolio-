import { works } from "../data/works";
import Placeholder from "./Placeholder";
import "./Works.css";

// Per-work grid placement to recreate the scattered editorial layout.
// col: [start / end] on a 12-track grid. mt: top offset in vh-ish rem.
const layout = {
  "001": { col: "2 / 6", mt: 0 },
  "002": { col: "8 / 11", mt: 6 },
  "003": { col: "1 / 5", mt: 4 },
  "004": { col: "6 / 10", mt: 0 },
  "005": { col: "7 / 10", mt: 1 },
  "006": { col: "3 / 9", mt: 6 },
  "007": { col: "2 / 6", mt: 4 },
  "008": { col: "8 / 11", mt: 8 },
  "009": { col: "1 / 5", mt: 5 },
  "010": { col: "7 / 11", mt: 0 },
  "011": { col: "8 / 11", mt: 3 },
  "012": { col: "3 / 8", mt: 6 },
};

export default function Works() {
  return (
    <section className="works" id="works" data-header="light">
      <p className="works__tagline">
        We help brands goBIG&nbsp;&mdash; bold, unforgettable, and built to
        make a long-lasting&nbsp;impression.
      </p>

      <div className="works__grid">
        {works.map((work) => {
          const place = layout[work.id] || { col: "2 / 6", mt: 0 };
          return (
            <a
              key={work.id}
              href="#works"
              className="work"
              style={{
                gridColumn: place.col,
                marginTop: `${place.mt}rem`,
              }}
            >
              <div className="work__media">
                <Placeholder tone={work.tone} w={work.w} h={work.h} />
              </div>
              <div className="work__meta">
                <span className="label label--xs work__id">+ {work.id}</span>
                <span className="label work__title">{work.title}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

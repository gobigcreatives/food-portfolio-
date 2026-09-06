import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { works, slugify } from "../data/works";
import Media from "./Media";
import Reveal from "./Reveal";
import "./Works.css";

// staggered column offsets (rem) so the masonry reads as random placement
const OFFSETS = {
  3: [0, 4.5, 2],
  2: [0, 3],
  1: [0],
};

export default function Works() {
  const [cols, setCols] = useState(3);

  useEffect(() => {
    const pick = () => {
      const w = window.innerWidth;
      setCols(w <= 480 ? 2 : w <= 860 ? 2 : 3);
    };
    pick();
    window.addEventListener("resize", pick);
    return () => window.removeEventListener("resize", pick);
  }, []);

  // distribute works round-robin across the columns for a mixed, scattered feel
  const columns = Array.from({ length: cols }, () => []);
  works.forEach((work, i) => columns[i % cols].push(work));
  const offsets = OFFSETS[cols] || OFFSETS[3];

  return (
    <section className="works" id="works" data-header="light">
      <Reveal as="p" className="works__tagline" y={24}>
        We make food look like it tastes. Videography-led content built for
        Reels, TikTok and everywhere people scroll&nbsp;hungry.
      </Reveal>

      <div className="works__grid">
        {columns.map((col, ci) => (
          <div
            className="works__col"
            key={ci}
            style={{ marginTop: `${offsets[ci] || 0}rem` }}
          >
            {col.map((work) => (
              <Reveal
                as={Link}
                key={work.id}
                to={`/work/${slugify(work.title)}`}
                className="work"
              >
                <div className="work__media">
                  <Media item={work} />
                </div>
                <div className="work__meta">
                  <span className="label label--xs work__id">+ {work.id}</span>
                  <span className="label work__title">{work.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

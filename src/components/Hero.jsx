import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { heroTiles } from "../data/works";
import Media from "./Media";
import { scrambleTo } from "../utils/scramble";
import "./Hero.css";

const DEFAULT_LABEL = "Selected Work";
const SPIN_SPEED = 3; // degrees per second, clockwise

// Mobile: place the 9 portrait reels evenly on a ring around the centre mark
// (40° apart) so they revolve around it like planets around the sun. x/y are
// the tile's top-left as % of the stage; the ring is ~circular in pixels.
const MOBILE_LAYOUT = [
  { x: 39, y: 23.5, w: 22 },
  { x: 61.5, y: 27.5, w: 22 },
  { x: 73.5, y: 37.5, w: 22 },
  { x: 69.3, y: 49, w: 22 },
  { x: 51, y: 56.5, w: 22 },
  { x: 27, y: 56.5, w: 22 },
  { x: 8.7, y: 49, w: 22 },
  { x: 4.5, y: 37.5, w: 22 },
  { x: 16.5, y: 27.5, w: 22 },
];

export default function Hero() {
  const clusterRef = useRef(null);
  const tileRefs = useRef([]);
  const pointerRef = useRef({ x: 0, y: 0 });
  const pausedRef = useRef(false); // pause the orbit while hovering a tile
  const captionRef = useRef(null);
  const cancelRef = useRef(null);

  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport so we can tighten + enlarge the cluster on small screens.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Track cursor for parallax (via ref, so it doesn't re-render every move).
  useEffect(() => {
    function onMove(e) {
      const el = clusterRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      pointerRef.current = {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      };
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Continuous clockwise orbit: the whole cluster rotates while each tile
  // counter-rotates to stay upright. Pauses only while a tile is hovered.
  // (Runs regardless of the OS "reduce motion" setting — the orbit is core to
  // the landing and is explicitly wanted on mobile.)
  useEffect(() => {
    let raf;
    let angle = 0;
    let last = performance.now();

    function loop(now) {
      const dt = (now - last) / 1000;
      last = now;
      if (!pausedRef.current) angle += SPIN_SPEED * dt;

      const p = pointerRef.current;
      if (clusterRef.current) {
        clusterRef.current.style.transform = `translate3d(${p.x * -24}px, ${
          p.y * -24
        }px, 0) rotate(${angle}deg)`;
      }
      for (const el of tileRefs.current) {
        if (el) el.style.transform = `rotate(${-angle}deg)`;
      }
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  function setCaption(text) {
    cancelRef.current?.();
    cancelRef.current = scrambleTo(captionRef.current, text.toUpperCase());
  }

  function onEnter(tile, i) {
    pausedRef.current = true;
    setActive(i);
    setCaption(tile.title);
  }

  function onLeave() {
    pausedRef.current = false;
    setActive(null);
    setCaption(DEFAULT_LABEL);
  }

  return (
    <section className="hero" id="top">
      <div className="hero__stage">
        <div
          ref={clusterRef}
          className={`hero__cluster ${active !== null ? "has-active" : ""}`}
        >
          {heroTiles.map((tile, i) => {
            // Desktop uses the scattered diagonal positions; mobile uses an
            // evenly-distributed 3x3 scatter so nothing bunches up.
            const m = MOBILE_LAYOUT[i] || { x: tile.x, y: tile.y, w: tile.w };
            const x = isMobile ? m.x : tile.x;
            const y = isMobile ? m.y : tile.y;
            const w = isMobile ? m.w : tile.w;
            return (
            <figure
              key={(tile.video || tile.id) + i}
              ref={(el) => (tileRefs.current[i] = el)}
              className={`hero__tile ${active === i ? "is-active" : ""}`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${w}%`,
                zIndex: active === i ? 50 : tile.z,
              }}
              onMouseEnter={() => onEnter(tile, i)}
              onMouseLeave={onLeave}
            >
              <Media item={{ video: tile.video, tone: tile.tone, w: tile.w_, h: tile.h_ }} />
            </figure>
            );
          })}
        </div>

        {/* Central pulsing oval mark (stays fixed while clips orbit it) */}
        <div className="hero__mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>

      <p className="hero__statement">
        Food content
        <br />
        impossible to ignore.
      </p>

      <div className="hero__footer">
        <a className="hero__contact" href="mailto:info@gobigcreatives.com">
          <span className="label label--xs">Work With Us</span>
          <span className="label label--xs hero__contact-email">
            info@gobigcreatives.com
          </span>
        </a>
        <span className="label hero__caption" ref={captionRef}>
          {DEFAULT_LABEL.toUpperCase()}
        </span>
        <Link to="/works" className="hero__jour" aria-label="View works">
          <span className="hero__jour-word">WORK</span>
          <span className="hero__jour-arrow">↗</span>
        </Link>
      </div>
    </section>
  );
}

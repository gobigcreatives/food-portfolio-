import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { heroTiles } from "../data/works";
import Media from "./Media";
import { scrambleTo } from "../utils/scramble";
import "./Hero.css";

const DEFAULT_LABEL = "Selected Work";
const SPIN_SPEED = 3; // degrees per second, clockwise

export default function Hero() {
  const clusterRef = useRef(null);
  const tileRefs = useRef([]);
  const pointerRef = useRef({ x: 0, y: 0 });
  const pausedRef = useRef(false); // pause the orbit while hovering a tile
  const captionRef = useRef(null);
  const cancelRef = useRef(null);

  const [active, setActive] = useState(null);
  const [index, setIndex] = useState("010");

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
  // counter-rotates to stay upright. Pauses while a tile is hovered.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf;
    let angle = 0;
    let last = performance.now();

    function loop(now) {
      const dt = (now - last) / 1000;
      last = now;
      if (!reduce && !pausedRef.current) angle += SPIN_SPEED * dt;

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
    setIndex(tile.id);
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
          {heroTiles.map((tile, i) => (
            <figure
              key={(tile.video || tile.id) + i}
              ref={(el) => (tileRefs.current[i] = el)}
              className={`hero__tile ${active === i ? "is-active" : ""}`}
              style={{
                left: `${tile.x}%`,
                top: `${tile.y}%`,
                width: `${tile.w}%`,
                zIndex: active === i ? 50 : tile.z,
              }}
              onMouseEnter={() => onEnter(tile, i)}
              onMouseLeave={onLeave}
            >
              <Media item={{ video: tile.video, tone: tile.tone, w: tile.w_, h: tile.h_ }} />
            </figure>
          ))}
        </div>

        {/* Central pulsing oval mark (stays fixed while clips orbit it) */}
        <div className="hero__mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="hero__footer">
        <span className="label label--xs">{index}</span>
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

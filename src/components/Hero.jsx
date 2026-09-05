import { useEffect, useRef, useState } from "react";
import { heroTiles } from "../data/works";
import Media from "./Media";
import { scrambleTo } from "../utils/scramble";
import "./Hero.css";

const DEFAULT_LABEL = "Selected Work";

export default function Hero() {
  const stageRef = useRef(null);
  const captionRef = useRef(null);
  const cancelRef = useRef(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(null); // index of hovered tile
  const [index, setIndex] = useState("010");

  // Subtle parallax: the cluster drifts opposite the cursor.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    function onMove(e) {
      const rect = stage.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      setPointer({ x: nx, y: ny });
    }

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Scramble the caption to the hovered project's name.
  function setCaption(text) {
    cancelRef.current?.();
    cancelRef.current = scrambleTo(captionRef.current, text.toUpperCase());
  }

  function onEnter(tile, i) {
    setActive(i);
    setIndex(tile.id);
    setCaption(tile.title);
  }

  function onLeave() {
    setActive(null);
    setCaption(DEFAULT_LABEL);
  }

  return (
    <section className="hero" id="top">
      <div className="hero__stage" ref={stageRef}>
        <div
          className={`hero__cluster ${active !== null ? "has-active" : ""}`}
          style={{
            transform: `translate3d(${pointer.x * -24}px, ${pointer.y * -24}px, 0)`,
          }}
        >
          {heroTiles.map((tile, i) => (
            <figure
              key={(tile.video || tile.id) + i}
              className={`hero__tile ${active === i ? "is-active" : ""}`}
              style={{
                left: `${tile.x}%`,
                top: `${tile.y}%`,
                width: `${tile.w}%`,
                zIndex: active === i ? 50 : tile.z,
                transform: `translate3d(${pointer.x * (tile.z * 2)}px, ${
                  pointer.y * (tile.z * 2)
                }px, 0)`,
              }}
              onMouseEnter={() => onEnter(tile, i)}
              onMouseLeave={onLeave}
            >
              <Media item={{ video: tile.video, tone: tile.tone, w: tile.w_, h: tile.h_ }} />
            </figure>
          ))}
        </div>

        {/* Central pulsing oval mark */}
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
        <a href="#works" className="hero__jour" aria-label="View works">
          <span className="hero__jour-word">WORK</span>
          <span className="hero__jour-arrow">↗</span>
        </a>
      </div>
    </section>
  );
}

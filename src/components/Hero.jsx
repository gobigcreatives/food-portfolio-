import { useEffect, useRef, useState } from "react";
import { heroTiles } from "../data/works";
import Placeholder from "./Placeholder";
import "./Hero.css";

export default function Hero() {
  const stageRef = useRef(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

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

  return (
    <section className="hero" id="top">
      <div className="hero__stage" ref={stageRef}>
        <div
          className="hero__cluster"
          style={{
            transform: `translate3d(${pointer.x * -24}px, ${pointer.y * -24}px, 0)`,
          }}
        >
          {heroTiles.map((tile, i) => (
            <figure
              key={tile.id + i}
              className="hero__tile"
              style={{
                left: `${tile.x}%`,
                top: `${tile.y}%`,
                width: `${tile.w}%`,
                zIndex: tile.z,
                transform: `translate3d(${pointer.x * (tile.z * 2)}px, ${
                  pointer.y * (tile.z * 2)
                }px, 0)`,
              }}
            >
              <Placeholder tone={tile.tone} w={tile.w_} h={tile.h_} />
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
        <span className="label label--xs">006</span>
        <span className="label">The Ultimate Shield</span>
        <a href="#about" className="hero__jour" aria-label="Jour">
          <span className="hero__jour-word">JOUR</span>
          <span className="hero__jour-arrow">↗</span>
        </a>
      </div>
    </section>
  );
}

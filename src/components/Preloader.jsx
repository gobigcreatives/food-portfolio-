import { useEffect, useRef, useState } from "react";
import { heroTiles } from "../data/works";
import Logo from "./Logo";
import "./Preloader.css";

const MIN_MS = 1900; // minimum count duration so the number is always visible

/**
 * Intro loader: a big number counts up to 100 on a white screen while the hero
 * reels load, then the goBIG Creatives wordmark is revealed and the panel lifts
 * away. Progress tracks real asset loading, paced to a minimum duration; a
 * window-load listener and a safety timeout guarantee it always completes.
 */
export default function Preloader() {
  const [display, setDisplay] = useState(0);
  const [phase, setPhase] = useState("count"); // count -> word -> lift -> gone
  const realRef = useRef(0); // 0..1 real load progress
  const startRef = useRef(performance.now());

  // Track hero video loading -> realRef (0..1).
  useEffect(() => {
    const srcs = heroTiles.map((t) => t.video).filter(Boolean);
    const total = srcs.length || 1;
    let loaded = 0;

    const bump = () => {
      loaded += 1;
      realRef.current = Math.min(1, loaded / total);
    };

    const videos = srcs.map((src) => {
      const v = document.createElement("video");
      v.muted = true;
      v.preload = "auto";
      const handler = () => {
        v.removeEventListener("loadeddata", handler);
        v.removeEventListener("error", handler);
        bump();
      };
      v.addEventListener("loadeddata", handler);
      v.addEventListener("error", handler);
      v.src = src;
      return v;
    });

    const onLoad = () => (realRef.current = 1);
    window.addEventListener("load", onLoad);
    const safety = setTimeout(() => (realRef.current = 1), 7000);

    return () => {
      clearTimeout(safety);
      window.removeEventListener("load", onLoad);
      videos.forEach((v) => v.removeAttribute("src"));
    };
  }, []);

  // Ease the displayed number toward the real progress, paced by MIN_MS.
  useEffect(() => {
    let raf;
    let val = 0;
    const loop = () => {
      const elapsed = performance.now() - startRef.current;
      const timeCeil = Math.min(1, elapsed / MIN_MS);
      const target = Math.min(realRef.current, timeCeil) * 100;
      val += (target - val) * 0.12;
      if (target >= 100 && val > 99.4) val = 100;
      setDisplay(Math.round(val));
      if (val >= 100) {
        setPhase("word");
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // After the wordmark shows, lift the panel away and unmount.
  useEffect(() => {
    if (phase !== "word") return;
    const t1 = setTimeout(() => setPhase("lift"), 850);
    const t2 = setTimeout(() => setPhase("gone"), 1650);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div className={`preloader ${phase === "lift" ? "is-lift" : ""}`} aria-hidden="true">
      <div className="preloader__inner">
        <span className={`preloader__count ${phase !== "count" ? "is-hidden" : ""}`}>
          {display}
        </span>
        <span className={`preloader__word ${phase === "count" ? "is-hidden" : ""}`}>
          <Logo tone="blue" />
        </span>
      </div>
    </div>
  );
}

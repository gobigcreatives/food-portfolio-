import { useEffect, useState } from "react";
import { heroTiles } from "../data/works";
import "./Preloader.css";

/**
 * Full-screen intro preloader that shows a loading percentage while the hero
 * reels load, then fades out. Progress tracks the hero videos reaching their
 * first frame; a window-load listener and a safety timeout guarantee it always
 * completes (e.g. if a video can't decode).
 */
export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [gone, setGone] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const srcs = heroTiles.map((t) => t.video).filter(Boolean);
    const total = srcs.length || 1;
    let loaded = 0;
    let done = false;

    function finish() {
      if (done) return;
      done = true;
      setProgress(100);
      setFading(true);
      setTimeout(() => setGone(true), 650); // matches CSS fade
    }

    function bump() {
      loaded += 1;
      setProgress(Math.min(99, Math.round((loaded / total) * 100)));
      if (loaded >= total) finish();
    }

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

    const onWindowLoad = () => finish();
    window.addEventListener("load", onWindowLoad);
    const safety = setTimeout(finish, 7000);

    return () => {
      clearTimeout(safety);
      window.removeEventListener("load", onWindowLoad);
      videos.forEach((v) => {
        v.removeAttribute("src");
      });
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`preloader ${fading ? "is-fading" : ""}`} aria-hidden="true">
      <span className="preloader__count">{progress}%</span>
      <span className="preloader__bar">
        <span className="preloader__bar-fill" style={{ width: `${progress}%` }} />
      </span>
    </div>
  );
}

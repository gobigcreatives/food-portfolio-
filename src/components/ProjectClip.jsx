import { useEffect, useRef, useState } from "react";
import "./ProjectClip.css";

/**
 * A project-page video with play/pause and mute/unmute controls (works on
 * mobile and desktop). Autoplays muted while in view; the user can pause it or
 * turn the sound on. Unmuting one clip mutes the others so audio never overlaps.
 */
export default function ProjectClip({ clip }) {
  const { video, poster, w = 9, h = 16 } = clip;
  const ref = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  // Play only while in view (respecting the user's pause choice).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (playing) el.play?.().catch(() => {});
        } else {
          el.pause?.();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [playing]);

  // When another clip is unmuted, mute this one.
  useEffect(() => {
    function onOther(e) {
      if (e.detail !== ref.current && ref.current) {
        ref.current.muted = true;
        setMuted(true);
      }
    }
    window.addEventListener("clip-unmuted", onOther);
    return () => window.removeEventListener("clip-unmuted", onOther);
  }, []);

  function togglePlay() {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play?.().catch(() => {});
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  }

  function toggleMute() {
    const el = ref.current;
    if (!el) return;
    const next = !el.muted;
    el.muted = next;
    setMuted(next);
    if (!next) {
      // just unmuted — make sure it's playing and silence the others
      el.play?.().catch(() => {});
      setPlaying(true);
      window.dispatchEvent(new CustomEvent("clip-unmuted", { detail: el }));
    }
  }

  return (
    <div className="clip" style={{ aspectRatio: `${w} / ${h}` }}>
      <video
        ref={ref}
        className="clip__video"
        src={video}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="clip__controls">
        <button
          type="button"
          className="clip__btn"
          onClick={togglePlay}
          aria-label={playing ? "Pause video" : "Play video"}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <button
          type="button"
          className="clip__btn"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9v6h4l5 5V4L8 9H4z" />
              <path d="M16 8l5 8M21 8l-5 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9v6h4l5 5V4L8 9H4z" />
              <path d="M15 8a5 5 0 0 1 0 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

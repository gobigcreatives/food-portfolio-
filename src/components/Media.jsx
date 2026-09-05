import { useEffect, useRef } from "react";
import Placeholder from "./Placeholder";

/**
 * Renders the right media for a slot:
 *   - `video` set  -> muted looped <video> that plays only while on screen
 *   - `image` set  -> <img>
 *   - otherwise    -> neutral placeholder (tone + aspect ratio)
 *
 * Paths are relative to the site root, i.e. files in /public.
 * Example: image: "/works/the-circle.jpg", video: "/works/the-circle.mp4"
 */
export default function Media({ item, className = "" }) {
  const { image, video, poster, tone, w = 4, h = 3, title = "" } = item;
  const ratio = { aspectRatio: `${w} / ${h}` };
  const ref = useRef(null);

  // Only decode/play videos that are in view — keeps many reels on one page light.
  useEffect(() => {
    const el = ref.current;
    if (!el || !video) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play?.().catch(() => {});
        } else {
          el.pause?.();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [video]);

  if (video) {
    return (
      <video
        ref={ref}
        className={`media media--video ${className}`}
        style={ratio}
        src={video}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  if (image) {
    return (
      <img
        className={`media media--img ${className}`}
        style={ratio}
        src={image}
        alt={title}
        loading="lazy"
      />
    );
  }

  return <Placeholder tone={tone} w={w} h={h} className={className} />;
}

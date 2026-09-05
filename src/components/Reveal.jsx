import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

/**
 * Fades + lifts its children into view when scrolled to.
 * `as` — element tag (default div). `delay` — ms stagger. `y` — start offset.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  y = 40,
  className = "",
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // respect reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms`, "--reveal-y": `${y}px`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

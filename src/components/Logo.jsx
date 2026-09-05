import "./Logo.css";

/**
 * goBIG Creatives wordmark, built from the brand typeface (Montserrat).
 * `variant` — "horizontal" (default) for the header, "stacked" for hero/footer.
 * Colour is inherited via `currentColor` so it works on light and dark grounds.
 */
export default function Logo({ variant = "horizontal", className = "" }) {
  return (
    <span className={`logo logo--${variant} ${className}`} aria-label="goBIG Creatives">
      <span className="logo__mark">
        <span className="logo__go">go</span>
        <span className="logo__big">BIG</span>
      </span>
      <span className="logo__creatives">Creatives</span>
    </span>
  );
}

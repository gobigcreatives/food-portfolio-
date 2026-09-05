import "./Logo.css";

/**
 * goBIG Creatives official wordmark (extracted from the brand logo file).
 * `tone`:
 *   "white" — white logo (for dark grounds)
 *   "blue"  — Prussian-blue logo (for light grounds)
 *   "auto"  — renders both, stacked; the parent toggles which shows via the
 *             `is-light` class (used by the scroll-aware header).
 */
export default function Logo({ tone = "white", className = "" }) {
  if (tone === "auto") {
    return (
      <span className={`logo logo--auto ${className}`} aria-label="goBIG Creatives">
        <img className="logo__img logo__img--white" src="/brand/gobig-white.png" alt="" />
        <img className="logo__img logo__img--blue" src="/brand/gobig-blue.png" alt="" />
      </span>
    );
  }

  return (
    <img
      className={`logo logo--img ${className}`}
      src={tone === "blue" ? "/brand/gobig-blue.png" : "/brand/gobig-white.png"}
      alt="goBIG Creatives"
    />
  );
}

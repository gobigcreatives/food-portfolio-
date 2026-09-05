// Neutral placeholder used in place of Cipher's proprietary photography.
// Renders a soft duotone gradient at a given aspect ratio. Replace usages
// with <img src="/works/<file>" /> once you have licensed assets.
import "./Placeholder.css";

export default function Placeholder({ tone = "#333", w = 4, h = 3, className = "" }) {
  return (
    <div
      className={`placeholder ${className}`}
      style={{
        aspectRatio: `${w} / ${h}`,
        "--tone": tone,
      }}
      aria-hidden="true"
    />
  );
}

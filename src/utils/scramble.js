// Text-scramble effect: transitions a DOM node's text to `target`, briefly
// showing random glyphs (like the cipher.tv caption). Returns a cancel fn.
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&/()=*+-";

export function scrambleTo(el, target, { duration = 520 } = {}) {
  if (!el) return () => {};
  const start = performance.now();
  const from = el.textContent || "";
  const len = Math.max(from.length, target.length);
  let raf;

  function frame(now) {
    const p = Math.min(1, (now - start) / duration);
    let out = "";
    for (let i = 0; i < len; i++) {
      // each character locks in progressively, left to right
      const reveal = (i + 1) / len;
      if (p >= reveal) {
        out += target[i] || "";
      } else if (target[i] === " ") {
        out += " ";
      } else {
        out += CHARS[(Math.random() * CHARS.length) | 0];
      }
    }
    el.textContent = out;
    if (p < 1) raf = requestAnimationFrame(frame);
    else el.textContent = target;
  }
  raf = requestAnimationFrame(frame);
  return () => cancelAnimationFrame(raf);
}

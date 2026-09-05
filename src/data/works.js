// Project list mirrored from the Cipher works index.
// `tone` drives the neutral placeholder gradient (swap `src` for real
// imagery by dropping files in /public/works and setting src accordingly).
// `w`/`h` are the intrinsic aspect ratios used to size each grid tile.

export const works = [
  { id: "001", title: "The Circle", tone: "#101014", w: 4, h: 3, span: "wide-left" },
  { id: "002", title: "Unerual", tone: "#c9c4bc", w: 3, h: 4, span: "narrow-right" },
  { id: "003", title: "Dualie", tone: "#e7e6e2", w: 3, h: 4, span: "tall-left" },
  { id: "004", title: "Counter Culture", tone: "#0a0a0c", w: 4, h: 3, span: "mid-right" },
  { id: "005", title: "BDX", tone: "#c7a7a3", w: 3, h: 3, span: "small-right" },
  { id: "006", title: "The Ultimate Shield", tone: "#8fb8d8", w: 16, h: 9, span: "hero-center" },
  { id: "007", title: "Evidens de Beaute", tone: "#3a4a5c", w: 4, h: 3, span: "wide-left" },
  { id: "008", title: "Marly", tone: "#1a1712", w: 3, h: 4, span: "portrait-right" },
  { id: "009", title: "EDB Gamme Extreme", tone: "#e8d9a8", w: 4, h: 4, span: "square-left" },
  { id: "010", title: "LC", tone: "#2b3a2e", w: 4, h: 3, span: "mid-right" },
  { id: "011", title: "Marly Shoot Studio", tone: "#9aa0a6", w: 3, h: 3, span: "small-right" },
  { id: "012", title: "The Dazzling", tone: "#cfc9bf", w: 16, h: 9, span: "wide-center" },
];

// The two large blocks in the About section. Add `video` or `image` to show
// real media (see Media.jsx); otherwise a neutral placeholder is shown.
// Example: { video: "/about/reel-1.mp4", poster: "/about/reel-1.jpg", w: 1, h: 1 }
export const aboutVideos = [
  { tone: "#0a1330", w: 1, h: 1, title: "Showreel" },
  { tone: "#12193a", w: 1, h: 1, title: "Behind the scenes" },
];

// Hero collage — the scattered diagonal cluster on the landing screen.
// x/y are percentages of the stage; w is a percentage width; z the stacking.
export const heroTiles = [
  { id: "004", tone: "#0d0d10", x: 44, y: 15, w: 15, z: 2, w_: 4, h_: 3 },
  { id: "us-jars", tone: "#b7b3ab", x: 50, y: 18, w: 8, z: 4, w_: 3, h_: 4 },
  { id: "hands", tone: "#8f8b83", x: 61, y: 15, w: 9, z: 3, w_: 4, h_: 3 },
  { id: "grass", tone: "#7d786e", x: 69, y: 18, w: 10, z: 2, w_: 4, h_: 3 },
  { id: "hall", tone: "#151412", x: 36, y: 25, w: 13, z: 5, w_: 3, h_: 4 },
  { id: "silhouette", tone: "#c8c4bc", x: 66, y: 38, w: 10, z: 3, w_: 3, h_: 4 },
  { id: "perfume", tone: "#2a2824", x: 28, y: 34, w: 14, z: 4, w_: 4, h_: 3 },
  { id: "portrait", tone: "#3a3630", x: 22, y: 48, w: 14, z: 6, w_: 4, h_: 3 },
  { id: "shield", tone: "#8fb8d8", x: 53, y: 47, w: 22, z: 8, w_: 16, h_: 9 },
  { id: "eye", tone: "#1c1a17", x: 20, y: 60, w: 13, z: 7, w_: 4, h_: 3 },
  { id: "closeup", tone: "#6f6a62", x: 52, y: 62, w: 12, z: 5, w_: 4, h_: 3 },
  { id: "rug", tone: "#8a857b", x: 39, y: 71, w: 11, z: 4, w_: 4, h_: 3 },
  { id: "field", tone: "#9c968b", x: 48, y: 72, w: 10, z: 3, w_: 4, h_: 3 },
];

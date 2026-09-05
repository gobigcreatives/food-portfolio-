// Project list mirrored from the Cipher works index.
// `tone` drives the neutral placeholder gradient (swap `src` for real
// imagery by dropping files in /public/works and setting src accordingly).
// `w`/`h` are the intrinsic aspect ratios used to size each grid tile.

export const works = [
  // The Kitchen — three vertical (9:16) food reels
  {
    id: "001",
    title: "The Kitchen",
    subtitle: "Reel",
    video: "/works/the-kitchen-reel.mp4",
    w: 9,
    h: 16,
  },
  {
    id: "002",
    title: "The Kitchen",
    subtitle: "Food & Ambience",
    video: "/works/the-kitchen-food-ambience.mp4",
    w: 9,
    h: 16,
  },
  {
    id: "003",
    title: "The Kitchen",
    subtitle: "Yellowtail Tiradito",
    video: "/works/the-kitchen-yellowtail-tiradito.mp4",
    w: 9,
    h: 16,
  },
  // Pinnova — three vertical (9:16) reels
  {
    id: "004",
    title: "Pinnova",
    subtitle: "Pinner Reel",
    video: "/works/pinnova-pinner-reel.mp4",
    w: 9,
    h: 16,
  },
  {
    id: "005",
    title: "Pinnova",
    subtitle: "Food B-Rolls",
    video: "/works/pinnova-food-brolls.mp4",
    w: 9,
    h: 16,
  },
  {
    id: "006",
    title: "Pinnova",
    subtitle: "B-Rolls Reel",
    video: "/works/pinnova-brolls-reel.mp4",
    w: 9,
    h: 16,
  },
  {
    id: "007",
    title: "Pinnova",
    subtitle: "Carousel",
    video: "/works/pinnova-carousel.mp4",
    w: 16,
    h: 10,
  },
  // Utsav — three vertical (9:16) reels
  {
    id: "008",
    title: "Utsav",
    subtitle: "Reel",
    video: "/works/utsav-reel.mp4",
    w: 9,
    h: 16,
  },
  {
    id: "009",
    title: "Utsav",
    subtitle: "Fast Cut Reel",
    video: "/works/utsav-fast-cut-reel.mp4",
    w: 9,
    h: 16,
  },
  {
    id: "010",
    title: "Utsav",
    subtitle: "13 Mar",
    video: "/works/utsav-13-mar.mp4",
    w: 9,
    h: 16,
  },
  { id: "011", title: "Selected Work", tone: "#2b3a2e", w: 4, h: 3 },
  { id: "012", title: "Selected Work", tone: "#cfc9bf", w: 16, h: 9 },
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

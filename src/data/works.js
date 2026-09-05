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
];

// The two large blocks in the About section. Add `video` or `image` to show
// real media (see Media.jsx); otherwise a neutral placeholder is shown.
// Example: { video: "/about/reel-1.mp4", poster: "/about/reel-1.jpg", w: 1, h: 1 }
export const aboutVideos = [
  { tone: "#0a1330", w: 1, h: 1, title: "Showreel" },
  { tone: "#12193a", w: 1, h: 1, title: "Behind the scenes" },
];

// Hero collage — the scattered diagonal cluster on the landing screen,
// built from the real reels. x/y are percentages of the stage; w is a
// percentage width; z the stacking. w_/h_ set each tile's aspect ratio.
export const heroTiles = [
  { id: "001", title: "The Kitchen", video: "/works/the-kitchen-reel.mp4", x: 42, y: 10, w: 9, z: 3, w_: 9, h_: 16 },
  { id: "002", title: "The Kitchen", video: "/works/the-kitchen-food-ambience.mp4", x: 51, y: 12, w: 8, z: 5, w_: 9, h_: 16 },
  { id: "003", title: "The Kitchen", video: "/works/the-kitchen-yellowtail-tiradito.mp4", x: 60, y: 15, w: 8, z: 4, w_: 9, h_: 16 },
  { id: "004", title: "Pinnova", video: "/works/pinnova-pinner-reel.mp4", x: 32, y: 22, w: 9, z: 6, w_: 9, h_: 16 },
  { id: "005", title: "Pinnova", video: "/works/pinnova-food-brolls.mp4", x: 23, y: 40, w: 9, z: 5, w_: 9, h_: 16 },
  { id: "006", title: "Pinnova", video: "/works/pinnova-brolls-reel.mp4", x: 67, y: 36, w: 8, z: 4, w_: 9, h_: 16 },
  { id: "007", title: "Pinnova", video: "/works/pinnova-carousel.mp4", x: 50, y: 46, w: 23, z: 8, w_: 16, h_: 10 },
  { id: "008", title: "Utsav", video: "/works/utsav-reel.mp4", x: 21, y: 58, w: 9, z: 7, w_: 9, h_: 16 },
  { id: "009", title: "Utsav", video: "/works/utsav-fast-cut-reel.mp4", x: 40, y: 65, w: 9, z: 5, w_: 9, h_: 16 },
  { id: "010", title: "Utsav", video: "/works/utsav-13-mar.mp4", x: 61, y: 62, w: 9, z: 6, w_: 9, h_: 16 },
];

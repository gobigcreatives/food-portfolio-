# About media — the two large blocks

1. Put your two files in THIS folder (public/about/).
2. Open src/data/works.js, find `aboutVideos`, and set the paths:

      export const aboutVideos = [
        { video: "/about/reel.mp4", poster: "/about/reel.jpg", w: 1, h: 1 },
        { image: "/about/studio.jpg", w: 1, h: 1 },
      ];

The path is /about/ + the exact file name you dropped in here.

## File size
No hard limit — videos can be larger than 5 MB. Larger = slower to load.
For very large videos, compressing or hosting on Vimeo/YouTube is an option.

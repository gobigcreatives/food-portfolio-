# Works media — where portfolio images/videos go

1. Put your file in THIS folder (public/works/).
2. Open src/data/works.js and add one line to the matching project:
      image: "/works/your-file.jpg"      (for a photo)
      video: "/works/your-file.mp4"      (for a video — autoplays, muted, loops)
   Optional for video: poster: "/works/your-file.jpg"  (still frame before it plays)

The path always starts with /works/ + the exact file name you dropped in here.
Any project with no image/video keeps the grey placeholder.

## File size
There is NO hard limit — videos can be larger than 5 MB. Bigger files just take
longer to load for visitors. Guidance, not a rule:
- Images: JPG or WebP, ~1600px on the long edge
- Video:  MP4 (H.264) or WebM, muted. Short loops feel best.
- If a video is very large (say 30 MB+), consider compressing it, or host it on
  Vimeo/YouTube/a CDN and we can embed it instead. Ask me and I'll set that up.

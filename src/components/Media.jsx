import Placeholder from "./Placeholder";

/**
 * Renders the right media for a slot:
 *   - `video` set  -> autoplaying muted looped <video> (great for showreels)
 *   - `image` set  -> <img>
 *   - otherwise    -> neutral placeholder (tone + aspect ratio)
 *
 * Paths are relative to the site root, i.e. files in /public.
 * Example: image: "/works/the-circle.jpg", video: "/works/the-circle.mp4"
 */
export default function Media({ item, className = "" }) {
  const { image, video, poster, tone, w = 4, h = 3, title = "" } = item;
  const ratio = { aspectRatio: `${w} / ${h}` };

  if (video) {
    return (
      <video
        className={`media media--video ${className}`}
        style={ratio}
        src={video}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  if (image) {
    return (
      <img
        className={`media media--img ${className}`}
        style={ratio}
        src={image}
        alt={title}
        loading="lazy"
      />
    );
  }

  return <Placeholder tone={tone} w={w} h={h} className={className} />;
}

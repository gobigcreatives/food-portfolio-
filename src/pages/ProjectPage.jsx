import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProject } from "../data/works";
import Media from "../components/Media";
import Reveal from "../components/Reveal";
import "./ProjectPage.css";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  // Start each project page at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <main className="project project--missing">
        <p className="project__missing">That project doesn&rsquo;t exist.</p>
        <Link to="/" className="project__back label">
          ← Back to all work
        </Link>
      </main>
    );
  }

  return (
    <main className="project">
      <header className="project__head">
        <Link to="/#works" className="project__back label">
          ← All work
        </Link>
        <h1 className="project__title">{project.title}</h1>
        {project.description && (
          <p className="project__desc">{project.description}</p>
        )}
        <span className="project__count label label--xs">
          {project.clips.length}&nbsp;
          {project.clips.length === 1 ? "piece" : "pieces"}
        </span>
      </header>

      <div className="project__grid">
        {project.clips.map((clip, i) => {
          const landscape = clip.w >= clip.h;
          return (
            <Reveal
              key={clip.id}
              delay={(i % 3) * 90}
              className={`project__item ${landscape ? "is-wide" : ""}`}
            >
              <div className="project__media">
                <Media item={clip} />
              </div>
              {clip.subtitle && (
                <span className="project__caption label label--xs">
                  {clip.subtitle}
                </span>
              )}
            </Reveal>
          );
        })}
      </div>
    </main>
  );
}

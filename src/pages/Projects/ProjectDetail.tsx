import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { PROJECT_COMPONENTS, PROJECT_SLUGS, ProjectSlug } from "./Registry";

function isProjectSlug(x: string): x is ProjectSlug {
  return (PROJECT_SLUGS as readonly string[]).includes(x);
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !isProjectSlug(slug)) {
    return <div className="container py-5">Project not found.</div>;
  }

  const Project = PROJECT_COMPONENTS[slug];

  return (
    <Suspense fallback={<div className="container py-5">Loading…</div>}>
      <Project />
    </Suspense>
  );
}

import type { ReactNode } from "react";

export type ProjectLayoutProps = {
  title: string;
  heroImg: string;
  children: ReactNode;
};

export default function ProjectLayout({ title, heroImg, children }: ProjectLayoutProps) {
  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <img
            src={heroImg}
            alt={title}
            className="img-fluid rounded shadow-sm"
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
        </div>
        <div className="col-12 col-lg-6">
          <h1 className="mb-3">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}

import { lazy } from "react";

export const PROJECT_SLUGS = ["alexa-fan", "hydroponic-garden", "3d-prints", "galaga-game"] as const;
export type ProjectSlug = typeof PROJECT_SLUGS[number];

export const PROJECT_COMPONENTS: Record<ProjectSlug, React.LazyExoticComponent<() => JSX.Element>> = {
  "alexa-fan": lazy(() => import("./AlexaFan")),
  "hydroponic-garden": lazy(() => import("./HydroponicGarden")),
  "3d-prints": lazy(() => import("./ThreeDPrints")),
  "galaga-game": lazy(() => import("./GalagaGame")),
};

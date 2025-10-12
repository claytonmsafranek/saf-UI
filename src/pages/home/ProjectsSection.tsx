import ProjectCard from "../../components/ProjectCard";
import fanImg from "../../assets/fan.jpg";
import hydroImg from "../../assets/flower.png";
import printerImg from "../../assets/printer.jpg";
import galagaImg from "../../assets/galaga.png";

const PROJECTS = [
  {
    slug: "alexa-fan",
    title: "Alexa controls the fan!",
    summary: "ESP8266 + relay + Alexa skill for hands-free airflow.",
    imgSrc: fanImg,
    externalUrl: ""
  },
  {
    slug: "hydroponic-garden",
    title: "Hydroponic garden",
    summary: "Automated nutrient dosing, water level, and grow lights.",
    imgSrc: hydroImg,
    externalUrl: ""
  },
  {
    slug: "3d-prints",
    title: "3D Prints",
    summary: "Fun and functional designs I've printed.",
    imgSrc: printerImg,
    externalUrl: ""
  },
  {
    slug: "galaga-game",
    title: "3D Prints",
    summary: "Fun and functional designs I've printed.",
    imgSrc: galagaImg,
    externalUrl: ""
  }
];

const ProjectsSection = () => {
  return (
    <section id="projectsSection" className="py-5">
      <div className="container">
        <div className="mb-4 text-center">
          <h1 className="mb-2">Projects</h1>
          <p className="text-body-secondary">
            I love to build things—here are a few favorites.
          </p>
        </div>

        <div className="row g-4">
          {PROJECTS.map(p => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

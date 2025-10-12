import hydroImg from "../../assets/flower.png";
import ProjectLayout from "./ProjectLayout";

export default function HydroponicGarden() {
  return (
    <ProjectLayout title="Hydroponic garden" heroImg={hydroImg}>
      <p>Controller logic, pumps, pH/EC sensors, safety cutoffs.</p>
      <ul>
        <li>Raspberry Pi + Node-RED</li>
        <li>Grafana dashboards</li>
        <li>Dosing schedule</li>
      </ul>

      {/* You can add a Bootstrap Carousel/Gallery here later */}
    </ProjectLayout>
  );
}

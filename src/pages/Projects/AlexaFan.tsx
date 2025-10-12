
import fanImg from "../../assets/fan.jpg";
import ProjectLayout from "./ProjectLayout";

export default function AlexaFan() {
  return (
    <ProjectLayout title="Alexa controls the fan!" heroImg={fanImg}>
      <p>Deep dive: hardware, wiring, firmware, Alexa skill setup.</p>
      <ul>
        <li>ESP8266 + relay board</li>
        <li>MQTT topic structure</li>
        <li>Skill intents &amp; utterances</li>
      </ul>

      <h4 className="mt-4">Wiring Diagram</h4>
      <p>Coming soon…</p>
    </ProjectLayout>
  );
}

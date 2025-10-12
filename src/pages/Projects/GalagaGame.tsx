
import galagaImg from "../../assets/galaga.png";
import ProjectLayout from "./ProjectLayout";

export default function GalagaGame() {
  return (
    <ProjectLayout title="Galaga Game!" heroImg={galagaImg}>
      <p>In college I mage this galaga game completely in javascript</p>
      <ul>
        <li>It persists high scores in a cloud database.</li>
        <li>Game API backend to handle scores and storing users info.</li>
      </ul>

      <h4 className="mt-4">Future Enhancements</h4>
      <p>Profanity checker for names on leader board (had issue with this in college lol)</p>
      <p>Coming soon…</p>
    </ProjectLayout>
  );
}

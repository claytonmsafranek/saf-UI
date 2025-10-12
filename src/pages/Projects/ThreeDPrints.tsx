import printerImg from "../../assets/printer.jpg";
import ProjectLayout from "./ProjectLayout";

export default function ThreeDPrints() {
  return (
    <ProjectLayout title="3D Prints" heroImg={printerImg}>
      <p>From functional and practical, to purely for fun :)</p>
      <ul>
        <li>Lever for car air compressor</li>
        <li>Figurine pieces for friend (Scott)</li>
        <li>Box to house all of the printer gear</li>
        <li>Piece for Luc's car</li>
      </ul>
    </ProjectLayout>
  );
}

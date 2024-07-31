import CardPart from "../component/Cardbox";
import Coursecard from "../component/courseCard";
import Footeri from "../component/footer";
import Navbar from "../component/navbar";

export default function Course() {
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "100vh",
          marginTop: "5rem",
          textAlign: "center",
          marginLeft: "1rem",
          marginRight: "1rem",
        }}
      >
        <Coursecard></Coursecard>
      </div>

      <Footeri></Footeri>
    </>
  );
}

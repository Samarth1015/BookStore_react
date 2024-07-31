import SliderEff from "./slider";
import list from "../../public/data.json";
export default function CardPart() {
  return (
    <>
      <div
        style={{
          marginBottom: "5rem",
          paddingLeft: "1rem",
          overflowX: "hidden",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "bolder" }}>
          Free offered courses!
        </h1>
        <p style={{ fontSize: "1rem", fontWeight: "normal" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia hic
          excepturi omnis? Est commodi debitis quis rem eos possimus! Molestiae
          incidunt, iure hic repellendus suscipit praesentium ab explicabo id
          impedit!
        </p>
      </div>
      <SliderEff list={list}></SliderEff>
    </>
  );
}

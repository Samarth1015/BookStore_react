import { useEffect, useState } from "react";
import SliderEff from "./slider";
import axios from "axios";

export default function CardPart() {
  let [bookData, setBookData] = useState([]);

  useEffect(() => {
    let fetchdata = async () => {
      await axios
        .get("/api/book")
        .then((res) => {
          console.log(res);
          setBookData(res.data);
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    };
    fetchdata();
  }, []);
  let freelist = bookData.filter((data) => {
    if (data.price === 0) {
      return data;
    }
  });
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
      <SliderEff list={freelist}></SliderEff>
    </>
  );
}

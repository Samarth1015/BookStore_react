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
          At our store, we believe in the power of knowledge and the importance
          of lifelong learning. That's why we're excited to offer a selection of
          free courses designed to help you expand your skills and discover new
          passions. Whether you're interested in delving into the world of web
          development, exploring the fundamentals of Android development, or
          mastering the art of competitive programming, we have something for
          you. Our expertly crafted courses provide a perfect blend of theory
          and hands-on practice, ensuring that you gain practical, real-world
          skills. Join our community of learners today and take the first step
          towards unlocking your full potential—all for free!
        </p>
      </div>
      <SliderEff list={freelist}></SliderEff>
    </>
  );
}

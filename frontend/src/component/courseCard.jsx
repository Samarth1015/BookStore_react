import Button from "@mui/material/Button";
import axios from "axios";
import "./coursecar.css";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Coursecard() {
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

  return (
    <div>
      <h1 className="H1">
        We're delighted to have you{" "}
        <span style={{ color: "#cf08aa" }}>Here! :) </span>
      </h1>
      <p>
        Welcome to BookStore, your premier destination for an unparalleled
        literary journey. Here, you can access an extensive collection of books
        from our store, catering to every type of reader and interest. Whether
        you are a lover of classic literature, an enthusiast of contemporary
        fiction, or a seeker of the latest bestsellers, our fiction section is
        stocked with timeless works and modern masterpieces. For those who revel
        in the excitement of mystery and thrillers, we offer a curated selection
        of gripping novels that will keep you on the edge of your seat. If
        romance is what you seek, our shelves are adorned with heartwarming love
        stories and passionate sagas. Our non-fiction collection spans a vast
        array of topics, including biographies of inspiring figures, insightful
        self-help guides, and comprehensive history books that bring the past to
        life. Science fiction and fantasy fans will be delighted by our range of
        imaginative tales and epic adventures that transport you to other
        worlds. For the young and young at heart, our children's and young adult
        sections are filled with enchanting stories, educational books, and
        captivating series that ignite the imagination. Academic and
        professional readers will find an extensive selection of textbooks and
        reference materials across disciplines such as science, technology,
        engineering, mathematics, law, and medicine. Our travel section invites
        wanderlust with detailed guides and travelogues, while our cooking and
        culinary books offer a feast of recipes and techniques for every
        aspiring chef. Beyond just books, we offer a variety of graphic novels,
        comic books, and manga for visual storytelling enthusiasts. Our store is
        a haven for poetry lovers, with collections from both renowned and
        emerging poets. Additionally, our spirituality and wellness section
        provides resources for mindfulness, meditation, and personal growth. At
        BookStore, we believe in creating a space where every reader can find
        their next great read. Our knowledgeable staff is always ready to assist
        you in discovering new authors, exploring different genres, and finding
        books that resonate with your interests. With regular author events,
        book signings, and community book clubs, we strive to foster a vibrant
        community of readers and writers. Visit us today and explore the endless
        possibilities that await in the pages of our books.
      </p>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <Link to="/">
          <Button variant="contained" style={{ backgroundColor: "#cf08aa" }}>
            Back
          </Button>
        </Link>
      </div>
      <div className="showCard" style={{ marginTop: "2rem" }}>
        {bookData.map((bookData) => {
          return (
            <div key={bookData._id} style={{ marginBottom: "3rem" }}>
              {" "}
              <Card
                className="cardHover"
                sx={{
                  maxWidth: 345,
                  height: "20rem",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ height: "9rem" }}
                    image={bookData.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{
                        fontWeight: "bolder",
                        fontFamily: "cursive",
                      }}
                    >
                      {bookData.bookname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      bookData.titlke
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ marginTop: "2rem" }}>
                  <Button
                    size="small"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid black",
                      padding: "1px",
                      borderRadius: "1rem",
                    }}
                  >
                    <p style={{ fontSize: "12px", color: "black" }}>
                      Rs:
                      {bookData.price}
                    </p>
                  </Button>
                  <Button
                    size="small"
                    style={{
                      backgroundColor: "#cf08aa",
                      border: "1px solid black",
                      marginLeft: "12rem",
                      borderRadius: "1rem",
                    }}
                  >
                    <p style={{ color: "white", fontSize: "11px" }}>
                      {bookData.category}
                    </p>
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function SliderEff({ list }) {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      style={{ marginBottom: "2rem", overflowX: "clip", marginLeft: "1rem" }}
    >
      <Slider {...settings}>
        {list.map((list) => {
          return (
            <div key={list.id}>
              <Card sx={{ maxWidth: 345, height: "20rem" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ height: "9rem" }}
                    image={list.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ fontWeight: "bolder", fontFamily: "cursive" }}
                    >
                      {list.bookname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      list.titlke
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
                      {list.price}
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
                      {list.category}
                    </p>
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

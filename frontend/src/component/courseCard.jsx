import Button from "@mui/material/Button";
import list from "../../public/data.json";
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
export default function Coursecard() {
  return (
    <div>
      <h1 className="H1">
        We're delighted to have you{" "}
        <span style={{ color: "#cf08aa" }}>Here! :) </span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
        voluptatum amet corrupti delectus repudiandae aut facere error minus
        sint architecto. Doloremque, iusto! Maxime voluptate tempore omnis
        aliquid odio doloribus consectetur?
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
        {list.map((list) => {
          return (
            <div key={list.id} style={{ marginBottom: "3rem" }}>
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
                    image={list.image}
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
      </div>
    </div>
  );
}

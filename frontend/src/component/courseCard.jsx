import Button from "@mui/material/Button";
import list from "../../public/data.json";
import "./coursecar.css";
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
        <Button variant="contained" style={{ backgroundColor: "#cf08aa" }}>
          Back
        </Button>
      </div>
    </div>
  );
}

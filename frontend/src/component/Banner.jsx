import React from "react";
import "./Banner.css";
import { Button } from "@mui/material";

import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return "This field is being focused";
    }

    return "Helper text";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}
export default function Banner() {
  return (
    <>
      <div className="Main">
        <div className="left">
          <h6>
            Hello Here! Welcome to Learn
            <span style={{ color: "#cf08aa" }}>Something New!</span>
          </h6>
          <p>
            Welcome to BookStore, your one-stop destination for a literary
            adventure. Nestled in the heart of Indore, our bookstore offers a
            vast collection of books spanning various genres, including fiction,
            non-fiction, mystery, romance, science fiction, and more. Whether
            you're a passionate reader, a student seeking textbooks, or someone
            looking for a perfect gift, we have something for everyone. Our cozy
            reading nooks provide a serene environment to immerse yourself in a
            good book. Our knowledgeable staff is always on hand to offer
            recommendations and help you find your next great read. Beyond
            books, we host regular events, including author signings, book
            clubs, and reading sessions, fostering a community of book lovers.
            Come visit us and embark on your next literary journey at BookStore.
          </p>
          <form noValidate autoComplete="off">
            <FormControl
              sx={{
                width: "100%",
                "@media (max-width: 600px)": {
                  width: "90%",
                },
                marginTop: "1rem",
              }}
            >
              <OutlinedInput placeholder="Write your mail" />
            </FormControl>
            <Button variant="contained" style={{ backgroundColor: "#cf08aa" }}>
              Register
            </Button>
          </form>
        </div>
        <div className="right">
          <img src="../../bookimg.png" alt="" />
        </div>
      </div>
    </>
  );
}

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            voluptatum amet corrupti delectus repudiandae aut facere error minus
            sint architecto. Doloremque, iusto! Maxime voluptate tempore omnis
            aliquid odio doloribus consectetur?
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

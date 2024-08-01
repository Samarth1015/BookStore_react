import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";

export default function Login() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let [userL, setUserL] = React.useState({
    email: "",
    password: "",
  });
  let changeFormData = (e) => {
    console.log(e.target.value);
    setUserL({ ...userL, [e.target.name]: e.target.value });
  };
  let giveInfoToData = (e) => {
    console.log(userL);
  };

  return (
    <React.Fragment>
      <form onSubmit={giveInfoToData} style={{ display: "inline" }}>
        <Button
          variant="contained"
          color="error"
          style={{
            width: "1rem",
            marginLeft: "1rem",
            borderRadius: "0.5rem",
            backgroundColor: "black",
          }}
          onClick={handleClickOpen}
        >
          login
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
            },
          }}
        >
          <DialogTitle style={{ fontWeight: "bolder" }}>Login</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              value={userL.email}
              fullWidth
              variant="standard"
              onChange={changeFormData}
            />
            <TextField
              required
              margin="dense"
              value={userL.password}
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={changeFormData}
            />
          </DialogContent>
          <Button
            type="submit"
            style={{
              backgroundColor: "#cf08aa",
              color: "white",
              width: "6rem",
              marginLeft: "1.2rem",
            }}
          >
            Login
          </Button>
          <DialogActions>
            <div>
              <h1>
                Not registed ?{" "}
                <Link
                  style={{ color: "blue", textDecorationLine: "underline" }}
                  to="/signup"
                >
                  signup
                </Link>
              </h1>
            </div>
          </DialogActions>
        </Dialog>
      </form>
    </React.Fragment>
  );
}

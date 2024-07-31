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

  return (
    <React.Fragment>
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
            handleClose();
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
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="name"
            name="Password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <Button
          onClick={handleClose}
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
    </React.Fragment>
  );
}

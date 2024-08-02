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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

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
    console.log(userL);
    setUserL((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        PaperProps={{
          component: "form",
          onSubmit: async (e) => {
            e.preventDefault();
            await axios
              .post("/api/user/login", userL)
              .then((res) => {
                handleClose();
                navigate("/");
                toast.success(res.data.message);
                localStorage.setItem("user", JSON.stringify(res.data.user));
              })
              .catch((err) => {
                toast.error(err.response.data.message);
              });
            // handleClose();
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
          {" "}
          <Link to="/">
            <Button>Cancel </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

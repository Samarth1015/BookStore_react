import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";

import { Link, useNavigate } from "react-router-dom";
import Login from "./login";
import LoginAfter from "./loginAfter";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup() {
  let [data, setData] = React.useState({ name: "", email: "", password: "" });

  let navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  let sendData = async (e) => {};
  let handleFormData = (e) => {
    // console.log(data);
    // console.log(e.target.value);
    setData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: async (e) => {
            e.preventDefault();
            await axios
              .post("/api/user/signup", data)
              .then((res) => {
                navigate("/");
                toast.success(res.data.message);
                localStorage.setItem("user", JSON.stringify(res.data.user));
              })
              .catch((err) => {
                navigate("/");
                toast.error(err.response.data.message);
              });
            // handleClose();
          },
        }}
      >
        <DialogTitle style={{ fontWeight: "bolder" }}>Signup</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            onChange={handleFormData}
            margin="dense"
            id="name"
            name="name"
            label="name "
            type="text"
            fullWidth
            variant="standard"
            value={data.name}
          />
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
            value={data.email}
            onChange={handleFormData}
          />
          <TextField
            required
            margin="dense"
            id="name"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={data.password}
            onChange={handleFormData}
          />
        </DialogContent>
        <Button
          style={{
            backgroundColor: "#cf08aa",
            color: "white",
            width: "6rem",
            marginLeft: "1.2rem",
          }}
          type="submit"
        >
          Signup
        </Button>
        <DialogActions>
          <div>
            <h1>
              Already have account ?{" "}
              <Link
                style={{ color: "blue", textDecorationLine: "underline" }}
                to="/login"
              >
                login
              </Link>
            </h1>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

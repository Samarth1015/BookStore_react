import { Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/authcontext";
import toast from "react-hot-toast";

export default function Logout() {
  let context = useContext(AuthContext);
  let handleLogout = () => {
    context.setAuthUser(undefined);
    localStorage.removeItem("user");
    toast.success("logout Successfully!");
  };

  return (
    <div>
      <Button
        onClick={handleLogout}
        variant="contained"
        color="error"
        style={{
          width: "1rem",
          marginLeft: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        logout
      </Button>
    </div>
  );
}

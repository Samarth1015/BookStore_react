import { useContext } from "react";
import Login from "./component/loginAfter";
import Signup from "./component/signup";
import Course from "./course/course";
import Home from "./home/home";
import toast, { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/authcontext";
import Contact from "./component/contact";
const App = () => {
  let context = useContext(AuthContext);
  console.log("context:", context.authUser);
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/course",
      element: context.authUser ? (
        <Course></Course>
      ) : (
        <Navigate to="/signup"></Navigate>
      ),
    },
    {
      path: "/signup",
      element: <Signup></Signup>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/contact",
      element: <Contact></Contact>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;

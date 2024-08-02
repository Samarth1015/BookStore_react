import Login from "./component/loginAfter";
import Signup from "./component/signup";
import Course from "./course/course";
import Home from "./home/home";
import toast, { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/course",
    element: <Course></Course>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;

import Signup from "./component/signup";
import Course from "./course/course";
import Home from "./home/home";
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
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

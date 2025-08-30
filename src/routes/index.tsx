import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "@/components/pages/Login";
// import Home from "@/components/pages/Home";
// import { Navigate } from "react-router";
import Register from "@/components/pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "about",

      },
    ],
  },
  {
    path: "/admin",
    element: <div>Admin Page</div>,
  },
  {
    path: "/user",
    element: <div>User Page</div>,
  },
  {
    path: "/agent",
    element: <div>Agent Page</div>,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);

export default router;

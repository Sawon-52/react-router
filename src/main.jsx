import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Root from "./Routes/Root/Root";
import ErrorPage from "./ErrorPage";
import App from "./App";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },

  // {
  //   path: "/home",
  //   element: <Home></Home>,
  //   errorElement: <ErrorPage></ErrorPage>,
  // },
  // {
  //   path: "/about",
  //   element: <About></About>,
  //   errorElement: <ErrorPage></ErrorPage>,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact></Contact>,
  //   errorElement: <ErrorPage></ErrorPage>,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);

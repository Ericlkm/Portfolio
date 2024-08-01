import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Project from "./pages/projects.jsx";
import Skills from "./pages/skills.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>Error wrong route</h1>,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

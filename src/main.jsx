import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./pages/App.jsx";
import Profile from "./pages/Profile.jsx";
import Count from "./pages/Count.jsx";
import Timer from "./pages/Timer.jsx";
import Countdown from "./pages/Countdown.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/count",
    element: <Count />,
  },
  {
    path: "/timer",
    element: <Timer />,
  },
  {
    path: "/countdown",
    element: <Countdown />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
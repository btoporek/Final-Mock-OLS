import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./components/CalendarStyle.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import SchedulePage from "./pages/SchedulePage";
import Sidebar from "./components/Sidebar";
import AboutPage from "./pages/AboutPage";
import ClassesPage from "./pages/ClassesPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "schedule",
        element: <SchedulePage />,
      },
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "classes",
        element: <ClassesPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

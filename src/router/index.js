import Layout from "../pages/Layout";
import Login from "../pages/Login";

import { createBrowserRouter, Route, Routes } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

export default router;
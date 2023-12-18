import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../utils/Layout";
import Launch from "../components/Launch";
import Upcoming from "../components/Upcoming";
import History from "../components/History";
import News from "../components/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Launch />, index: true },
      { path: "/upcoming", element: <Upcoming /> },
      { path: "/history", element: <History /> },
      { path: "/news", element: <News /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

export default router;

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { Home } from "./pages/home/Home.jsx";
import { TopAnime } from "./pages/popular/TopAnime.jsx";
import { TopManga } from "./pages/topRated/TopManga.jsx";
import { AnimeSearch } from "./pages/animeSearch/AnimeSearch.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/popular",
    element: <TopAnime />,
  },
  {
    path: "/top-rated",
    element: <TopManga />,
  },
  {
    path: "/anime-search",
    element: <AnimeSearch />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

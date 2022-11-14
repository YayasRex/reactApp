import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css';

import Home from './views/Home';
import Movies from './views/Movies';
import Header from './layout/Header/Header';
import Movie from './views/Movie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "home", element: <Home /> },
      { path: "/", element: <Home /> },
      {
        path: "movies", element: <Movies />,
      },
      { path: "movies/:movieId", element: <Movie /> }

    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

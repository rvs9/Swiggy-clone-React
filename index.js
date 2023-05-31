import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Link,
} from "react-router-dom";

import App from "./src/App";
import Main from "./src/components/Main";
import Offers from "./src/components/Offers";
import Help from "./src/components/Help";
import Cart from "./src/components/Cart";
import RestaurantMenu from "./src/components/RestaurantMenu";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { NextUIProvider } from "@nextui-org/react";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </NextUIProvider>
  </React.StrictMode>
);

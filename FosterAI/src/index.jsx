import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import AboutUs from "./components/AboutUs";
import SignInLoginModal from "./components/login";
import { createBrowserRouter,RouterProvider,Route } from "react-router-dom";

const router=createBrowserRouter([
  {
    path:"/",
    element:<SignInLoginModal/>
  },
  {
    path:"/home",
    element:<App/>
  },
  {
    path:"/aboutus",
    element:<AboutUs/>
  },
])
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

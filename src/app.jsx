import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./components/home.jsx";
import { SignUp } from "./components/signUp";
import { store } from "./store.js";
import { paths } from "./paths.js";

const router = createBrowserRouter([
  { path: paths.HOME, element: <Home /> },
  { path: paths.SIGN_UP, element: <SignUp state={store.getState()} /> },
]);

export function App() {
  return <RouterProvider router={router} />;
}

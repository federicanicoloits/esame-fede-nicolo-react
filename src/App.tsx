import "./App.css";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  // { path: "*", element: <h1>404</h1> },
  {
    path: "*",
    element: <Navigate to="/" />,
    //fallback redirect
  },
  {
    path: "/detail/:id",
    element: <DetailPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import "./App.css";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Page404 from "./pages/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <Navigate to="/" />,
  },
  {
    path: "/detail/:id",
    element: <DetailPage />,
  },
  { path: "*", element: <Page404 /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

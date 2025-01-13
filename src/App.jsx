import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home/Home.jsx";
import Layout from "./Components/Layout.jsx";
import Settings from "./Pages/Settings/Settings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/transactions",
      //   element: <Transactions />,
      // },
      {
        path: "/settings",
        element: <Settings />,
      },
      // Add other routes
    ],
  },
]);

function App() {
  return <RouterProvider router={router}>{router}</RouterProvider>;
}

export default App;

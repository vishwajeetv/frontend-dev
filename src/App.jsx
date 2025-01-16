import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home/Home.jsx";
import Layout from "./Components/Layout.jsx";
import Settings from "./Pages/Settings/Settings.jsx";
import { Suspense, lazy } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/settings",
        element: (
          <Suspense fallback={<>...</>}>
            <Settings />
          </Suspense>
        ),
      },
      {
        path: "/transactions",
        element: <></>,
      },
      {
        path: "/accounts",
        element: <></>,
      },
      {
        path: "/investments",
        element: <></>,
      },
      {
        path: "/credit-cards",
        element: <></>,
      },
      {
        path: "/loans",
        element: <></>,
      },
      {
        path: "/services",
        element: <></>,
      },
      {
        path: "/privileges",
        element: <></>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}>{router}</RouterProvider>;
}

export default App;

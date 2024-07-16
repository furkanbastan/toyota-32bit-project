import { createBrowserRouter } from "react-router-dom";

import { PrivateRoute } from "./utils/PrivateRoute";
import { PrivateLogin } from "./utils/PrivateLogin";

import { DashboardLayout } from "./layouts/DashboardLayout";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProductPage } from "./pages/ProductPage";

export const router = createBrowserRouter([
  {
    path: "",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "login",
    element: (
      <PrivateLogin>
        <LoginPage />
      </PrivateLogin>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

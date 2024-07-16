import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { PrivateRoute } from "./utils/PrivateRoute";
import { PrivateLogin } from "./utils/PrivateLogin";

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
        element: <div>outlet gelecek</div>,
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
]);

import App from "@/App";
import NotFound from "@/components/common/NotFound";
import AdminLayout from "@/features/admin/layout/AdminLayout";
import AdminDashboard from "@/features/admin/pages/AdminDashboard";
import AdminOrders from "@/features/admin/pages/AdminOrders";
import AdminProducts from "@/features/admin/pages/AdminProducts";
import UserLayout from "@/features/user/layout/UserLayout";
import AuthLayout from "@/layout/authLayout";
import AuthLogin from "@/features/auth/pages/AuthLogin";
import AuthRegister from "@/features/auth/pages/AuthRegister";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "register",
            element: <AuthRegister />,
          },
          {
            path: "login",
            element: <AuthLogin />,
          },
        ],
      },

      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          {
            path: "dashboard",
            element: <AdminDashboard />,
          },
          {
            path: "products",
            element: <AdminProducts />,
          },
          {
            path: "orders",
            element: <AdminOrders />,
          },
        ],
      },
      {
        path: "user",
        element: <UserLayout />,
        children: [{}],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;

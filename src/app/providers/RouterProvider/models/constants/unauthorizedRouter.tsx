import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../../../../../pages/LoginPage";

export const unauthorizedRouter = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "*",
        element: <Navigate replace to="/login" />,
    },
]);

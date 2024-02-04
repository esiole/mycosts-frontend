import { createBrowserRouter, Navigate } from "react-router-dom";
import ReceiptsPage from "../../../../../pages/ReceiptsPage";
import ProductsPage from "../../../../../pages/ProductsPage";
import ProductCategoriesPage from "../../../../../pages/ProductCategoriesPage";
import { Layout } from "../../ui/Layout";

export const authorizedRouter = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: "/", element: <ReceiptsPage /> },
            { path: "/receipts", element: <ReceiptsPage /> },
            { path: "/products", element: <ProductsPage /> },
            { path: "/productCategories", element: <ProductCategoriesPage /> },
            { path: "*", element: <Navigate replace to="/" /> },
        ],
    },
]);

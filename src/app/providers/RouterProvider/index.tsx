import { RouterProvider as RRDRouterProvider } from "react-router-dom";
import { authorizedRouter } from "./models/constants/authorizedRouter";
import { unauthorizedRouter } from "./models/constants/unauthorizedRouter";
import { useAppSelector } from "../../../shared/lib/hooks/useAppSelector";

export const RouterProvider = () => {
    const isAuth = useAppSelector((state) => state.auth.email != null);
    const router = isAuth ? authorizedRouter : unauthorizedRouter;

    return <RRDRouterProvider router={router} />;
};

import { RouterProvider } from "react-router-dom";
import authorizedRouter from "./router/authorizedRouter";
import unauthorizedRouter from "./router/unauthorizedRouter";

const App = () => {
    const isAuth = true;
    const router = isAuth ? authorizedRouter : unauthorizedRouter;

    return <RouterProvider router={router} />;
};

export default App;

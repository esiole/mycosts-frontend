import { StoreProvider } from "./providers/StoreProvider";
import { RouterProvider } from "./providers/RouterProvider";

const App = () => {
    return (
        <StoreProvider>
            <RouterProvider />
        </StoreProvider>
    );
};

export default App;

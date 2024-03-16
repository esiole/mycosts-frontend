import { CssBaseline } from "@mui/material";
import { StoreProvider } from "./providers/StoreProvider";
import { RouterProvider } from "./providers/RouterProvider";
import { PushNotificationsProvider } from "./providers/PushNotificationsProvider";
import "./app.css";

const App = () => {
    return (
        <StoreProvider>
            <CssBaseline />
            <PushNotificationsProvider>
                <RouterProvider />
            </PushNotificationsProvider>
        </StoreProvider>
    );
};

export default App;

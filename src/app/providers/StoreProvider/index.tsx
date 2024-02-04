import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "./config/store";

export const StoreProvider = ({ children }: PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

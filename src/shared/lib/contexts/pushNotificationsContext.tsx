import { createContext } from "react";
import { NotificationSeverity } from "../../types/appNotification";

type PushNotificationsContextValue = {
    addNotification: (message: string, severity?: NotificationSeverity) => void;
    addInDevelopmentNotification: () => void;
};

export const PushNotificationsContext = createContext<PushNotificationsContextValue>({
    addNotification: () => {},
    addInDevelopmentNotification: () => {},
});

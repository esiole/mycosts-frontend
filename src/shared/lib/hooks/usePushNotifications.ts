import { useContext } from "react";
import { PushNotificationsContext } from "../contexts/pushNotificationsContext";

export const usePushNotifications = () => useContext(PushNotificationsContext);

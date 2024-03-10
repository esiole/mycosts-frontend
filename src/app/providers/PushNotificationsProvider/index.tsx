import { PropsWithChildren, useEffect, useState } from "react";
import { Alert, IconButton, Snackbar } from "@mui/material";
import { Close } from "@mui/icons-material";
import { PushNotificationsContext } from "../../../shared/lib/contexts/pushNotificationsContext";
import { AppNotification, NotificationSeverity } from "../../../shared/types/appNotification";

export const PushNotificationsProvider = ({ children }: PropsWithChildren) => {
    const [notifications, setNotifications] = useState<readonly AppNotification[]>([]);
    const [openedNotification, setOpenedNotification] = useState<AppNotification | null>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (notifications.length && !openedNotification) {
            // Set a new snack when we don't have an active one
            setOpenedNotification({ ...notifications[0] });
            setNotifications((prev) => prev.slice(1));
            setOpen(true);
        } else if (notifications.length && openedNotification && open) {
            // Close an active snack when a new one is added
            setOpen(false);
        }
    }, [notifications, openedNotification, open]);

    const addNotification = (message: string, severity?: NotificationSeverity) => {
        const newNotification = {
            key: new Date().getTime(),
            message,
            severity: severity ?? "success",
        };

        setNotifications((prev) => [...prev, newNotification]);
    };

    const handleClose = (_: any, reason?: string) => reason !== "clickaway" && setOpen(false);

    const handleExited = () => setOpenedNotification(null);

    return (
        <PushNotificationsContext.Provider value={{ addNotification }}>
            {children}
            <Snackbar
                key={openedNotification ? openedNotification.key : undefined}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                TransitionProps={{ onExited: handleExited }}
                action={
                    <IconButton onClick={handleClose}>
                        <Close />
                    </IconButton>
                }
            >
                <Alert severity={openedNotification?.severity} onClose={handleClose}>
                    {openedNotification ? openedNotification.message : ""}
                </Alert>
            </Snackbar>
        </PushNotificationsContext.Provider>
    );
};

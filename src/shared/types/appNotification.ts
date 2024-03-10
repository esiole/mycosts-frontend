export type NotificationSeverity = "success" | "error" | "info" | "warning";

export type AppNotification = {
    key: number;
    message: string;
    severity: NotificationSeverity;
};

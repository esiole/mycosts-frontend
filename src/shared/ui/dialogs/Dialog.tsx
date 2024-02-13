import { Dialog as MuiDialog, DialogContent, DialogTitle } from "@mui/material";
import { PropsWithChildren } from "react";

type DialogProps = PropsWithChildren & {
    isOpen: boolean;
    title?: string;
    onClose: () => void;
};

export const Dialog = ({ isOpen, title, onClose, children }: DialogProps) => {
    return (
        <MuiDialog open={isOpen} onClose={onClose}>
            {title && <DialogTitle>{title}</DialogTitle>}
            {children && <DialogContent>{children}</DialogContent>}
        </MuiDialog>
    );
};

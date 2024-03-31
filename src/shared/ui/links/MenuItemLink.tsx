import { MenuItem } from "@mui/material";
import { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";

type MenuItemLinkProps = PropsWithChildren & {
    to: string;
    onClick?: () => void;
};

export const MenuItemLink = ({ to, onClick, children }: MenuItemLinkProps) => {
    return (
        <MenuItem component={RouterLink} to={to} onClick={onClick}>
            {children}
        </MenuItem>
    );
};

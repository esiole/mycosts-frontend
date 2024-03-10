import { Link as MuiLink } from "@mui/material";
import { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";

type AppLinkProps = PropsWithChildren & {
    to: string;
    underline?: "none" | "hover" | "always";
};

export const AppLink = ({ to, underline, children }: AppLinkProps) => {
    return (
        <MuiLink component={RouterLink} to={to} underline={underline}>
            {children}
        </MuiLink>
    );
};

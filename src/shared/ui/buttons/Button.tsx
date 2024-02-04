import { Button as MuiButton } from "@mui/material";

type ButtonProps = {
    caption: string;
    onClick: () => void;
};

export const Button = ({ caption, onClick }: ButtonProps) => {
    return (
        <MuiButton variant="contained" onClick={onClick}>
            {caption}
        </MuiButton>
    );
};

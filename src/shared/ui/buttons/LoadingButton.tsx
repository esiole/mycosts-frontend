import MuiLoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";

type LoadingButtonProps = {
    caption: string;
    onClick: () => Promise<void>;
};

export const LoadingButton = ({ caption, onClick }: LoadingButtonProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        setIsLoading(true);
        await onClick();
        setIsLoading(false);
    };

    return (
        <MuiLoadingButton
            loading={isLoading}
            type={"button"}
            variant="contained"
            onClick={handleClick}
        >
            <span>{caption}</span>
        </MuiLoadingButton>
    );
};

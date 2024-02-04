import LoadingButton from "@mui/lab/LoadingButton";

type SubmitButtonProps = {
    caption: string;
    isLoading: boolean;
};

export const SubmitButton = ({ caption, isLoading }: SubmitButtonProps) => {
    return (
        <LoadingButton loading={isLoading} type={"submit"} variant="contained">
            <span>{caption}</span>
        </LoadingButton>
    );
};

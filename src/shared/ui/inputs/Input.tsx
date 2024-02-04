import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

type InputProps = {
    value: string;
    name: string;
    label?: string;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    type?: "password";
    onChange: (value: string) => void;
};

export const Input = ({
    value,
    name,
    label,
    disabled,
    error,
    helperText,
    type,
    onChange,
}: InputProps) => {
    return (
        <TextField
            value={value}
            name={name}
            label={label}
            disabled={disabled}
            error={error}
            helperText={helperText}
            type={type}
            variant={"outlined"}
            size="small"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                onChange(event.target.value)
            }
        />
    );
};

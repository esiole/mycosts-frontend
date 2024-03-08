import { InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, FocusEvent } from "react";

export type InputProps = {
    value: string;
    name: string;
    label?: string;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    type?: "password" | "date";
    endAdornment?: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const Input = ({
    value,
    name,
    label,
    disabled,
    error,
    helperText,
    type,
    endAdornment,
    onChange,
    onBlur,
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
            InputProps={
                endAdornment
                    ? {
                          endAdornment: (
                              <InputAdornment position="end">{endAdornment}</InputAdornment>
                          ),
                      }
                    : undefined
            }
            onChange={onChange}
            onBlur={onBlur}
        />
    );
};

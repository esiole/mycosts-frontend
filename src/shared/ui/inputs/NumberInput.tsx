import { TextField } from "@mui/material";
import { ChangeEvent, FocusEvent } from "react";

const ignorableSymbols = ["e", "E", "-", "+"];

export type NumberInputProps = {
    value: number;
    name: string;
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const NumberInput = ({
    value,
    name,
    label,
    min,
    max,
    step,
    disabled,
    error,
    helperText,
    onChange,
    onBlur,
}: NumberInputProps) => {
    return (
        <TextField
            value={value}
            name={name}
            label={label}
            disabled={disabled}
            error={error}
            helperText={helperText}
            type={"number"}
            variant={"outlined"}
            size="small"
            inputProps={{
                step: step,
                min: min,
                max: max,
            }}
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={(event) => ignorableSymbols.includes(event.key) && event.preventDefault()}
        />
    );
};

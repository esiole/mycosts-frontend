import { FormControlLabel, Switch as MuiSwitch } from "@mui/material";
import { ChangeEvent } from "react";

export type SwitchProps = {
    value: boolean;
    name: string;
    label?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Switch = ({ value, name, label, onChange }: SwitchProps) => {
    return (
        <FormControlLabel
            control={<MuiSwitch checked={value} name={name} onChange={onChange} />}
            label={label}
        />
    );
};

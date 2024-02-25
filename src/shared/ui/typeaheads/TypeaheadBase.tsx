import { AutocompleteInputChangeReason } from "@mui/base/useAutocomplete/useAutocomplete";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import { FocusEvent } from "react";

export type TypeaheadOption = {
    id: number | string;
    name: string;
};

export type CommonTypeaheadProps = {
    value: TypeaheadOption | null;
    name: string;
    label?: string;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    onChange: (value: TypeaheadOption | null) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

type TypeaheadBaseProps = CommonTypeaheadProps & {
    options: TypeaheadOption[];
    loading?: boolean;
    onOpen?: () => Promise<void>;
    onInputChange?: (value: string, reason: AutocompleteInputChangeReason) => Promise<void>;
    filterOptions?: (options: TypeaheadOption[]) => TypeaheadOption[];
};

export const TypeaheadBase = ({
    value,
    name,
    options,
    loading,
    label,
    disabled,
    error,
    helperText,
    onChange,
    onBlur,
    onOpen,
    onInputChange,
    filterOptions,
}: TypeaheadBaseProps) => {
    return (
        <Autocomplete
            value={value}
            options={options}
            loading={loading}
            disabled={disabled}
            size={"small"}
            openText={"Открыть"}
            closeText={"Закрыть"}
            clearText={"Очистить"}
            loadingText={"Загрузка..."}
            noOptionsText={"Варианты не найдены"}
            onOpen={onOpen}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            filterOptions={filterOptions}
            onChange={(_, value) => onChange(value)}
            onInputChange={
                onInputChange ? (_, value, reason) => onInputChange(value, reason) : undefined
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    name={name}
                    label={label}
                    error={error}
                    helperText={helperText}
                    onBlur={onBlur}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
            renderOption={(props, option, { inputValue }) => {
                const matches = match(option.name, inputValue, { insideWords: true });
                const parts = parse(option.name, matches);

                return (
                    <li {...props}>
                        <div>
                            {parts.map((part, index) => (
                                <span
                                    key={index}
                                    style={{ fontWeight: part.highlight ? 700 : 400 }}
                                >
                                    {part.text}
                                </span>
                            ))}
                        </div>
                    </li>
                );
            }}
        />
    );
};

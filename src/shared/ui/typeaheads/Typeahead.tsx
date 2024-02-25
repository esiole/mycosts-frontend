import { AutocompleteInputChangeReason } from "@mui/base/useAutocomplete/useAutocomplete";
import { useState } from "react";
import { CommonTypeaheadProps, TypeaheadBase, TypeaheadOption } from "./TypeaheadBase";

type TypeaheadProps = CommonTypeaheadProps & {
    options: TypeaheadOption[];
};

export const Typeahead = (props: TypeaheadProps) => <TypeaheadBase {...props} />;

type AsyncTypeaheadProps = CommonTypeaheadProps & {
    getOptions: (query: string) => Promise<TypeaheadOption[]>;
};

export const AsyncTypeahead = ({ getOptions, ...props }: AsyncTypeaheadProps) => {
    const [wasOpen, setWasOpen] = useState(false);
    const [options, setOptions] = useState<TypeaheadOption[]>([]);
    const [loading, setLoading] = useState(false);

    const loadOptions = async (query: string) => {
        setLoading(true);
        const newOptions = await getOptions(query);
        setOptions(newOptions);
        setLoading(false);
    };

    const handleInputChange = async (value: string, reason: AutocompleteInputChangeReason) => {
        if (reason === "reset") return;
        await loadOptions(value);
    };

    const handleOpen = async () => {
        if (!wasOpen) {
            setWasOpen(true);
            await loadOptions("");
        }
    };

    return (
        <TypeaheadBase
            {...props}
            options={options}
            loading={loading}
            onOpen={handleOpen}
            onInputChange={handleInputChange}
            filterOptions={(options) => options}
        />
    );
};

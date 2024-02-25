import { useField } from "formik";
import { ComponentType } from "react";
import { AsyncTypeahead, Typeahead } from "./Typeahead";
import { CommonTypeaheadProps } from "./TypeaheadBase";

const withFormikTypeahead = <T extends CommonTypeaheadProps>(Component: ComponentType<T>) => {
    return (props: Omit<T, "value" | "onChange">) => {
        const [field, meta, helpers] = useField(props.name);

        const error = Boolean(meta.error) && meta.touched;

        return (
            <Component
                {...(props as T)}
                value={field.value}
                name={field.name}
                error={error}
                helperText={error ? meta.error : undefined}
                onChange={(value) => helpers.setValue(value)}
                onBlur={(e) => field.onBlur(e)}
            />
        );
    };
};

export const FormikTypeahead = withFormikTypeahead(Typeahead);
export const FormikAsyncTypeahead = withFormikTypeahead(AsyncTypeahead);

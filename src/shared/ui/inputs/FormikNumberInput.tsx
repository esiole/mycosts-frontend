import { useField } from "formik";
import { NumberInput, NumberInputProps } from "./NumberInput";

type FormikNumberInputProps = Omit<NumberInputProps, "value" | "onChange" | "onBlur">;

export const FormikNumberInput = ({ name, ...props }: FormikNumberInputProps) => {
    const [field, meta] = useField(name);

    const error = Boolean(meta.error) && meta.touched;

    return (
        <NumberInput
            {...props}
            value={field.value}
            name={field.name}
            error={error}
            helperText={error ? meta.error : undefined}
            onChange={field.onChange}
            onBlur={field.onBlur}
        />
    );
};

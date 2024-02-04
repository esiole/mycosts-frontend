import { useField } from "formik";
import { Input, InputProps } from "./Input";

type FormikInputProps = Omit<InputProps, "value" | "onChange" | "onBlur">;

export const FormikInput = ({ name, ...props }: FormikInputProps) => {
    const [field, meta] = useField(name);

    const error = Boolean(meta.error) && meta.touched;

    return (
        <Input
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

import { useField } from "formik";
import { Switch, SwitchProps } from "./Switch";

type FormikSwitchProps = Omit<SwitchProps, "value" | "onChange">;

export const FormikSwitch = ({ name, ...props }: FormikSwitchProps) => {
    const [field] = useField(name);

    return <Switch {...props} value={field.value} name={field.name} onChange={field.onChange} />;
};

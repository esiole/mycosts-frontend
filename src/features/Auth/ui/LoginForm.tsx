import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FormikInput } from "../../../shared/ui/inputs/FormikInput";
import { login } from "../api/authApi";
import { TOKEN_LOCAL_STORAGE_KEY } from "../../../shared/constants/localStorage";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch";
import { auth } from "../models/authSlice";
import { LoginRequest } from "../models/types/loginRequest";
import { SubmitButton } from "../../../shared/ui/buttons/SubmitButton";

const initialValues: LoginRequest = { email: "", password: "" };

const validationSchema = Yup.object<LoginRequest>({
    email: Yup.string().required("Обязательное поле"),
    password: Yup.string().required("Обязательное поле"),
});

export const LoginForm = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = async (values: LoginRequest) => {
        const response = await login(values);
        if (response.isOk && response.data) {
            localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, response.data.jwtToken);
            dispatch(auth({ email: response.data.email }));
        }
    };

    return (
        <>
            <h2>Логин</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <FormikInput name={"email"} label={"Email"} />
                        <FormikInput name={"password"} label={"Пароль"} />
                        <SubmitButton caption={"Войти"} isLoading={isSubmitting} />
                    </Form>
                )}
            </Formik>
        </>
    );
};

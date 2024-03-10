import { Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FormikInput } from "../../../shared/ui/inputs/FormikInput";
import { login } from "../api/authApi";
import { TOKEN_LOCAL_STORAGE_KEY } from "../../../shared/constants/localStorage";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch";
import { auth } from "../models/authSlice";
import { LoginRequest } from "../models/types/loginRequest";
import { SubmitButton } from "../../../shared/ui/buttons/SubmitButton";
import { AppLink } from "../../../shared/ui/links/AppLink";
import { usePushNotifications } from "../../../shared/lib/hooks/usePushNotifications";

const initialValues: LoginRequest = { email: "", password: "" };

const validationSchema = Yup.object<LoginRequest>({
    email: Yup.string().email("Значение не является email-адресом").required("Обязательное поле"),
    password: Yup.string().required("Обязательное поле"),
});

export const LoginForm = () => {
    const dispatch = useAppDispatch();

    const { addNotification } = usePushNotifications();

    const handleSubmit = async (values: LoginRequest) => {
        const response = await login(values);

        if (response.isOk && response.data) {
            localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, response.data.jwtToken);
            dispatch(auth({ email: response.data.email }));
        } else {
            addNotification("Не удалось авторизоваться в приложении", "error");
        }
    };

    return (
        <>
            <Stack
                mb={3}
                direction={"row"}
                alignItems={"baseline"}
                justifyContent={"space-between"}
            >
                <Typography variant="h5">Вход</Typography>
                {/* TODO: Finish a registration function */}
                <Typography
                    variant="body2"
                    onClick={() =>
                        addNotification("Этот функционал ещё находится в разработке", "error")
                    }
                >
                    <AppLink to={""} underline="hover">
                        Ещё нет аккаунта?
                    </AppLink>
                </Typography>
            </Stack>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Stack spacing={3}>
                            <FormikInput name={"email"} label={"Email"} type={"email"} />
                            {/* TODO: Add eye-button for show password */}
                            <FormikInput name={"password"} label={"Пароль"} type={"password"} />
                            <Stack direction="row" alignItems="center" justifyContent="end">
                                {/* TODO: Finish a resetting password function */}
                                <Typography
                                    variant="body2"
                                    onClick={() =>
                                        addNotification(
                                            "Этот функционал ещё находится в разработке",
                                            "error",
                                        )
                                    }
                                >
                                    <AppLink to={""} underline="hover">
                                        Забыли пароль?
                                    </AppLink>
                                </Typography>
                            </Stack>
                            <SubmitButton caption={"Войти"} isLoading={isSubmitting} />
                        </Stack>
                    </Form>
                )}
            </Formik>
        </>
    );
};

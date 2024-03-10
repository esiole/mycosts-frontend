import { Box, Paper, Stack } from "@mui/material";
import { LoginForm } from "../features/Auth";
import { AppLogo } from "../shared/ui/appLogo";
import { AppLink } from "../shared/ui/links/AppLink";

const LoginPage = () => {
    return (
        <Box sx={{ minHeight: "100vh" }}>
            <Box sx={{ position: "fixed", top: { xs: 16 }, left: { xs: 16 } }}>
                <AppLink to={"/"}>
                    <AppLogo />
                </AppLink>
            </Box>
            <Stack
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
                maxWidth={480}
                mx={"auto"}
            >
                <Paper sx={{ width: "100%" }} elevation={2}>
                    <Box sx={{ p: { xs: 2, sm: 5 } }}>
                        <LoginForm />
                    </Box>
                </Paper>
            </Stack>
        </Box>
    );
};

export default LoginPage;

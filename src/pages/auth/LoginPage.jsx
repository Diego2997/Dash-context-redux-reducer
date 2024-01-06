import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/auth/authSlice";
import useForm from "../../hooks/useForm";
import { getLogin } from "../../store/slices/auth/authThunks";

export const LoginPage = () => {
    const dispatch = useDispatch();

    const { formState, handleChange } = useForm();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
        dispatch(getLogin(formState.username, formState.password));
    };

    return (
        <>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Dummy Dash
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    INGRESAR
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Recuperar Contraseña?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            Registrarse
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

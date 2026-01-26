import type { JSX } from "react";
import { Link } from "react-router";
import { LoginForm } from "../components/forms/LoginForm";
import { Suggest } from "../components/Suggest";
import { Subtitle } from "../components/Subtitle";

export const Login = (): JSX.Element => {
    return (
        <>
            <Subtitle>Inicio de sesión</Subtitle>
            <Suggest>
                ¿No se encuentra registrado? <Link to="/register" >Cree una nueva cuenta</Link>
            </Suggest>
            <LoginForm></LoginForm>
        </>
    )
}
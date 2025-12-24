import type { JSX } from "react";
import { Link } from "react-router";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { Suggest } from "../components/Suggest";
import { RegisterForm } from "../components/forms/RegisterForm";

export function Register(): JSX.Element {
    return (<>
        <Title>Sistema de tareas - CRUD</Title>
        <Subtitle>Registro</Subtitle>
        <Suggest>
            ¿Ya se encuentra registrado? <Link to="/" >Volver al home</Link>
        </Suggest>
        <RegisterForm />
    </>)
}
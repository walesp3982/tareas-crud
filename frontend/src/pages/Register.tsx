import type { JSX } from "react";
import { Link } from "react-router";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";

export function Register(): JSX.Element {
    return (<>
        <Title>Sistema de tareas - CRUD</Title>
        <Subtitle>Registro</Subtitle>
        <Link to="/" >Volver al home</Link>
        <p>Bienvenido al registro</p>
    </>)
}
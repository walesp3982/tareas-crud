import { Link } from "react-router"
import { LoginForm } from "../components/forms/LoginForm"
import { Title } from "../components/Title"
import { Subtitle } from "../components/Subtitle"
import { Suggest } from "../components/Suggest"
export default function Home() {
    return (
        <>
            <Title>Sistema de tareas - CRUD</Title>
            <Subtitle>Iniciar Sesión</Subtitle>
            <Suggest>
                ¿No se encuentra registrado? <Link to="/register" >Cree una nueva cuenta</Link>
            </Suggest>
            <LoginForm></LoginForm>
        </>
    )
}

import type { JSX } from "react";
import { Title } from "../components/Title";
import { NavLink, Outlet } from "react-router";
import { useNavigate } from "react-router-dom";
import { Auth } from "../services/auth";

export const App = (): JSX.Element => {

    const navigate = useNavigate()

    const handleLogout = () => {
        Auth.logout()
        navigate('/', { replace: true })
    }
    return <>
        <Title>Sistema de tareas - CRUD</Title>
        <div className="navigation">
            <NavLink to="/app">Principal</NavLink>
            <a onClick={handleLogout} style={{ cursor: 'pointer' }}>Cerrar sesión</a>
        </div>

        <Outlet />
    </>
}
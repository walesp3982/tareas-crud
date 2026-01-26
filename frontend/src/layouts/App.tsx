import type { JSX } from "react";
import { Title } from "../components/Title";
import { NavLink, Outlet } from "react-router";


export const App = (): JSX.Element => {
    return <>
        <Title>Sistema de tareas - CRUD</Title>
        <div className="navigation">
            <NavLink to="/Dashboard">Principal</NavLink>
        </div>

        <Outlet />
    </>
}
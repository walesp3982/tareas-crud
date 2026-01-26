import type { JSX } from "react";
import { Title } from "../components/Title";
import { NavLink, Outlet } from "react-router";
import type React from "react";


interface propsLinkLayout {
    to: string;
    children: React.ReactNode
}

const LinkLayout = (
    { to, children }: propsLinkLayout
): JSX.Element => {
    return <NavLink to={to} end>
        {children}
    </NavLink>
}
export const Layout = (): JSX.Element => {
    return (
        <>
            <Title>Sistema de tareas - CRUD</Title>
            <div className="navigation">
                <LinkLayout to="/">Login</LinkLayout>
                <LinkLayout to="/register">Registro</LinkLayout>
            </div >

            <Outlet />

        </>
    )
}
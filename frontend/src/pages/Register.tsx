import { useState, type JSX } from "react";
import { Link } from "react-router";
import { Subtitle } from "../components/Subtitle";
import { Suggest } from "../components/Suggest";
import { RegisterForm } from "../components/forms/RegisterForm";

export function Register(): JSX.Element {

    const [registerSend, setRegisterSend] = useState<boolean>(true);

    const registerCorrect = () => { setRegisterSend(true) };

    if (registerSend) {
        console.log("Registrado")
    }
    return (
        <>
            <Subtitle>Registro</Subtitle>
            <Suggest>
                ¿Ya se encuentra registrado? <Link to="/" >Volver al home</Link>
            </Suggest>
            <RegisterForm onCorrectSubmit={registerCorrect} />
        </>)
}
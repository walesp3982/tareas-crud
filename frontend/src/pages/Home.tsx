import { Button } from "../components/Button"
import { LoginForm } from "../components/forms/LoginForm"
import { Title } from "../components/Title"
export default function Home() {
    return (
        <>
            <Title>Bienvenido al login</Title>
            <Button>Hola a todo el mundo</Button>
            <LoginForm></LoginForm>
        </>
    )
}

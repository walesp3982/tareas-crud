import type { JSX } from "react";
import '../forms.css'
import { Button } from "../../Button";

export function RegisterForm(): JSX.Element {
  return (
    <div className="container-form">
      <form method="POST" action="">
        <div className="block-form">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="block-form">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="block-form">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="block-form">
          <label htmlFor="password_confirmed">Confirmar contraseña</label>
          <input type="password" name="password_confirmed" id="password_confirmed" />
        </div>
        <div>
          <Button>Crear cuenta</Button>
        </div>
      </form>
    </div>
  )
}
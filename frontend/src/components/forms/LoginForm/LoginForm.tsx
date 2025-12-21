import { Button } from "../../Button";
import '../forms.css'

export function LoginForm() {
  return (
    <div className="container-form">
      <form method="GET">
        <div className="block-form">
          <label htmlFor="email">Email</label>
          <input type="email" />
        </div>
        <div className="block-form">
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <div>
          <Button>Entrar</Button>
        </div>
      </form>
    </div>
  );
}

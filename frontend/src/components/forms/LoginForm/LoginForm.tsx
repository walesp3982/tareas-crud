import React, { useState } from "react";
import { Button } from "../../Button";
import '../forms.css'
import { sendLogin, type dataLogin } from "../../../services/auth";

export function LoginForm() {
  const [formData, setFormData] = useState<dataLogin>({
    device_name: "web",
    email: "",
    password: "",
  })
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })

  }
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Submit Form")
    setLoading(true);
    setError("");
    try {
      const data = await sendLogin(formData);
      console.log(data.token);
    }
    catch (err) {
      if (err instanceof Error) {
        console.log("Error: ", err.message)
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-form">
      <form method="POST" onSubmit={handleLogin}>
        {error && <div className="error-form">
          {error}
        </div>}
        <div className="block-form">
          <label htmlFor="email">Email</label>
          <input type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="test@example.com"
            required />
        </div>
        <div className="block-form">
          <label htmlFor="password">Password</label>
          <input type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingrese una contraseña"
            required />
        </div>
        <div>
          <Button disabled={loading}>
            {loading ? 'Cargando...' : "Iniciar Sesión"}
          </Button>
        </div>
      </form>
    </div>
  );
}

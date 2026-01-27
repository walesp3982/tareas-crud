import React, { useState } from "react";
import { Button } from "../../Button";
import '../forms.css'
import { Auth, type dataLogin } from "../../../services/auth";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const [formData, setFormData] = useState<dataLogin>({
    email: "",
    password: "",
  })
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()

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
      await Auth.login(formData);
      navigate("/app")
    }
    catch (err) {
      if (typeof err === "string") {
        setError(err);
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

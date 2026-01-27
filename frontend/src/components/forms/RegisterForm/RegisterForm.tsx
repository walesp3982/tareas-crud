import type { JSX } from "react";
import React, { useState } from "react";
import { Button } from "../../Button";
import { Auth, type dataRegister } from "../../../services/auth";

import '../forms.css'
import { useNavigate } from "react-router-dom";


export function RegisterForm(): JSX.Element {
  const [formData, setFormData] = useState<dataRegister>({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("")
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log("Submit Form...")

    setLoading(true);
    setError('');

    try {
      //console.log("Form data: ", formData)
      await Auth.register(formData);
      navigate("/app")
    } catch (err) {
      if (typeof err === "string") {
        setError(err)
      } else {
        throw "No es tipo string el error"
      }
    } finally {
      setLoading(false);
    }
  }



  return (
    <div className="container-form">
      <form method="POST" onSubmit={handleRegister}>
        {error &&
          <div className="error-form">
            {error}
          </div>
        }
        <div className="block-form">
          <label htmlFor="name">Nombre</label>
          <input type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Juan Perez"
            required />
        </div>
        <div className="block-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="test@email.com"
            required />
        </div>
        <div className="block-form">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required />
        </div>
        <div className="block-form">
          <label htmlFor="password_confirmation">Confirmar contraseña</label>
          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            required />
        </div>
        <div>
          <Button disabled={loading}>
            {loading ? 'Cargando...' : "Registrar Usuario"}
          </Button>
        </div>
      </form>
    </div >
  )
}
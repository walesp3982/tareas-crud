import type { JSX } from "react";
import React, { useState } from "react";
import '../forms.css'
import { Button } from "../../Button";

interface contentRegisterForm {
  name: string;
  email: string;
  password: string;
  passwordConfirmed: string
}

async function submitData(dataForm: contentRegisterForm) {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/register", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataForm)
    })

    const data = await response.json();
    console.log('Respuesta: ', data)
  } catch (error) {
    console.error('Error: ', error)
  }
}
function validateData(data: contentRegisterForm, handleError: (newError: string | null) => void): boolean {
  if (data.name.trim().length === 0) {
    handleError("No se llenó el nombre")
    return false
  }
  if (data.password != data.passwordConfirmed) {
    handleError("La contraseña no coincide")
    return false
  }
  if (data.email.trim().length === 0) {
    handleError("No se llenó el email")
    return false
  }
  handleError(null)
  return true;
}

export function RegisterForm(): JSX.Element {
  const [formData, setFormData] = useState<contentRegisterForm>({
    name: '',
    email: '',
    password: '',
    passwordConfirmed: ''
  })

  const [error, setError] = useState<string | null>(null)

  const handleError = (msg: string | null) => {
    setError(msg)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Submit Form...")
    if (!validateData(formData, handleError)) return
    submitData(formData)
  }

  return (
    <div className="container-form">
      <form method="POST" onSubmit={handleSubmit}>
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
          <label htmlFor="password_confirmed">Confirmar contraseña</label>
          <input
            type="password"
            name="passwordConfirmed"
            id="passwordConfirmed"
            value={formData.passwordConfirmed}
            onChange={handleChange}
            required />
        </div>
        <div>
          <Button>Crear cuenta</Button>
        </div>
      </form>
    </div >
  )
}
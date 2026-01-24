import { DEVICE_NAME, getApiUrl } from "../config";
import { jsonRequest } from "../utils/requests";

export interface dataRegister {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface dataLogin {
    email: string;
    password: string;
    device_name: string;
}

export interface responseLogin {
    token: string;
}

export interface responseRegister {
    name: string;
    email: string;
    updated_at: string;
    created_at: string;
    id: number;
}

export const fetchRegister = async (data: dataRegister) => {
    const urlApi = getApiUrl("register");
    const response = await fetch(urlApi, jsonRequest("POST", data));

    const dataResponse = await response.json();

    if (!response.ok) {
        throw new Error(dataResponse.message || "Error en el registro!")
    }

    return dataResponse as responseRegister
}

export const sendRegister = async (data: dataRegister) => {
    console.log("Submit Form...")

    try {
        await fetchRegister(data);
        console.log("Request Getting")

        const responseLogin = await fetchLogin({
            email: data.email,
            password: data.password,
            device_name: DEVICE_NAME
        });

        console.log(responseLogin.token)
    } catch (err) {
        if (err instanceof Error) {
            throw err.message
        } else {
            throw String(err)
        }
    }
}

export const fetchLogin = async (data: dataLogin) => {
    const urlApi = getApiUrl("login");
    const response = await fetch(urlApi, jsonRequest("POST", data));

    const dataResponse = await response.json();
    if (!response.ok) {
        throw new Error(dataResponse.message || "Error en el login")
    }

    return dataResponse as responseLogin
}
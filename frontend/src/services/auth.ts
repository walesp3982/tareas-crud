import { DEVICE_NAME, getApiUrl } from "../config";
import { jsonRequest, jsonRequestAuth } from "../utils/requests";


export class Auth {
    static async fetchRegister(data: dataRegister): Promise<responseAuth> {
        const urlApi = getApiUrl("register");

        const jsonData = { ...data, device_name: DEVICE_NAME }
        const response = await fetch(urlApi, jsonRequest("POST", jsonData));

        const dataResponse = await response.json();

        if (!response.ok) {
            throw new Error(dataResponse.message || "Register'error")
        }

        return dataResponse as responseAuth
    }

    static async fetchLogin(data: dataLogin): Promise<responseAuth> {
        const urlApi = getApiUrl("login");

        const jsonData = { ...data, device_name: DEVICE_NAME }
        const response = await fetch(urlApi, jsonRequest("POST", jsonData))

        const dataResponse = await response.json();

        if (!response.ok) {
            throw new Error(dataResponse.message || "Login'error")
        }

        return dataResponse as responseAuth
    }

    static async fetchLogout(): Promise<responseLogout> {
        const urlApi = getApiUrl("logout");

        const response = await fetch(urlApi, jsonRequestAuth("POST"))

        if (!response.ok) {
            throw new Error("Error en el logout")
        }

        const dataResponse = await response.json() as responseLogout
        return dataResponse
    }

    static async register(data: dataRegister): Promise<void> {
        console.log("Submit Form...")

        try {
            const response = await this.fetchRegister(data)
            console.log("Register successful")

            setTokenAuth(response.token)
        } catch (err) {
            if (err instanceof Error) {
                throw err.message
            } else {
                throw String(err)
            }
        }
    }

    static async login(data: dataLogin): Promise<void> {
        console.log("Logging")

        try {
            const response = await this.fetchLogin(data)

            setTokenAuth(response.token)
        } catch (err) {
            if (err instanceof Error) {
                throw err.message
            } else {
                throw String(err)
            }
        }
    }

    static async logout(): Promise<void> {
        try {
            const response = await this.fetchLogout();
            console.log(response.message)

            removeTokenAuth()
            sessionStorage.clear()
        } catch {
            console.log("Algo sucedió")
        }
    }
}
export interface dataRegister {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface dataLogin {
    email: string;
    password: string;
}

export interface responseAuth {
    token: string
}

export interface responseLogout {
    message: string
}

const setTokenAuth = (token: string) => {
    localStorage.setItem("token", token);
}

export const getTokenAuth = (): string | null => {
    return localStorage.getItem("token")
}

export const removeTokenAuth = () => {
    localStorage.removeItem("token")
}

export const validateToken = async () => {
    const url = getApiUrl("validate");

    const response = await fetch(url, jsonRequestAuth("POST"))

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message)
    }
}
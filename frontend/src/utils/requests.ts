import { getTokenAuth } from "../services/auth";

type Method = "POST" | "GET" | "PUT" | "DELETE";

export const jsonRequest = (method: Method, data: object | null = null): RequestInit => {
    return {
        method: method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
}

export const jsonRequestAuth = (method: Method, data: object | null = null): RequestInit => {

    const token = getTokenAuth();

    if (token === null) throw new Error("No se encontró el token")

    let request: RequestInit = {
        method: method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    }

    if (method != "GET") {
        request = {
            ...request,
            body: JSON.stringify(data)
        }
    }

    return request
}
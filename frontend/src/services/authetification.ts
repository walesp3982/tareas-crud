import { getApiUrl } from "../config";
import { jsonRequest } from "../utils/requests";

interface dataRegister {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

interface dataLogin {
    name: string;
    password: string;
}

export const sendRegister = async (data: dataRegister) => {
    const apiUrl = getApiUrl("register");
    const data_1 = await fetch(apiUrl,
        jsonRequest("POST", data)
    );
    return await data_1.json();
}

export const sendLogin = async (data: dataLogin) => {
    const urlApi = getApiUrl("login");
    const data_1 = await fetch(urlApi, jsonRequest("POST", data));
    return await data_1.json();
}

export const API_URL = import.meta.env.VITE_API_URL
export const DEVICE_NAME = import.meta.env.VITE_NAME_DEVICE

export const getApiUrl = (endpoint: string) => {
    return `${API_URL}${endpoint}`
}
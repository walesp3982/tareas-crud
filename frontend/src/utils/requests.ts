type Method = "POST" | "GET" | "PUT" | "DELETE";

export const jsonRequest = (method: Method, data: object): RequestInit => {
    return {
        method: method,
        headers: {
            "Accept": "application/json",
            "Content": "application/json",
        },
        body: JSON.stringify({
            data
        })
    }
}
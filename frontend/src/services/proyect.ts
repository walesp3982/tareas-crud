import { getApiUrl } from "../config"
import { jsonRequestAuth } from "../utils/requests"

export interface Proyect {
    id: number,
    name: string,
    user_id: number,
    start_date: Date,
    end_date: Date,
    deleted_at: Date | null,
    created_at: Date,
    updated_at: Date
}

export type proyectStatus = "passed" | "current" | "future"

export interface jsonProyect {
    id: number,
    name: string,
    user_id: number,
    start_date: string,
    end_date: string,
    deleted_at: string | null,
    created_at: string,
    updated_at: string
}

export const stringProyectStatus = (status: proyectStatus): string => {
    switch (status) {
        case "current":
            return "En Progreso"
        case "future":
            return "Futuro"
        case "passed":
            return "Pasado"
    }
}
export class ProyectService {
    static getProyectStatus(proyect: Proyect): proyectStatus {
        const now = new Date()
        const currentData = new Date(now.getFullYear(), now.getMonth(), now.getDate())

        if (proyect.created_at < currentData) {
            return proyect.end_date < currentData ? "passed" : "current"
        }

        return "future"
    }
    static convertDateTypeProyect(proyect: jsonProyect): Proyect {
        return {
            ...proyect,
            start_date: new Date(proyect.start_date),
            end_date: new Date(proyect.end_date),
            created_at: new Date(proyect.created_at),
            updated_at: new Date(proyect.updated_at)
        } as Proyect
    }

    static async getAllProyects(): Promise<Proyect[]> {
        const url = getApiUrl("proyects")

        try {
            const response = await fetch(url, jsonRequestAuth("GET"))


            if (!response.ok) {
                throw new Error("No se puedo obtener los proyectos")
            }

            const data = await response.json() as jsonProyect[]

            const proyects = data.map(
                proyect => {
                    return this.convertDateTypeProyect(proyect)
                }
            )
            return proyects as Proyect[]

        } catch (err) {
            if (err instanceof Error) {
                throw err
            }
            throw new Error(String(err))
        }
    }

    static async getProyect(proyectId: number): Promise<Proyect> {
        const url = getApiUrl(`proyects/${proyectId}`)

        try {
            const response = await fetch(url, jsonRequestAuth("GET"))

            if (!response.ok) {
                throw new Error("No se puede obtener el proyecto. Error " + response.status)
            }
            const data = await response.json() as Proyect

            return data
        } catch (err) {
            if (err instanceof Error) {
                throw err
            }
            throw new Error(String(err))
        }
    }
}
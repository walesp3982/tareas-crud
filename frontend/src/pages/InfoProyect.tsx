import { useCallback, useEffect, useState, type JSX } from "react";
import { useLoaderData } from "react-router";
import { ProyectService, type Proyect } from "../services/proyect";

export const InfoProyect = (): JSX.Element => {

    const params = useLoaderData()
    const proyectId = params.proyectId as number
    const [proyect, setProyect] = useState<Proyect | null>(null)
    const [loading, setLoading] = useState(true)

    const fetchProyect = useCallback(async () => {
        let isMounted = true

        try {
            setLoading(true)
            const data = await ProyectService.getProyect(proyectId)
            if (isMounted) {
                setProyect(data)
            }
        } catch (err) {
            if (isMounted && err instanceof Error) {
                console.log(err)
            }
        } finally {
            if (isMounted) { setLoading(false) }
        }

        return () => { isMounted = false }
    }, [proyectId]
    )

    useEffect(() => {
        fetchProyect()
    }, [fetchProyect])

    return (
        <div>
            {loading && "loading"}
            hola
            {proyect?.name}
        </div>
    )
}
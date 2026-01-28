import { useCallback, useEffect, useState, type JSX } from "react";
import { Subtitle } from "../components/Subtitle";
import { ListProyects } from "../components/ListProyects/ListProyects";
import { RefreshButton } from "../components/RefreshButton";
import { ProyectService, type Proyect } from "../services/proyect";


export function Dashboard():

    JSX.Element {

    const [loading, setLoading] = useState(false);

    const [proyects, setProyects] = useState<Proyect[]>([])

    const fetchProyects = useCallback(async () => {
        let isMounted = true;
        try {
            setLoading(true)
            const data = await ProyectService.getAllProyects()
            if (isMounted) {
                setProyects(data)
            }
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message)
            } else {
                console.log(err)
            }

        } finally {
            if (isMounted) { setLoading(false) }
        }

        return () => {
            isMounted = false
        }
    }, [])



    useEffect(
        () => {
            fetchProyects()
        }
        , [fetchProyects])

    return (
        <>
            <Subtitle>Dashboard</Subtitle>
            <div className="app-container">
                <RefreshButton onClick={fetchProyects} loading={loading} />
                <ListProyects proyects={proyects}></ListProyects>
            </div>

        </>
    )
}
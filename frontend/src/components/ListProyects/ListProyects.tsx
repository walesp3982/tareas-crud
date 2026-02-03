import type { JSX } from "react";
import { ProyectService, stringProyectStatus, type Proyect } from "../../services/proyect";
import styles from "./ListProyects.module.css"
import { getOnlyDate } from "../../utils/times";
import { useNavigate } from "react-router";
interface propsListProyects {
    proyects: Proyect[]
}

interface propsProyectElement {
    proyect: Proyect
}

function daysAfter(previousTime: Date): number {
    const now = new Date();

    const currentDate = getOnlyDate(now);
    const previousDate = getOnlyDate(previousTime)
    const diferenceInMs = currentDate.getTime() - previousDate.getTime()

    const milisecondsToDays = 60 * 60 * 1000 * 24;
    const diference = Math.floor(diferenceInMs / milisecondsToDays)

    return diference
}

const textCreationDays = (dayCreation: number): string => {
    if (dayCreation === 0) {
        return "Creado hoy"
    }
    return `Creado hace ${dayCreation} día(s)`

}


export const TagStatusProyect = ({ proyect }: propsProyectElement): JSX.Element => {
    const status = ProyectService.getProyectStatus(proyect)

    const textStatus = stringProyectStatus(status)

    return (
        <div className={styles.tag + " " + styles[status]}>
            {textStatus}
        </div>
    )
}
export const ProyectElement = ({ proyect }: propsProyectElement): JSX.Element => {
    const dayCreation = daysAfter(proyect.created_at)
    const navigate = useNavigate()
    // TODO: create router to onclick to page to proyect

    const onClickGoProyect = () => {
        navigate(`/app/proyects/${proyect.id}`)
    }
    return (
        <div className={styles['proyect-elem']} onClick={onClickGoProyect}>
            <div className={styles.content}>
                <div className={styles.title}>{proyect.name}</div>
                <div>
                    <div>
                        <p>{textCreationDays(dayCreation)}</p>
                        <TagStatusProyect proyect={proyect}></TagStatusProyect>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ListProyects = ({ proyects }: propsListProyects): JSX.Element => {
    const proyectsElem = proyects.map(
        proyect => {
            return <ProyectElement proyect={proyect} key={proyect.id} />
        }
    )

    return <ul className={styles['proyect-list']}>
        {proyectsElem}
    </ul>
}
import styles from './RefreshButton.module.css'

interface RefreshButtonProps {
    onClick: () => void;
    loading?: boolean;
}

export function RefreshButton({ onClick, loading }: RefreshButtonProps) {
    return (
        <button
            className={styles.refreshButton}
            onClick={onClick}
            disabled={loading}
            title="Actualizar proyectos"
        >
            <span className={`${styles.icon} ${loading ? styles.spinning : ''}`}>
                🔄
            </span>
            <span>{loading ? "Cargando..." : "Refrescar"}</span>
        </button>
    )
}

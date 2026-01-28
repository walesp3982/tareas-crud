export type StatusTask =
    "pending" |
    "progress" |
    "blocked" |
    "completed" |
    "cancelled" |
    "overdue"

export type PriorityTask =
    "low" | "medium" | "high" | "critical"

export interface Task {
    id: number,
    name: string,
    status: StatusTask,
    start_date: Date | null,
    end_date: Date | null,
    proyect_id: number,
    created_at: Date,
    updated_at: Date,
    priority: PriorityTask
}


<?php

namespace App\Enums;

enum StatusTaskEnum: string
{
    case PENDING = "pending";
    case PROGRESS = "progress";
    case BLOCKED = "blocked";
    case COMPLETED = "completed";
    case CANCELED = "cancelled";
    case OVERDUE = "overdue";
}


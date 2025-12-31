<?php

namespace App\Enums;

enum PriorityTaskEnum: string
{
    case LOW = "low";
    case MEDIUM = "medium";
    case HIGH = "high";
    case CRITICAL = "critica";
}
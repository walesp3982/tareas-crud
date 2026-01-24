<?php

namespace App\Http\Requests;

use App\Enums\PriorityTaskEnum;
use App\Enums\StatusTaskEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => ["string", "max:50"],
            "status" => [Rule::enum(StatusTaskEnum::class)],
            "priority" => [Rule::enum(PriorityTaskEnum::class)],
            "start_date" => ["nullable", "date", Rule::date()->afterOrEqual(today())],
            "end_date" => ["nullable", "date", Rule::date()->beforeOrEqual("start_date")]
        ];
    }
}

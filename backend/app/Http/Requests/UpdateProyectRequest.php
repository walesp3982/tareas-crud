<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProyectRequest extends FormRequest
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
            'name' => 'string|max:40',
            'start_date' => [
                'date',
                Rule::date()->afterOrEqual(today()),
                Rule::date()->format("Y-m-d")
            ],
            'end_date' => [
                'date',
                Rule::date()->after('start_date'),
                Rule::date()->format("Y-m-d")
            ]
        ];
    }
}

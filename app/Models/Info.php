<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Info extends Model
{
    protected $fillable = ['value'];

    protected $appends = ['formatted'];

    public function getFormattedAttribute()
    {
        if ($this->type === 'image') {
            if (!$this->value) return asset('storage/' . config('paths.info_image') . '/' . $this->field . '.webp');
            else return asset('storage/' . config('paths.info_image') . '/' . $this->value);
        }
        return $this->value;
    }
}

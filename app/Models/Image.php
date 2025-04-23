<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'name',
    ];

    protected $appends = [
        'url',
    ];

    public function getUrlAttribute()
    {
        return asset('storage/' . config('paths.images_url') . '/' . $this->name);
    }
}

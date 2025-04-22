<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Slide extends Model
{
    protected $fillable = [
        'image',
        'title',
        'description',
        'link',
    ];

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        return asset('storage/' . config('paths.slides_image') . '/' . $this->image);
    }
}

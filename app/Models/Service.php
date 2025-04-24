<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'image',
        'description',
        'page',
    ];

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        return asset('storage/' . config('paths.services_image') . '/' . $this->image);
    }

    public function faqs()
    {
        return $this->hasMany(ServiceFaq::class);
    }
}

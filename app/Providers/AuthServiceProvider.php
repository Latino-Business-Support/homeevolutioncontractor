<?php

namespace App\Providers;

use App\Policies\InformationPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [
        'information' => InformationPolicy::class,
    ];

    public function boot(): void
    {
        $this->registerPolicies();
    }
}

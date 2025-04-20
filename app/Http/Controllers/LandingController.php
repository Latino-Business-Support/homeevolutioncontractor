<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class LandingController extends Controller
{
    public function home()
    {
        return inertia('landing/Home');
    }
}

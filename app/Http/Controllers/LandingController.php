<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Service;

class LandingController extends Controller
{
    public function home()
    {
        $services = Service::all();
        $projects = Project::all();
        return inertia('landing/Home', compact('services', 'projects'));
    }
}

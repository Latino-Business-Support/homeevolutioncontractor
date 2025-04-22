<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Service;
use App\Models\Slide;

class LandingController extends Controller
{
    public function home()
    {
        $projects = Project::all();
        $slides = Slide::all();
        return inertia('landing/Home', compact('projects', 'slides'));
    }

    public function about()
    {
        return inertia('landing/About');
    }

    public function services()
    {
        $services = Service::all();
        return inertia('landing/Services');
    }

    public function service($slug)
    {
        $service = Service::where('slug', $slug)->firstOrFail();
        return inertia('landing/Service', compact('service'));
    }
}

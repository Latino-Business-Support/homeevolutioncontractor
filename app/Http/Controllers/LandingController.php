<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Service;
use App\Models\Slide;
use App\Models\Social;
use App\Services\GoogleReviewService;

class LandingController extends Controller
{
    public function home()
    {
        $socials = Social::all();
        $services = Service::with(['faqs'])->get();
        $projects = Project::all();
        $slides = Slide::all();
        return inertia('landing/Home', compact('services', 'projects', 'slides', 'socials'));
    }

    public function about()
    {
        $socials = Social::all();
        $services = Service::all();
        return inertia('landing/About', compact('services', 'socials'));
    }

    public function services()
    {
        $socials = Social::all();
        $services = Service::all();
        return inertia('landing/Services', compact('services', 'socials'));
    }

    public function service($slug)
    {
        $service = Service::with(['faqs'])->where('slug', $slug)->firstOrFail();
        $socials = Social::all();
        $services = Service::all();
        return inertia('landing/Service', compact('services', 'service', 'socials'));
    }

    public function gallery()
    {
        $socials = Social::all();
        $services = Service::all();
        $projects = Project::all();
        return inertia('landing/Gallery', compact('services', 'projects', 'socials'));
    }

    public function faqs()
    {
        $socials = Social::all();
        $services = Service::with('faqs')->get();
        return inertia('landing/Faqs', compact('services', 'socials'));
    }

    public function contact()
    {
        $socials = Social::all();
        $services = Service::with('faqs')->get();
        return inertia('landing/Contact', compact('services', 'socials'));
    }
}

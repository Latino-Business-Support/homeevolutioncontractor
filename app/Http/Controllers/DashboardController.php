<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\Info;
use App\Models\Mail;
use App\Models\Project;
use App\Models\Service;
use App\Models\Slide;
use App\Models\Social;
use App\Services\InfoFormatService;

class DashboardController extends Controller
{
    public function home()
    {
        [$infos, $info] = InfoFormatService::format();
        return inertia('dashboard/Home', compact('infos', 'info'));
    }

    public function info_md_editor(Info $info)
    {
        $images = Image::all();
        $info1 = $info;
        return inertia('dashboard/InfoMdEditor', compact('info1', 'images'));
    }
    public function slides()
    {
        $slides = Slide::all();
        return inertia('dashboard/Slides', compact('slides'));
    }
    public function socials()
    {
        $socials = Social::all();
        return inertia('dashboard/Socials', compact('socials'));
    }
    public function images()
    {
        $images = Image::all();
        return inertia('dashboard/Images', compact('images'));
    }
    public function services()
    {
        $services = Service::all();
        return inertia('dashboard/Services', compact('services'));
    }
    public function service_page(Service $service)
    {
        $images = Image::all();
        return inertia('dashboard/ServicePage', compact('service', 'images'));
    }
    public function projects()
    {
        $projects = Project::all();
        return inertia('dashboard/Projects', compact('projects'));
    }
    public function service_faqs(Service $service)
    {
        $service->load('faqs');
        return inertia('dashboard/ServiceFaqs', compact('service'));
    }
    public function mails()
    {
        $mails = Mail::all();
        return inertia('dashboard/Mails', compact('mails'));
    }
}

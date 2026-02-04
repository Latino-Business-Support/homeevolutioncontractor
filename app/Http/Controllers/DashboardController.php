<?php

namespace App\Http\Controllers;

use App\Helpers\PolicyMap;
use App\Http\Controllers\Controller;
use App\Models\Email;
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
        [$infos, $info] = InfoFormatService::format(null, PolicyMap::permission('information.viewCredentials'));
        [, $info_tmp] = InfoFormatService::format(null, true);
        $info['lbsupp_api_url'] = $info_tmp['lbsupp_api_url'] ?? null;
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
    public function gallery()
    {
        $projects = Project::all();
        return inertia('dashboard/Gallery', compact('projects'));
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
    public function emails()
    {
        $emails = Email::all();
        return inertia('dashboard/Emails', compact('emails'));
    }
    public function tickets()
    {
        [, $info1] = InfoFormatService::format(null, true);
        [, $info] = InfoFormatService::format(null);
        $info['lbsupp_api_url'] = $info1['lbsupp_api_url'] ?? null;
        $info['lbsupp_api_key'] = $info1['lbsupp_api_key'] ?? null;
        return inertia('dashboard/Tickets', compact('info'));
    }
    public function manual()
    {
        [, $info1] = InfoFormatService::format(null, true);
        [, $info] = InfoFormatService::format(null);
        $info['lbsupp_api_url'] = $info1['lbsupp_api_url'] ?? null;
        $info['lbsupp_api_key'] = $info1['lbsupp_api_key'] ?? null;
        return inertia('dashboard/manual', compact('info'));
    }
}

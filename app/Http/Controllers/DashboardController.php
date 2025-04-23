<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\Info;
use App\Models\Slide;
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
        return inertia('dashboard/Socials');
    }
    public function images()
    {
        $images = Image::all();
        return inertia('dashboard/Images', compact('images'));
    }
    public function services()
    {
        return inertia('dashboard/Services');
    }
}

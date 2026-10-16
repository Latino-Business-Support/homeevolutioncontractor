<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ChatMessage;
use App\Services\CaptchaService;
use App\Services\GoogleService;
use App\Services\InfoFormatService;
use App\Services\LBSupportAPI;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class UtilityController extends Controller
{
    public function get_file(string $any)
    {
        $path = storage_path("app/public/" . $any);
        if (!file_exists($path)) return abort(404);
        return Response::file($path);
    }

    public function set_locale(Request $request)
    {
        $locale = $request->input('locale');
        if (in_array($locale, ['es', 'en'])) session(['locale' => $locale]);
        return back();
    }

    public function get_reviews()
    {
        $reviews = GoogleService::getReviews() ?: [];
        return response()->json($reviews);
    }
}

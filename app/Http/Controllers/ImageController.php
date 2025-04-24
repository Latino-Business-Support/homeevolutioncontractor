<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Services\FileUploadService;
use Illuminate\Http\Request;

class ImageController extends Controller
{

    public function store(Request $request)
    {
        $request->validate(['name' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048']);
        $data = FileUploadService::upload($request, 'name', config('paths.images_url'));
        Image::create($data);
        return back();
    }

    public function destroy(Image $image)
    {
        FileUploadService::delete(config('paths.images_url'), $image->name);
        $image->delete();
        return back();
    }
}

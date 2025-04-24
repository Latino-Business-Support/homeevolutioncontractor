<?php

namespace App\Http\Controllers;

use App\Models\Slide;
use Illuminate\Http\Request;
use App\Services\FileUploadService;


class SlideController extends Controller
{
    private $validations = [];
    public function __construct()
    {
        $this->validations = [
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'link' => 'required|max:255',
        ];
    }
    public function store(Request $request)
    {
        $request->validate($this->validations);
        $data = FileUploadService::upload($request, 'image', config('paths.slides_image'));
        Slide::create($data);
        return back();
    }

    public function update(Request $request, Slide $slide)
    {
        $request->validate([...$this->validations, 'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048']);
        $data = FileUploadService::upload($request, 'image', config('paths.slides_image'), $slide->image);
        $slide->update($data);
        return back();
    }

    public function destroy(Slide $slide)
    {
        FileUploadService::delete(config('paths.slides_image'), $slide->image);
        $slide->delete();
        return back();
    }
}

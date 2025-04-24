<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use App\Services\FileUploadService;

class ServiceController extends Controller
{
    private $validations = [];
    public function __construct()
    {
        $this->validations = [
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|regex:/^[a-z0-9-]+$/|unique:services,slug',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'description' => 'required|string|max:500',
            'page' => 'nullable|string',
        ];
    }
    public function store(Request $request)
    {
        $request->validate($this->validations);
        $data = FileUploadService::upload($request, 'image', config('paths.services_image'));
        Service::create($data);
        return back();
    }

    public function update(Request $request, Service $service)
    {
        $request->validate([
            ...$this->validations,
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'slug' => 'required|string|max:255|regex:/^[a-z0-9-]+$/|unique:services,slug,' . $service->id
        ]);
        $data = FileUploadService::upload($request, 'image', config('paths.services_image'), $service->image);
        $service->update($data);
        return back();
    }

    public function destroy(Service $service)
    {
        FileUploadService::delete(config('paths.services_image'), $service->image);
        $service->delete();
        return back();
    }
}

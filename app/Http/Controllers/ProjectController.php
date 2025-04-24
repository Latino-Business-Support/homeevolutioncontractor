<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use App\Services\FileUploadService;

class ProjectController extends Controller
{
    private $validations = [];
    public function __construct()
    {
        $this->validations = [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
        ];
    }
    public function store(Request $request)
    {
        $request->validate($this->validations);
        $data = FileUploadService::upload($request, 'image', config('paths.projects_image'));
        Project::create($data);
        return back();
    }

    public function update(Request $request, Project $project)
    {
        $request->validate([...$this->validations, 'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048']);
        $data = FileUploadService::upload($request, 'image', config('paths.projects_image'), $project->image);
        $project->update($data);
        return back();
    }

    public function destroy(Project $project)
    {
        FileUploadService::delete(config('paths.projects_image'), $project->image);
        $project->delete();
        return back();
    }
}

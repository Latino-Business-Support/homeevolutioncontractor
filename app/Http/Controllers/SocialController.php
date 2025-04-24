<?php

namespace App\Http\Controllers;

use App\Models\Social;
use Illuminate\Http\Request;

class SocialController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'link' => 'required|url|max:255',
            'icon' => 'required|string|max:255',

        ]);
        Social::create($request->all());
        return back();
    }

    public function update(Request $request, Social $social)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'link' => 'required|url|max:255',
            'icon' => 'required|string|max:255',
        ]);
        $social->update($request->all());
        return back();
    }

    public function destroy(Social $social)
    {
        $social->delete();
        return back();
    }
}

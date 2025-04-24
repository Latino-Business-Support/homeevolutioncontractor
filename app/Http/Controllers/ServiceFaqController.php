<?php

namespace App\Http\Controllers;

use App\Models\ServiceFaq;
use Illuminate\Http\Request;

class ServiceFaqController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'question' => 'required|string|max:255',
            'answer' => 'required|string',
            'service_id' => 'required|exists:services,id',
        ]);
        ServiceFaq::create($request->all());
        return back();
    }

    public function update(Request $request, ServiceFaq $service_faq)
    {
        $request->validate([
            'question' => 'required|string|max:255',
            'answer' => 'required|string',
            'service_id' => 'required|exists:services,id',
        ]);
        $service_faq->update($request->all());
        return back();
    }

    public function destroy(ServiceFaq $service_faq)
    {
        $service_faq->delete();
        return back();
    }
}

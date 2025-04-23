<?php

namespace App\Http\Controllers;

use App\Mail\WebContactFormMail;
use App\Models\Mail;
use App\Services\DynamicMailService;
use App\Services\InfoFormatService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail as MailFacade;

class MailController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'address' => 'required|string|max:255',
            'message' => 'required|string|max:1000',
        ]);
        [$infos,  $info] = InfoFormatService::format(null, true);
        DynamicMailService::apply($info);
        Mail::create($request->all());
        MailFacade::to($info['email_user'])->send(new WebContactFormMail($request->all(), $info));
        return back();
    }

    public function destroy(Mail $mail)
    {
        $mail->delete();
        return back();
    }
}

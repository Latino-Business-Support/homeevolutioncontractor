<?php

namespace App\Http\Controllers;

use App\Mail\WebContactFormMail;
use App\Models\Email;
use App\Models\Mail;
use App\Services\DynamicMailService;
use App\Services\InfoFormatService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail as MailFacade;
use Illuminate\Support\Facades\Http;

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
            'g-recaptcha-response' => 'required|string',
        ]);
        [$infos,  $info] = InfoFormatService::format(null, true);

        $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret' => $info['captcha_secret_key'],
            'response' => $request->input('g-recaptcha-response'),
            'remoteip' => $request->ip(),
        ]);
        if (!$response->json('success')) return back()->withErrors(['g-recaptcha-response' => 'Invalid captcha.'])->withInput();

        DynamicMailService::apply($info);
        Mail::create($request->all());

        $recipients = Email::all(); // destinataries
        foreach ($recipients as $recipient) MailFacade::to($recipient->email)->send(new WebContactFormMail($request->all(), $info));
        return back();
    }

    public function destroy(Mail $mail)
    {
        $mail->delete();
        return back();
    }
}

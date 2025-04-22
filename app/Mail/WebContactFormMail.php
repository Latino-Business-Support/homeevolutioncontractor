<?php

namespace App\Mail;

use App\Services\Base64ImageService;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class WebContactFormMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;
    public $info;

    public function __construct($data, $info)
    {
        $this->data = $data;
        $this->info = $info;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Web Contact Form Mail',
        );
    }

    public function content(): Content
    {
        $data = $this->data;
        $info = $this->info;

        return new Content(
            view: 'mails.WebContactFormMail',
            with: compact('data', 'info'),
        );
    }

    public function attachments(): array
    {
        return [];
    }
}

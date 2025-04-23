<?php

namespace App\Services;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Mail;

class DynamicMailService
{
    public static function apply($info)
    {
        // Obtenemos los datos de configuración
        $username = $info['email_user'] ?? env('MAIL_USERNAME');
        $password = $info['email_pass'] ?? env('MAIL_PASSWORD');

        // Reconfiguramos completamente el transporte SMTP
        $config = [
            'transport' => 'smtp',
            'host' => env('MAIL_HOST'),
            'port' => env('MAIL_PORT'),
            'encryption' => env('MAIL_ENCRYPTION'),
            'username' => $username,
            'password' => $password,
            'timeout' => null,
            'local_domain' => env('MAIL_EHLO_DOMAIN'),
        ];

        // Aplicamos las configuraciones
        Config::set('mail.mailers.smtp', $config);
        Config::set('mail.from.address', $username);
        Config::set('mail.default', 'smtp');

        // Importante: Resetear completamente el mailer para entornos de producción
        Mail::purge('smtp');

        // También limpiamos las instancias del contenedor
        if (app()->bound('mailer')) {
            app()->forgetInstance('mailer');
        }
        if (app()->bound('swift.mailer')) {
            app()->forgetInstance('swift.mailer');
        }
    }
}

<?php

namespace App\Services;

use Closure;
use Illuminate\Support\Facades\Http;

class GoogleService
{
    public static function getPlaceSummary(): array
    {
        $empty = ['rating' => null, 'count' => null, 'reviews' => []];
        [, $info] = InfoFormatService::format(null, true);
        $google_api_key = $info['google_api_key'] ?? null;
        $google_place_id = $info['google_place_id'] ?? null;
        if (empty($google_api_key) || empty($google_place_id)) return $empty;
        try {
            $url = 'https://places.googleapis.com/v1/places/' . urlencode($google_place_id) . '?languageCode=en';
            $response = Http::withHeaders([
                'Accept' => 'application/json',
                'X-Goog-Api-Key' => $google_api_key,
                'X-Goog-FieldMask' => 'rating,userRatingCount,reviews',
            ])->get($url);
            if (!$response->successful()) return $empty;
            $json = $response->json();
            return [
                'rating' => $json['rating'] ?? null,
                'count' => $json['userRatingCount'] ?? null,
                'reviews' => $json['reviews'] ?? [],
            ];
        } catch (\Exception $e) {
            return $empty;
        }
    }

    public static function getReviews()
    {
        return self::getPlaceSummary()['reviews'] ?? [];
    }

    public static function verifyCaptcha(string $token, string $ip)
    {
        [, $info] = InfoFormatService::format(null, true);

        $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret' => $info['google_captcha_secret_key'] ?? '',
            'response' => $token,
            'remoteip' => $ip,
        ]);
        $json = $response->json();
        return $json['success'] && ($json['score'] ?? 1.0) >= 0.5;
    }

    public static function captchaRule(): Closure
    {
        return function (string $attribute, $value, Closure $fail) {
            if (empty($value)) return $fail(__('validation.required', ['attribute' => 'reCAPTCHA']));
            $isValid = self::verifyCaptcha($value, request()->ip());
            if (!$isValid) return $fail(__('La verificación de seguridad ha fallado o el token ha expirado.'));
        };
    }
}

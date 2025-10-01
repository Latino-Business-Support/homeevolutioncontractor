<?php

namespace App\Services;

class LBSupportAPI
{
    private static $lbsupp_api_url = null;
    private static $lbsupp_api_key = null;
    private static $google_place_id = null;
    private static function set_credentials()
    {
        [, $info] = InfoFormatService::format(null, true);
        self::$lbsupp_api_url = $info['lbsupp_api_url'] ?? null;
        self::$lbsupp_api_key = $info['lbsupp_api_key'] ?? null;
        self::$google_place_id = $info['google_place_id'] ?? null;
    }

    public static function get_reviews()
    {
        self::set_credentials();
        try {
            $postData = ['api_key' => self::$lbsupp_api_key, 'place_id' => self::$google_place_id];
            $options = ['http' => ['header'  => "Content-Type: application/json\r\nAccept: application/json\r\n", 'method'  => 'POST', 'content' => json_encode($postData), 'timeout' => 10]];
            $context  = stream_context_create($options);
            $response = @file_get_contents(self::$lbsupp_api_url . '/api/get-reviews', false, $context);
            if ($response === false) return [];
            $response = json_decode($response, true);
            return $response ?? [];
        } catch (\Exception $e) {
            return [];
        }
    }

    public static function login($email, $password)
    {
        self::set_credentials();
        try {
            $postData = ['api_key' => self::$lbsupp_api_key, 'email' => $email, 'password' => $password];
            $options = ['http' => [
                'header'  => "Content-Type: application/json\r\nAccept: application/json\r\n",
                'method'  => 'POST',
                'content' => json_encode($postData),
                'timeout' => 10
            ]];
            $context  = stream_context_create($options);
            $response = @file_get_contents(self::$lbsupp_api_url . '/api/login', false, $context);
            $response = json_decode($response, true);
            if ($response) return $response['data'];
            return $response;
        } catch (\Exception $e) {
            return false;
        }
    }
}

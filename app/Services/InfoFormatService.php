<?php

namespace App\Services;

use App\Models\Info;
use App\Models\Service;

class InfoFormatService
{
    public static function format($infos = null)
    {
        if (is_null($infos)) $infos = Info::all();
        $infos = Info::all();
        $info = $infos->pluck('formatted', 'field');
        return [$infos, $info];
    }
}

<?php

namespace App\Http\Controllers;

use App\Enums\InfoTypeEnum;
use App\Models\Info;
use App\Services\FileUploadService;
use Illuminate\Http\Request;
use Illuminate\Support\MessageBag;
use \Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Validator;

class InfoController extends Controller
{
    public function update(Request $request)
    {
        $request->validate([
            'infos' => 'required|array',
            'infos.*.id' => 'required|exists:infos,id',
            'infos.*.type' => 'required|in:' . implode(',', array_column(InfoTypeEnum::cases(), 'value')),
        ]);
        $allErrors = new MessageBag;
        foreach ($request->infos as $index => $infoData) {
            $info = Info::find($infoData['id']);
            if ($info->type === InfoTypeEnum::IMAGE->value && $infoData['value'] instanceof UploadedFile) {
                $infoRequest = Request::create('/', 'POST', $infoData, [], ['value' => $infoData['value']]);
                $data = FileUploadService::upload($infoRequest, 'value', config('paths.info_image'), $info->value);
                $info->update(['value' => $data['value']]);
            } elseif ($info->type === InfoTypeEnum::TEXT->value || $info->type === InfoTypeEnum::MARKDOWN->value) {
                $validator = Validator::make(
                    ['value' => $infoData['value'] ?? null],
                    ['value' => 'required|string'],
                    ['value.required' => "The field {$infoData['label']} is required."]
                );
                if ($validator->fails()) {
                    foreach ($validator->errors()->all() as $message) {
                        $allErrors->add("infos.$index.value", $message);
                    }
                } else $info->update(['value' => $infoData['value']]);
            }
        }
        if ($allErrors->isNotEmpty()) return redirect()->back()->withErrors($allErrors)->withInput();
        return back();
    }
}

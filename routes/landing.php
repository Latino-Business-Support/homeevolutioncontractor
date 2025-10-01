<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\MailController;
use Illuminate\Support\Facades\Response;

Route::get('/storage/{any}', function ($any) {
    $path = storage_path("app/public/" . $any);
    if (!file_exists($path)) return abort(404);
    return Response::file($path);
})->where('any', '.*');

Route::get('/', [LandingController::class, 'home'])->name('home');
Route::get('/about', [LandingController::class, 'about'])->name('about');
Route::get('/services', [LandingController::class, 'services'])->name('services');
Route::get('/services/{slug}', [LandingController::class, 'service'])->name('service');
Route::get('/gallery', [LandingController::class, 'gallery'])->name('gallery');
Route::get('/faqs', [LandingController::class, 'faqs'])->name('faqs');
Route::get('/contact', [LandingController::class, 'contact'])->name('contact');

Route::post('/crud-mails', [MailController::class, 'store'])->name('crud-mails.store');

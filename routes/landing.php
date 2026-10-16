<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\UtilityController;
use Illuminate\Support\Facades\Response;

Route::controller(UtilityController::class)->name('web.')->group(function () {
    Route::get('/storage/{any}', 'get_file')->where('any', '.*');
    Route::get('/get-reviews', 'get_reviews')->name('get-reviews');
});

Route::get('/', [LandingController::class, 'home'])->name('home');
Route::get('/about', [LandingController::class, 'about'])->name('about');
Route::get('/services', [LandingController::class, 'services'])->name('services');
Route::get('/services/{slug}', [LandingController::class, 'service'])->name('service');
Route::get('/gallery', [LandingController::class, 'gallery'])->name('gallery');
Route::get('/faqs', [LandingController::class, 'faqs'])->name('faqs');
Route::get('/contact', [LandingController::class, 'contact'])->name('contact');

Route::post('/crud-mails', [MailController::class, 'store'])->name('crud-mails.store');

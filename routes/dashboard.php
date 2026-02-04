<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\InfoController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ServiceFaqController;
use App\Http\Controllers\SlideController;
use App\Http\Controllers\SocialController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->prefix('dashboard')->name('dashboard.')->group(function () {
    Route::controller(DashboardController::class)->group(function () {
        Route::get('/', 'home')->name('home');
        Route::get('/info_md_editor/{info}', 'info_md_editor')->name('info_md_editor');
        Route::get('/slides', 'slides')->name('slides');
        Route::get('/socials', 'socials')->name('socials');
        Route::get('/images', 'images')->name('images');
        Route::get('/services', 'services')->name('services');
        Route::get('/services/{service}/page', 'service_page')->name('service_page');
        Route::get('/services/{service}/faqs', 'service_faqs')->name('service_faqs');
        Route::get('/gallery', 'gallery')->name('gallery');
        Route::get('/mails', 'mails')->name('mails');
        Route::get('/emails', 'emails')->name('emails');
        Route::get('/tickets', 'tickets')->name('tickets');
        Route::get('/manual', 'manual')->name('manual');
    });

    // controllers for crud
    Route::post('/crud-info', [InfoController::class, 'update'])->name('crud-info.update');
    Route::resource('/crud-slides', SlideController::class)->parameters(['crud-slides' => 'slide'])->names('crud-slides')->only(['store', 'update', 'destroy']);
    Route::resource('/crud-socials', SocialController::class)->parameters(['crud-socials' => 'social'])->names('crud-socials')->only(['store', 'update', 'destroy']);
    Route::resource('/crud-images', ImageController::class)->parameters(['crud-images' => 'image'])->names('crud-images')->only(['store', 'destroy']);
    Route::resource('/crud-services', ServiceController::class)->parameters(['crud-services' => 'service'])->names('crud-services')->only(['store', 'update', 'destroy']);
    Route::resource('/crud-projects', ProjectController::class)->parameters(['crud-projects' => 'project'])->names('crud-projects')->only(['store', 'update', 'destroy']);
    Route::resource('/crud-servicefaqs', ServiceFaqController::class)->parameters(['crud-servicefaqs' => 'service_faq'])->names('crud-servicefaqs')->only(['store', 'update', 'destroy']);
    Route::resource('/crud-mails', MailController::class)->parameters(['crud-mails' => 'mail'])->names('crud-mails')->only(['destroy']);
    Route::resource('/crud-emails', EmailController::class)->parameters(['crud-emails' => 'email'])->names('crud-emails')->only(['store', 'update', 'destroy']);
});

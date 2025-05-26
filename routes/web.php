<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\InfoController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ServiceFaqController;
use App\Http\Controllers\SlideController;
use App\Http\Controllers\SocialController;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
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

// public services
Route::post('/crud-mails', [MailController::class, 'store'])->name('crud-mails.store');

Route::middleware(['auth', 'verified'])->prefix('dashboard')->name('dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'home'])->name('home');
    Route::get('/info_md_editor/{info}', [DashboardController::class, 'info_md_editor'])->name('info_md_editor');
    Route::get('/slides', [DashboardController::class, 'slides'])->name('slides');
    Route::get('/socials', [DashboardController::class, 'socials'])->name('socials');
    Route::get('/images', [DashboardController::class, 'images'])->name('images');
    Route::get('/services', [DashboardController::class, 'services'])->name('services');
    Route::get('/services/{service}/page', [DashboardController::class, 'service_page'])->name('service_page');
    Route::get('/services/{service}/faqs', [DashboardController::class, 'service_faqs'])->name('service_faqs');
    Route::get('/gallery', [DashboardController::class, 'gallery'])->name('gallery');
    Route::get('/mails', [DashboardController::class, 'mails'])->name('mails');
    Route::get('/emails', [DashboardController::class, 'emails'])->name('emails');

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

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

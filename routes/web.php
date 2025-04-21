<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LandingController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Response;

Route::get('/storage/{any}', function ($any) {
    $path = storage_path("app/public/" . $any);
    if (!file_exists($path)) return abort(404);
    return Response::file($path);
})->where('any', '.*');

Route::get('/', [LandingController::class, 'home'])->name('home');
Route::get('/about', [LandingController::class, 'home'])->name('about');
Route::get('/services', [LandingController::class, 'home'])->name('services');
Route::get('/services/{slug}', [LandingController::class, 'home'])->name('service');
Route::get('/projects', [LandingController::class, 'home'])->name('projects');
Route::get('/projects', [LandingController::class, 'home'])->name('projects');
Route::get('/contact', [LandingController::class, 'home'])->name('contact');

Route::middleware(['auth', 'verified'])->prefix('dashboard')->name('dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'home'])->name('home');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

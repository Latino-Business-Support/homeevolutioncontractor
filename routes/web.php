<?php

use App\Http\Controllers\LandingController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Response;

Route::get('/storage/{any}', function ($any) {
    $path = storage_path("app/public/" . $any);
    if (!file_exists($path)) return abort(404);
    return Response::file($path);
})->where('any', '.*');

Route::get('/', [LandingController::class, 'home'])->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

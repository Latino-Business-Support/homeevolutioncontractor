<?php

namespace App\Exceptions;

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;
use Closure;

class Handler extends ExceptionHandler
{
    protected $dontReport = [];

    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    public function register(): void
    {
        // Aquí puedes registrar reportables si quieres
    }

    public function render($request, Throwable $exception)
    {
        // Si es una petición Inertia
        if ($request->header('X-Inertia')) {
            if ($exception instanceof ModelNotFoundException || $exception instanceof NotFoundHttpException) {
                return inertia('Error')->toResponse($request)->setStatusCode(404);
            }
        }

        return parent::render($request, $exception);
    }
}

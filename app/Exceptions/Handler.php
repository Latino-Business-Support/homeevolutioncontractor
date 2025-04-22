<?php

namespace App\Exceptions;

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Session\TokenMismatchException;
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
        // Manejar errores de sesión expirada
        if ($exception instanceof TokenMismatchException) {
            return back()->with(['message' => 'La sesión ha expirado. Por favor intenta de nuevo.']);
        }

        // Si no estamos en ambiente local o testing
        if (!app()->environment(['local', 'testing'])) {
            // Errores comunes que queremos manejar con nuestra página personalizada
            $statusCode = 500;

            if ($exception instanceof ModelNotFoundException || $exception instanceof NotFoundHttpException) {
                $statusCode = 404;
            } elseif ($exception instanceof AuthorizationException) {
                $statusCode = 403;
            }

            // Si es uno de los códigos que queremos manejar de manera personalizada
            if (in_array($statusCode, [500, 503, 404, 403])) {
                return inertia('Error', ['status' => $statusCode])
                    ->toResponse($request)
                    ->setStatusCode($statusCode);
            }
        }

        return parent::render($request, $exception);
    }
}

<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;

class PolicyMap
{
    private static ?array $permissions = null;

    public static function permissions(): array
    {
        if (self::$permissions === null) self::$permissions = self::loadPermissions();
        return self::$permissions;
    }

    public static function permission(string $key): bool
    {
        if (self::$permissions === null) self::$permissions = self::loadPermissions();
        return self::$permissions[$key] ?? false;
    }

    private static function loadPermissions(): array
    {
        $policiesPath = app_path('Policies');
        $policyFiles = glob("{$policiesPath}/*.php");
        $permissions = [];
        foreach ($policyFiles as $file) {
            $class = 'App\\Policies\\' . basename($file, '.php');
            if (!class_exists($class)) continue;
            $reflection = new \ReflectionClass($class);
            $model = Str::snake(str_replace('Policy', '', class_basename($class)));
            foreach ($reflection->getMethods(\ReflectionMethod::IS_PUBLIC) as $method) {
                if ($method->isConstructor() || $method->isStatic()) continue;
                $ability = $method->name;
                $key = "{$model}.{$ability}";
                try {
                    $permissions[$key] = Gate::check($ability, $model);
                } catch (\Throwable $e) {
                    $permissions[$key] = false;
                }
            }
        }

        return $permissions;
    }
}

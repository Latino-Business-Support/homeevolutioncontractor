<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;

class MigrateProd extends Command
{
    protected $signature = 'migrate:prod {--fresh : Drop all tables and re-run all migrations}';

    protected $description = 'Run migrations and seeders with PROD DB credentials';

    public function handle()
    {
        return $this->info('This command is disabled for safety reasons.'); // Deshabilitado por razones de seguridad
        // Cambiar configuración en tiempo de ejecución
        Config::set('database.connections.mysql.connection', env('PROD_DB_CONNECTION'));
        Config::set('database.connections.mysql.host', env('PROD_DB_HOST'));
        Config::set('database.connections.mysql.port', env('PROD_DB_PORT'));
        Config::set('database.connections.mysql.database', env('PROD_DB_DATABASE'));
        Config::set('database.connections.mysql.username', env('PROD_DB_USERNAME'));
        Config::set('database.connections.mysql.password', env('PROD_DB_PASSWORD'));

        // Limpiar conexiones existentes
        DB::purge('mysql');

        // Determinar si es `fresh`
        if ($this->option('fresh')) {
            $this->info('Running migrate:fresh --seed with PROD credentials...');
            Artisan::call('migrate:fresh', ['--seed' => true]);
        } else {
            $this->info('Running migrate --seed with PROD credentials...');
            Artisan::call('migrate', ['--seed' => true]);
        }

        $this->info(Artisan::output());
    }
}

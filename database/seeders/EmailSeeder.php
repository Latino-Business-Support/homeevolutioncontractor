<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmailSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('emails')->insert([
            ['name' => 'Info', 'email' => 'info@homecny.com'],
            ['name' => 'Andrade', 'email' => 'andradenamcela@gmail.com'],
        ]);
    }
}

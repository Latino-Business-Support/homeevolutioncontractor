<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImageSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('images')->insert([
            ['name' => '1.webp'],
            ['name' => '2.webp'],
            ['name' => '3.webp'],
            ['name' => '4.webp'],
            ['name' => '5.webp'],
            ['name' => '6.webp'],
        ]);
    }
}

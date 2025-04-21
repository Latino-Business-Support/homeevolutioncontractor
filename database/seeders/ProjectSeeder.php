<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('projects')->insert([
            ['image' => '1.webp'],
            ['image' => '2.webp'],
            ['image' => '3.webp'],
            ['image' => '4.webp'],
            ['image' => '5.webp'],
            ['image' => '6.webp'],
            ['image' => '7.webp'],
            ['image' => '8.webp'],
            ['image' => '9.webp'],
            ['image' => '10.webp'],
            ['image' => '11.webp'],
            ['image' => '12.webp'],
            ['image' => '13.webp'],
            ['image' => '14.webp'],
            ['image' => '15.webp'],
            ['image' => '16.webp'],
            ['image' => '17.webp'],
            ['image' => '18.webp'],
            ['image' => '19.webp'],
            ['image' => '20.webp'],
            ['image' => '21.webp'],
            ['image' => '22.webp'],
            ['image' => '23.webp'],
            ['image' => '24.webp'],
            ['image' => '25.webp'],
            ['image' => '26.webp'],
            ['image' => '27.webp'],
            ['image' => '28.webp'],
            ['image' => '29.webp'],
            ['image' => '30.webp'],
            ['image' => '31.webp'],
            ['image' => '32.webp'],
            ['image' => '33.webp'],
            ['image' => '34.webp'],
            ['image' => '35.webp'],
            ['image' => '36.webp'],
            ['image' => '37.webp'],
            ['image' => '38.webp'],
            ['image' => '39.webp'],
            ['image' => '40.webp'],
        ]);
    }
}

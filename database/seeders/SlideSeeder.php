<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SlideSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('slides')->insert([
            [
                'image' => '1.webp',
                'title' => 'Building Trust, One {Roof} at a Time',
                'description' => 'This involves exploration and production (E&P) of oil and natural gas.',
                'link' => '/services',
            ],
            [
                'image' => '2.webp',
                'title' => 'Quality {Roofing Solutions} for Every Home',
                'description' => 'This involves exploration and production (E&P) of oil and natural gas.',
                'link' =>  '/services',
            ],
            [
                'image' => '3.webp',
                'title' => 'Your Trusted Partner in {Home Renovations}',
                'description' => 'This involves exploration and production (E&P) of oil and natural gas.',
                'link' =>  '/services',
            ],
        ]);
    }
}

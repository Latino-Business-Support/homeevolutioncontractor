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
                'image' => 'roofing.webp',
                'title' => 'Roofing Services',
                'description' => 'Explore our wide range of roofing services tailored to your needs.',
                'link' => '/services'
            ],
            [
                'image' => 'roofing_repairs.webp',
                'title' => 'Roofing Repairs + Maintenance',
                'description' => 'Get your roof repaired by our expert team to ensure safety and durability.',
                'link' => '/services/roofing-repairs-maintenance'
            ],
            [
                'image' => 'gutter.webp',
                'title' => 'Gutter Replacement & Repairs',
                'description' => 'We offer professional gutter replacement and repair services to protect your home.',
                'link' => '/services/gutter-replacement-repairs'
            ],
        ]);
    }
}

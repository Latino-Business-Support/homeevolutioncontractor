<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SocialSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('socials')->insert([
            [
                'name' => 'Facebook',
                'icon' => 'Facebook',
                'link' => '#',
            ],
            [
                'name' => 'Instagram',
                'icon' => 'Instagram',
                'link' => '#',
            ],
            [
                'name' => 'Twitter',
                'icon' => 'Twitter',
                'link' => '#',
            ],
            [
                'name' => 'LinkedIn',
                'icon' => 'Linkedin',
                'link' => '#',
            ],
        ]);
    }
}

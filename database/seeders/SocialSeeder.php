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
            ['name' => 'Facebook', 'icon' => 'faFacebookF', 'link' => '#'],
            ['name' => 'Instagram', 'icon' => 'faInstagram', 'link' => '#'],
            ['name' => 'Twitter', 'icon' => 'faTwitter', 'link' => '#'],
            ['name' => 'LinkedIn', 'icon' => 'faLinkedinIn', 'link' => '#'],
        ]);
    }
}

<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        tap(Service::create([
            'name' => 'Roofing Replacements',
            'slug' => 'roofing-replacements',
            'image' => '1.webp',
            'description' => 'Transform your home’s exterior with our expert roof replacement services. Our experienced team installs premium roofing systems, carefully selecting materials that balance style, durability, and energy efficiency. From removal to installation, we ensure a beautiful, long-lasting result that enhances your property’s value and provides peace of mind.',
        ]), function ($service) {});

        tap(Service::create([
            'name' => 'Roofing Repairs + Maintenance',
            'slug' => 'roofing-repairs-maintenance',
            'image' => '2.webp',
            'description' => 'Protect your home’s integrity with our prompt and reliable roofing repair services. Our expert team identifies and addresses leaks, damage, and wear, ensuring a watertight seal and extending your roof’s lifespan.',
        ]), function ($service) {});

        tap(Service::create([
            'name' => 'Emergency Roof Repairs',
            'slug' => 'emergency-roof-repairs',
            'image' => '3.webp',
            'description' => 'When disaster strikes, every minute counts. Our 24/7 emergency roof repair team springs into action, providing swift, expert solutions to protect your home and family from severe weather, fallen trees, or sudden leaks.',
        ]), function ($service) {});

        tap(Service::create([
            'name' => 'Gutter Replacement and Repairs',
            'slug' => 'gutter-replacement-repairs',
            'image' => '4.webp',
            'description' => 'Protect your home’s foundation, walls, and landscaping with our expert gutter replacement and repair services. Our technicians assess and address issues promptly, ensuring water flows freely and safely away.',
        ]), function ($service) {});

        tap(Service::create([
            'name' => 'Siding',
            'slug' => 'siding',
            'image' => '5.webp',
            'description' => 'Transform your home’s exterior with our expert siding installation and repair services. Our experienced team guides you through material selection, ensuring precise installation and enhanced curb appeal. From vinyl and fiber cement to brick and stone, we offer durable, low-maintenance options tailored to your style and budget.',
        ]), function ($service) {});

        tap(Service::create([
            'name' => 'Flashing and Sheathing',
            'slug' => 'flashing-and-sheathing',
            'image' => '6.webp',
            'description' => 'Protect your roof’s vulnerable areas with expert flashing installation and repair services. Our experienced technicians ensure watertight seals and long-lasting protection for chimneys, vents, skylights, and valleys. From custom fabrication to precise installation, we safeguard your home against leaks and water damage.',
        ]), function ($service) {});
    }
}

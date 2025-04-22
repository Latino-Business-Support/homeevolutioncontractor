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
        ]), function ($service) {
            $service->faqs()->createMany([
                ['question' => 'What types of roofing materials do you offer?', 'answer' => 'We offer a wide range of roofing materials, including asphalt shingles, metal roofing, tile, and flat roofing systems. Our team can help you choose the best option for your home based on your budget and style preferences.',],
                ['question' => 'How long does a roof replacement take?', 'answer' => 'The duration of a roof replacement project depends on various factors, including the size of your home and the type of roofing material chosen. On average, most projects take 1-3 days to complete.',],
                ['question' => 'Do you offer warranties on your roofing services?', 'answer' => 'Yes, we provide warranties on both materials and workmanship. The specific warranty terms depend on the type of roofing material used and the scope of the project.',],
            ]);
        });

        tap(Service::create([
            'name' => 'Roofing Repairs + Maintenance',
            'slug' => 'roofing-repairs-maintenance',
            'image' => '2.webp',
            'description' => 'Protect your home’s integrity with our prompt and reliable roofing repair services. Our expert team identifies and addresses leaks, damage, and wear, ensuring a watertight seal and extending your roof’s lifespan.',
        ]), function ($service) {
            $service->faqs()->createMany([
                ['question' => 'How do I know if my roof needs repairs?', 'answer' => 'Signs that your roof may need repairs include leaks, missing or damaged shingles, sagging areas, and visible wear and tear. If you notice any of these issues, it’s best to contact us for a professional inspection.',],
                ['question' => 'Can you repair my roof in bad weather?', 'answer' => 'We prioritize safety and may delay repairs during severe weather conditions. However, we offer emergency services to address urgent issues as quickly as possible.',],
                ['question' => 'How often should I have my roof inspected?', 'answer' => 'We recommend having your roof inspected at least once a year and after severe weather events. Regular inspections help identify potential issues before they become major problems.',],
            ]);
        });

        tap(Service::create([
            'name' => 'Emergency Roof Repairs',
            'slug' => 'emergency-roof-repairs',
            'image' => '3.webp',
            'description' => 'When disaster strikes, every minute counts. Our 24/7 emergency roof repair team springs into action, providing swift, expert solutions to protect your home and family from severe weather, fallen trees, or sudden leaks.',
        ]), function ($service) {
            $service->faqs()->createMany([
                ['question' => 'What should I do if my roof is damaged during a storm?', 'answer' => 'If your roof is damaged during a storm, ensure your safety first. If it’s safe to do so, take photos of the damage and contact us immediately for emergency repairs.',],
                ['question' => 'How quickly can you respond to an emergency repair request?', 'answer' => 'We prioritize emergency requests and aim to respond within hours, depending on the severity of the situation and our current workload.',],
                ['question' => 'Will my insurance cover emergency roof repairs?', 'answer' => 'Many homeowners’ insurance policies cover emergency roof repairs. We recommend checking with your insurance provider for specific coverage details.',],
            ]);
        });

        tap(Service::create([
            'name' => 'Gutter Replacement and Repairs',
            'slug' => 'gutter-replacement-repairs',
            'image' => '4.webp',
            'description' => 'Protect your home’s foundation, walls, and landscaping with our expert gutter replacement and repair services. Our technicians assess and address issues promptly, ensuring water flows freely and safely away.',
        ]), function ($service) {
            $service->faqs()->createMany([
                ['question' => 'How often should I clean my gutters?', 'answer' => 'We recommend cleaning your gutters at least twice a year, especially in the spring and fall. Regular maintenance helps prevent clogs and water damage.',],
                ['question' => 'What are the signs that my gutters need replacement?', 'answer' => 'Signs that your gutters may need replacement include rust, cracks, sagging, and frequent clogs. If you notice any of these issues, it’s best to contact us for an inspection.',],
                ['question' => 'Do you offer gutter guards?', 'answer' => 'Yes, we offer a variety of gutter guard options to help keep debris out and reduce maintenance needs. Our team can recommend the best solution for your home.',],
            ]);
        });

        tap(Service::create([
            'name' => 'Siding',
            'slug' => 'siding',
            'image' => '5.webp',
            'description' => 'Transform your home’s exterior with our expert siding installation and repair services. Our experienced team guides you through material selection, ensuring precise installation and enhanced curb appeal. From vinyl and fiber cement to brick and stone, we offer durable, low-maintenance options tailored to your style and budget.',
        ]), function ($service) {
            $service->faqs()->createMany([
                ['question' => 'What types of siding materials do you offer?', 'answer' => 'We offer a variety of siding materials, including vinyl, fiber cement, wood, and metal. Our team can help you choose the best option based on your style preferences and budget.',],
                ['question' => 'How long does a siding installation take?', 'answer' => 'The duration of a siding installation project depends on the size of your home and the type of siding chosen. On average, most projects take 1-2 weeks to complete.',],
                ['question' => 'Do you offer warranties on your siding services?', 'answer' => 'Yes, we provide warranties on both materials and workmanship. The specific warranty terms depend on the type of siding used and the scope of the project.',],
            ]);
        });

        tap(Service::create([
            'name' => 'Flashing and Sheathing',
            'slug' => 'flashing-and-sheathing',
            'image' => '6.webp',
            'description' => 'Protect your roof’s vulnerable areas with expert flashing installation and repair services. Our experienced technicians ensure watertight seals and long-lasting protection for chimneys, vents, skylights, and valleys. From custom fabrication to precise installation, we safeguard your home against leaks and water damage.',
        ]), function ($service) {
            $service->faqs()->createMany([
                ['question' => 'What is flashing, and why is it important?', 'answer' => 'Flashing is a material used to direct water away from critical areas of your roof, such as chimneys and vents. It’s essential for preventing leaks and water damage.',],
                ['question' => 'How do I know if my flashing needs repair or replacement?', 'answer' => 'Signs that your flashing may need repair or replacement include rust, cracks, and visible gaps. If you notice any of these issues, it’s best to contact us for an inspection.',],
                ['question' => 'Can you install flashing on an existing roof?', 'answer' => 'Yes, we can install or replace flashing on an existing roof. Our team will assess your roof and recommend the best solution for your needs.',],
            ]);
        });
    }
}

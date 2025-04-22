<?php

namespace Database\Seeders;

use App\Enums\InfoTypeEnum;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InfoSeeder extends Seeder
{
    public function run(): void
    {
        // credentials
        DB::table('infos')->insert([
            ['label' => 'Google Place Api Key', 'field' => 'google_api_key', 'value' => env('GOOGLE_API_KEY', ''), 'type' => InfoTypeEnum::CREDENTIAL->value],
            ['label' => 'Google Place ID', 'field' => 'google_place_id', 'value' => env('GOOGLE_PLACE_ID', ''), 'type' => InfoTypeEnum::CREDENTIAL->value],
        ]);

        // images
        DB::table('infos')->insert([
            ['label' => 'Logo', 'field' => 'logo', 'type' => InfoTypeEnum::IMAGE->value],
            ['label' => 'Favicon', 'field' => 'favicon', 'type' => InfoTypeEnum::IMAGE->value],
        ]);

        // texts
        DB::table('infos')->insert([
            ['label' => 'Name', 'field' => 'name', 'value' => "Home Evolution Contractor"],
            ['label' => 'Email', 'field' => 'email', 'value' => "info@homeevolutioncontractor.com"],
            ['label' => 'Phone', 'field' => 'phone', 'value' => "+1 (315) 412 6744"],
            ['label' => 'Address', 'field' => 'address', 'value' => "618 N Lowell Ave, Syracuse, NY 13204"],
            ['label' => 'Google Place', 'field' => 'google_place', 'value' => "https://maps.app.goo.gl/nekwfwm4kGWQt2q89"],
            ['label' => 'Facebook', 'field' => 'facebook', 'value' => "https://www.facebook.com/#"],
            // ['label' => 'Email User', 'field' => 'email_user', 'value' => env('MAIL_USERNAME', '')],
            // ['label' => 'Email Pass', 'field' => 'email_pass', 'value' => env('MAIL_PASSWORD', '')],
            // ['label' => 'Google Place Api Key', 'field' => 'google_api_key', 'value' => env('GOOGLE_API_KEY', '')],
            // ['label' => 'Google Place ID', 'field' => 'google_place_id', 'value' => env('GOOGLE_PLACE_ID', '')],
        ]);

        // textareas
        DB::table('infos')->insert([
            ['label' => 'Summary', 'field' => 'summary', 'value' => "At Home Evolution Contractor, our mission is to empower homeowners to achieve their dream living spaces through exceptional craftsmanship and customer satisfaction. Founded on integrity, quality, and community, we deliver top-notch roofing, siding, and gutter services with a personal touch. Our experienced professionals bring expertise and dedication to every project, ensuring seamless execution and stunning results.\n\nWe pride ourselves on our unwavering commitment to quality, honest communication, and customer focus. Our licensed, insured, and certified team stays up-to-date with industry advancements to provide tailored solutions and comprehensive warranties.", 'type' => InfoTypeEnum::TEXTAREA->value],
            ['label' => 'Iframe Src Map', 'field' => 'map', 'value' => "https://maps.google.com/maps?q=Nico%E2%80%99s%20Roofing%20and%20Cleaning%20Castle%20Hayne%2C%20NC%2028429&t=m&z=10&output=embed&iwloc=near", 'type' => InfoTypeEnum::TEXTAREA->value],
        ]);

        // markdowns
        DB::table('infos')->insert([
            ['label' => 'History Page Markdown', 'field' => 'history', 'value' => "# 🏆 Recognized for Excellence in Home Contracting Services! 🌟\n\nOur journey began with a vision to transform homes and enhance lives through exceptional craftsmanship. Over the years, we have become a trusted name in the home contracting industry, delivering unparalleled roofing, siding, and gutter services. 🏅\n\nWe are deeply rooted in our community, committed to exceeding expectations, and dedicated to delivering outstanding results. Our story is one of passion, innovation, and unwavering customer satisfaction. 💪✨\n\n# 🏠 Our History\n\n<img alt=\"Our History\" style=\"border-radius:5px\" src=\"/storage/img/images/6.webp\" />\n\nFrom our humble beginnings to becoming a leader in the industry, our history reflects our dedication to quality and integrity. We believe in building lasting relationships with our clients and making a positive impact in the communities we serve. 🌍🤝\n\nThank you for trusting us with your home. Together, we continue to create dream living spaces, one project at a time! 🚀", 'type' => InfoTypeEnum::MARKDOWN->value,]
        ]);
    }
}

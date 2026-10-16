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

        // images
        DB::table('infos')->insert([
            ['label' => 'Logo', 'field' => 'logo', 'type' => InfoTypeEnum::IMAGE->value],
            ['label' => 'Favicon', 'field' => 'favicon', 'type' => InfoTypeEnum::IMAGE->value],
        ]);

        // credentials
        DB::table('infos')->insert([
            ['label' => 'Google Place Api Key', 'field' => 'google_api_key', 'value' => env('GOOGLE_API_KEY', ''), 'type' => InfoTypeEnum::CREDENTIAL->value],
            ['label' => 'Google Place ID', 'field' => 'google_place_id', 'value' => env('GOOGLE_PLACE_ID', ''), 'type' => InfoTypeEnum::CREDENTIAL->value],
            ['label' => 'Email User', 'field' => 'email_user', 'value' => env('MAIL_USERNAME', ''), 'type' => InfoTypeEnum::CREDENTIAL->value],
            ['label' => 'Email Pass', 'field' => 'email_pass', 'value' => env('MAIL_PASSWORD', ''), 'type' => InfoTypeEnum::CREDENTIAL->value],
            ['label' => 'Captcha Secret Key', 'field' => 'captcha_secret_key', 'value' => env('CAPTCHA_SECRET_KEY', ''), 'type' => InfoTypeEnum::CREDENTIAL->value],
            ['label' => 'Api Url LbSupport', 'field' => 'lbsupp_api_url', 'value' => env('LBSUPP_API_URL', ''), 'type' => InfoTypeEnum::CREDENTIAL->value],
            ['label' => 'Api Key LbSupport', 'field' => 'lbsupp_api_key', 'value' => env('LBSUPP_API_KEY', ''), 'type' => InfoTypeEnum::CREDENTIAL->value],
        ]);

        // texts
        DB::table('infos')->insert([
            ['label' => 'Name', 'field' => 'name', 'value' => "Home Evolution Contractor"],
            ['label' => 'Email', 'field' => 'email', 'value' => "info@homeevolutioncontractor.com"],
            ['label' => 'Phone', 'field' => 'phone', 'value' => "+1 (315) 412 6744"],
            ['label' => 'Address', 'field' => 'address', 'value' => "618 N Lowell Ave, Syracuse, NY 13204"],
            ['label' => 'Google Place', 'field' => 'google_place', 'value' => "https://maps.app.goo.gl/nekwfwm4kGWQt2q89"],
            ['label' => 'Facebook', 'field' => 'facebook', 'value' => "https://facebook.com/profile.php?id=100088835782357"],
            ['label' => 'Captcha Site Key', 'field' => 'captcha_site_key', 'value' => env('CAPTCHA_SITE_KEY', '')],
        ]);

        // textareas
        DB::table('infos')->insert([
            ['label' => 'Summary', 'field' => 'summary', 'value' => "At Home Evolution Contractor, our mission is to empower homeowners to achieve their dream living spaces through exceptional craftsmanship and customer satisfaction. Founded on integrity, quality, and community, we deliver top-notch roofing, siding, and gutter services with a personal touch. Our experienced professionals bring expertise and dedication to every project, ensuring seamless execution and stunning results.", 'type' => InfoTypeEnum::TEXTAREA->value],
            ['label' => 'Iframe Src Map', 'field' => 'map', 'value' => "https://google.com/maps/embed?pb=!1m18!1m12!1m3!1d317528.82410737715!2d-76.5683052925714!3d43.490052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6d3e01436356e09%3A0x8be913e84fafb8c4!2sHome%20Evolution%20Contractor!5e1!3m2!1ses!2sec!4v1792181012444!5m2!1ses!2sec", 'type' => InfoTypeEnum::TEXTAREA->value],
        ]);

        // markdowns
        DB::table('infos')->insert([
            ['label' => 'History Page Markdown', 'field' => 'history', 'value' => "# 🏆 Recognized for Excellence in Home Contracting Services! 🌟\n\nOur journey began with a vision to transform homes and enhance lives through exceptional craftsmanship. Over the years, we have become a trusted name in the home contracting industry, delivering unparalleled roofing, siding, and gutter services. 🏅\n\nWe are deeply rooted in our community, committed to exceeding expectations, and dedicated to delivering outstanding results. Our story is one of passion, innovation, and unwavering customer satisfaction. 💪✨\n\n# 🏠 Our History\n\n<img alt=\"Our History\" style=\"border-radius:5px\" src=\"/storage/img/images/6.webp\" />\n\nFrom our humble beginnings to becoming a leader in the industry, our history reflects our dedication to quality and integrity. We believe in building lasting relationships with our clients and making a positive impact in the communities we serve. 🌍🤝\n\nThank you for trusting us with your home. Together, we continue to create dream living spaces, one project at a time! 🚀", 'type' => InfoTypeEnum::MARKDOWN->value,]
        ]);
    }
}

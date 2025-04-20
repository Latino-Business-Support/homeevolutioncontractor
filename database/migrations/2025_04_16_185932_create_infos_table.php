<?php

use App\Enums\InfoTypeEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('infos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->enum('type', array_column(InfoTypeEnum::cases(), 'value'))->default(InfoTypeEnum::TEXT->value);
            $table->string('label');
            $table->string('field');
            $table->text('value')->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('infos');
    }
};

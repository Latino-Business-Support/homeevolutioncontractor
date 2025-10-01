<?php

namespace App\Policies;

use App\Models\User;
use App\Enums\UserTypeEnum;

class InformationPolicy
{
    public function viewCredentials(User $user): bool
    {
        return $user->type === UserTypeEnum::SUPER->value;
    }

    public function editCredentials(User $user): bool
    {
        return $user->type === UserTypeEnum::SUPER->value;
    }
}

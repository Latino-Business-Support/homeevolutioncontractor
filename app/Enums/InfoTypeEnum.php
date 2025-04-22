<?php

namespace App\Enums;

enum InfoTypeEnum: string
{
    case TEXT = 'text';
    case TEXTAREA = 'textarea';
    case IMAGE = 'image';
    case MARKDOWN = 'markdown';
    case CREDENTIAL = 'credential';
}

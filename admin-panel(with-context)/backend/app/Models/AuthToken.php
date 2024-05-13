<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuthToken extends Model
{

    protected $table = 'auth_tokens';
    protected $fillable = [



    ];
    protected $primaryKey   = 'id';
}

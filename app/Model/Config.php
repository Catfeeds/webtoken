<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Config extends Model
{
	protected $fillable = [
		'name',
		'value',
	];
}

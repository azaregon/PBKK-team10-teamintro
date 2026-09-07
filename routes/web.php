<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\TeamController;
use Illuminate\Support\Facades\Route;


Route::get('/', [PageController::class, 'home'])->name('home');

Route::get('/team', [TeamController::class, 'index'])->name('team.index');

Route::get('/team/{id}', [TeamController::class, 'show'])
    ->whereNumber('id')
    ->name('team.show');
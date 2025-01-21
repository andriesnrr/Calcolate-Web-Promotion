<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/reports', function () {
    return Inertia::render('Reports');
})->name('reports');

Route::get('/statistics', function () {
    return Inertia::render('Statistics');
})->name('statistics');

Route::get('/dashboards', function () {
    return Inertia::render('Dashboards');
})->name('dashboards');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// Rute Auth
require __DIR__.'/auth.php';

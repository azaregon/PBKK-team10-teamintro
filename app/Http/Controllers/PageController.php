<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        $path = resource_path('data/team.json');
        $members = json_decode(file_get_contents($path), true);

        return Inertia::render('Home', [
            'memberCount' => count($members),
        ]);
    }
}

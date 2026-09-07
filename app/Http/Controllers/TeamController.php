<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class TeamController extends Controller {
    protected function members(): array {
        $path = resource_path('data/team.json');

        return json_decode(file_get_contents($path), true);
    }

    public function index() {
        return Inertia::render('Team/Index', [
            'members' => $this->members(),
        ]);
    }


    public function show(int $id) {
        $chosen_member = collect($this->members())->firstWhere('id', $id);

        abort_unless($chosen_member, 404);

        return Inertia::render('Team/Show', [
            'member' => $chosen_member,
        ]);
    }
}
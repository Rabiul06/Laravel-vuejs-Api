<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::create([
            'name' => 'Rabiul',
            'email' => 'robecse99@gmaol.com',
            'password' => md5('123'),
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Email;
use Illuminate\Http\Request;

class EmailController extends Controller
{
    private $validations = [];

    public function __construct()
    {
        $this->validations = [
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:1000|email|unique:emails,email',
        ];
    }

    public function store(Request $request)
    {
        $request->validate($this->validations);
        Email::create($request->all());
        return back();
    }

    public function update(Request $request, Email $email)
    {
        $request->validate([...$this->validations, 'email' => 'required|string|max:1000|email|unique:emails,email,' . $email->id]);
        $email->update($request->all());
        return back();
    }

    public function destroy(Email $email)
    {
        $email->delete();
        return back();
    }
}

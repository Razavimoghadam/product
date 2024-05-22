<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\URL;
class DashboardController extends Controller
{

    protected $port;

    protected $request;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        //$this->middleware('auth');
        $this->port = $request->server('SERVER_PORT') == 8000 ? ':8000' : '';
        $this->request = $request;
    }



    public function showDashboardForm1()
    {
        return view('index');
    }
    public function index2()
    {

        $msg = "This is a simple message.";
        return response()->json(array('msg'=> $msg), 200);
    }
    public function index3()
    {

       $msg = "This is a simple message22.";
        return response()->json(array('msg'=> $msg), 200);
    }
}

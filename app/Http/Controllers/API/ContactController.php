<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Message;
use App\Events\NewMessage;

class ContactController extends Controller
{
    public function getContacts() {
        $current_user_id = auth('api')->user()->id;

        $users = User::where('id', '!=', $current_user_id)->orderBy("created_at", "desc")->get();
        return response()->json($users);
    }

    public function getMessages($id) {
        $current_user_id = auth('api')->user()->id;
        // $current_user_id = 19;
        // $id = 6;

        $messages = Message::where(function($q) use ($id, $current_user_id){
            $q->where('to', $id)->where('from', $current_user_id);
        })
        ->orWhere(function($q) use ($id, $current_user_id){
            $q->where('to', $current_user_id)->where('from', $id);
        })
        ->get();

        return response()->json($messages);
    }

    public function saveMessage(Request $request) {
        $message = new Message();
        $message->from = auth('api')->user()->id;
        $message->to = $request["receiver_id"];
        $message->text = $request["messageContent"];
        $message->save();
        broadcast(new NewMessage($message));

       
        return response()->json($message);
        
    }
}

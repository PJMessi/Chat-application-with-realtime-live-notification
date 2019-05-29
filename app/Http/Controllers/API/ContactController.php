<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;
use App\Message;

use App\Events\NewMessage;

class ContactController extends Controller
{
    public function fetchContacts() {
        $contacts = User::where('id', '!=', auth('api')->user()->id)->orderBy('name')->get();

        $unreadIds = Message::select(\DB::raw('`from` as sender_id, count(`from`) as messages_count'))
            ->where('to', auth('api')->user()->id)
            ->where('read', false)
            ->groupBy('from')
            ->get();

            $contacts = $contacts->map(function($contact) use ($unreadIds) {
                $contactUnread = $unreadIds->where('sender_id', $contact->id)->first();
                $contact->unread = $contactUnread ? $contactUnread->messages_count : 0;
                return $contact;
            });
        return response()->json($contacts);
    }

    public function fetchMessages($id) {
        Message::where('from', $id)->where('to', auth('api')->user()->id)->update(['read' => true]);
        $messages = Message::where(function($query) use ($id){
            $query->where('to', $id)->where('from', auth('api')->user()->id);
        })
        ->orWhere(function($query) use ($id) {
            $query->where('from', $id)->where('to', auth('api')->user()->id);
        })
        ->get();

        return response()->json($messages);
    }

    public function sendMessage(Request $request) {
        $message = new Message();
        $message->to = $request["receiver_id"];
        $message->from = auth('api')->user()->id;
        $message->text = $request["message_content"];
        $message->save();
        
        broadcast(new NewMessage($message));

        return response()->json($message);
;    }
}

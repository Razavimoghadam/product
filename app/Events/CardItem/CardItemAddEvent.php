<?php

namespace App\Events\CardItem;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;

class CardItemAddEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $data;
    public $cardItem_Details;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
        $this->createDataCardItemDetails();
    }

    protected function createDataCardItemDetails()
    {
        if (isset($this->data['id']) && !empty($this->data['id'])) {
            $this->cardItem_Details['id'] = $this->data['id'];
        }
        if (isset($this->data['product_id']) && !empty($this->data['product_id'])) {
            $this->cardItem_Details['product_id'] = $this->data['product_id'];
        }

        return $this->cardItem_Details;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        // return new PrivateChannel('channel-name');
    }
}

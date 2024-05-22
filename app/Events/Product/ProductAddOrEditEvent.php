<?php

namespace App\Events\Product;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;

class ProductAddOrEditEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $data;
    public $product_Details;
    public $product_Files;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
        $this->createDataProductDetails();
        $this->createDataProductFiles();
    }

    protected function createDataProductDetails()
    {
        if (isset($this->data['id']) && !empty($this->data['id'])) {
            $this->product_Details['id'] = $this->data['id'];
        }
        if (isset($this->data['name']) && !empty($this->data['name'])) {
            $this->product_Details['name'] = $this->data['name'];
        }
        if (isset($this->data['barcode']) && !empty($this->data['barcode'])) {
            $this->product_Details['barcode'] = $this->data['barcode'];
        }
        if (isset($this->data['price']) && !empty($this->data['price'])) {
            $this->product_Details['price'] = $this->data['price'];
        }
        if (isset($this->data['description']) && !empty($this->data['description'])) {
            $this->product_Details['description'] = $this->data['description'];
        }
        if (isset($this->data['enabled'])) {
            $this->product_Details['enabled'] = filter_var($this->data['enabled'], FILTER_VALIDATE_BOOLEAN);
        }
        if (isset($this->data['qty']) && !empty($this->data['qty'])) {
            $this->product_Details['qty'] = $this->data['qty'];
        }

        return $this->product_Details;
    }

    protected function createDataProductFiles()
    {

        $result_Push = collect();
        if (isset($this->data['files'])) {
            foreach ($this->data['files'] as $item => $value) {
                $result = [];
                $result['file'] = $this->data['files'][$item]['file'];
                //$result['file'] = $this->request['Data']['signed_contract_files'][$item]['file'];
                $result['id'] = isset($value['id']) ? $value['id'] : null;
                $result['fileable_id'] = isset($value['fileable_id']) ? $value['fileable_id'] : null;
                $result['fileable_type'] = isset($value['fileable_type']) ? $value['fileable_type'] : null;
                $result_Push->push($result);
            }
        }
        $this->product_Files = $result_Push->toArray();

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

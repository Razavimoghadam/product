<?php

namespace App\Events\User;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;

class UserAddOrEditEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $data;
    public $user_Details;
    public $user_Phones;
    public $user_Addresses;
    public $user_Roles;
    public $user_Permissions;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
        $this->createDataUserDetails();
        $this->createDataUserPhones();
        $this->createDataUserAddresses();
        $this->createDataUserRoles();
        $this->createDataUserPermissions();
    }

    protected function createDataUserDetails()
    {
        if (isset($this->data['id']) && !empty($this->data['id'])) {
            $this->user_Details['id'] = $this->data['id'];
        }
        if (isset($this->data['first_name']) && !empty($this->data['first_name'])) {
            $this->user_Details['first_name'] = $this->data['first_name'];
        }
        if (isset($this->data['last_name']) && !empty($this->data['last_name'])) {
            $this->user_Details['last_name'] = $this->data['last_name'];
        }
        if (isset($this->data['gender']) && !empty($this->data['gender'])) {
            $this->user_Details['gender'] = $this->data['gender'];
        }
        if (isset($this->data['ssn']) && !empty($this->data['ssn'])) {
            $this->user_Details['ssn'] = $this->data['ssn'];
        }
        if (isset($this->data['date_of_birth']) && !empty($this->data['date_of_birth'])) {
            $this->user_Details['date_of_birth'] = $this->data['date_of_birth'];
        }
        if (isset($this->data['email']) && !empty($this->data['email'])) {
            $this->user_Details['email'] = $this->data['email'];
        }
        if (isset($this->data['email']) && !empty($this->data['email'])) {
            $this->user_Details['username'] = explode('@', $this->data['email'])[0];
        }
        if (isset($this->data['password']) && !empty($this->data['password'])) {
            $this->user_Details['password'] =  bcrypt($this->data['password']);
        }
        if (isset($this->data['active'])) {
            $this->user_Details['active'] = filter_var($this->data['active'], FILTER_VALIDATE_BOOLEAN);
        }
        if (isset($this->data['roles']) && !empty($this->data['roles']) && count($this->data['roles']) > 0) {
            $this->user_Details['active_role'] = $this->data['roles'][0]['id'];
        }
        if (isset($this->data['img_profile']) && !empty($this->data['img_profile'])) {
            $this->user_Details['img_profile'] =  $this->data['img_profile'];
        }else{
            switch ($this->data['gender']){
                case 'Mr':
                    $this->user_Details['img_profile'] = 'data:image/png;base64,' . base64_encode(file_get_contents(resource_path('assets/image/user-mr.png')));
                    break;
                case 'Ms':
                    $this->user_Details['img_profile'] = 'data:image/png;base64,' . base64_encode(file_get_contents(resource_path('assets/image/user-ms.png')));
                    break;
            }
        }
        if (isset($this->data['img_sign']) && !empty($this->data['img_sign'])) {
            $this->user_Details['img_sign'] =  $this->data['img_sign'];
        }

        if ($this->data['status'] == 'add') {
            $this->user_Details['settings'] =  ['default_request_status' => 'active'];
            $this->user_Details['api_token'] =  Str::random(80);
        }



        return $this->user_Details;
    }
    protected function createDataUserPhones()
    {

        $result_Push = collect();
        if (isset($this->data['phones'])) {
            foreach ($this->data['phones'] as $item => $value) {
                $result = [];
                $result['id'] = isset($value['id']) ? $value['id'] : null;
                $result['number'] = isset($value['number']) ? $value['number'] : null;
                $result['type'] = isset($value['type']) ? $value['type'] : null;
                $result['country_data'] = isset($value['country_data']) ? $value['country_data'] : null;
                $result['inputmask'] = isset($value['inputmask']) ? $value['inputmask'] : null;
                $result['phoneable_id'] = isset($value['phoneable_id']) ? $value['phoneable_id'] : null;
                $result['phoneable_type'] = isset($value['phoneable_type']) ? $value['phoneable_type'] : null;
                $result_Push->push($result);
            }
        }
        $this->user_Phones = $result_Push->toArray();

    }
    protected function createDataUserAddresses()
    {

        $result_Push = collect();
        if (isset($this->data['addresses'])) {
            foreach ($this->data['addresses'] as $item => $value) {
                $result = [];
                $result['id'] = isset($value['id']) ? $value['id'] : null;
                $result['address'] = isset($value['address']) ? $value['address'] : null;
                $result['postal_code'] = isset($value['postal_code']) ? $value['postal_code'] : null;
                $result['display_name'] = isset($value['display_name']) ? $value['display_name'] : null;
                $result['latitude'] = isset($value['latitude']) ? $value['latitude'] : null;
                $result['longitude'] = isset($value['longitude']) ? $value['longitude'] : null;
                $result['type'] = isset($value['type']) ? $value['type'] : null;
                $result['country_data'] = isset($value['country_data']) ? $value['country_data'] : null;
                $result['inputmask'] = isset($value['inputmask']) ? $value['inputmask'] : null;
                $result['address_id'] = isset($value['address_id']) ? $value['address_id'] : null;
                $result['address_type'] = isset($value['address_type']) ? $value['address_type'] : null;
                $result_Push->push($result);
            }
        }
        $this->user_Addresses = $result_Push->toArray();

    }
    protected function createDataUserRoles()
    {

        $result_Push = collect();
        if (isset($this->data['roles'])) {
            foreach ($this->data['roles'] as $item => $value) {
                $result = [];
                $result['id'] = isset($value['id']) ? $value['id'] : null;
                $result['name'] = isset($value['name']) ? $value['name'] : null;
                $result_Push->push($result);
            }
        }
        $this->user_Roles = $result_Push->toArray();

    }
    protected function createDataUserPermissions()
    {

        $result_Push = collect();
        if (isset($this->data['permissions'])) {
            foreach ($this->data['permissions'] as $item => $value) {
                $result = [];
                $result['id'] = isset($value['id']) ? $value['id'] : null;
                $result['name'] = isset($value['name']) ? $value['name'] : null;
                $result_Push->push($result);
            }
        }
        $this->user_Permissions = $result_Push->toArray();

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

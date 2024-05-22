<?php

namespace App\Listeners\User;

use App\Events\User\UserAddOrEditEvent;
use App\Events\User\UserDeleteEvent;
use App\Models\Address;
use App\Models\Auth\User\User;
use App\Models\Phone;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UserEventSubscriber
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function handleUserAddOrEdit(UserAddOrEditEvent $event)
    {
        if ($event->data['status'] == 'add') {


            try {

                // details
                $new_User = User::create($event->user_Details);

                // phones
                $new_User->phones()->createMany($event->user_Phones);

                // addresses
                $new_User->addresses()->createMany($event->user_Addresses);

                // roles
                $new_User->assignRole($event->user_Roles);

                // permissions
                $new_User->givePermissionTo($event->user_Permissions);

                return response()->json([
                    'status' => 'success',
                    'message' => __('validation.validator.user_Successfully_Registered')
                ])->original;

            } catch (\Exception $e) {
                return response()->json([
                    'status' => 'failed',
                    'message' => $e->getMessage()
                ])->original;
            }
        } else {

            // User
            $user = User::find($event->user_Details['id']);

            // details
            $user->update($event->user_Details);

            // phones
            if (!empty($event->user_Phones)) {
                $idSync = [];
                foreach ($event->user_Phones as $item => $value) {
                    if (isset($value['id']) && !empty($value['id'])) {
                        array_push($idSync, $value['id']);
                        Phone::find($value['id'])->update($value);
                    } else {
                        $result = $user->phones()->create($value);
                        array_push($idSync, $result->id);
                    }
                }
                foreach ($user->phones()->whereNotIn('id', $idSync)->pluck('id') as $item => $value) {
                    Phone::find($value)->delete();
                }
            }

            // addresses
            if (!empty($event->user_Addresses)) {
                $idSync = [];
                foreach ($event->user_Addresses as $item => $value) {
                    if (isset($value['id']) && !empty($value['id'])) {
                        array_push($idSync, $value['id']);
                        Address::find($value['id'])->update($value);
                    } else {
                        $result = $user->addresses()->create($value);
                        array_push($idSync, $result->id);
                    }
                }
                foreach ($user->addresses()->whereNotIn('id', $idSync)->pluck('id') as $item => $value) {
                    Address::find($value)->delete();
                }
            }

            // roles
            if (!empty($event->user_Roles)) {
                $user->roles()->detach();
                $user->assignRole($event->user_Roles);
            }

            // permissions
            if (!empty($event->user_Permissions)) {
                $user->permissions()->detach();
                $user->givePermissionTo($event->user_Permissions);
            }

            return response()->json([
                'status' => 'success',
                'message' => __('validation.validator.user_Successfully_Modified')
            ])->original;
            /*try {


            }catch (\Exception $e){
                return response()->json([
                    'status' => 'failed',
                    'message' => $e
                ])->original;
            }*/
        }
    }

    public function handleUserDelete(UserDeleteEvent $event)
    {


        try {
            User::find($event->data['id'])->delete();

            return response()->json([
                'status' => 'success',
                'message' => __('validation.validator.user_Successfully_Removed')
            ])->original;
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'failed',
                'message' => __('validation.validator.user_Successfully_Can_Not_Removed')
            ])->original;
        }
    }
}

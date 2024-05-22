<?php

namespace App\Listeners\Product;

use App\Events\Product\ProductAddOrEditEvent;
use App\Events\Product\ProductDeleteEvent;
use App\Mail\ProductCreatedEmail;
use App\Models\Auth\User\User;
use App\Models\File;
use App\Models\Product;
use App\Models\Role;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class ProductEventSubscriber
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

    public function handleProductAddOrEdit(ProductAddOrEditEvent $event)
    {
        if ($event->data['status'] == 'add' ) {
            if (\Auth::user()->can('اضافه کردن محصول')){
                try {
                    // details
                    $new_Product = Product::create($event->product_Details);

                    // files
                    $new_Product->files()->createMany($event->product_Files);

                    // Send email
                    $receiver = User::whereActiveRole(Role::where('name','owner')->first()->id)->first()->email;
                    Mail::to($receiver)->send(new ProductCreatedEmail($new_Product));

                    return response()->json([
                        'status' => 'success',
                        'message' => __('validation.validator.product_Successfully_Registered')
                    ])->original;

                } catch (\Exception $e) {
                    return response()->json([
                        'status' => 'failed',
                        'message' => $e->getMessage()
                    ])->original;
                }
            }else {
                return response()->json([
                    'status' => 'failed',
                    'message' => __('validation.validator.you_do_not_have_the_required_authorization'),
                    // 'message' => $e->getMessage()
                ], 403)->original;
            }
        }

        if ($event->data['status'] == 'edit') {
            if (\Auth::user()->can('ویرایش محصول')) {
                try {
                    // Product
                    $product = Product::find($event->product_Details['id']);

                    // details
                    $product->update($event->product_Details);

                    // files
                    if (!empty($event->product_Files)) {
                        $idSync = [];
                        foreach ($event->product_Files as $item => $value) {
                            if (isset($value['id']) && !empty($value['id'])) {
                                array_push($idSync, $value['id']);
                            } else {
                                $result = $product->files()->create($value);
                                array_push($idSync, $result->id);
                            }
                        }
                        foreach ($product->files()->whereNotIn('id', $idSync)->pluck('id') as $item => $value) {
                            File::find($value)->delete();
                        }
                    }

                    return response()->json([
                        'status' => 'success',
                        'message' => __('validation.validator.product_Successfully_Modified')
                    ])->original;


                } catch (\Exception $e) {
                    return response()->json([
                        'status' => 'failed',
                        'message' => $e->getMessage()
                    ])->original;
                }
            }else {
                return response()->json([
                    'status' => 'failed',
                    'message' => __('validation.validator.you_do_not_have_the_required_authorization'),
                    // 'message' => $e->getMessage()
                ], 403)->original;
            }
        }

        return response()->json(__('no action found'), 404)->original;

    }

    public function handleProductDelete(ProductDeleteEvent $event)
    {
        if (\Auth::user()->can('حذف محصول')){
            try {
                Product::find($event->data['id'])->delete();

                return response()->json([
                    'status' => 'success',
                    'message' => __('validation.validator.product_Successfully_Removed')
                ])->original;
            } catch (\Exception $e) {
                return response()->json([
                    'status' => 'failed',
                    'message' => __('validation.validator.product_Successfully_Can_Not_Removed')
                ])->original;
            }
        }else {
            return response()->json([
                'status' => 'failed',
                'message' => __('validation.validator.you_do_not_have_the_required_authorization'),
                // 'message' => $e->getMessage()
            ], 403)->original;
        }

    }
}

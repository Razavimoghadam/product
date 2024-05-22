<?php

namespace App\Listeners\CardItem;

use App\Events\CardItem\CardItemAddEvent;
use App\Events\CardItem\CardItemDeleteEvent;
use App\Events\CardItem\CardItemMinusEvent;
use App\Models\CardItem;
use function __;
use function response;

class CardItemEventSubscriber
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

    public function handleCardItemAdd(CardItemAddEvent $event)
    {
        if (\Auth::check()) {
            try {

                // details
                if (isset($event->cardItem_Details['product_id']) && !empty($event->cardItem_Details['product_id'])) {
                    $count_User_CardItems = \Auth::user()
                        ->cardItems()
                        ->where('product_id', $event->cardItem_Details['product_id'])
                        ->count();
                    if ($count_User_CardItems > 0) {
                        \Auth::user()
                            ->cardItems()
                            ->where('product_id', $event->cardItem_Details['product_id'])
                            ->increment('qty');
                    }else {
                        $new_CardItem = \Auth::user()
                            ->cardItems()
                            ->create($event->cardItem_Details);
                        $new_CardItem->increment('qty');
                    }
                }else{
                    if (isset($event->cardItem_Details['id']) && !empty($event->cardItem_Details['id'])) {
                        $new_CardItem = \Auth::user()
                            ->cardItems()
                            ->where('id', $event->cardItem_Details['id'])
                            ->increment('qty');
                    } else {
                        $new_CardItem = \Auth::user()
                            ->cardItems()
                            ->create($event->cardItem_Details);
                        $new_CardItem->increment('qty');
                    }
                }

                return response()->json([
                    'status' => 'success',
                    'message' => __('validation.validator.card_item_Successfully_Registered')
                ])->original;

            } catch (\Exception $e) {
                return response()->json([
                    'status' => 'failed',
                    'message' => $e->getMessage()
                ])->original;
            }
        } else {
            return response()->json([
                'status' => 'failed',
                'message' => __('validation.validator.log_in_first'),
                // 'message' => $e->getMessage()
            ], 403)->original;
        }

    }

    public function handleCardItemMinus(CardItemMinusEvent $event)
    {

        if (\Auth::check()) {
            try {

                $new_CardItem = \Auth::user()
                    ->cardItems()
                    ->where('id', $event->cardItem_Details['id'])
                    ->decrement('qty');

                $qty = \Auth::user()
                    ->cardItems()
                    ->find($event->cardItem_Details['id'])
                    ->qty;

                if ($qty == 0)
                    \Auth::user()->cardItems()->find($event->data['id'])->delete();

                return response()->json([
                    'status' => 'success',
                    'message' => __('validation.validator.card_item_Successfully_Minus')
                ])->original;

            } catch (\Exception $e) {
                return response()->json([
                    'status' => 'failed',
                    'message' => $e->getMessage()
                ])->original;
            }
        } else {
            return response()->json([
                'status' => 'failed',
                'message' => __('validation.validator.log_in_first'),
                // 'message' => $e->getMessage()
            ], 403)->original;
        }

    }

    public function handleCardItemDelete(CardItemDeleteEvent $event)
    {
        if (\Auth::check()) {
            try {
                \Auth::user()->cardItems()->find($event->data['id'])->delete();

                return response()->json([
                    'status' => 'success',
                    'message' => __('validation.validator.card_item_Successfully_Removed')
                ])->original;
            } catch (\Exception $e) {
                return response()->json([
                    'status' => 'failed',
                    'message' => __('validation.validator.card_item_Successfully_Can_Not_Removed')
                ])->original;
            }
        } else {
            return response()->json([
                'status' => 'failed',
                'message' => __('validation.validator.log_in_first'),
                // 'message' => $e->getMessage()
            ], 403)->original;
        }

    }
}

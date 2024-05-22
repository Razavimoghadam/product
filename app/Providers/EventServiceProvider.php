<?php

namespace App\Providers;

use App\Events\CardItem\CardItemAddEvent;
use App\Events\CardItem\CardItemDeleteEvent;
use App\Events\CardItem\CardItemMinusEvent;
use App\Events\Product\ProductAddOrEditEvent;
use App\Events\Product\ProductDeleteEvent;
use App\Events\User\UserAddOrEditEvent;
use App\Events\User\UserDeleteEvent;
use App\Listeners\CardItem\CardItemEventSubscriber;
use App\Listeners\Product\ProductEventSubscriber;
use App\Listeners\User\UserEventSubscriber;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        Event::listen(
            UserAddOrEditEvent::class,
            [UserEventSubscriber::class, 'handleUserAddOrEdit']
        );
        Event::listen(
            UserDeleteEvent::class,
            [UserEventSubscriber::class, 'handleUserDelete']
        );

        Event::listen(
            ProductAddOrEditEvent::class,
            [ProductEventSubscriber::class, 'handleProductAddOrEdit']
        );
        Event::listen(
            ProductDeleteEvent::class,
            [ProductEventSubscriber::class, 'handleProductDelete']
        );

        Event::listen(
            CardItemAddEvent::class,
            [CardItemEventSubscriber::class, 'handleCardItemAdd']
        );
        Event::listen(
            CardItemMinusEvent::class,
            [CardItemEventSubscriber::class, 'handleCardItemMinus']
        );
        Event::listen(
            CardItemDeleteEvent::class,
            [CardItemEventSubscriber::class, 'handleCardItemDelete']
        );
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     *
     * @return bool
     */
    public function shouldDiscoverEvents()
    {
        return false;
    }
}

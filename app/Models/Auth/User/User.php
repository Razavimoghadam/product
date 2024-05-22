<?php

namespace App\Models\Auth\User;



use Exception;
use Dyrynda\Database\Support\CascadeSoftDeletes; // use CascadeSoftDeletes // protected $cascadeDeletes = ['designer_Files', 'files'];
use ShiftOneLabs\LaravelCascadeDeletes\CascadesDeletes; // use CascadesDeletes // protected mixed $cascadeDeletes = ['designer_Files', 'files'];

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
//use Kyslik\ColumnSortable\Sortable;
use Panoscape\History\HasHistories;
use Panoscape\History\HasOperations;
use Spatie\Permission\Traits\HasRoles;
use AjCastro\EagerLoadPivotRelations\EagerLoadPivotTrait;
/**
 * App\Models\Auth\User\User
 *
 * @property int $id
 * @property string $username
 * @property string|null $first_name
 * @property string|null $last_name
 * @property string $gender
 * @property string|null $ssn
 * @property string|null $date_of_birth
 * @property string|null $email
 * @property string $password
 * @property string $locale
 * @property string|null $timezone
 * @property string|null $country_code_locale
 * @property string|null $country_code_timezone
 * @property string|null $api_token
 * @property int $active
 * @property string|null $confirmation_code
 * @property int $confirmed
 * @property string|null $remember_token
 * @property string|null $email_verified_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Address[] $addresses
 * @property-read int|null $addresses_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Permission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Phone[] $phones
 * @property-read int|null $phones_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Role[] $roles
 * @property-read int|null $roles_count
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Query\Builder|User onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|User permission($permissions)
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User role($roles, $guard = null)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereApiToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereConfirmationCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereConfirmed($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCountryCodeLocale($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCountryCodeTimezone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereDateOfBirth($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereGender($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereLocale($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereSsn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereTimezone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUsername($value)
 * @method static \Illuminate\Database\Query\Builder|User withTrashed()
 * @method static \Illuminate\Database\Query\Builder|User withoutTrashed()
 * @mixin \Eloquent
 * @property mixed|null $img_profile
 * @property string|null $img_sign
 * @method static \Illuminate\Database\Eloquent\Builder|User whereImgProfile($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereImgSign($value)
 * @property-read \App\Models\Role|null $active_role
 * @method static \Illuminate\Database\Eloquent\Builder|User whereActiveRole($value)
 * @property-read \Illuminate\Database\Eloquent\Collection|\Panoscape\History\History[] $histories
 * @property-read int|null $histories_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Panoscape\History\History[] $operations
 * @property-read int|null $operations_count
 * @property array|null $settings
 * @method static \Illuminate\Database\Eloquent\Builder|User whereSettings($value)
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Mark[] $marks
 * @property-read int|null $marks_count
 * @method static \Illuminate\Database\Eloquent\Builder|User onlyImgName()
 * @property-read mixed $full_name
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\CardItem[] $cardItems
 * @property-read int|null $card_items_count
 */
class User extends Authenticatable
{
    use Notifiable,
        /*SoftDeletes,*/
        //Sortable,
        HasRoles,
        CascadesDeletes,
        HasOperations,HasHistories {
        getModelMeta as protected traitGetModelMeta;
    }

    /**
     * @var string
     */
    //protected $guard = 'api';
    /**
     * @var string
     */
    //protected $connection = 'system';
    /**
     * @var array
     */
    //public $sortable = ['name', 'email', 'created_at', 'updated_at'];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    protected $casts = [
        'settings' => 'array',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['username', 'first_name', 'last_name','timezone','password','active_role','locale','country_code_locale','country_code_timezone','api_token', 'gender', 'ssn', 'date_of_birth', 'email', 'active', 'confirmation_code', 'confirmed', 'img_profile', 'img_sign', 'settings'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    protected mixed $cascadeDeletes = ['phones','addresses','roles','permissions',];


    public function getFullNameAttribute()
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    // For generate username
    public function getField(): string
    {
        return $this->attributes['first_name'] . ' ' . $this->attributes['last_name'];
    }


    /**
     * Scope a query to only include 'id', 'first_name', 'last_name', 'img_profile' users.
     */
    public function scopeOnlyImgName($query): void
    {
        $query->select(['id', 'first_name', 'last_name', 'img_profile']);
    }

    // Override Model boot function
    protected static function boot()
    {
        parent::boot();
        static::deleting(function (self $user)  {
            try {
                $user->update([
                    'email' => time() . '::' . $user->email,
                    'ssn' => time() . '::' . $user->email,
                    'api_token' => time() . '::' . $user->email,
                    'username' => time() . '::' . $user->email
                ]);
            }catch (Exception $e){

            }

        });
    }

    /**
     * Get all the user phones.
     */
    public function phones()
    {
        return $this->morphMany('App\Models\Phone', 'phoneable')->orderBy('created_at');
    }
    /**
     * Get all the user addresses.
     */
    public function addresses()
    {
        return $this->morphMany('App\Models\Address', 'addressable');
    }


    public function active_role()
    {
        return $this->belongsTo('App\Models\Role','active_role');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function cardItems()
    {
        return $this->hasMany('App\Models\CardItem');
    }

    // For HasHistories
    public function getModelMeta($event)
    {
        // using defaults for updating
        if($event == 'updating') return $this->traitGetModelMeta($event);
        // passing full model to meta
        // ['key1' => 'value1', 'key2' => 'value2', ...]
        else  return $this;
    }

    public function getModelLabel()
    {
        // TODO: Implement getModelLabel() method.
    }
}

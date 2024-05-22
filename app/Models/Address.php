<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use AjCastro\EagerLoadPivotRelations\EagerLoadPivotTrait;
use Panoscape\History\HasHistories;

/**
 * App\Models\Address
 *
 * @property-read Model|\Eloquent $addressable
 * @method static \Illuminate\Database\Eloquent\Builder|Address newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Address newQuery()
 * @method static \Illuminate\Database\Query\Builder|Address onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Address query()
 * @method static \Illuminate\Database\Query\Builder|Address withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Address withoutTrashed()
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\Panoscape\History\History[] $histories
 * @property-read int|null $histories_count
 * @property int $id
 * @property string $addressable_type
 * @property int $addressable_id
 * @property string|null $given_name
 * @property string|null $family_name
 * @property string|null $label
 * @property string|null $organization
 * @property string|null $country_code
 * @property string|null $street
 * @property string|null $state
 * @property string|null $city
 * @property string|null $type
 * @property string|null $postal_code
 * @property array|null $country_data
 * @property array|null $address
 * @property string|null $display_name
 * @property array|null $inputmask
 * @property string|null $latitude
 * @property string|null $longitude
 * @property int $is_primary
 * @property int $is_billing
 * @property int $is_shipping
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereAddress($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereAddressableId($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereAddressableType($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereCity($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereCountryCode($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereCountryData($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereCreatedAt($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereDeletedAt($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereDisplayName($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereFamilyName($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereGivenName($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereId($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereInputmask($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereIsBilling($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereIsPrimary($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereIsShipping($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereLabel($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereLatitude($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereLongitude($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereOrganization($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address wherePostalCode($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereState($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereStreet($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereType($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Address whereUpdatedAt($value)
 */
class Address  extends Model
{
    use /*SoftDeletes,*/EagerLoadPivotTrait,HasHistories {
        getModelMeta as protected traitGetModelMeta;
    }

    protected $casts = [
        'country_data' => 'array',
        'inputmask' => 'array',
        'address' => 'array',
    ];

    protected $fillable = [
        'addressable_id',
        'addressable_type',
        'label',
        'given_name',
        'family_name',
        'organization',
        'country_code',
        'street',
        'state',
        'city',
        'type',
        'postal_code',
        'country_data',
        'address',
        'display_name',
        'inputmask',
        'latitude',
        'longitude',
        'is_primary',
        'is_billing',
        'is_shipping',
    ];
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    public function addressable()
    {
        return $this->morphTo();
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

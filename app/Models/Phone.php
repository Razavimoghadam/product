<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use AjCastro\EagerLoadPivotRelations\EagerLoadPivotTrait;
use Panoscape\History\HasHistories;

/**
 * App\Models\Phone
 *
 * @property int $id
 * @property string $phoneable_type
 * @property int $phoneable_id
 * @property string $number
 * @property string $type
 * @property string|null $country_data
 * @property string|null $inputmask
 * @property int $default
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read Model|\Eloquent $phoneable
 * @method static \Illuminate\Database\Eloquent\Builder|Phone newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Phone newQuery()
 * @method static \Illuminate\Database\Query\Builder|Phone onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Phone query()
 * @method static \Illuminate\Database\Eloquent\Builder|Phone whereCountryData($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Phone whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Phone whereDefault($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Phone whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Phone whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Phone whereInputmask($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Phone whereNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Phone wherePhoneableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Phone wherePhoneableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Phone whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Phone whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|Phone withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Phone withoutTrashed()
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\Panoscape\History\History[] $histories
 * @property-read int|null $histories_count
 * @property-read mixed $type_text
 */
class Phone extends Model
{
    use /*SoftDeletes,*/EagerLoadPivotTrait,HasHistories {
        getModelMeta as protected traitGetModelMeta;
    }

    //protected $connection = 'system';
    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $casts = [
        'country_data' => 'array',
        'inputmask' => 'array'
    ];

    protected $keyType = 'integer';
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];
    /**
     * @var array
     */

    protected $appends = ['type_text'];

    public function getTypeTextAttribute()
    {
        switch ($this->type){
            case 'MOBILE':
                return  __('Dashboard.public.form.phone_Type_MOBILE');
                break;
            case 'FIXED_LINE':
                return  __('Dashboard.public.form.phone_Type_Fixed');
                break;
        }
        return null;
    }

    protected $fillable = ['number', 'country_data', 'type', 'inputmask', 'created_at', 'updated_at'];


    public function phoneable()
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

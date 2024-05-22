<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use AjCastro\EagerLoadPivotRelations\EagerLoadPivotTrait;
use Panoscape\History\HasHistories;
/**
 * App\Models\Product
 *
 * @property int $id
 * @property string $name
 * @property string $barcode
 * @property int $price
 * @property string|null $description
 * @property int $enabled
 * @property int $qty
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\CardItem[] $cardItems
 * @property-read int|null $card_items_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\File[] $files
 * @property-read int|null $files_count
 * @property-read mixed $enabled_text
 * @property-read \Illuminate\Database\Eloquent\Collection|\Panoscape\History\History[] $histories
 * @property-read int|null $histories_count
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Product newModelQuery()
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Product newQuery()
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Product query()
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Product whereBarcode($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Product whereCreatedAt($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Product whereDeletedAt($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Product whereDescription($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Product whereEnabled($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Product whereId($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Product whereName($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Product wherePrice($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Product whereQty($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Product whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Product extends Model
{
    use /*SoftDeletes,*/EagerLoadPivotTrait,HasHistories {
        getModelMeta as protected traitGetModelMeta;
    }

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

    protected $appends = ['enabled_text'];

    public function getEnabledTextAttribute()
    {
        switch ($this->enabled){
            case 1:
            case true:
                return  __('Dashboard.public.form.enable');
                break;
            case 0:
            case false:
                return  __('Dashboard.public.form.disable');
                break;
        }
        return null;
    }

    protected $fillable = ['name','barcode', 'price', 'description', 'enabled', 'qty'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function cardItems()
    {
        return $this->hasMany('App\Models\CardItem');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function files()
    {
        return $this->morphMany('App\Models\File', 'fileable');
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

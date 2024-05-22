<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use AjCastro\EagerLoadPivotRelations\EagerLoadPivotTrait;
use Panoscape\History\HasHistories;
/**
 * App\Models\CardItem
 *
 * @property-read mixed $type_text
 * @property-read \Illuminate\Database\Eloquent\Collection|\Panoscape\History\History[] $histories
 * @property-read int|null $histories_count
 * @property-read \App\Models\Product|null $product
 * @property-read \App\Models\Auth\User\User|null $user
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|CardItem newModelQuery()
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|CardItem newQuery()
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|CardItem query()
 * @mixin \Eloquent
 */
class CardItem extends Model
{
    use /*SoftDeletes,*/EagerLoadPivotTrait,HasHistories {
        getModelMeta as protected traitGetModelMeta;
    }

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */

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

    protected $fillable = ['user_id','product_id', 'qty'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\Models\Auth\User\User');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function product()
    {
        return $this->belongsTo('App\Models\Product');
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

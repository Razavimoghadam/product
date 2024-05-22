<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use AjCastro\EagerLoadPivotRelations\EagerLoadPivotTrait;
use Panoscape\History\HasHistories;

/**
 * App\Models\File
 *
 * @property int $id
 * @property string $fileable_type
 * @property int $fileable_id
 * @property string $file
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read Model|\Eloquent $fileable
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|File newModelQuery()
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|File newQuery()
 * @method static \Illuminate\Database\Query\Builder|File onlyTrashed()
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|File query()
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|File whereCreatedAt($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|File whereDeletedAt($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|File whereFile($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|File whereFileableId($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|File whereFileableType($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|File whereId($value)
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|File whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|File withTrashed()
 * @method static \Illuminate\Database\Query\Builder|File withoutTrashed()
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\Panoscape\History\History[] $histories
 * @property-read int|null $histories_count
 */
class File extends Model
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
    protected $fillable = ['file', 'created_at', 'updated_at'];

    public function fileable()
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

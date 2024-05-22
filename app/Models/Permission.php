<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Panoscape\History\HasHistories;
use Spatie\Permission\Models\Permission as SpatiePermission;
use Illuminate\Database\Eloquent\SoftDeletes;
use AjCastro\EagerLoadPivotRelations\EagerLoadPivotTrait;
/**
 * App\Models\Permission
 *
 * @property int $id
 * @property string $name
 * @property string $guard_name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|SpatiePermission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Role[] $roles
 * @property-read int|null $roles_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Auth\User\User[] $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder|Permission newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Permission newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Permission permission($permissions)
 * @method static \Illuminate\Database\Eloquent\Builder|Permission query()
 * @method static \Illuminate\Database\Eloquent\Builder|Permission role($roles, $guard = null)
 * @method static \Illuminate\Database\Eloquent\Builder|Permission whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Permission whereGuardName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Permission whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Permission whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Permission whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\Panoscape\History\History[] $histories
 * @property-read int|null $histories_count
 * @property-read mixed $text
 * @property-read mixed $title
 */
class Permission extends SpatiePermission
{
    use HasHistories {
        getModelMeta as protected traitGetModelMeta;
    }

    protected $appends = ['text','title',];

    public function getTitleAttribute()
    {
            return $this->name;
    }
    public function getTextAttribute()
    {
            return $this->name;
    }

    //protected $connection = 'system';

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

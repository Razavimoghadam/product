<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Panoscape\History\HasHistories;
use Spatie\Permission\Models\Role as SpatieRole;
use Illuminate\Database\Eloquent\SoftDeletes;
use AjCastro\EagerLoadPivotRelations\EagerLoadPivotTrait;
/**
 * App\Models\Role
 *
 * @property int $id
 * @property string $name
 * @property string $guard_name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Permission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Auth\User\User[] $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder|Role newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Role newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Role permission($permissions)
 * @method static \Illuminate\Database\Eloquent\Builder|Role query()
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereGuardName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Project[] $projects
 * @property-read int|null $projects_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Auth\User\User[] $activated_users
 * @property-read int|null $activated_users_count
 * @property-read mixed $name_text
 * @property-read \Illuminate\Database\Eloquent\Collection|\Panoscape\History\History[] $histories
 * @property-read int|null $histories_count
 * @property-read mixed $text
 * @property-read mixed $title
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Mark[] $marks
 * @property-read int|null $marks_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Auth\User\User[] $activated_Users
 * @property-read int|null $activated__users_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\WF[] $creators_WF_By_Role
 * @property-read int|null $creators__w_f__by__role_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\WF[] $wfs
 * @property-read int|null $wfs_count
 * @method static \AjCastro\EagerLoadPivotRelations\EagerLoadPivotBuilder|Role userImgName()
 */
class Role extends SpatieRole
{
    use EagerLoadPivotTrait,HasHistories {
        getModelMeta as protected traitGetModelMeta;
    }

    protected $appends = ['name_text','text','title',];

    public function getNameTextAttribute()
    {
        if (\Lang::has("system/public.roles.{$this->name}")) {
            return __("system/public.roles.{$this->name}");
        } else {
            return $this->name;
        }
    }
    public function getTitleAttribute()
    {
        if (\Lang::has("system/public.roles.{$this->name}")) {
            return __("system/public.roles.{$this->name}");
        } else {
            return $this->name;
        }
    }
    public function getTextAttribute()
    {
        if (\Lang::has("system/public.roles.{$this->name}")) {
            return __("system/public.roles.{$this->name}");
        } else {
            return $this->name;
        }
    }

    public function scopeUserImgName($query) {
        return $query
            ->with(['users' => function($q) {
                $q->onlyImgName();
            }]);
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function activated_Users()
    {
        return $this->hasMany('App\Models\Auth\User\User','active_role');
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

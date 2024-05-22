<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 profile_details">
    <div class="well profile_view">
        <div class="profile_body col-sm-12">
            <h4 class="ssn brief">
                <i>{{isset($data['ssn']) && !empty($data['ssn']) ? $data['ssn']: __('supermarket::storeCashier/Dashboard.public.form.ssn')}}</i>
            </h4>
            <div class="left col-xs-7">
                <h2 class="name">{{isset($data['name']) ? $data['name']: ''}}</h2>
            </div>
            <div class="right col-xs-5 text-center">
                <img src="{{isset($data['image_src']) ? $data['image_src']: '/assets/image/user.png'}}" alt=""
                     class="img-circle img-responsive">
            </div>
            <div class="col-xs-12">
                <p>
                    <strong>{{__('supermarket::storeCashier/Dashboard.public.form.gender')}}
                        :&nbsp;
                    </strong>
                    <small value="{{isset($data['gender_val']) ? $data['gender_val']: ''}}"
                           class="gender">{{isset($data['gender']) ? $data['gender']: ''}}
                    </small>
                </p>
                <p>
                    <strong>{{__('supermarket::storeCashier/Dashboard.public.form.date_Of_Birth')}}
                        :&nbsp;
                    </strong>
                    <small
                        class="date-of-birth">{{isset($data['date_of_birth']) ? $data['date_of_birth']: ''}}
                    </small>
                </p>
                <p>
                    <strong>{{__('supermarket::storeCashier/Dashboard.public.form.email')}}
                        :&nbsp;
                    </strong>
                    <small
                        class="email">{{isset($data['email']) ? $data['email']: ''}}
                    </small>
                </p>
                <ul class="list-unstyled">
                    @if(isset($data['addresses']))
                        @foreach($data['addresses'] as $item=>$value)
                            @if($item==0)
                                <li>
                                    <strong>
                                        <i class="fa fa-home"></i>&nbsp;{{__('supermarket::storeCashier/Dashboard.public.form.address')}}
                                        :&nbsp;
                                    </strong>
                                    <small>
                                        {{($item+1).') '.$value}}
                                    </small>
                                </li>
                            @else
                                <li><small>{{($item+1).') '.$value}}</small></li>
                            @endif
                        @endforeach
                    @endif
                    @if(isset($data['phones']))
                        @foreach($data['phones'] as $item=>$value)
                            @if($item==0)
                                <li style="direction: ltr" class="text-right">
                                    <strong>
                                        <i class="fa fa-home"></i>&nbsp;{{__('supermarket::storeCashier/Dashboard.public.form.phone')}}
                                        :&nbsp;
                                    </strong>
                                    <small>
                                        {{($item+1).') '.$value}}
                                    </small>
                                </li>
                            @else
                                <li><small>{{($item+1).') '.$value}}</small></li>
                            @endif
                        @endforeach
                    @endif
                </ul>
            </div>
        </div>

        <div class="profile_footer col-xs-12 bottom text-center">
            <div style="direction: ltr" class="col-xs-12 col-sm-8 emphasis col-sm-pull-2 ">
                <p  class="ratings ">
                    <a>{{isset($data['a_ratings']) ? $data['a_ratings']: '4.0'}}</a>&nbsp;
                    @for($i=0;$i<$data['a_star'];$i++)
                        <a><span class="fa fa-star"></span></a>
                    @endfor
                    @for($i=0;$i<$data['a_star_o'];$i++)
                        <a><span class="fa fa-star-o"></span></a>
                    @endfor
                </p>
            </div>
            <div class="col-xs-12 col-sm-4 emphasis">
                <button
                    @foreach($data['btn_comments']['data'] as $item=>$value)
                    data-{{$item}}="{{$value}}"
                    @endforeach
                    type="button"
                    class="btn btn-success btn-xs {{isset($data['btn_comments']['class']) ? $data['btn_comments']['class']: ''}}">
                    <i class="fa fa-user"></i>
                    <i class="fa fa-comments-o"></i>
                </button>
                {{--<button type="button" class="btn btn-primary btn-xs">
                    <i class="fa fa-user"> </i> View Profile
                </button>--}}
            </div>
        </div>
    </div>
</div>




















{{$rtl_Language_Code = collect(['fa'])}}
<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 profile_details center-margin">
    <div class="well profile_view">
        <div class="profile_body col-sm-12">
            <!-- ID -->
            <h4 class="id brief">
                <i>{{isset($data['id']) && !empty($data['id']) ? $data['id']: __('supermarket::storeCashier/Dashboard.public.form.id')}}</i>
            </h4>
            <!-- Details 1 -->
            <div
                class="@if($rtl_Language_Code->contains(strtolower(app()->getLocale()))) right @else left @endif col-xs-8">
                <!-- Name -->
                <h2 class="name">
                    @switch($data['dealer_type'])
                        @case('shop')
                        {{__('supermarket::storeCashier/Dashboard.dealer_Plan.shop').' '}}
                        @break
                        @case('company')
                        {{__('supermarket::storeCashier/Dashboard.dealer_Plan.company').' '}}
                        @break
                        @case('factory')
                        {{__('supermarket::storeCashier/Dashboard.dealer_Plan.factory').' '}}
                        @break
                    @endswitch
                    {{$data['name']}}
                </h2>
                <!-- Website -->
                <p class="w3-margin-top">
                    <strong><i
                            class="fa fa-globe"></i>&nbsp;{{__('supermarket::storeCashier/Dashboard.public.form.website')}}
                        :&nbsp;
                    </strong>
                    <small class="web_site_name">{{isset($data['web_site_name']) ? $data['web_site_name']: ''}}</small>
                </p>
                <!-- Open -->
                <p>
                    <strong><i
                            class="fa fa-clock-o"></i>&nbsp;{{__('supermarket::storeCashier/Dashboard.public.form.open_hours')}}
                        :&nbsp;
                    </strong>
                    <small
                        class="open">{{isset($data['open']) ? $data['open']: ''}}
                    </small>
                </p>
                <!-- Holidays  -->
                <p>
                    <strong>
                        <i class="fa fa-calendar"></i>&nbsp;{{__('supermarket::storeCashier/Dashboard.public.form.holidays')}}
                        :&nbsp;
                    </strong>
                    @if(isset($data['holidays']))
                        @foreach($data['holidays'] as $item=>$value)
                            <small><strong>{{($item+1).') '}}</strong>{{$value['text'].'  '}}</small>
                        @endforeach
                    @endif
                </p>
                <!-- emails -->
                <p>
                    <strong>
                        <i class="fa fa-envelope"></i>&nbsp;{{__('supermarket::storeCashier/Dashboard.public.form.email')}}
                        :&nbsp;
                    </strong>
                    @if(isset($data['emails']))
                        @foreach($data['emails'] as $item=>$value)
                            <small><strong>{{($item+1).') '}}</strong>{{$value['email'].'  '}}</small>
                        @endforeach
                    @endif
                </p>
                <!-- National ID -->
                @if(isset($data['national_ID']))
                    <p>
                        <strong><i
                                class="fa fa-barcode"></i>&nbsp;{{__('supermarket::storeCashier/Dashboard.public.form.national_id')}}
                            :&nbsp;
                        </strong>
                        <small class="national_ID">{{$data['national_ID']}}</small>
                    </p>
                @endif
            <!-- Registration Number -->
                @if(isset($data['registration_number']))
                    <p>
                        <strong><i
                                class="fa fa-barcode"></i>&nbsp;{{__('supermarket::storeCashier/Dashboard.public.form.registration_number')}}
                            :&nbsp;
                        </strong>
                        <small
                            class="registration_number">{{$data['registration_number']}}
                        </small>
                    </p>
                @endif
            <!-- Economical Number -->
                @if(isset($data['economical_number']))
                    <p>
                        <strong><i
                                class="fa fa-barcode"></i>&nbsp;{{__('supermarket::storeCashier/Dashboard.public.form.economical_number')}}
                            :&nbsp;
                        </strong>
                        <small
                            class="economical_number">{{$data['economical_number']}}
                        </small>
                    </p>
                @endif
            </div>
            <!-- Image -->
            <div
                class="@if($rtl_Language_Code->contains(strtolower(app()->getLocale()))) left  @else right @endif col-xs-4 text-center">
                @switch($data['dealer_type'])
                    @case('shop')
                    <img
                        src="{{isset($data['logo']) && !empty($data['logo']) ? $data['logo']: '/assets/supermarket/storeCashier/images/shop-logo.png'}}"
                        alt=""
                        class=" img-responsive">
                    @break
                    @case('company')
                    <img
                        src="{{isset($data['logo']) && !empty($data['logo']) ? $data['logo']: '/assets/supermarket/storeCashier/images/company-logo.png'}}"
                        alt=""
                        class="img-responsive">
                    @break
                    @case('factory')
                    <img
                        src="{{isset($data['logo']) && !empty($data['logo']) ? $data['logo']: '/assets/supermarket/storeCashier/images/factory-logo.png'}}"
                        alt=""
                        class=" img-responsive">
                    @break
                @endswitch
            </div>
            <!-- Details 2 -->
            <div class="col-xs-12">
                <!-- Managing director -->
                <p>
                    <strong>
                        <i class="fa fa-tasks"></i>&nbsp;{{__('supermarket::storeCashier/Dashboard.public.form.managing_director')}}
                        :&nbsp;
                    </strong>
                    @if(isset($data['userManagingDirector']) && !empty($data['userManagingDirector']))
                        <small class="managing_director">
                            <strong>{{__('supermarket::storeCashier/Dashboard.public.form.first_Name')}}
                                :&nbsp;</strong>
                            {{isset($data['userManagingDirector']['first_name'])?$data['userManagingDirector']['first_name'].'  ':''}}
                            {{isset($data['userManagingDirector']['last_name'])?$data['userManagingDirector']['last_name'].'  ':''}}
                            <strong>{{__('supermarket::storeCashier/Dashboard.public.form.ssn')}}
                                :&nbsp;</strong>
                            {{isset($data['userManagingDirector']['ssn'])?$data['userManagingDirector']['ssn'].'  ':''}}
                            <strong>{{__('supermarket::storeCashier/Dashboard.public.form.date_Of_Birth')}}
                                :&nbsp;</strong>
                            {{isset($data['userManagingDirector']['date_of_birth'])?$data['userManagingDirector']['date_of_birth'].'  ':''}}
                            <strong>{{__('supermarket::storeCashier/Dashboard.public.form.email')}}
                                :&nbsp;</strong>
                            {{isset($data['userManagingDirector']['email'])?$data['userManagingDirector']['email'].'  ':''}}
                            @if(isset($data['userManagingDirector']['phones']))
                                @foreach($data['userManagingDirector']['phones'] as $item=>$value)
                                    @if($item==0)
                                        <strong>{{__('supermarket::storeCashier/Dashboard.public.form.phone')}}
                                            :&nbsp;{{($item+1).') '}}</strong>
                                        <small>{{$value['number']}}</small>
                                    @else
                                        <strong>{{($item+1).') '}}</strong>
                                        <small>{{$value['number']}}</small>
                                    @endif
                                @endforeach
                            @endif
                            @if(isset($data['userManagingDirector']['addresses']))
                                @foreach($data['userManagingDirector']['addresses'] as $item=>$value)
                                    @if($item==0)
                                        <strong>{{__('supermarket::storeCashier/Dashboard.public.form.address')}}
                                            :&nbsp;{{($item+1).') '}}</strong>
                                        <small>{{$value['display_name']}}</small>
                                    @else
                                        <strong>{{($item+1).') '}}</strong>
                                        <small>{{$value['display_name']}}</small>
                                    @endif
                                @endforeach
                            @endif
                        </small>
                    @endif
                </p>
                <!-- Owners -->
                <p>
                    <strong>
                        <i class="fa fa-users"></i>&nbsp;{{__('supermarket::storeCashier/Dashboard.public.form.owners')}}
                        :&nbsp;
                    </strong>
                    @if(isset($data['owners']) && !empty($data['owners']))
                        @foreach($data['owners'] as $item=>$value)
                            <small>
                                <strong>{{($item+1).') '.__('supermarket::storeCashier/Dashboard.public.form.first_Name')}}
                                    :&nbsp;</strong>
                                {{isset($value['user']['first_name'])?$value['user']['first_name'].'  ':''}}
                                {{isset($value['user']['last_name'])?$value['user']['last_name'].'  ':''}}
                                <strong>{{__('supermarket::storeCashier/Dashboard.public.form.ssn')}}
                                    :&nbsp;</strong>
                                {{isset($value['user']['ssn'])?$value['user']['ssn'].'  ':''}}
                                <strong>{{__('supermarket::storeCashier/Dashboard.public.form.date_Of_Birth')}}
                                    :&nbsp;</strong>
                                {{isset($value['user']['date_of_birth'])?$value['user']['date_of_birth'].'  ':''}}
                                <strong>{{__('supermarket::storeCashier/Dashboard.public.form.email')}}
                                    :&nbsp;</strong>
                                {{isset($value['user']['email'])?$value['user']['email'].'  ':''}}
                                @if(isset($value['user']['phones']))
                                    @foreach($value['user']['phones'] as $item=>$value)
                                        @if($item==0)
                                            <strong>{{__('supermarket::storeCashier/Dashboard.public.form.phone')}}
                                                :&nbsp;{{($item+1).') '}}</strong>
                                            <small>{{$value['number']}}</small>
                                        @else
                                            <strong>{{($item+1).') '}}</strong>
                                            <small>{{$value['number']}}</small>
                                        @endif
                                    @endforeach
                                @endif
                                @if(isset($value['user']['addresses']))
                                    @foreach($value['user']['addresses'] as $item=>$value)
                                        @if($item==0)
                                            <strong>{{__('supermarket::storeCashier/Dashboard.public.form.address')}}
                                                :&nbsp;{{($item+1).') '}}</strong>
                                            <small>{{$value['display_name']}}</small>
                                        @else
                                            <strong>{{($item+1).') '}}</strong>
                                            <small>{{$value['display_name']}}</small>
                                        @endif
                                    @endforeach
                                @endif
                            </small>
                            <br>
                        @endforeach
                    @endif
                </p>
                <!-- Suppliers -->
                <p>
                    <strong>
                        <i class="fa fa-industry"></i>&nbsp;{{__('supermarket::storeCashier/Dashboard.public.form.suppliers')}}
                        :&nbsp;
                    </strong>
                    @if(isset($data['suppliers']) && !empty($data['suppliers']))
                        @foreach($data['suppliers'] as $item=>$value)
                            <small>
                                <strong>{{($item+1).') '.__('supermarket::storeCashier/Dashboard.public.form.first_Name')}}
                                    :&nbsp;</strong>
                                {{isset($value['user']['first_name'])?$value['user']['first_name'].'  ':''}}
                                {{isset($value['user']['last_name'])?$value['user']['last_name'].'  ':''}}
                                <strong>{{__('supermarket::storeCashier/Dashboard.public.form.ssn')}}
                                    :&nbsp;</strong>
                                {{isset($value['user']['ssn'])?$value['user']['ssn'].'  ':''}}
                                <strong>{{__('supermarket::storeCashier/Dashboard.public.form.date_Of_Birth')}}
                                    :&nbsp;</strong>
                                {{isset($value['user']['date_of_birth'])?$value['user']['date_of_birth'].'  ':''}}
                                <strong>{{__('supermarket::storeCashier/Dashboard.public.form.email')}}
                                    :&nbsp;</strong>
                                {{isset($value['user']['email'])?$value['user']['email'].'  ':''}}
                                @if(isset($value['user']['phones']))
                                    @foreach($value['user']['phones'] as $item=>$value)
                                        @if($item==0)
                                            <strong>{{__('supermarket::storeCashier/Dashboard.public.form.phone')}}
                                                :&nbsp;{{($item+1).') '}}</strong>
                                            <small>{{$value['number']}}</small>
                                        @else
                                            <strong>{{($item+1).') '}}</strong>
                                            <small>{{$value['number']}}</small>
                                        @endif
                                    @endforeach
                                @endif
                                @if(isset($value['user']['addresses']))
                                    @foreach($value['user']['addresses'] as $item=>$value)
                                        @if($item==0)
                                            <strong>{{__('supermarket::storeCashier/Dashboard.public.form.address')}}
                                                :&nbsp;{{($item+1).') '}}</strong>
                                            <small>{{$value['display_name']}}</small>
                                        @else
                                            <strong>{{($item+1).') '}}</strong>
                                            <small>{{$value['display_name']}}</small>
                                        @endif
                                    @endforeach
                                @endif
                            </small>
                            <br>
                        @endforeach
                    @endif
                </p>
                <!-- Addresses -->
                <p>
                    <strong>
                        <i class="fa fa-home"></i>&nbsp;{{__('supermarket::storeCashier/Dashboard.public.form.address')}}
                        :&nbsp;
                    </strong>
                    @if(isset($data['addresses']) && !empty($data['addresses']))
                        @foreach($data['addresses'] as $item=>$value)
                            <small class="address"><strong>{{($item+1).') ' }}</strong>{{$value['display_name']}}
                            </small>
                            <br>
                        @endforeach
                    @endif
                </p>
                <!-- Phones -->
                <p style="direction: ltr" class="text-right">
                    <strong>
                        <i
                            class="fa fa-phone"></i>&nbsp;{{__('supermarket::storeCashier/Dashboard.public.form.phone')}}
                        :&nbsp;
                    </strong>
                    @if(isset($data['phones']) && !empty($data['phones']))
                        @foreach($data['phones'] as $item=>$value)
                            <small><strong>{{($item+1).') ' }}</strong>{{$value['number']}}</small>
                            <br>
                        @endforeach
                    @endif
                </p>
            </div>
        </div>

        <div class="profile_footer col-xs-12 bottom text-center">
            <div style="direction: ltr"
                 class="col-xs-12 col-sm-8 emphasis @if($rtl_Language_Code->contains(strtolower(app()->getLocale()))) col-sm-pull-2 @else col-sm-push-2 @endif ">
                <p class="ratings ">
                    <a>{{isset($data['a_ratings']) ? $data['a_ratings']: '4.0'}}</a>&nbsp;
                    @if(isset($data['a_star']) && isset($data['a_star_o']))
                        @for($i=0;$i<$data['a_star'];$i++)
                            <a><span class="fa fa-star"></span></a>
                        @endfor
                        @for($i=0;$i<$data['a_star_o'];$i++)
                            <a><span class="fa fa-star-o"></span></a>
                        @endfor
                    @endif
                </p>
            </div>
            <div class="col-xs-12 col-sm-4 emphasis">
                <button
                    @if(isset($data['btn_comments']['data']))
                    @foreach($data['btn_comments']['data'] as $item=>$value)
                    data-{{$item}}="{{$value}}"
                    @endforeach
                    @endif
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




















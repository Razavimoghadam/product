@if($rtl_Language_Code->contains(strtolower(app()->getLocale())))
    <div class="pull-right">
        {{__('Dashboard.dashboard.footer.copyright_fa',['company_name_fa'=>config('app.company_name.company_name_fa'),])}}
    </div>

    <p style="direction: ltr" class="pull-left">
        <a href="">Licence</a> | Crafted with
        <span style="color: #ff415c;
                font-size: 15px;
                margin: 0 2px;" class="fa fa-heart pulse2">
        </span>
        for <a>{{config('app.company_name.company_name_en')}}</a>.
        | <a href="{{config('app.designer_url')}}">{{config('app.designer')}}</a>
    </p>
<!--    <div style="direction: ltr" class="pull-left">
        {{__('Dashboard.dashboard.footer.copyright_en',['company_name_en'=>config('app.company_name.company_name_en'),])}}
        <a href="https://colorlib.com">&lt;!&ndash;Colorlib&ndash;&gt;</a>
    </div>-->
@else
    <p style="direction: ltr" class="pull-left">
        <a href="">Licence</a> | Crafted with
        <span style="color: #ff415c;
                font-size: 15px;
                margin: 0 2px;" class="fa fa-heart pulse2">
        </span>
        for <a>{{config('app.company_name.company_name_en')}}</a>.
        | <a href="{{config('app.designer_url')}}">{{config('app.designer')}}</a>
    </p>
<!--    <div style="direction: ltr" class="pull-left ">
        {{__('Dashboard.dashboard.footer.copyright_en',['company_name_en'=>config('app.company_name.company_name_en'),])}}
        <a href="https://colorlib.com">&lt;!&ndash;Colorlib&ndash;&gt;</a>
    </div>-->
@endif

<div class="clearfix"></div>

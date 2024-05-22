<div id="alert_Type_Message"
     class="alert {{isset($alert_Type) ? $alert_Type : 'alert-danger'}} text-center col-md-6 col-sm-6 col-xs-12 col-md-offset-3 col-sm-offset-3 shop_FloorPlan_Step alert-dismissible fade in"
     role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span>
    </button>
    {{isset($message) ? $message : 'message'}}
</div>

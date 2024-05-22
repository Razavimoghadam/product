@if(isset($question))
    <div class="w3-center w3-margin-bottom col-md-12 col-sm-12 col-xs-12 ">
        <p>{{isset($question) ? $question : ''}}</p>
    </div>
@endif
<div class="w3-center ">
    <button id="{{isset($id_Btn1) ? $id_Btn1: ''}}" type="button"
            class="button_together w3-btn w3-green w3-round-small col-md-5 col-sm-5 col-xs-5 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 {{isset($btn1_Class) ? $btn1_Class: ''}}">{{isset($btn1_Text) ? $btn1_Text: ''}}
    </button>
    <button id="{{isset($id_Btn2) ? $id_Btn2: ''}}" type="button"
            class="button_together w3-btn w3-red w3-round-small col-md-5 col-sm-5 col-xs-5 {{isset($btn2_Class) ? $btn2_Class: ''}}"
        @if(isset($data_Dismiss_Modal) && $data_Dismiss_Modal)
            data-dismiss="modal"
        @endif
    >{{isset($btn2_Text) ? $btn2_Text: ''}}
    </button>
</div>




















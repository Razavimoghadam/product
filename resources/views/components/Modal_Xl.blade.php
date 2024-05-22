<div id="{{isset($id) ? $id: 'Null'}}" class="modal fade " tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog {{isset($modal_Size) ? $modal_Size: 'modal-xl'}}">
        <div class="modal-content">

            <div id="{{isset($modal_Header_Id) ? $modal_Header_Id: ''}}"  class="modal-header">
                <button type="button" class="close modal-data-dismiss-left" data-dismiss="modal"><span aria-hidden="true">×</span>
                </button>
                <h6 id="{{isset($modal_Title_Id) ? $modal_Title_Id: ''}}" class="modal-title" >{{isset($modal_Title) ? $modal_Title: ''}}</h6>
            </div>
            <div style="overflow-x: auto;background-color: {{isset($backgroundColor) ? $backgroundColor: ''}}" id="{{isset($modal_Body_Id) ? $modal_Body_Id: ''}}" class="modal-body">
                {{isset($modal_Body) ? $modal_Body: ''}}
            </div>
            <div id="{{isset($modal_Footer_Id) ? $modal_Footer_Id: ''}}" class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">{{__('Dashboard.public.close')}}</button>
                {{isset($modal_Footer) ? $modal_Footer: ''}}
            </div>

        </div>
    </div>
</div>








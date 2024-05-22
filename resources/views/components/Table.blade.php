<div class="col-md-12 col-sm-12 col-xs-12 table-responsive">
    <table class="table table-striped @if(isset($table_Class)){{$table_Class}} @endif"
    id="@if(isset($table_Id)){{$table_Id}}@endif"
    >

    <thead id="@if(isset($thead_Id)){{$thead_Id}}@endif">
    <tr>
        <th style="width: 1%">#</th>
        @foreach($theads as $thead)
            <th
                @if(isset($thead['width']))
                style="width: {{$thead['width']}}"
                @endif
            >
                {{$thead['name']}}
            </th>
        @endforeach
    </tr>
    </thead>


    <tbody id="@if(isset($tbody_Id)){{$tbody_Id}}@endif">
    @foreach($tbody_All_Tr as $tbody_Tr)
        <tr
            @if(isset($tbody_Tr['data']))
            @foreach($tbody_Tr['data'] as $tbody_Tr_Data => $value)
            data-{{$tbody_Tr_Data}}="{{$value}}"
            @endforeach
            @endif
            {{--@if(isset($tbody_Tr['sendTableAddress']))
            data-sendTableAddress="{{$tbody_Tr['sendTableAddress']}}"
            @endif
            @if(isset($tbody_Tr['sendTableLat']))
            data-sendTableLat="{{$tbody_Tr['sendTableLat']}}"
            @endif
            @if(isset($tbody_Tr['sendTableLon']))
            data-sendTableLon="{{$tbody_Tr['sendTableLon']}}"
            @endif
            @if(isset($tbody_Tr['sendTableType']))
            data-sendTableType="{{$tbody_Tr['sendTableType']}}"
            @endif
            @if(isset($tbody_Tr['select']))
            data-select="{{$tbody_Tr['select']}}"
            @endif
            @if(isset($tbody_Tr['sendTableCountryData']))
            data-sendTableCountryData="{{$tbody_Tr['sendTableCountryData']}}"
            @endif
            @if(isset($tbody_Tr['sendTableInputmask']))
            data-sendTableInputmask="{{$tbody_Tr['sendTableInputmask']}}"
            @endif--}}

        >
            @foreach($tbody_Tr as $tbody_Td_Elements => $value)
                @if(is_array($value) && $tbody_Td_Elements!=='data'/* && $tbody_Td_Elements!=='sendTableAddress' && $tbody_Td_Elements!=='sendTableCountryData' && $tbody_Td_Elements!=='sendTableInputmask'*/)
                    <td
                        @if(isset($value['data']['td_style']))
                        style="{{$value['data']['td_style']}}"
                        @endif
                        @if(isset($value['data']['td_class']))
                        class="{{$value['data']['td_class']}}"
                        @endif
                    >
                        @foreach($value as $tbody_Td_Elements_Enternal => $value_Enternal)
                            @php
                                /*Log::debug($value);
                                Log::debug($tbody_Td_Elements_Enternal);
                                Log::debug($value_Enternal);*/
                            @endphp
                            @switch(array_key_first($value_Enternal) )
                                {{-- <!-- Number of row -->--}}
                                @case('number')
                                <p>{{$value_Enternal['number']}}</p>
                                @break
                                {{-- <!-- Next Line -->--}}
                                @case('enter')
                                <br/>
                                @break
                                {{--<!-- Create a element -->--}}
                                @case('a')
                                <a class="{{isset($value_Enternal['a_class']) ? $value_Enternal['a_class']: ''}}"
                                   style="{{isset($value_Enternal['a_style']) ? $value_Enternal['a_style']: ''}}">
                                    {{$value_Enternal['a']}}
                                </a>
                                @break
                                {{--<!-- Create p element -->--}}
                                @case('p')
                                <p>{{$value_Enternal['p']}}</p>
                                @break
                                {{--<!-- Create small tag -->--}}
                                @case('small')
                                <small class="{{isset($value_Enternal['small_class']) ? $value_Enternal['small_class']: ''}}"
                                       style="{{isset($value_Enternal['small_style']) ? $value_Enternal['small_style']: ''}}">{{$value_Enternal['small']}}</small>
                                @break
                                {{-- <!-- Create button edit -->--}}
                                @case('btn_Edit')
                                <button
                                    @foreach($value_Enternal['btn_Edit']['data'] as $item=>$value)
                                    data-{{$item}}="{{$value}}"
                                    @endforeach
                                    {{--data-select="{{isset($value_Enternal['btn_Edit']['select']) ? $value_Enternal['btn_Edit']['select']: ''}}"
                                    data-toggle="{{isset($value_Enternal['btn_Edit']['data-toggle']) ? $value_Enternal['btn_Edit']['data-toggle']: ''}}"
                                    data-target="{{isset($value_Enternal['btn_Edit']['data-target']) ? $value_Enternal['btn_Edit']['data-target']: ''}}"
                                    data-id="{{isset($value_Enternal['btn_Edit']['data_id']) ? $value_Enternal['btn_Edit']['data_id']: ''}}"--}}
                                    class="btn btn-info btn-xs {{isset($value_Enternal['btn_Edit']['class']) ? $value_Enternal['btn_Edit']['class']: ''}}"
                                    id="{{isset($value_Enternal['btn_Edit']['id']) ? $value_Enternal['btn_Edit']['id']: ''}}"
                                >
                                    <i class="fa fa-pencil"></i> {{isset($value_Enternal['btn_Edit']['name']) ? $value_Enternal['btn_Edit']['name']: ''}}
                                </button>
                                @break
                                {{--<!-- Create button view -->--}}
                                @case('btn_View')
                                <button
                                    @foreach($value_Enternal['btn_View']['data'] as $item=>$value)
                                    data-{{$item}}="{{$value}}"
                                    @endforeach
                                    {{--data-select="{{isset($value_Enternal['btn_View']['select']) ? $value_Enternal['btn_View']['select']: ''}}"
                                    data-toggle="{{isset($value_Enternal['btn_View']['data-toggle']) ? $value_Enternal['btn_View']['data-toggle']: ''}}"
                                    data-target="{{isset($value_Enternal['btn_View']['data-target']) ? $value_Enternal['btn_View']['data-target']: ''}}"
                                    data-id="{{isset($value_Enternal['btn_View']['data_id']) ? $value_Enternal['btn_View']['data_id']: ''}}"--}}
                                    class="btn btn-primary btn-xs {{isset($value_Enternal['btn_View']['class']) ? $value_Enternal['btn_View']['class']: ''}}"
                                    id="{{isset($value_Enternal['btn_View']['id']) ? $value_Enternal['btn_View']['id']: ''}}"
                                >
                                    <i class="fa fa-eye"></i> {{isset($value_Enternal['btn_View']['name']) ? $value_Enternal['btn_View']['name']: ''}}
                                </button>
                                @break
                                {{--<!-- Create button delete -->--}}
                                @case('btn_Delete')
                                <button
                                    @foreach($value_Enternal['btn_Delete']['data'] as $item=>$value)
                                    data-{{$item}}="{{$value}}"
                                    @endforeach
                                    {{--data-select="{{isset($value_Enternal['btn_Delete']['select']) ? $value_Enternal['btn_Delete']['select']: ''}}"
                                    data-toggle="{{isset($value_Enternal['btn_Delete']['data-toggle']) ? $value_Enternal['btn_Delete']['data-toggle']: ''}}"
                                    data-target="{{isset($value_Enternal['btn_Delete']['data-target']) ? $value_Enternal['btn_Delete']['data-target']: ''}}"
                                    data-id="{{isset($value_Enternal['btn_Delete']['data_id']) ? $value_Enternal['btn_Delete']['data_id']: ''}}"--}}
                                    class="btn btn-danger btn-xs {{isset($value_Enternal['btn_Delete']['class']) ? $value_Enternal['btn_Delete']['class']: ''}}"
                                    id="{{isset($value_Enternal['btn_Delete']['id']) ? $value_Enternal['btn_Delete']['id']: ''}}"
                                >
                                    <i class="fa fa-trash-o"></i> {{isset($value_Enternal['btn_Delete']['name']) ? $value_Enternal['btn_Delete']['name']: ''}}
                                </button>
                                @break
                            @endswitch
                        @endforeach
                    </td>
                @endif
            @endforeach
        </tr>
    @endforeach
    </tbody>
    </table>
</div>


<!-- How to use -->
{{--@component('supermarket::storeCashier.components.components_For_Js.Table',
                [ 'theads' =>[
                                ['width'=>'30%',
                                'name'=>__('supermarket::storeCashier/Dashboard.people_Plan.form.address_Table_Head_Addresses_Added'),],
                                ['width'=>'30%',
                                'name'=>__('supermarket::storeCashier/Dashboard.people_Plan.form.postal_Code'),],
                                ['width'=>'20%',
                                'name'=>'#'.__('supermarket::storeCashier/Dashboard.people_Plan.form.table_Head_Edit')]
                            ],
                 'tbody_All_Td'=> [
                        [
                        'select'=>'addressAddedTable',

                        'sendTableAddress'=> 'Address',
                        'sendTableLat'=> 'Lat',
                        'sendTableLon'=> 'Lon',
                        'sendTableType'=> 'Type',
                        'sendTableCountryData'=> 'Type',
                        'sendTableInputmask'=> 'Type',

                         'number'=>['number'=>'1'],
                         'a_small'=>[
                             'a'=>'Pesamakini Backend UI',
                             'a_class'=>'address',
                             'enter'=>'',
                             'small'=>'Created 01.01.2015',
                             ],
                         'postal_Code'=>[
                             'a'=>'1657894343',
                             'a_class'=>'postal_Code',
                             ],
                         'btn'=>[
                             'btn_Edit'=>[
                                 'select'=>'userAddressEditTableTrAddress',
                                'name'=>__('supermarket::storeCashier/Dashboard.people_Plan.form.edit'),
                                'id'=>'',
                                'class'=>'',
                                ],
                             'btn_Delete'=>[
                                 'select'=>'userAddressDeleteTableTrAddress',
                                'name'=>__('supermarket::storeCashier/Dashboard.people_Plan.form.delete'),
                                'id'=>'',
                                'class'=>'',
                                ],
                             //'name_Btn_Edit'=>__('supermarket::storeCashier/Dashboard.people_Plan.form.edit'),
                             //'name_Btn_Delete'=>__('supermarket::storeCashier/Dashboard.people_Plan.form.delete'),
                             //'id_Btn_Edit'=>'',
                             //'id_Btn_Delete'=>'',
                             //'class_Btn_Edit'=>'',
                             //'class_Btn_Delete'=>'',
                             ],
                         ],
                          [
                         'data_Send_Table'=>'qq',
                        'select'=>'addressAddedTable',
                         'number'=>['number'=>'1'],
                         'a_small'=>[
                             'a'=>'Pesamakini Backend UI',
                             'enter'=>'',
                             'small'=>'Created 01.01.2015',
                             ],
                         'postal_Code'=>[
                             'a'=>'1657894343',
                             ],
                         'btn'=>[
                             'btn_Edit'=>[
                                 'select'=>'userAddressEditTableTrAddress',
                                'name'=>__('supermarket::storeCashier/Dashboard.people_Plan.form.edit'),
                                'id'=>'',
                                'class'=>'',
                                ],
                             'btn_Delete'=>[
                                 'select'=>'userAddressDeleteTableTrAddress',
                                'name'=>__('supermarket::storeCashier/Dashboard.people_Plan.form.delete'),
                                'id'=>'',
                                'class'=>'',
                                ],
                             //'name_Btn_Edit'=>__('supermarket::storeCashier/Dashboard.people_Plan.form.edit'),
                             //'name_Btn_Delete'=>__('supermarket::storeCashier/Dashboard.people_Plan.form.delete'),
                             //'id_Btn_Edit'=>'',
                             //'id_Btn_Delete'=>'',
                             //'class_Btn_Edit'=>'',
                             //'class_Btn_Delete'=>'',
                             ],
                         ]
                  ],
            ])
                                @endcomponent--}}

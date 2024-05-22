$.getScript('assets/auth/js/authenticate.js')
//$.getScript('assets/planSelection/export.js')
//$.getScript('assets/planSelection/public/public.js')
    .done(function () {
        $(document).ready(function () {
            var storage = cryptio;
            $('#btn_Login').click(function () {
                $.ajax({
                    url: '/login',// route('storeCashier.StoreCashier_PostsController'),
                    xhrFields: {
                        withCredentials: true
                    },
                    //crossDomain: true,
                    async: true,
                    method: 'POST',
                    data: {
                        'email': $('#email').val(),
                        'password': $('#password').val(),
                        //'Data': JSON.stringify(json_Data_Final_Store)
                    },
                    success: function (data) {
                        console.log(data)
                        //------------------------
                        if (data.hasOwnProperty('result')) {
                            storage.set('access_token', data.result.access_token, function (err, results) {
                                if (err) throw err;
                                // console.log(results);
                            });
                            storage.set('refresh_token', data.result.refresh_token, function (err, results) {
                                if (err) throw err;
                                //console.log(results);
                            });

                            set_Cookie_Locale_And_Timezone(data.result.user_details);
                        }

                        if (data.hasOwnProperty('error')) {
                            PNotify.error({
                                //styling: 'bootstrap3',
                                title: Lang.get('System/PlanSelection.public.Warning'),
                                text: data.error,
                                type: 'error',
                                hide: false,
                                animation: 'fade',
                                addClass: 'planSelection_Error',
                                //styling: 'bootstrap4',
                            });
                        }
                        if (data.hasOwnProperty('redirect')) {
                           window.location.href = data.redirect;
                            //$.redirect(data.redirect);
                        }
                        //--------------------------
                        /*console.log('Done Received login RESPONSE: ' + JSON.stringify(data));
                        alert('done: ' + JSON.stringify(data))*/

                    },
                    error: function (data) {
                        console.log(data)
                        //------------------------
                        var responseText = $.parseJSON(data.responseText);

                        function makeulli_danger() {
                            var sub_ul = $('<ul/>');
                            $.each(responseText.errors, function (key, value) {
                                var sub_li = $('<li/>').html(value);
                                sub_ul.append(sub_li);
                            });
                            $('.planSelection_Error').find('[class="pnotify-text brighttheme-text"]').append(sub_ul);
                            //$(".alert.ui-pnotify-container.alert-danger").find('[class="ui-pnotify-text"]').append(sub_ul);
                        }

                        PNotify.error({
                            title: Lang.get('System/PlanSelection.public.Warning'),
                            text: '',
                            titleTrusted: true,
                            textTrusted: true,
                            type: 'error',
                            hide: false,
                            animation: 'fade',
                            addClass: 'planSelection_Error',
                            //styling: 'bootstrap4',
                        });
                        makeulli_danger();
                        //------------------------
                       /* console.log('Error Received login RESPONSE: ' + JSON.stringify(data));
                        alert('error: ' + JSON.stringify(data))*/
                    },
                    complete: function (data) {
                        //------------------------
                        //------------------------
                        /* console.log('Complete: ' + JSON.stringify(data));
                         alert('Complete: ' + JSON.stringify(data))*/
                    }
                });

            })
        })
    });



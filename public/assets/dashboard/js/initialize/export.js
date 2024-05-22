/*@if(isset($question))
<div class="w3-center w3-margin-bottom col-md-12 col-sm-12 col-xs-12 ">
    <p>{{isset($question) ? $question : ''}}</p>
</div>
@endif
<div class="w3-center ">
    <button id="{{isset($id_Btn1) ? $id_Btn1: 'Null'}}" type="button"
class="button_together w3-btn w3-green w3-round-small col-md-5 col-sm-5 col-xs-5 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 {{isset($btn1_Class) ? $btn1_Class: 'Null'}}">{{isset($btn1_Text) ? $btn1_Text: 'btn1 Text'}}
</button>
<button id="{{isset($id_Btn2) ? $id_Btn2: 'Null'}}" type="button"
class="button_together w3-btn w3-red w3-round-small col-md-5 col-sm-5 col-xs-5 {{isset($btn2_Class) ? $btn2_Class: 'Null'}}"
@if(isset($data_Dismiss_Modal) && $data_Dismiss_Modal)
data-dismiss="modal"
@endif
>{{isset($btn2_Text) ? $btn2_Text: 'btn2 Text'}}
</button>
</div>*/
function button_Together(data) {
    var result = $("<div></div>");

    // Div question
    var question = $("<div></div>");
    question.addClass('w3-center w3-margin-bottom col-md-12 col-sm-12 col-xs-12');
    var question_P = $("<p></p>")
    if (isExist(() => data.question)) {
        question_P.append(data.question);
        question.append(question_P);
    }

    // Div button together
    var button_Together = $('<div class="w3-center"></div>');

    // Green

    var button_Together_Green = $('<button class="button_together w3-btn   w3-round-small col-md-5 col-sm-5 col-xs-5 col-md-offset-1 col-sm-offset-1 col-xs-offset-1" type="button"></button>');
    if (isExist(() => data.id_Btn1)) {
        button_Together_Green.attr('id', data.id_Btn1);
    }
    if (isExist(() => data.btn1_Class)) {
        button_Together_Green.addClass(data.btn1_Class);
    }
    if (isExist(() => data.btn1_Class_Color)) {
        button_Together_Green.addClass(data.btn1_Class_Color);
    } else button_Together_Green.addClass('w3-green');
    if (isExist(() => data.btn1_Text)) {
        button_Together_Green.text(data.btn1_Text);
    }
    if (isExist(() => data.btn1_Attr)) {
        $.each(data.btn1_Attr, function (item, value) {
            button_Together_Green.attr(item, value)
        });
    }

    // Red
    var button_Together_Red = $('<button class="button_together  w3-btn w3-round-small col-md-5 col-sm-5 col-xs-5" type="button"></button>');
    if (isExist(() => data.id_Btn2)) {
        button_Together_Red.attr('id', data.id_Btn2);
    }
    if (isExist(() => data.btn2_Class)) {
        button_Together_Red.addClass(data.btn2_Class);
    }
    if (isExist(() => data.btn2_Class_Color)) {
        button_Together_Red.addClass(data.btn2_Class_Color);
    } else button_Together_Red.addClass('w3-red');
    if (isExist(() => data.data_Dismiss_Modal) && data.data_Dismiss_Modal) {
        button_Together_Red.attr('data-dismiss', "modal");
    }
    if (isExist(() => data.btn2_Text)) {
        button_Together_Red.text(data.btn2_Text);
    }
    if (isExist(() => data.btn2_Attr)) {
        $.each(data.btn2_Attr, function (item, value) {
            button_Together_Red.attr(item, value)
        });
    }

    button_Together.append(button_Together_Green);
    button_Together.append(button_Together_Red);

    result.append(question);
    result.append(button_Together);
    return result;
}

function single_Button_Create(data) {
    var result = $("<div></div>");

    // Div question
    var question = $("<div></div>");
    question.addClass('w3-center w3-margin-bottom col-md-12 col-sm-12 col-xs-12');
    var question_P = $("<p></p>")
    if (isExist(() => data.question)) {
        question_P.append(data.question);
        question.append(question_P);
    }

    // Div button together
    var button_Together = $('<div class="w3-center"></div>');

    // Green

    var button_Together_Green = $('<button class=" w3-btn   w3-round-small col-md-10 col-sm-10 col-xs-10 col-md-offset-1 col-sm-offset-1 col-xs-offset-1" type="button"></button>');
    if (isExist(() => data.id_Btn1)) {
        button_Together_Green.attr('id', data.id_Btn1);
    }
    if (isExist(() => data.btn1_Class)) {
        button_Together_Green.addClass(data.btn1_Class);
    }
    if (isExist(() => data.btn1_Class_Color)) {
        button_Together_Green.addClass(data.btn1_Class_Color);
    } else button_Together_Green.addClass('w3-green');
    if (isExist(() => data.btn1_Text)) {
        button_Together_Green.text(data.btn1_Text);
    }
    if (isExist(() => data.btn1_Attr)) {
        $.each(data.btn1_Attr, function (item, value) {
            button_Together_Green.attr(item, value)
        });
    }

    button_Together.append(button_Together_Green);

    result.append(question);
    result.append(button_Together);
    return result;
}


// Manage create button
manageCreateButton = function () {
    "use strict";
    return {
        btn_forward: function (data) {
            return button_Forward(data);
        },
        btn_back: function (data) {
            return button_Back(data);
        },
        btn_return: function (data = null) {
            return button_Return(data);
        },
    };
}();

// Create btn forward
function button_Forward(data) {

    var a = $('<a class="page_toolbox_control_forward text-center btn btn-sm btn-warning"></a>');
    if (Validate_Rtl_By_Language_Code(win_Locale)) {
        a.addClass('pull-left');
    } else a.addClass('pull-right');
    if (isExist(() => data.id)) {
        a.attr('id', data.id);
    }
    var i = $('<i class="fa fa-arrow-left"></i>');
    a.append(Lang.get('Dashboard.public.next_step'));
    a.append('&nbsp;&nbsp;');
    a.append(i);
    return a;
}

// Create btn back
function button_Back(data) {

    var a = $('<a class="page_toolbox_control_back text-center btn btn-sm btn-warning"></a>');
    if (Validate_Rtl_By_Language_Code(win_Locale)) {
        a.addClass('pull-left');
    } else a.addClass('pull-right');
    if (isExist(() => data.id)) {
        a.attr('id', data.id);
    }
    var i = $('<i class="fa fa-arrow-right"></i>');
    a.append(Lang.get('Dashboard.public.previous_step'));
    a.append('&nbsp;&nbsp;');
    a.append(i);
    return a;
}

// Create btn return
function button_Return(data = null) {

    var a = $('<a class="page_toolbox_control_return text-center btn btn-sm btn-warning"></a>');
    if (Validate_Rtl_By_Language_Code(win_Locale)) {
        a.addClass('pull-left');
    } else a.addClass('pull-right');
    if (isExist(() => data.id)) {
        a.attr('id', data.id);
    }
    var i = $('<i class="fa fa-chevron-left"></i>');
    a.append(Lang.get('Dashboard.public.return'));
    a.append('&nbsp;&nbsp;');
    a.append(i);
    return a;
}

function create_User_Details_Inline(data, clssses, item) {
    var small = $('<small></small>');
    if (isExist(() => clssses)) {
        small.addClass(clssses);
    }
    var strong = $('<strong></strong>');

    if (isExist(() => item) || item == 0) {
        strong.append((item + 1) + ') ');
    }
    strong.append(Lang.get('Dashboard.public.form.first_Name') + ': ')
    small.append(strong);
    if (isExist(() => data.first_name)) {
        small.append(data.first_name + ' ');
    }
    if (isExist(() => data.last_name)) {
        small.append(data.last_name + ' ');
    }
    var strong = $('<strong></strong>');
    strong.text(Lang.get('Dashboard.public.form.ssn') + ': ')
    small.append(strong);
    if (isExist(() => data.ssn)) {
        small.append(data.ssn + ' ');
    }
    var strong = $('<strong></strong>');
    strong.text(Lang.get('Dashboard.public.form.date_Of_Birth') + ': ')
    small.append(strong);
    if (isExist(() => data.date_of_birth)) {
        small.append(moment.utc(data.date_of_birth).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD') + ' ');
    }
    var strong = $('<strong></strong>');
    strong.text(Lang.get('Dashboard.public.form.email') + ': ')
    small.append(strong);
    if (isExist(() => data.email)) {
        small.append(data.email + ' ');
    }
    if (isExist(() => data.phones)) {
        $.each(data.phones, function (item, value) {
            var number = item + 1;
            var strong = $('<strong></strong>');
            var smallPhone = $('<small></small>');
            if (item == 0) {
                strong.text(Lang.get('Dashboard.public.form.phone') + ': ' + number + ') ')
                smallPhone.append(value.number);
            } else {
                strong.text(number + ') ')
                smallPhone.append(value.number);
            }
            small.append(strong);
            small.append(smallPhone);
        });
    }
    if (isExist(() => data.addresses)) {
        $.each(data.addresses, function (item, value) {
            var number = item + 1;
            var strong = $('<strong></strong>');
            var smallAddress = $('<small></small>');
            if (item == 0) {
                strong.text(Lang.get('Dashboard.public.form.address') + ': ' + number + ') ')
                smallAddress.append(value.display_name);
            } else {
                strong.text(number + ') ')
                smallAddress.append(value.display_name);
            }
            small.append(strong);
            small.append(smallAddress);
        });
    }
    return small;
}

////////////////////////////////////////// Create view ///////////////////////////////////

function create_User_View(data) {

    var profileDetails = $('<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 profile_details"></div>');
    var profileView = $('<div class="well profile_view"></div>');

    /*
    |--------------------------------------------------------------------------
    |                               Profile body
    |--------------------------------------------------------------------------
    */

    var profileBody = $('<div class="profile_body col-sm-12"></div>');

    /*
    |--------------------------------------------------------------------------
    |                               Profile body --> header
    |--------------------------------------------------------------------------
    */
    var profileBodyHeader = $('<h4 class="ssn brief"></h4>');
    var i = $('<i class="ssn brief"></i>');
    if (isExist(() => data.ssn) && !isEmpty(data.ssn)) {
        i.text(data.ssn);
    } else i.text(Lang.get('Dashboard.public.form.ssn'));
    profileBodyHeader.append(i);

    /*
    |--------------------------------------------------------------------------
    |                               Profile body --> left
    |--------------------------------------------------------------------------
    */
    var profileBodyLeft = $('<div class="col-xs-7"></div>');
    if (Validate_Rtl_By_Language_Code(win_Locale)) {
        profileBodyLeft.addClass('right');
    } else profileBodyLeft.addClass('left');
    // Name
    var name = $('<h2 class="name"></h2>');
    if (isExist(() => data.name)) {
        name.text(data.name);
    }

    // Append to profile body left name
    profileBodyLeft.append(name);


    /*
    |--------------------------------------------------------------------------
    |                               Profile body --> col 12 email, phones and addresses
    |--------------------------------------------------------------------------
    */
    var profileBodyCol12 = $('<div class="col-xs-12"></div>');

    // Gender
    var gender = $('<p></p>');
    var genderStrong = $('<strong></strong>');
    genderStrong.text(Lang.get('Dashboard.public.form.gender') + ': ')
    var genderSmall = $('<small class="gender"></small>');
    if (isExist(() => data.gender_val)) {
        genderSmall.attr('value', data.gender_val);
    }
    if (isExist(() => data.gender)) {
        genderSmall.text(data.gender);
    }
    gender.append(genderStrong);
    gender.append(genderSmall);

    // Date of birth
    var dateOfBirth = $('<p></p>');
    var dateOfBirthStrong = $('<strong></strong>');
    dateOfBirthStrong.text(Lang.get('Dashboard.public.form.date_Of_Birth') + ': ')
    var dateOfBirthSmall = $('<small class="date-of-birth"></small>');
    if (isExist(() => data.date_of_birth)) {
        dateOfBirthSmall.text(moment.utc(data.date_of_birth).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD'));
    }
    dateOfBirth.append(dateOfBirthStrong);
    dateOfBirth.append(dateOfBirthSmall);

    // Email
    var email = $('<p></p>');
    var emailStrong = $('<strong></strong>');
    emailStrong.text(Lang.get('Dashboard.public.form.email') + ': ')
    var emailSmall = $('<small class="email"></small>');
    if (isExist(() => data.email)) {
        emailSmall.text(data.email);
    }
    email.append(emailStrong);
    email.append(emailSmall);

    // Addresses and phones
    var addressesAndPhonesUL = $('<ul class="list-unstyled"></ul>');

    if (isExist(() => data.addresses)) {
        $.each(data.addresses, function (item, value) {
            var li = $('<li></li>');
            var strong = $('<strong></strong>');
            var number = item + 1;
            var small = $('<small></small>');
            if (item == 0) {
                var i_Home = '<i class="fa fa-home"></i>';
                strong.append(i_Home + ' ' + Lang.get('Dashboard.public.form.address') + ': ')
                li.append(strong);
                small.append(number + ') ' + value);
                li.append(small);
            } else {
                small.append(number + ') ' + value);
                li.append(small);
            }
            addressesAndPhonesUL.append(li);
        });
    }
    if (isExist(() => data.phones)) {
        $.each(data.phones, function (item, value) {
            var li = $('<li></li>');
            var strong = $('<strong></strong>');
            var number = item + 1;
            var small = $('<small></small>');
            var small2 = $('<small style="color: white;font-size: 1px">v</small>');
            if (item == 0) {
                var i_Phone = '<i class="fa fa-phone"></i>';
                strong.append(i_Phone + ' ' + Lang.get('Dashboard.public.form.phone') + ':')
                li.append(strong);
                li.append(small2)
                small.append(number + ') ' + value);
                li.append(small);
            } else {
                li.append(small2)
                small.append(number + ') ' + value);
                li.append(small);
            }
            addressesAndPhonesUL.append(li);
        });
    }

    // Append to profile body col 12, gender, date of birth, email, addresses and phones
    profileBodyCol12.append(gender);
    profileBodyCol12.append(dateOfBirth);
    profileBodyCol12.append(email);
    profileBodyCol12.append(addressesAndPhonesUL);
    /*
    |--------------------------------------------------------------------------
    |                               Profile body --> right
    |--------------------------------------------------------------------------
    */

    var profileBodyRight = $('<div class="col-xs-5 text-center"></div>');
    if (Validate_Rtl_By_Language_Code(win_Locale)) {
        profileBodyRight.addClass('left');
    } else profileBodyRight.addClass('right');

    // Image
    var img = $('<img alt="" class="img-circle img-responsive"></img>');
    if (isExist(() => data.image_src)) {
        img.attr('src', data.image_src);
    } else img.attr('src', '/assets/image/user.png');

    // Append to profile body right img
    profileBodyRight.append(img);

    // Append to profile body
    profileBody.append(profileBodyHeader);
    profileBody.append(profileBodyLeft);
    profileBody.append(profileBodyRight);
    profileBody.append(profileBodyCol12);

    /*
    |--------------------------------------------------------------------------
    |                               Profile footer
    |--------------------------------------------------------------------------
    */

    var profileFooter = $('<div class="profile_footer col-xs-12 bottom text-center"></div>');

    /*
    |--------------------------------------------------------------------------
    |                               Profile footer --> ratings
    |--------------------------------------------------------------------------
    */

    // Star
    var profileFooterStar = $('<div style="direction: ltr" class="col-xs-12 col-sm-8 emphasis "></div>');
    if (Validate_Rtl_By_Language_Code(win_Locale)) {
        profileFooterStar.addClass('col-sm-pull-2');
    } else profileFooterStar.addClass('col-sm-push-2 ');
    var p_Ratings = $('<p class="ratings">');
    var a_Ratings = $('<a></a>');
    var a_Star = '<a><span class="fa fa-star"></span></a>';
    var a_Star_O = '<a><span class="fa fa-star-o"></span></a>';
    if (isExist(() => data.a_ratings)) {
        a_Ratings.text(data.a_ratings + ' ');
    } else a_Ratings.text('4.0 ');
    p_Ratings.append(a_Ratings);
    for (var i = 0; i < data.a_star; i++) {
        p_Ratings.append(a_Star);
    }
    for (var i = 0; i < data.a_star_o; i++) {
        p_Ratings.append(a_Star_O);
    }

    // Append to profile footer star
    profileFooterStar.append(p_Ratings);

    /*
    |--------------------------------------------------------------------------
    |                               Profile footer --> btns
    |--------------------------------------------------------------------------
    */

    var profileFooterBtn = $('<div class="col-xs-12 col-sm-4 emphasis"></div>');

    // Btn comments
    var profileFooterBtn_Comment = $('<button type="button" class="btn btn-success btn-xs"><i class="fa fa-user"></i>&nbsp;<i class="fa fa-comments-o"></i></button>');
    if (isExist(() => data.btn_comments.data)) {
        $.each(data.btn_comments.data, function (item, value) {
            profileFooterBtn_Comment.data(item, value)
        });
    }
    if (isExist(() => data.btn_comments.class)) {
        profileFooterBtn_Comment.addClass(data.btn_comments.class)
    }

    // Append to profile footer btn
    profileFooterBtn.append(profileFooterBtn_Comment);


    // Append to profile footer
    profileFooter.append(profileFooterStar)
    profileFooter.append(profileFooterBtn)


    /*
    |--------------------------------------------------------------------------
    |                               Finally
    |--------------------------------------------------------------------------
    */

    profileView.append(profileBody);
    profileView.append(profileFooter);
    profileDetails.append(profileView);

    return profileDetails;

}

function create_Dealer_View(data) {

    var profileDetails = $('<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 profile_details center-margin"></div>');
    var profileView = $('<div class="well profile_view"></div>');

    /*
    |--------------------------------------------------------------------------
    |                               Profile body
    |--------------------------------------------------------------------------
    */

    var profileBody = $('<div class="profile_body col-sm-12"></div>');

    /*
    |--------------------------------------------------------------------------
    |                               Profile body --> header
    |--------------------------------------------------------------------------
    */
    var profileBodyHeader = $('<h4 class="id brief"></h4>');
    var i = $('<i></i>');
    if (isExist(() => data.id) && !isEmpty(data.id)) {
        i.text(data.id);
    } else i.text(Lang.get('Dashboard.public.form.id'));
    profileBodyHeader.append(i);

    /*
    |--------------------------------------------------------------------------
    |                               Profile body --> left
    |--------------------------------------------------------------------------
    */
    var profileBodyLeft = $('<div class="col-xs-8"></div>');
    if (Validate_Rtl_By_Language_Code(win_Locale)) {
        profileBodyLeft.addClass('right');
    } else profileBodyLeft.addClass('left');

    // Name
    var name = $('<h2 class="name"></h2>');
    if (isExist(() => data.name)) {
        switch (data.dealer_type) {
            case 'shop':
                name.append(Lang.get('Dashboard.dealer_Plan.shop'));
                break;
            case 'company':
                name.append(Lang.get('Dashboard.dealer_Plan.company'));
                break;
            case 'factory':
                name.append(Lang.get('Dashboard.dealer_Plan.factory'));
                break;
        }
        name.append('&nbsp;' + data.name);
    }

    // Website
    var website = $('<p class="w3-margin-top"></p>');
    var websiteStrong = $('<strong><i class="fa fa-globe"></i>&nbsp;</strong>');
    websiteStrong.text(Lang.get('Dashboard.public.form.website') + ': ')
    var websiteSmall = $('<small class="web_site_name"></small>');
    if (isExist(() => data.web_site_name)) {
        websiteSmall.text(data.web_site_name);
    }
    website.append(websiteStrong);
    website.append(websiteSmall);

    // Open
    var open = $('<p></p>');
    var openStrong = $('<strong><i class="fa fa-clock-o"></i>&nbsp;</strong>');
    openStrong.text(Lang.get('Dashboard.public.form.open_hours') + ': ')
    var openSmall = $('<small class="open"></small>');
    if (isExist(() => data.open)) {
        openSmall.text(data.open);
    }
    open.append(openStrong);
    open.append(openSmall);

    // Holidays
    var holidays = $('<p></p>');
    var holidaysStrong = $('<strong><i class="fa fa-calendar"></i>&nbsp;</strong>');
    holidaysStrong.text(Lang.get('Dashboard.public.form.holidays') + ': ')
    holidays.append(holidaysStrong);
    if (isExist(() => data.holidays)) {
        $.each(data.holidays, function (item, value) {
            var small = $('<small class="holidays"></small>');
            var strong = $('<strong></strong>');
            var number = (item + 1);
            strong.append(number + ') ');
            small.append(strong);
            small.append(value.text + '  ');
            holidays.append(small);
        });
    }

    // emails
    var emails = $('<p></p>');
    var emailsStrong = $('<strong><i class="fa fa-envelope"></i>&nbsp;</strong>');
    emailsStrong.text(Lang.get('Dashboard.public.form.email') + ': ')
    emails.append(emailsStrong);
    if (isExist(() => data.emails)) {
        $.each(data.emails, function (item, value) {
            var small = $('<small class="emails"></small>');
            var strong = $('<strong></strong>');
            var number = item + 1;
            strong.append(number + ') ');
            small.append(strong);
            small.append(value.email + '  ');
            emails.append(small);
        });
    }

    // Append to profile body left name
    profileBodyLeft.append(name);
    profileBodyLeft.append(website);
    profileBodyLeft.append(open);
    profileBodyLeft.append(holidays);
    profileBodyLeft.append(emails);

    // National ID
    if (isExist(() => data.national_ID)) {
        var nationalID = $('<p></p>');
        var nationalIDStrong = $('<strong><i class="fa fa-barcode"></i>&nbsp;</strong>');
        nationalIDStrong.text(Lang.get('Dashboard.public.form.national_id') + ': ')
        var nationalIDSmall = $('<small class="national_id"></small>');
        nationalIDSmall.text(data.national_ID);
        nationalID.append(nationalIDStrong);
        nationalID.append(nationalIDSmall);
        profileBodyLeft.append(nationalID);
    }

    // Registration Number
    if (isExist(() => data.registration_number)) {
        var registrationNumber = $('<p></p>');
        var registrationNumberStrong = $('<strong><i class="fa fa-barcode"></i>&nbsp;</strong>');
        registrationNumberStrong.text(Lang.get('Dashboard.public.form.registration_number') + ': ')
        var registrationNumberSmall = $('<small class="registration_number"></small>');
        registrationNumberSmall.text(data.registration_number);
        registrationNumber.append(registrationNumberStrong);
        registrationNumber.append(registrationNumberSmall);
        profileBodyLeft.append(registrationNumber);
    }

    // Economical Number
    if (isExist(() => data.economical_number)) {
        var economicalNumber = $('<p></p>');
        var economicalNumberStrong = $('<strong><i class="fa fa-barcode"></i>&nbsp;</strong>');
        economicalNumberStrong.text(Lang.get('Dashboard.public.form.economical_number') + ': ')
        var economicalNumberSmall = $('<small class="economical_number"></small>');
        economicalNumberSmall.text(data.economical_number);
        economicalNumber.append(economicalNumberStrong);
        economicalNumber.append(economicalNumberSmall);
        profileBodyLeft.append(economicalNumber);
    }

    /*
    |--------------------------------------------------------------------------
    |                               Profile body --> right
    |--------------------------------------------------------------------------
    */

    var profileBodyRight = $('<div class="col-xs-4 text-center"></div>');
    if (Validate_Rtl_By_Language_Code(win_Locale)) {
        profileBodyRight.addClass('left');
    } else profileBodyRight.addClass('right');

    // Image
    var img = $('<img alt="" class="img-responsive"></img>');

    if (isExist(() => data.logo) && !isEmpty(data.logo)) {
        img.attr('src', data.logo);
    } else {
        switch (data.dealer_type) {
            case 'shop':
                img.attr('src', '/assets/image/shop-logo.png');
                break;
            case 'company':
                img.attr('src', '/assets/image/company-logo.png');
                break;
            case 'factory':
                img.attr('src', '/assets/image/factory-logo.png');
                break;
        }
    }

    // Append to profile body right img
    profileBodyRight.append(img);

    /*
    |--------------------------------------------------------------------------
    |                               Profile body --> col 12 email, phones and addresses
    |--------------------------------------------------------------------------
    */
    var profileBodyCol12 = $('<div class="col-xs-12"></div>');

    // Managing director
    var managingDirector = $('<p></p>');
    var managingDirectorStrong = $('<strong><i class="fa fa-tasks"></i>&nbsp;</strong>');
    managingDirectorStrong.text(Lang.get('Dashboard.public.form.managing_director') + ': ')
    managingDirector.append(managingDirectorStrong);
    if (isExist(() => data.userManagingDirector) && !isEmpty(data.userManagingDirector)) {
        managingDirector.append(create_User_Details_Inline(data.userManagingDirector, 'managing_director'));
    }

    // Owners
    var owners = $('<p></p>');
    var ownersStrong = $('<strong><i class="fa fa-users"></i>&nbsp;</strong>');
    ownersStrong.text(Lang.get('Dashboard.public.form.owners') + ': ')
    owners.append(ownersStrong);
    if (isExist(() => data.owners) && !isEmpty(data.owners)) {
        $.each(data.owners, function (item, value) {
            owners.append(create_User_Details_Inline(value.user, 'owners', item));
            owners.append('<br>');
        })
    }

    // Suppliers
    var suppliers = $('<p></p>');
    var suppliersStrong = $('<strong><i class="fa fa-industry"></i>&nbsp;</strong>');
    suppliersStrong.text(Lang.get('Dashboard.public.form.suppliers') + ': ')
    suppliers.append(suppliersStrong);
    if (isExist(() => data.suppliers) && !isEmpty(data.suppliers)) {
        $.each(data.suppliers, function (item, value) {
            suppliers.append(create_User_Details_Inline(value.user, 'suppliers', item));
            suppliers.append('<br>');
        })
    }

    // Addresses
    var addresses = $('<p></p>');
    var addressesStrong = $('<strong><i class="fa fa-home"></i>&nbsp;</strong>');
    addressesStrong.text(Lang.get('Dashboard.public.form.address') + ': ')
    addresses.append(addressesStrong);
    if (isExist(() => data.addresses) && !isEmpty(data.addresses)) {
        $.each(data.addresses, function (item, value) {
            var small = $('<small class="address"></small>');
            var strong = $('<strong></strong>');
            var number = item + 1;
            strong.append(number + ') ');
            small.append(strong);
            small.append(value.display_name);
            addresses.append(small);
            addresses.append('<br>');
        })
    }

    // Phones
    var phones = $('<p></p>');
    var phonesStrong = $('<strong><i class="fa fa-phone"></i>&nbsp;</strong>');
    phonesStrong.text(Lang.get('Dashboard.public.form.phone') + ': ')
    phones.append(phonesStrong);
    if (isExist(() => data.phones) && !isEmpty(data.phones)) {
        $.each(data.phones, function (item, value) {
            var small = $('<small class="phone"></small>');
            var strong = $('<strong></strong>');
            var number = item + 1;
            strong.append(number + ') ');
            small.append(strong);
            small.append(value.number);
            phones.append(small);
            phones.append('<br>');
        })
    }


    // Append to profile body col 12, gender, date of birth, email, addresses and phones
    profileBodyCol12.append(managingDirector);
    profileBodyCol12.append(owners);
    profileBodyCol12.append(suppliers);
    profileBodyCol12.append(addresses);
    profileBodyCol12.append(phones);


    // Append to profile body
    profileBody.append(profileBodyHeader);
    profileBody.append(profileBodyLeft);
    profileBody.append(profileBodyRight);
    profileBody.append(profileBodyCol12);

    /*
    |--------------------------------------------------------------------------
    |                               Profile footer
    |--------------------------------------------------------------------------
    */

    var profileFooter = $('<div class="profile_footer col-xs-12 bottom text-center"></div>');

    /*
    |--------------------------------------------------------------------------
    |                               Profile footer --> ratings
    |--------------------------------------------------------------------------
    */

    // Star
    var profileFooterStar = $('<div style="direction: ltr" class="col-xs-12 col-sm-8 emphasis "></div>');
    if (Validate_Rtl_By_Language_Code(win_Locale)) {
        profileFooterStar.addClass('col-sm-pull-2');
    } else profileFooterStar.addClass('col-sm-push-2 ');
    var p_Ratings = $('<p class="ratings">');
    var a_Ratings = $('<a></a>');
    var a_Star = '<a><span class="fa fa-star"></span></a>';
    var a_Star_O = '<a><span class="fa fa-star-o"></span></a>';
    if (isExist(() => data.a_ratings)) {
        a_Ratings.text(data.a_ratings + ' ');
    } else a_Ratings.text('4.0 ');
    p_Ratings.append(a_Ratings);
    if (isExist(() => data.a_star) && isExist(() => data.a_star_o)) {
        for (var i = 0; i < data.a_star; i++) {
            p_Ratings.append(a_Star);
        }
        for (var i = 0; i < data.a_star_o; i++) {
            p_Ratings.append(a_Star_O);
        }
    }
    // Append to profile footer star
    profileFooterStar.append(p_Ratings);

    /*
    |--------------------------------------------------------------------------
    |                               Profile footer --> btns
    |--------------------------------------------------------------------------
    */

    var profileFooterBtn = $('<div class="col-xs-12 col-sm-4 emphasis"></div>');

    // Btn comments
    var profileFooterBtn_Comment = $('<button type="button" class="btn btn-success btn-xs"><i class="fa fa-user"></i>&nbsp;<i class="fa fa-comments-o"></i></button>');
    if (isExist(() => data.btn_comments.data)) {
        $.each(data.btn_comments.data, function (item, value) {
            profileFooterBtn_Comment.data(item, value)
        });
    }
    if (isExist(() => data.btn_comments.class)) {
        profileFooterBtn_Comment.addClass(data.btn_comments.class)
    }

    // Append to profile footer btn
    profileFooterBtn.append(profileFooterBtn_Comment);


    // Append to profile footer
    profileFooter.append(profileFooterStar)
    profileFooter.append(profileFooterBtn)


    /*
    |--------------------------------------------------------------------------
    |                               Finally
    |--------------------------------------------------------------------------
    */

    profileView.append(profileBody);
    profileView.append(profileFooter);
    profileDetails.append(profileView);

    return profileDetails;

}

////////////////////////////////////////// Create view ///////////////////////////////////

function create_alert_html_ul(id, danger_or_ets) {
    return '<div  role="alert"\n' +
        '                                 class="alert alert-' + danger_or_ets + '  text-center col-md-6 col-sm-6 col-xs-12 col-md-offset-3 col-sm-offset-3 shop_FloorPlan_Step alert-dismissible fade in">\n' +
        '                                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span\n' +
        '                                            aria-hidden="true">×</span>\n' +
        '                                </button>\n' +
        '                                <ul id="' + id + '">\n' +
        '                                </ul>\n' +
        '                            </div>'
}

function create_Component_Alert_Message(message, danger_or_ets) {
    return '<div id="alert_Type_Message" class="alert ' + danger_or_ets + '  text-center col-md-6 col-sm-6 col-xs-12 col-md-offset-3 col-sm-offset-3 shop_FloorPlan_Step alert-dismissible fade in"\n' +
        '                     role="alert">\n' +
        '                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span>\n' +
        '                    </button>\n' +
        '                    ' + message + '\n' +
        '                </div>'
}

function create_Component_Tbody_Tr_Table(data_Iso_Tr) {

    var tr = $("<tr></tr>");
    let not_In=['select','class','style','data','attr'];

    if (isExist(() => data_Iso_Tr.select))
        tr.attr('data-select', data_Iso_Tr.select);
    if (isExist(() => data_Iso_Tr.class))
        tr.addClass(data_Iso_Tr.class);
    if (isExist(() => data_Iso_Tr.style))
        tr.css(data_Iso_Tr.style)
    if (isExist(() => data_Iso_Tr.data)) {
        $.each(data_Iso_Tr.data, function (item, value) {
            tr.data(item, value)
        });
    }
    if (isExist(() => data_Iso_Tr.attr)) {
        $.each(data_Iso_Tr.attr, function (item, value) {
            tr.attr(item, value)
        });
    }

    $.each(data_Iso_Tr, function (tbody_Td_Elements, tbody_Td_Elements_Value) {
        if (isObject(tbody_Td_Elements_Value) && $.inArray(tbody_Td_Elements, not_In) < 0) {

            var td = $("<td></td>");

            $.each(tbody_Td_Elements_Value, function (tbody_Td_Elements_Enternal, tbody_Td_Elements_Enternal_Value) {

                function switch_Tbody_Td_Elements(value) {
                    switch (Object.keys(value)[0]) {
                        case 'number':
                            var p = $("<p></p>");
                            if (isExist(() => value.number_class))
                                p.addClass(value.number_class);
                            if (isExist(() => value.number_style))
                                p.css(value.number_style)
                            p.text(value.number);
                            return p;
                            //return '<p>' + value.number + '</p>'
                            break;
                        case 'enter':
                            return '<br/>'
                            break;
                        case 'a':
                            var a = $("<a></a>");
                            if (isExist(() => value.a_class))
                                a.addClass(value.a_class);
                            if (isExist(() => value.a_style))
                                a.css(value.a_style)
                            a.text(value.a);
                            return a;
                            break;
                        case 'i':
                            var i = $("<i></i>");
                            if (isExist(() => value.i_class))
                                i.addClass(value.i_class);
                            if (isExist(() => value.i_style))
                                i.css(value.i_style)
                            //i.text(value.i);
                            return i;
                            break;
                        case 'p':
                            var p = $("<p></p>");
                            if (isExist(() => value.class))
                                p.addClass(value.class);
                            if (isExist(() => value.style))
                                p.css(value.style)
                            if (isExist(() => value.data)) {
                                $.each(value.data, function (item, value) {
                                    p.data(item, value)
                                });
                            }
                            if (isExist(() => value.attr)) {
                                $.each(value.attr, function (item, value) {
                                    p.attr(item, value)
                                });
                            }
                            p.text(value.p);
                            return p;
                            break;
                        case 'hr':
                            var hr = $("<hr>");
                            if (isExist(() => value.class))
                                hr.addClass(value.class);
                            if (isExist(() => value.style))
                                hr.css(value.style)
                            if (isExist(() => value.data)) {
                                $.each(value.data, function (item, value) {
                                    hr.data(item, value)
                                });
                            }
                            if (isExist(() => value.attr)) {
                                $.each(value.attr, function (item, value) {
                                    hr.attr(item, value)
                                });
                            }
                            return hr;
                            break;
                        case 'small':
                            var small = $("<small></small>");
                            if (isExist(() => value.small_class))
                                small.addClass(value.small_class);
                            if (isExist(() => value.small_style))
                                small.css(value.small_style)
                            small.text(value.small);
                            return small;
                            break;
                        case 'switch':
                            var switcheryDiv = $("<div class='custom-control custom-switch'></div>");
                            var switcheryInput = $("<input class='custom-control-input'></input>");
                            var switcheryLable = $("<label class='custom-control-label'></label>");

                            if (isExist(() => value.switch.checked) && value.switch.checked)
                                switcheryInput.prop('checked', true).trigger("change");

                            if (isExist(() => value.switch.class))
                                switcheryInput.addClass(value.switch.class)

                            if (isExist(() => value.switch.data)) {
                                $.each(value.switch.data, function (item, value) {
                                    switcheryInput.data(item, value)
                                });
                            }
                            if (isExist(() => value.switch.attr)) {
                                $.each(value.switch.attr, function (item, value) {
                                    switcheryInput.attr(item, value)
                                });
                            }
                            if (isExist(() => value.switch.lable_text))
                                switcheryLable.append(' ' + value.switch.lable_text)

                            if (isExist(() => value.switch.attr.id))
                                switcheryLable.attr('for', value.switch.attr.id)

                            switcheryDiv.append(switcheryInput);
                            switcheryDiv.append(switcheryLable);

                            return switcheryDiv;
                            break;
                        case 'small_input':
                            let small_Input = $('<small> <input> </small>');
                            if (isExist(() => value.small_input.value))
                                small_Input.find('input').val(value.small_input.value)
                            if (isExist(() => value.small_input.data)) {
                                $.each(value.small_input.data, function (item, value) {
                                    small_Input.find('input').data(item, value)
                                });
                            }
                            if (isExist(() => value.small_input.attr)) {
                                $.each(value.small_input.attr, function (item, value) {
                                    small_Input.find('input').attr(item, value)
                                });
                            }

                            if (isExist(() => value.small_input.class))
                                small_Input.find('input').addClass(value.small_input.class)
                            if (isExist(() => value.small_input.style))
                                small_Input.find('input').css(value.small_input.style)

                            return small_Input;
                            break;
                        case 'checkbox':
                            let checkbox = $('<input type="checkbox">');
                            if (isExist(() => value.value))
                                checkbox.val(value.value)
                            if (isExist(() => value.data)) {
                                $.each(value.data, function (item, value) {
                                    checkbox.data(item, value)
                                });
                            }
                            if (isExist(() => value.attr)) {
                                $.each(value.attr, function (item, value) {
                                    checkbox.attr(item, value)
                                });
                            }

                            if (isExist(() => value.class))
                                checkbox.addClass(value.class)
                            if (isExist(() => value.style))
                                checkbox.css(value.style)

                            return checkbox;
                            break;
                        case 'dropdown':
                            let dropdownDiv = $('<div class="btn-group"></div>');
                            let dropdownA = $('<a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false"> <span class="caret"></span></a>');
                            let dropdownUl = $('<ul class="dropdown-menu animated fadeInDown" role="menu"></ul>');

                            if (isExist(() => value.dropdown.element)) {
                                $.each(value.dropdown.element, function (item, value) {
                                    let dropdownLi = $('<li role="presentation"><a role="button" tabindex="-1"></a></li>');
                                    if (isExist(() => value.text))
                                        dropdownLi.find('a').text(value.text);
                                    if (isExist(() => value.class))
                                        dropdownLi.find('a').addClass(value.class)
                                    if (isExist(() => value.active) && value.active)
                                        dropdownLi.addClass('active')
                                    if (isExist(() => value.data)) {
                                        $.each(value.data, function (item, value) {
                                            dropdownLi.find('a').data(item, value)
                                        });
                                    }
                                    if (isExist(() => value.attr)) {
                                        $.each(value.attr, function (item, value) {
                                            dropdownLi.find('a').attr(item, value)
                                        });
                                    }
                                    dropdownUl.append(dropdownLi);
                                });
                            }
                            if (isExist(() => value.dropdown.class))
                                dropdownDiv.addClass(value.dropdown.class)
                            if (isExist(() => value.dropdown.name))
                                dropdownA.append(' ' + value.dropdown.name)

                            dropdownDiv.append(dropdownA);
                            dropdownDiv.append(dropdownUl);
                            return dropdownDiv;
                            break;
                        case 'btn_Edit':
                            var button = $("<button type='button'></button>");
                            button.addClass('btn btn-info btn-xs ')
                            if (isExist(() => value.btn_Edit.class))
                                button.addClass(value.btn_Edit.class)

                            if (isExist(() => value.btn_Edit.data)) {
                                $.each(value.btn_Edit.data, function (item, value) {
                                    button.data(item, value)
                                });
                            }
                            if (isExist(() => value.btn_Edit.attr)) {
                                $.each(value.btn_Edit.attr, function (item, value) {
                                    button.attr(item, value)
                                });
                            }


                            button.append('<i class="fa fa-pencil"></i>')
                            if (isExist(() => value.btn_Edit.name))
                                button.append(' ' + value.btn_Edit.name)
                            return button;
                            break;
                        case 'btn_View':
                            var button = $("<button type='button'></button>");
                            button.addClass('btn btn-primary btn-xs ')
                            if (isExist(() => value.btn_View.class))
                                button.addClass(value.btn_View.class)

                            if (isExist(() => value.btn_View.data)) {
                                $.each(value.btn_View.data, function (item, value) {
                                    button.data(item, value)
                                });
                            }
                            if (isExist(() => value.btn_View.attr)) {
                                $.each(value.btn_View.attr, function (item, value) {
                                    button.attr(item, value)
                                });
                            }
                            button.append('<i class="fa fa-eye"></i>')
                            if (isExist(() => value.btn_View.name))
                                button.append(' ' + value.btn_View.name)
                            return button;
                            break;
                        case 'btn_Delete':
                            var button = $("<button type='button'></button>");
                            button.addClass('btn btn-danger btn-xs ')
                            if (isExist(() => value.btn_Delete.class))
                                button.addClass(value.btn_Delete.class)

                            if (isExist(() => value.btn_Delete.data)) {
                                $.each(value.btn_Delete.data, function (item, value) {
                                    button.data(item, value)
                                });
                            }
                            if (isExist(() => value.btn_Delete.attr)) {
                                $.each(value.btn_Delete.attr, function (item, value) {
                                    button.attr(item, value)
                                });
                            }
                            button.append('<i class="fa fa-trash-o"></i>')
                            if (isExist(() => value.btn_Delete.name))
                                button.append(' ' + value.btn_Delete.name)
                            return button;
                            break;
                        case 'only_append':
                            return value.only_append;
                            break;
                    }
                }

                if (isExist(() => tbody_Td_Elements_Enternal_Value.data.td_style)) {
                    td.css(tbody_Td_Elements_Enternal_Value.data.td_style)
                }
                if (isExist(() => tbody_Td_Elements_Enternal_Value.data.td_class))
                    td.addClass(tbody_Td_Elements_Enternal_Value.data.td_class)
                if (isExist(() => tbody_Td_Elements_Enternal_Value.data.td_data)) {
                    $.each(tbody_Td_Elements_Enternal_Value.data.td_data, function (item, value) {
                        td.data(item, value)
                    });
                }
                if (isExist(() => tbody_Td_Elements_Enternal_Value.data.td_attr)) {
                    $.each(tbody_Td_Elements_Enternal_Value.data.td_attr, function (item, value) {
                        td.attr(item, value)
                    });
                }

                td.append(switch_Tbody_Td_Elements(tbody_Td_Elements_Enternal_Value));
            });

            tr.append(td)

        }
    });
    return tr;
}

function create_Table(data) {
    var table = $('<table class="table table-striped jambo_table " width="100%"></table>')
    var thead = $('<thead></thead>')
    var tr_Thead = $('<tr></tr>')
    var tbody = $('<tbody></tbody>')

    // Table css class data & attr
    if (isExist(() => data.table.class))
        table.addClass(data.table.class);
    if (isExist(() => data.table.style))
        table.css(data.table.style)
    if (isExist(() => data.table.data)) {
        $.each(data.table.data, function (item, value) {
            table.data(item, value)
        });
    }
    if (isExist(() => data.table.attr)) {
        $.each(data.table.attr, function (item, value) {
            table.attr(item, value)
        });
    }

    // Table thead css class data & attr
    if (isExist(() => data.thead_details.class))
        thead.addClass(data.thead_details.class);
    if (isExist(() => data.thead_details.style))
        thead.css(data.thead_details.style)
    if (isExist(() => data.thead_details.data)) {
        $.each(data.thead_details.data, function (item, value) {
            thead.data(item, value)
        });
    }
    if (isExist(() => data.thead_details.attr)) {
        $.each(data.thead_details.attr, function (item, value) {
            thead.attr(item, value)
        });
    }

    // Table tbody css class data & attr
    if (isExist(() => data.tbody_details.class))
        tbody.addClass(data.tbody_details.class);
    if (isExist(() => data.tbody_details.style))
        tbody.css(data.tbody_details.style)
    if (isExist(() => data.tbody_details.data)) {
        $.each(data.tbody_details.data, function (item, value) {
            tbody.data(item, value)
        });
    }
    if (isExist(() => data.tbody_details.attr)) {
        $.each(data.tbody_details.attr, function (item, value) {
            tbody.attr(item, value)
        });
    }

    $.each(data.thead, function (item, value) {
        var th = $('<th></th>');
        if (isExist(() => value.element) && !isEmpty(value.element))
            th.append(value.element.html());
        else
            th.text(value.name);
        if (isExist(() => value.class))
            th.addClass(value.class);
        if (isExist(() => value.style))
            th.css(value.style)
        if (isExist(() => value.data)) {
            $.each(value.data, function (item, value) {
                th.data(item, value)
            });
        }
        if (isExist(() => value.attr)) {
            $.each(value.attr, function (item, value) {
                th.attr(item, value)
            });
        }


        tr_Thead.append(th)
    });
    thead.append(tr_Thead);
    table.append(thead);
    table.append(tbody);
    return table;
}

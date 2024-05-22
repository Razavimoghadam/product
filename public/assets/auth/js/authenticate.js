let token = 'ss';
window.variable_Settings = {
    hostName_master: 'wf.ir',
    protocol_master: 'https',
    company_logo: 'assets/image/app_settings/pwa/images/Logo.png',
    logo_description: 'tamim bonyan inc.',
    timeout: 9100000000,
    //timeout: 70000,
}
window.ipinfo = '';
window.hostName_Master = 'wf.ir';
window.protocol_Master = 'https';
window.storage = cryptio;
window.pagePath_Client = $(location).attr("pathname");
window.hostName_Client = $(location).attr("hostname");
let array_Subdomain_Client = [];
let identify_Subdomain_Client = 'Master';

let parsed_URL_Client = psl.parse(hostName_Client);
window.subdomain_Client = parsed_URL_Client.subdomain;
if (subdomain_Client != null)
    array_Subdomain_Client = subdomain_Client.split(".");

class Form_Create_Authenticate {

    Set_Ip_Info(data) {
        if (data.countryCode && !isEmpty(data.countryCode)) {
            ipinfo = data.map(function (value, key) {
                value.loc = value.lat + ',' + value.lon;
                ipinfo.countryCode = value.countryCode
                return value;
            })[0];
        } else {
            ipinfo = {
                "status": "success",
                "country": "Iran",
                "countryCode": "IR",
                "region": "23",
                "regionName": "Tehran",
                "city": "Tehran",
                "zip": "",
                "lat": 35.6892,
                "lon": 51.389,
                "loc": "35.6892,51.389",
                "timezone": "Asia/Tehran",
                "isp": "Telecommunication Company of Iran",
                "org": "Telecommunication Company of Tehran",
                "as": "AS58224 Iran Telecommunication Company PJS",
                "query": "5.239.100.208"
            };
        }

    }

    Get_Ip_Info() {
        let this_Class = this;
        // Set ip info
        $.ajax({
            // url: 'https://ipinfo.io',  ===> get filtered
            // url: 'http://ip-api.com/json/?fields=status,country,countryCode,region,regionName,city,zip,lat,lon,timezone,currency,isp,org,as,query',  ===> get priced
            //url: 'https://extreme-ip-lookup.com/json/',
            url: 'http://ip-api.com/json',
            method: 'get',
            dataType: "jsonp",
            success: function (data) {
                console.log(data)
                //------------------------
                data = [data]
                this_Class.Set_Ip_Info(data);
                //--------------------------
                /*console.log('success: ' + JSON.stringify(data));
                alert('success: ' + JSON.stringify(data))*/
            },
            error: function (data) {
                console.log(data)
                //------------------------
                this_Class.Set_Ip_Info(data);
            },
            complete: function (data) {
                //------------------------
                //------------------------
                /*  console.log('complete: ' + JSON.stringify(data));
             alert('complete: ' + JSON.stringify(data)) */
            }
        });
    }

    Ajax_Setup() {
        $(document).ajaxError(function (e, xhr, settings) {
            if (xhr.status == 401 && pagePath_Client !== '/login') {
                window.location.href = '/login';
            }
            if (xhr.status == 419 && pagePath_Client !== '/login') {
                window.location.href = '/login';
            }
            /*if (xhr.status == 404 && pagePath_Client !== '/login') {
                window.location.href = '/login';
            }*/
            if (xhr.status == 403) {
                let data = JSON.parse(xhr.responseText);
                if (data.hasOwnProperty('redirect')) {
                    window.location.href = data.redirect;
                }
            }
        });
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Accept", "text/javascript,application/javascript,text/html,application/json");
                // xhr.setRequestHeader("Accept", "application/vvv.website+json;version=1");
                //xhr.setRequestHeader("Authorization", "Bearer " + token);
            }
        });
    }

    TimeOut_Setup() {
        let this_Class = this;
        this_Class.timeout();
        $("*").click(function () {
            this_Class.timeout();
        });
    }
    timeout() {
        try {
            clearTimeout(login_Timeout);
        } catch (e) {

        }
        //isExist(() => login_Timeout) ? clearTimeout(login_Timeout) : '';
        window.login_Timeout = setTimeout(function () {
            window.location.href = '/login';
        }, variable_Settings.timeout);
    }

    init() {
        this.Get_Ip_Info();
        this.Ajax_Setup();
        this.TimeOut_Setup();
    }
}

let form_Create_Authenticate = new Form_Create_Authenticate();
form_Create_Authenticate.init();







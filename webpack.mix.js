const mix = require('laravel-mix');

//require('laravel-mix-merge-manifest');
//mix.mergeManifest();

/*mix.webpackConfig({
    /!*node: {
        fs: "empty"
    },*!/
    target: 'node',
    resolve: {
        alias: {
            "handlebars" : "handlebars/dist/handlebars.js"
        }
    },
});*/
/*mix.webpackConfig({
    node: {
        fs: 'empty'
    }
});*/
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/*
 |--------------------------------------------------------------------------
 | Core
 |--------------------------------------------------------------------------
 |
 */
const WebpackShellPlugin = require('webpack-shell-plugin');

// Add shell command plugin configured to create JavaScript language file
/*mix.webpackConfig({
    plugins:
        [
            new WebpackShellPlugin({onBuildStart: ['php artisan lang:js --quiet'], onBuildEnd: []})
        ]
});*/
/*const path = require('path')

mix.webpackConfig({
    resolve: {
        alias: {
            ziggy: path.resolve('vendor/tightenco/ziggy/dist/js/route.js'),
        },
    },
    plugins: [
        new WebpackShellPlugin({onBuildStart: ['php artisan ziggy:generate "public/assets/foo.js"'], onBuildEnd: []})
    ]
})*/


// Serviceworker
/*mix.copy([
    'resources/assets/app_settings/pwa/images',
], 'public/assets/app_settings/pwa/images');
mix.copy([
    'resources/assets/app_settings/pwa/manifest.json',
], 'public/assets/app_settings/pwa');
mix.copy([
    'resources/assets/app_settings/pwa/serviceworker.js',
], 'public');*/

/*
 |--------------------------------------------------------------------------
 | Auth
 |--------------------------------------------------------------------------
 */

mix.scripts([
    <!-- jquery -->
    'node_modules/gentelella/vendors/jquery/dist/jquery.min.js',
    <!-- pace -->
    //'node_modules/pace-progress/pace.js',
    <!-- bootstrap -->
    'node_modules/gentelella/vendors/bootstrap/dist/js/bootstrap.min.js',
    <!-- crypt -->
    'node_modules/crypt.io/dist/crypt.io.min.js',
    <!-- cross-storage -->
    'node_modules/cross-storage/dist/hub.min.js',
    'node_modules/cross-storage/dist/client.min.js',
    <!-- sjcl -->
    'node_modules/sjcl/sjcl.js',
    <!-- pnotify -->
    'node_modules/gentelella/vendors/pnotify/dist/pnotify.js',
    'node_modules/gentelella/vendors/pnotify/dist/pnotify.buttons.js',
    'node_modules/gentelella/vendors/pnotify/dist/pnotify.nonblock.js',
    <!-- axios -->
    'node_modules/axios/dist/axios.min.js',
    <!-- jquery.redirect -->
    'node_modules/jquery.redirect/jquery.redirect.js',
    <!-- psl -->
    'node_modules/psl/dist/psl.min.js',
    <!-- js.cookie -->
    'node_modules/js-cookie/src/js.cookie.js',
], 'public/assets/auth/js/app-login.js').version();
mix.styles([
    //'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/gentelella/vendors/font-awesome/css/font-awesome.min.css',
    'node_modules/gentelella/vendors/nprogress/nprogress.css',
    'node_modules/gentelella/vendors/animate.css/animate.css',
    <!-- pnotify -->
    'node_modules/gentelella/vendors/pnotify/dist/pnotify.css',
    'node_modules/gentelella/vendors/pnotify/dist/pnotify.buttons.css',
    'node_modules/gentelella/vendors/pnotify/dist/pnotify.nonblock.css',
    //'node_modules/gentelella/build/css/custom.css',
], 'public/assets/auth/css/app-login.css').version();

/*
 |--------------------------------------------------------------------------
 | Dashboard
 |--------------------------------------------------------------------------
 */
<!-- Master -->
mix.scripts([
    <!-- jQuery -->
    'resources/assets/package_manually/jquery/jquery-2.2.4.min.js',
    // 'node_modules/jquery/dist/jquery.min.js',
    //'node_modules/gentelella/vendors/jquery/dist/jquery.min.js',
    <!-- jquery-ui -->
    'node_modules/jquery-ui-dist/jquery-ui.min.js',
    <!-- popper -->
    'node_modules/@popperjs/core/dist/umd/popper.min.js',
    <!-- Bootstrap -->
    'node_modules/gentelella/vendors/bootstrap/dist/js/bootstrap.min.js',
    <!-- crypt -->
    'node_modules/crypt.io/dist/crypt.io.min.js',
    <!-- cross-storage -->
    //'node_modules/cross-storage/dist/hub.min.js',
    'node_modules/cross-storage/dist/client.min.js',
    <!-- sjcl -->
    'node_modules/sjcl/sjcl.js',
    <!-- axios -->
    'node_modules/axios/dist/axios.min.js',
    <!-- psl -->
    'node_modules/psl/dist/psl.min.js',
    <!-- js.cookie -->
    'node_modules/js-cookie/src/js.cookie.js',
    <!-- classes -->
    'resources/assets/dashboard/js/initialize/classes.js',
], 'public/assets/dashboard/js/master-dashboard.js').version();
<!-- App -->
mix.scripts([
    <!-- FastClick -->
    'node_modules/gentelella/vendors/fastclick/lib/fastclick.js',
    <!-- NProgress -->
    'node_modules/gentelella/vendors/nprogress/nprogress.js',
    <!-- jQuery Sparklines -->
    'node_modules/gentelella/vendors/jquery-sparkline/dist/jquery.sparkline.min.js',
    <!-- ECharts -->
    'node_modules/gentelella/vendors/echarts/dist/echarts.min.js',
    'node_modules/gentelella/vendors/echarts/map/js/world.js',
    <!-- Chart.js -->
    'node_modules/gentelella/vendors/Chart.js/dist/Chart.js',
    // 'node_modules/chart.js/dist/Chart.js',
    <!-- Flot -->
    'node_modules/gentelella/vendors/Flot/jquery.flot.js',
    'node_modules/gentelella/vendors/Flot/jquery.flot.pie.js',
    'node_modules/gentelella/vendors/Flot/jquery.flot.time.js',
    'node_modules/gentelella/vendors/Flot/jquery.flot.stack.js',
    'node_modules/gentelella/vendors/Flot/jquery.flot.resize.js',
    <!-- Flot plugins -->
    'node_modules/gentelella/vendors/flot.orderbars/js/jquery.flot.orderBars.js',
    'node_modules/gentelella/vendors/flot-spline/js/jquery.flot.spline.min.js',
    'node_modules/gentelella/vendors/flot.curvedlines/curvedLines.js',
    <!-- gauge.js -->
    'node_modules/gentelella/vendors/gauge.js/dist/gauge.min.js',
    <!-- bootstrap-progressbar -->
    'node_modules/gentelella/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js',
    <!-- iCheck -->
    //'node_modules/gentelella/vendors/iCheck/icheck.min.js',
    'node_modules/icheck/icheck.min.js',
    <!-- Skycons -->
    'node_modules/gentelella/vendors/skycons/skycons.js',
    <!-- DateJS -->
    'node_modules/gentelella/vendors/DateJS/build/date.js',
    <!-- JQVMap -->
    'node_modules/gentelella/vendors/jqvmap/dist/jquery.vmap.js',
    'node_modules/gentelella/vendors/jqvmap/dist/maps/jquery.vmap.world.js',
    'node_modules/gentelella/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js',
    <!-- bootstrap-daterangepicker -->
    //'node_modules/gentelella/vendors/moment/min/moment.min.js',
    'node_modules/gentelella/vendors/bootstrap-daterangepicker/daterangepicker.js',
    <!-- Custom Theme Scripts -->
    'node_modules/gentelella/build/js/custom.min.js',
    <!-- tipped -->
    'node_modules/@staaky/tipped/dist/js/tipped.min.js',
    <!-- svg.js -->
    'node_modules/@svgdotjs/svg.js/dist/svg.min.js',
    //'node_modules/svg.js/dist/svg.min.js',
    <!-- jQuery Smart Wizard -->
    'node_modules/gentelella/vendors/jQuery-Smart-Wizard/js/jquery.smartWizard.js',
    <!-- select2 -->
    //'node_modules/select2/dist/js/select2.min.js',
    'node_modules/select2/dist/js/select2.full.min.js',
    'node_modules/select2/dist/js/i18n/fa.js',
    <!-- swiper -->
    'node_modules/swiper/js/swiper.min.js',
    <!-- jQuery Tags Input -->
    'vendor/jquery.tagsinput/src/jquery.tagsinput.js',
    <!-- bootstrap-tagsinput -->
    'node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js',
    <!-- pnotify -->
    'node_modules/gentelella/vendors/pnotify/dist/pnotify.js',
    'node_modules/gentelella/vendors/pnotify/dist/pnotify.buttons.js',
    'node_modules/gentelella/vendors/pnotify/dist/pnotify.nonblock.js',
    <!-- leaflet -->
    'node_modules/leaflet/dist/leaflet.js',
    'node_modules/leaflet/dist/leaflet-src.js',
    'node_modules/leaflet.locatecontrol/dist/L.Control.Locate.min.js',
    'node_modules/leaflet-search/dist/leaflet-search.src.js',
    <!-- parsley -->
    'node_modules/gentelella/vendors/parsleyjs/dist/parsley.min.js',
    <!-- validator -->
    'node_modules/gentelella/vendors/validator/validator.js',
    //'node_modules/@yaireo/validator/validator.js',
    <!-- inputmask -->
    'node_modules/inputmask/dist/jquery.inputmask.min.js',
    //'node_modules/inputmask/dist/inputmask.min.js',
    //'node_modules/gentelella/vendors/jquery.inputmask/dist/jquery.inputmask.bundle.js',
    <!-- intlTelInput -->
    //'node_modules/intl-tel-input/build/js/intlTelInput-jquery.min.js',
    'node_modules/intl-tel-input/build/js/intlTelInput.min.js',
    'node_modules/intl-tel-input/build/js/utils.js',
    <!-- es6-promise -->
    'node_modules/es6-promise/dist/es6-promise.auto.min.js',
    <!-- dataTables -->
    'node_modules/gentelella/vendors/datatables.net/js/jquery.dataTables.min.js',
    'node_modules/gentelella/vendors/datatables.net-bs/js/dataTables.bootstrap.min.js',
    // 'resources/assets/package_manually/datatables/jquery.dataTables.min.js',
    // 'resources/assets/package_manually/datatables/dataTables.foundation.min.js',
    'node_modules/gentelella/vendors/datatables.net-buttons/js/dataTables.buttons.min.js',
    'node_modules/gentelella/vendors/datatables.net-buttons-bs/js/buttons.bootstrap.min.js',
    'node_modules/gentelella/vendors/datatables.net-buttons/js/buttons.flash.min.js',
    'node_modules/gentelella/vendors/datatables.net-buttons/js/buttons.html5.min.js',
    'node_modules/gentelella/vendors/datatables.net-buttons/js/buttons.print.min.js',
    'node_modules/gentelella/vendors/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js',
    'node_modules/gentelella/vendors/datatables.net-keytable/js/dataTables.keyTable.min.js',
    'node_modules/gentelella/vendors/datatables.net-responsive/js/dataTables.responsive.min.js',
    'node_modules/gentelella/vendors/datatables.net-responsive-bs/js/responsive.bootstrap.js',
    'node_modules/gentelella/vendors/datatables.net-scroller/js/dataTables.scroller.min.js',
    // 'node_modules/datatables.net-plugins/dataRender/datetime.js',
    'node_modules/datatables.net-plugins/sorting/datetime-moment.js',
    // 'node_modules/datatables.net-plugins/sorting/date-eu.js',
    'node_modules/datatables.net-plugins/sorting/persian.js',
    'node_modules/gentelella/vendors/jszip/dist/jszip.min.js',
    'node_modules/gentelella/vendors/pdfmake/build/pdfmake.min.js',
    'node_modules/gentelella/vendors/pdfmake/build/vfs_fonts.js',
    <!-- laravel-echo -->
    'node_modules/laravel-echo/dist/echo.iife.js',
    <!-- socket.io-client -->
    'node_modules/socket.io-client/dist/socket.io.js',
    <!-- pusher-js -->
    'node_modules/pusher-js/dist/web/pusher.min.js',
    <!-- scrollstop -->
    'node_modules/jquery-scrollstop/jquery.scrollstop.min.js',
    <!-- Switchery -->
    // 'node_modules/gentelella/vendors/switchery/dist/switchery.min.js',
    // 'node_modules/@netliva/jquery-input-switch/src/js/netliva_switch.js',
    // 'node_modules/bootstrap-toggle/js/bootstrap-toggle.min.js',
    // 'node_modules/bootstrap-switch-button/dist/bootstrap-switch-button.min.js',
    'node_modules/bootstrap-switch/dist/js/bootstrap-switch.min.js',
    <!-- onscan -->
    'node_modules/onscan.js/onscan.min.js',
    <!-- jsbarcode -->
    'node_modules/jsbarcode/dist/JsBarcode.all.min.js',
    <!-- jsbarcode -->
    'node_modules/collect.js/build/collect.min.js',
    <!-- lobipanel -->
    'node_modules/lobipanel/dist/js/lobipanel.min.js',
    <!-- font-awesome -->
    // 'node_modules/@fortawesome/fontawesome-free/js/all.min.js',
    <!-- idb -->
    // 'node_modules/idb/build/iife/index-min.js',
    <!-- jsstore -->
    // 'node_modules/jsstore/dist/jsstore.min.js',
    // 'node_modules/jsstore/dist/jsstore.worker.min.js',
    // 'public/assets/js/database/database.js',
    <!-- jspdf -->
    'node_modules/jspdf/dist/jspdf.umd.min.js',
    <!-- html2canvas -->
    'node_modules/html2canvas/dist/html2canvas.min.js',
    <!-- html2pdf -->
    'node_modules/html2pdf.js/dist/html2pdf.bundle.js',
    <!-- font-jspdf -->
    'resources/assets/fonts/font-jspdf/font.js',
    <!-- Dropzone -->
    // 'node_modules/gentelella/vendors/dropzone/dist/min/dropzone.min.js',
    <!-- filepond -->
    'node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.js',
    'node_modules/filepond-plugin-image-overlay/dist/filepond-plugin-image-overlay.min.js',
    'node_modules/filepond-plugin-get-file/dist/filepond-plugin-get-file.min.js',
    'node_modules/filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.js',
    'node_modules/filepond-plugin-file-encode/dist/filepond-plugin-file-encode.min.js',
    'node_modules/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.min.js',
    'node_modules/filepond-plugin-image-transform/dist/filepond-plugin-image-transform.min.js',
    'node_modules/filepond-plugin-image-resize/dist/filepond-plugin-image-resize.min.js',
    'node_modules/filepond/dist/filepond.min.js',
    'node_modules/jquery-filepond/filepond.jquery.js',
    <!-- persian-datepicker -->
    'node_modules/persian-datepicker/assets/persian-date.min.js',
    'node_modules/persian-datepicker/dist/js/persian-datepicker.min.js',
], 'public/assets/dashboard/js/app-dashboard.js').version();
mix.styles([
    /*<!-- Bootstrap -->
    'node_modules/gentelella/vendors/bootstrap/dist/css/bootstrap.min.css',
    <!-- Bootstrap-rtl -->
    'node_modules/bootstrap-rtl/dist/css/bootstrap-rtl.min.css',*/
    <!-- Font Awesome -->
    'node_modules/gentelella/vendors/font-awesome/css/font-awesome.min.css',
    // 'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
    <!-- w3 -->
    'resources/assets/package_manually/w3/w3.css',
    'resources/assets/package_manually/w3/w3-colors/w3-colors-2017.css',
    'resources/assets/package_manually/w3/w3-colors/w3-colors-2018.css',
    'resources/assets/package_manually/w3/w3-colors/w3-colors-2019.css',
    'resources/assets/package_manually/w3/w3-colors/w3-colors-2020.css',
    'resources/assets/package_manually/w3/w3-colors/w3-colors-2021.css',
    'resources/assets/package_manually/w3/w3-colors/w3-colors-camo.css',
    'resources/assets/package_manually/w3/w3-colors/w3-colors-flat.css',
    'resources/assets/package_manually/w3/w3-colors/w3-colors-food.css',
    'resources/assets/package_manually/w3/w3-colors/w3-colors-highway.css',
    'resources/assets/package_manually/w3/w3-colors/w3-colors-ios.css',
    'resources/assets/package_manually/w3/w3-colors/w3-colors-metro.css',
    'resources/assets/package_manually/w3/w3-colors/w3-colors-safety.css',
    'resources/assets/package_manually/w3/w3-colors/w3-colors-signal.css',
    'resources/assets/package_manually/w3/w3-colors/w3-colors-vivid.css',
    'resources/assets/package_manually/w3/w3-colors/w3-colors-win8.css',
    <!-- NProgress -->
    'node_modules/gentelella/vendors/nprogress/nprogress.css',
    <!-- iCheck -->
    //'node_modules/gentelella/vendors/iCheck/skins/flat/green.css',
    'node_modules/icheck/skins/flat/green.css',
    <!-- bootstrap-progressbar -->
    'node_modules/gentelella/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css',
    <!-- JQVMap -->
    'node_modules/gentelella/vendors/jqvmap/dist/jqvmap.min.css',
    <!-- bootstrap-daterangepicker -->
    'node_modules/gentelella/vendors/bootstrap-daterangepicker/daterangepicker.css',
    <!-- tipped -->
    'node_modules/@staaky/tipped/dist/css/tipped.css',
    <!-- select2 -->
    'node_modules/select2/dist/css/select2.min.css',
    <!-- swiper -->
    'node_modules/swiper/css/swiper.min.css',
    <!-- bootstrap-tagsinput -->
    'node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
    <!-- pnotify -->
    'node_modules/gentelella/vendors/pnotify/dist/pnotify.css',
    'node_modules/gentelella/vendors/pnotify/dist/pnotify.buttons.css',
    'node_modules/gentelella/vendors/pnotify/dist/pnotify.nonblock.css',
    <!-- leaflet -->
    'node_modules/leaflet/dist/leaflet.css',
    'node_modules/leaflet.locatecontrol/dist/L.Control.Locate.css',
    'node_modules/leaflet-search/dist/leaflet-search.min.css',
    'node_modules/leaflet-search/dist/leaflet-search.mobile.min.css',
    'node_modules/leaflet-search/dist/leaflet-search.mobile.src.css',
    'node_modules/leaflet-search/dist/leaflet-search.src.css',
    <!-- intlTelInput -->
    'node_modules/intl-tel-input/build/css/intlTelInput.min.css',
    <!-- Datatables -->
    'node_modules/gentelella/vendors/datatables.net-bs/css/dataTables.bootstrap.min.css',
    // 'resources/assets/package_manually/datatables/jquery.dataTables.min.css',
    'node_modules/gentelella/vendors/datatables.net-buttons-bs/css/buttons.bootstrap.min.css',
    'node_modules/gentelella/vendors/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css',
    'node_modules/gentelella/vendors/datatables.net-responsive-bs/css/responsive.bootstrap.min.css',
    'node_modules/gentelella/vendors/datatables.net-scroller-bs/css/scroller.bootstrap.min.css',
    <!-- Switchery -->
    // 'node_modules/gentelella/vendors/switchery/dist/switchery.min.css',
    // 'node_modules/@netliva/jquery-input-switch/src/css/netliva_switch.css',
    // 'node_modules/bootstrap-toggle/css/bootstrap-toggle.min.css',
    // 'node_modules/bootstrap-switch-button/css/bootstrap-switch-button.min.css',
    'node_modules/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css',
    <!-- lobipanel -->
    'node_modules/lobipanel/dist/css/lobipanel.min.css',
    <!-- dropzone -->
    //'node_modules/gentelella/vendors/dropzone/dist/min/dropzone.min.css',
    <!-- filepond -->
    'node_modules/filepond/dist/filepond.css',
    'node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css',
    'node_modules/filepond-plugin-image-overlay/dist/filepond-plugin-image-overlay.min.css',
    'node_modules/filepond-plugin-get-file/dist/filepond-plugin-get-file.min.css',
    'node_modules/filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css',
    <!-- persian-datepicker -->
    'node_modules/persian-datepicker/dist/css/persian-datepicker.min.css',
    'node_modules/persian-datepicker/dist/css/theme/persian-datepicker-blue.min.css',
    <!-- animate -->
    'node_modules/animate.css/animate.min.css',
    /*<!-- progress-wizard.min.css -->
    'resources/assets/package_manually/css-progress-wizard-master/css/progress-wizard.min.css',*/
], 'public/assets/dashboard/css/app-dashboard.css').version();

<!-- intlTelInput img -->
mix.copy([
    'node_modules/intl-tel-input/build/img',
], 'public/assets/dashboard/img');

<!-- intlTelInput utils -->
mix.scripts([
    'node_modules/intl-tel-input/build/js/utils.js',
], 'public/assets/dashboard/lib/utils.js');


<!-- Bootstrap -->
mix.styles([
    'node_modules/gentelella/vendors/bootstrap/dist/css/bootstrap.min.css',
], 'public/assets/bootstrap/css/bootstrap.min.css').version();
mix.copy([
    'node_modules/gentelella/vendors/bootstrap/fonts',
], 'public/assets/bootstrap/fonts');

<!-- Bootstrap-rtl -->
mix.styles([
    'node_modules/bootstrap-rtl/dist/css/bootstrap-rtl.min.css',
], 'public/assets/bootstrap/css/bootstrap-rtl.min.css').version();

<!-- moment milady -->
mix.scripts([
    'node_modules/moment/dist/moment.js',
], 'public/assets/moment/milady/moment.js');
<!-- moment-timezone -->
mix.scripts([
    'node_modules/moment-timezone/builds/moment-timezone-with-data.min.js',
], 'public/assets/moment/moment-timezone/moment-timezone-with-data.min.js');
<!-- moment jalali -->
mix.scripts([
    'node_modules/jalali-moment/dist/jalali-moment.browser.js',
], 'public/assets/moment/jalali/jalali-moment.browser.js');

<!-- stimulsoft -->
mix.copy([
    'resources/assets/package_manually/stimulsoft',
], 'public/assets/stimulsoft');

<!-- validate_Postal_Code json file -->
mix.copy([
    'resources/assets/json',
], 'public/assets/json');
<!-- Countries language -->
mix.copy([
    'node_modules/countries-list/dist/minimal/languages.en.min.json',
    'node_modules/countries-list/dist/languages.all.min.json',
    'node_modules/countries-list/dist/countries.emoji.min.json',
], 'public/assets/json/countries-language');


<!-- fonts font-awesome, bootstrap -->
mix.copy([
    'resources/assets/fonts/',
], 'public/assets/fonts');

<!-- image -->
mix.copy([
    'resources/assets/image',
], 'public/assets/image');


// Custom
mix.styles(['resources/assets/custom/custom_fa.css'],
    'public/assets/custom/css/custom_fa.css').version();
mix.styles(['resources/assets/custom/custom_en.css'],
    'public/assets/custom/css/custom_en.css').version();
mix.copy([
    'resources/assets/fonts/',
], 'public/assets/custom/fonts');

// progress-wizard
mix.styles(['resources/assets/package_manually/css-progress-wizard/css/fa/progress-wizard.min.css'],
    'public/assets/custom/css/progress-wizard_fa.min.css').version();
mix.styles(['resources/assets/package_manually/css-progress-wizard/css/en/progress-wizard.min.css'],
    'public/assets/custom/css/progress-wizard_en.min.css').version();

// Login
mix.scripts([
    'resources/assets/auth/js/custom-login.js',
], 'public/assets/auth/js/custom-login.js');
mix.scripts([
    'resources/assets/auth/js/authenticate.js',
], 'public/assets/auth/js/authenticate.js');
mix.styles('resources/assets/auth/css/custom-login.css', 'public/assets/auth/css/custom-login.css').version();
mix.copy([
    'resources/assets/fonts/',
], 'public/assets/auth/fonts');
mix.styles('resources/assets/auth/css/custom-register.css', 'public/assets/auth/css/custom-register.css').version();
mix.styles('resources/assets/auth/css/custom-passwords.css', 'public/assets/auth/css/custom-passwords.css').version();

// Dashboard
mix.scripts('resources/assets/dashboard/js/initialize/dashboard_1.js', 'public/assets/dashboard/js/initialize/dashboard_1.js');
mix.scripts('resources/assets/dashboard/js/initialize/export.js', 'public/assets/dashboard/js/initialize/export.js');
mix.scripts('resources/assets/dashboard/js/initialize/public.js', 'public/assets/dashboard/js/initialize/public.js');
mix.scripts('resources/assets/dashboard/js/initialize/users_add_edit.js', 'public/assets/dashboard/js/initialize/users_add_edit.js');
mix.scripts('resources/assets/dashboard/js/initialize/products_add_edit.js', 'public/assets/dashboard/js/initialize/products_add_edit.js');
mix.scripts('resources/assets/dashboard/js/initialize/card_items_add_edit.js', 'public/assets/dashboard/js/initialize/card_items_add_edit.js');
mix.scripts('resources/assets/dashboard/js/cartable/cartable.js', 'public/assets/dashboard/js/cartable/cartable.js');
mix.scripts('resources/assets/dashboard/js/menu/menu.js', 'public/assets/dashboard/js/menu/menu.js');
mix.scripts('resources/assets/dashboard/js/settings/manage_profile.js', 'public/assets/dashboard/js/settings/manage_profile.js');
mix.scripts('resources/assets/dashboard/js/settings/system.js', 'public/assets/dashboard/js/settings/system.js');
mix.scripts('resources/assets/dashboard/js/settings/wf-settings.js', 'public/assets/dashboard/js/settings/wf-settings.js');
mix.scripts('resources/assets/dashboard/js/top_nav/top_nav.js', 'public/assets/dashboard/js/top_nav/top_nav.js');
mix.scripts('resources/assets/dashboard/js/custom-dashboard.js', 'public/assets/dashboard/js/custom-dashboard.js');
mix.js([
    'resources/assets/dashboard/js/initialize/master.js',
], 'public/assets/dashboard/js/initialize/master.js').version();
mix.copy([
    'resources/assets/fonts/',
], 'public/assets/dashboard/fonts');





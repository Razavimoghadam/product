<div id="component_Dashboard_1" data_Remove='component' class="row hidden">
    <!-- Page toolbox control -->
    @if($rtl_Language_Code->contains(strtolower(app()->getLocale())))
        <div id="storeCashier_Dashboard_1_Steps" class="page_toolbox_control col-lg-12 col-md-12 col-sm-12 col-xs-12">

        </div>
    @else
        <div id="storeCashier_Dashboard_1_Steps" class="page_toolbox_control col-lg-12 col-md-12 col-sm-12 col-xs-12">

        </div>
    @endif

    <div id="insert_Invoice" {{--style="height: 0; overflow: hidden;"--}} style="visibility:hidden;position:absolute"
         class="">

        <div class="panel_papers" style="margin: 0px;padding:0px;background: #f7f7f7">
            <table class="paper"
                   style="margin: 0px; background: rgb(255, 255, 255); width: 944.882px; height: 566.929px;">
                <tbody>
                <tr class="tr_first">
                    <td class="td_first">
                        <div class="td_div_first full"
                             style="border: 2px dashed rgb(0, 0, 0); width: 302.362px; height: 188.976px; margin: 92.5984px 168.189px 3.77953px 3.77953px;">
                            <table style="font-size: 11px; width: 302.362px; height: 188.976px;"
                                   class="table print-padding-tr-td-2">
                                <tbody>
                                <tr>
                                    <td style="margin: 0px;padding:0px;"><img
                                            style="margin: 0px; padding: 0px; width: 102px; height: 178.976px;"
                                            class="product_barcode img-responsive" width="102" height="376"
                                            src="data:image/png;base64,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">
                                    </td>
                                    <td class="w3-center">
                                        <a class="logo center-elements w3-margin-top">
                                            <img role="button"
                                                 style="margin: 0 0 5px;background: rgba(52, 73, 94, 0.94);width:60%"
                                                 class="img-responsive" src="assets/app_settings/pwa/images/Logo.png">
                                        </a>
                                        <a class="company_address w3-text-black" href="https://oscorp.ir/">oscorp.ir</a>
                                        <hr class="w3-text-black"
                                            style="margin: 2px;height:1px;color:black;background-color:black">
                                        <p class="text_1 w3-text-black">تست: متن 1</p>
                                        <p class="text_2 w3-text-black">تست: متن 2</p>
                                        <p class="text_3 w3-text-black">تست: متن 3</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                    <td class="td_last">
                        <div class="td_div_last full"
                             style="border: 2px dashed rgb(0, 0, 0); width: 302.362px; height: 188.976px; margin: 92.5984px 0px 3.77953px 168.189px;">
                            <table style="font-size: 11px; width: 302.362px; height: 188.976px;"
                                   class="table print-padding-tr-td-2">
                                <tbody>
                                <tr>
                                    <td style="margin: 0px;padding:0px;"><img
                                            style="margin: 0px; padding: 0px; width: 102px; height: 178.976px;"
                                            class="product_barcode img-responsive" width="102" height="376"
                                            src="data:image/png;base64,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">
                                    </td>
                                    <td class="w3-center">
                                        <a class="logo center-elements w3-margin-top">
                                            <img role="button"
                                                 style="margin: 0 0 5px;background: rgba(52, 73, 94, 0.94);width:60%"
                                                 class="img-responsive" src="assets/app_settings/pwa/images/Logo.png">
                                        </a>
                                        <a class="company_address w3-text-black" href="https://oscorp.ir/">oscorp.ir</a>
                                        <hr class="w3-text-black"
                                            style="margin: 2px;height:1px;color:black;background-color:black">
                                        <p class="text_1 w3-text-black">تست: متن 1</p>
                                        <p class="text_2 w3-text-black">تست: متن 2</p>
                                        <p class="text_3 w3-text-black">تست: متن 3</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                <tr class="tr_last">
                    <td class="td_first">
                        <div class="td_div_first full"
                             style="border: 2px dashed rgb(0, 0, 0); width: 302.362px; height: 188.976px; margin: 0px 168.189px 92.5984px 3.77953px;">
                            <table style="font-size: 11px; width: 302.362px; height: 188.976px;"
                                   class="table print-padding-tr-td-2">
                                <tbody>
                                <tr>
                                    <td style="margin: 0px;padding:0px;"><img
                                            style="margin: 0px; padding: 0px; width: 102px; height: 178.976px;"
                                            class="product_barcode img-responsive" width="102" height="376"
                                            src="data:image/png;base64,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">
                                    </td>
                                    <td class="w3-center">
                                        <a class="logo center-elements w3-margin-top">
                                            <img role="button"
                                                 style="margin: 0 0 5px;background: rgba(52, 73, 94, 0.94);width:60%"
                                                 class="img-responsive" src="assets/app_settings/pwa/images/Logo.png">
                                        </a>
                                        <a class="company_address w3-text-black" href="https://oscorp.ir/">oscorp.ir</a>
                                        <hr class="w3-text-black"
                                            style="margin: 2px;height:1px;color:black;background-color:black">
                                        <p class="text_1 w3-text-black">تست: متن 1</p>
                                        <p class="text_2 w3-text-black">تست: متن 2</p>
                                        <p class="text_3 w3-text-black">تست: متن 3</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                    <td class="td_last">
                        <div class="td_div_last full"
                             style="border: 2px dashed rgb(0, 0, 0); width: 302.362px; height: 188.976px; margin: 0px 0px 92.5984px 168.189px;">
                            <table style="font-size: 11px; width: 302.362px; height: 188.976px;"
                                   class="table print-padding-tr-td-2">
                                <tbody>
                                <tr>
                                    <td style="margin: 0px;padding:0px;"><img
                                            style="margin: 0px; padding: 0px; width: 102px; height: 178.976px;"
                                            class="product_barcode img-responsive" width="102" height="376"
                                            src="data:image/png;base64,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">
                                    </td>
                                    <td class="w3-center">
                                        <a class="logo center-elements w3-margin-top">
                                            <img role="button"
                                                 style="margin: 0 0 5px;background: rgba(52, 73, 94, 0.94);width:60%"
                                                 class="img-responsive" src="assets/app_settings/pwa/images/Logo.png">
                                        </a>
                                        <a class="company_address w3-text-black" href="https://oscorp.ir/">oscorp.ir</a>
                                        <hr class="w3-text-black"
                                            style="margin: 2px;height:1px;color:black;background-color:black">
                                        <p class="text_1 w3-text-black">تست: متن 1</p>
                                        <p class="text_2 w3-text-black">تست: متن 2</p>
                                        <p class="text_3 w3-text-black">تست: متن 3</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <table class="paper"
                   style="margin: 0px; background: rgb(255, 255, 255); width: 944.882px; height: 566.929px;">
                <tbody>
                <tr class="tr_first">
                    <td class="td_first">
                        <div class="td_div_first full"
                             style="border: 2px dashed rgb(0, 0, 0); width: 302.362px; height: 188.976px; margin: 92.5984px 168.189px 3.77953px 3.77953px;">
                            <table style="font-size: 11px; width: 302.362px; height: 188.976px;"
                                   class="table print-padding-tr-td-2">
                                <tbody>
                                <tr>
                                    <td style="margin: 0px;padding:0px;"><img
                                            style="margin: 0px; padding: 0px; width: 102px; height: 178.976px;"
                                            class="product_barcode img-responsive" width="102" height="376"
                                            src="data:image/png;base64,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">
                                    </td>
                                    <td class="w3-center">
                                        <a class="logo center-elements w3-margin-top">
                                            <img role="button"
                                                 style="margin: 0 0 5px;background: rgba(52, 73, 94, 0.94);width:60%"
                                                 class="img-responsive" src="assets/app_settings/pwa/images/Logo.png">
                                        </a>
                                        <a class="company_address w3-text-black" href="https://oscorp.ir/">oscorp.ir</a>
                                        <hr class="w3-text-black"
                                            style="margin: 2px;height:1px;color:black;background-color:black">
                                        <p class="text_1 w3-text-black">تست: متن 1</p>
                                        <p class="text_2 w3-text-black">تست: متن 2</p>
                                        <p class="text_3 w3-text-black">تست: متن 3</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                    <td class="td_last">
                        <div class="td_div_last full"
                             style="border: 2px dashed rgb(0, 0, 0); width: 302.362px; height: 188.976px; margin: 92.5984px 0px 3.77953px 168.189px;">
                            <table style="font-size: 11px; width: 302.362px; height: 188.976px;"
                                   class="table print-padding-tr-td-2">
                                <tbody>
                                <tr>
                                    <td style="margin: 0px;padding:0px;"><img
                                            style="margin: 0px; padding: 0px; width: 102px; height: 178.976px;"
                                            class="product_barcode img-responsive" width="102" height="376"
                                            src="data:image/png;base64,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">
                                    </td>
                                    <td class="w3-center">
                                        <a class="logo center-elements w3-margin-top">
                                            <img role="button"
                                                 style="margin: 0 0 5px;background: rgba(52, 73, 94, 0.94);width:60%"
                                                 class="img-responsive" src="assets/app_settings/pwa/images/Logo.png">
                                        </a>
                                        <a class="company_address w3-text-black" href="https://oscorp.ir/">oscorp.ir</a>
                                        <hr class="w3-text-black"
                                            style="margin: 2px;height:1px;color:black;background-color:black">
                                        <p class="text_1 w3-text-black">تست: متن 1</p>
                                        <p class="text_2 w3-text-black">تست: متن 2</p>
                                        <p class="text_3 w3-text-black">تست: متن 3</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                <tr class="tr_last">
                    <td class="td_first">
                        <div class="td_div_first full"
                             style="border: 2px dashed rgb(0, 0, 0); width: 302.362px; height: 188.976px; margin: 0px 168.189px 92.5984px 3.77953px;">
                            <table style="font-size: 11px; width: 302.362px; height: 188.976px;"
                                   class="table print-padding-tr-td-2">
                                <tbody>
                                <tr>
                                    <td style="margin: 0px;padding:0px;"><img
                                            style="margin: 0px; padding: 0px; width: 102px; height: 178.976px;"
                                            class="product_barcode img-responsive" width="102" height="376"
                                            src="data:image/png;base64,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">
                                    </td>
                                    <td class="w3-center">
                                        <a class="logo center-elements w3-margin-top">
                                            <img role="button"
                                                 style="margin: 0 0 5px;background: rgba(52, 73, 94, 0.94);width:60%"
                                                 class="img-responsive" src="assets/app_settings/pwa/images/Logo.png">
                                        </a>
                                        <a class="company_address w3-text-black" href="https://oscorp.ir/">oscorp.ir</a>
                                        <hr class="w3-text-black"
                                            style="margin: 2px;height:1px;color:black;background-color:black">
                                        <p class="text_1 w3-text-black">تست: متن 1</p>
                                        <p class="text_2 w3-text-black">تست: متن 2</p>
                                        <p class="text_3 w3-text-black">تست: متن 3</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                    <td class="td_last">
                        <div class="td_div_last full"
                             style="border: 2px dashed rgb(0, 0, 0); width: 302.362px; height: 188.976px; margin: 0px 0px 92.5984px 168.189px;">
                            <table style="font-size: 11px; width: 302.362px; height: 188.976px;"
                                   class="table print-padding-tr-td-2">
                                <tbody>
                                <tr>
                                    <td style="margin: 0px;padding:0px;"><img
                                            style="margin: 0px; padding: 0px; width: 102px; height: 178.976px;"
                                            class="product_barcode img-responsive" width="102" height="376"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAF4CAYAAACmdIw9AAAAAXNSR0IArs4c6QAAIABJREFUeF7tnQewLEUVhvsCDwOYFVFRzIqxFAMmFANClQEBS0DQwoSKGQUzIoWKYM4JM4hilQnMgSCYwJwziCiKYlYUnvX1e/++w3kz270zc3dmd3qrbt0Nk7r/Pjn0ytq1a9eG8hrcDKwUYAaHSXygAswwcSnADBSXAkwBZqgzMNDnKjKmADPQGRjoYyUpRmbOyspKHAKfeX/JJZeETTbZZKDDmu2xNBaNTeOMauv6cc92xfZHJ4HhFv/973/DmjVrlgqMuqkTSBpz+yludoUkMHrQvlZOs2G1Pwvq6ZMrJIHREAUM7IsH3myzzcL//ve/9jMwgCtoLBqbZWV9PV4BJoTJIlsoYAor60fByaKYIvznz9CSwBR1eZ2ZMO9XEhgJQgQkIC17+AYlhz8Umz410SxgrKG16aabRq0MgJZBM9MYAAHhf/HFF08M6XlTib1fFjCsHgZgLX8GwED6XFVdTJzsFRactfztmLu4z6zXSALjXTAAwiD0f9YbDvF4P6YqF828nzsJDA/Eg2+++eYTw5LP8pctA8VA+SxAFhyUwueLLroofu7rlQRGq0cPrwfV50VXBiTsGaf1cvB58C4ZKAQZY1mYhOQyUAyA+LFBOYOmGO8rAwjJnUWnFjs2P6a+x5ZkZfbhBUpffHce99UYBw+M1EYeWOQu3V+f5zFhq3WPujEBTJ8qcxbF/Oc//wmXucxlonYmQ2y1JqrP68pwBiyNua/nyQLGPpw0FamVix5elvYFF+hTC/MLIBsYHlqqZV+raB73lT+w7wWXBEZ81motYmlyY8xjwlbrHiw2xiMD02qdg5cxInFP6kMi/abA1Y2p77ElKcb7jUTqy8TW/JiGkKKVBKbKwLRe5r71/aaUUmVcalz2f9vrNz0/CYyEvnWLLzoYdZNl5YvkTl9KQBIYBsFDyo5RJskyGJcCSGOxY8OOWQhfmfcuexbXlGT7Pq+K+hXS6PPZkhRTZe1X5fj2OYg29/Y52bqW9QK0uX7Tc5PAWPvF8uC+1cmmA646r0rztGPt8l6510oC4zWwRY+/pCbGL8TU8av1exYw3gJeJmqxrMtqYH1a/TxTFjDxwPV1IiWpfLVo5NLXTQJTcpdL7vJ8lmLiLgtTuFRylweau1yAGSgwUH4pw5g/ly3Cv2bOSw3m/BfjRndc+BrMklc2v1WUZGUlr2xd+cm8X0lgeKCSVzZvWGZwyXifUskrW12wsiiGRyh5ZasLhL96EpiSVzZgGVPyyuZLLVlu/5JXNmDvconHDJhilj2k7Kd+IVwyxYk5QIopbv+Buv0LMAMFpsRj5s/GZlKXi/CfL0BJy1+PU9KXCjDznYHSE3Pu893qhsWOaTV93Z9c8sq6n9PGV6zqT+bNhMYXb3hiUvgXO6bYMQ3XVrenLQwrK0nlxe3f7dKf4WoLm1eGnCl9l2dAuoNDk8LfW/6l73IHs55xiSxgSt/ljJns+JAkMKXv8oDV5dJ3uWNyyLhckmJK3+UBq8ul73LGEu/4kCTFeK2s9F3uGIGay2UBUxowzAcMe5csYIbSxmMe0zOUsSaBKU1+Bqoul7ZY/WxVkqQYsY/SSG4ejHTDPbKAKa0X5wsKd0sCU5qVDtjAjAiub4vlWxUuekdZ38lP4+l7XEmKAZRixwyQlfFIQ9Ht5zE9QxlrkmKKHVPsmHkQxEb3WNj2vsWO6WW9pNVlHqvYMfMHJyljih1T7Jj5L8v19llVS/zB2zEld3mlcttFPy/aSNtrsb55OL/zp/7VddugJFkZy3jM5eTWuGYemEi7fYnd2Zzf9Nl6FDR/ai+W0+k9CUzJXV4nY7T3st1Z1spfjrET7reit3xaYE8DKAmMj/mPsYW8lUEeAM9R+Gx3bresyrYWS22AWoBJ1GBamWCDhkyynLscAxVccMEF4aKLLgr/+te/Iku77nWvGy53ucvFvG+OV36eFjvHbr755pVKTxKYwso2qfQVSm789a9/DV/+8pfDJz/5yfCLX/wi/Pa3v40gXPaylw1Xu9rVws1udrOwyy67hJ133nkCwL///e/4+7RXEpixC38/eVr5a9asCX/729/Cc5/73PCOd7wj3PzmNw+/+tWvwp///Ofwile8IlLO73//+3DaaaeFn//85+GZz3xmeNaznhU4T4W30/atTgJT1OV1TkxRiAQ3bOkNb3hDeOpTnxoe/vCHh+c///nhmGOOCUcffXT40Ic+FHbbbbdIOeeee2544QtfGN773veGD37wg+EhD3lIZG2pVwHGaFNVhqa2/FX5iYQ5k36LW9wisq/vfve7kWVBIfzfdtttw+mnnx622GKLOP9QzE1vetNwhzvcIXz1q1+NgElJqAMoCczYWZnXyPQZykFOaL9MqdRQ0dOe9rTIzp7ylKdEEBDwVlPz16wCJwlMEf7r7BjZJdb22H777cNZZ50Vfvazn4XrX//6E3vnNre5TdTQ+P7KV75yOO+888K1r33tsN1224Xvf//7E2ViWn+eJDDFjtkQWvfuFmTJXnvtFR72sIdFOQK7AsAPf/jDYe+99w4HH3xweMITnhBe8IIXhPe9733h9a9/fXj84x8fPQepPdAKMBm9ZLwfjM/Szl71qldFJeDqV796uPe97x1VZHbZBZQrXOEKEayf/vSn4ZGPfGR46UtfGn+TS0fXLawspQqZ36XSWiHtlQO5Z0455ZTwqU99KioBF154YVSV0by23HLLcMtb3jLc6173Cve5z33iZ11DWl4R/pmg1DVgqJIxFigmGmMTq//8888P17rWtaLQh4IEMpRiAWlFMcWOWWfHCDDJBu+I5HeMyz/+8Y9RW8MXdo1rXCOCg9pslQbrM2tMMQWYlQn70STaSca98olPfCJ87WtfixoXBiUsDuoAmJvc5CZhjz32CHe5y10ie7NOzWlqc5bwH3M8xoIBIHJIMsHIE9wsJ5xwQmRdqMV8h0Lwz3/+M/z9738Pp556avjWt74VtbanP/3p8XJco7WMGbsdw+qXveHdMm9605vCk570pKgaH3bYYeHNb35zeO1rXxtdM7hp/vGPf4Q//OEP4dnPfnZUod/2trdF7Yw5tcG2RlrZ2O0YK7jFeiS0YVMYkb/+9a/DNttsE373u9+FW93qVuGGN7xhQFODMnBawt5w09zpTncKZ5xxxkRmWdA9OFmsjJPG3KzUC27JCXmHUY9FATgxYW9HHXVU9CjLVaO4C9dSHKaVjBk7KxMIVrXVhN7tbncLX/nKV8IPf/jDaEjK6LztbW8bVWaUAdRl3DNbb711dHD+6Ec/ylLcsyhmzMK/Ksmc7wDqAx/4QNhvv/2ijDn88MPDNa95zWhE4n7he6x/HJn8P/bYY6P8efKTnxyBmRa9jBxqbSKBqqjLl04qt2wNW4XJhn3hpMS6x2aBSojTXPGKV4yUhBwCqBe/+MXRqamF3oqVeeE/xsIlwGASqzQpfjv55JPDZz/72eiSgW2hKuMng3pufetbhx122CHc//73n8RnBG6rLBlZqTyUJessRrlgB9lcMBtnsUah9wqLo/Afyx9Q+MNZSSIGVMN/Xpb7THPHZLEyDhp7UrllOVrlypiRk5PPf/rTn2IeAN4AWNpVrnKVcPnLX37iCdBcssg7AUY3rxJHi74ZQ92YFP7VZPLfsjKBBQgnnnhitFtw78PKcGbCyggF3OhGNwp77rlnQIPjfF/z2dhXNvYGDDICrWyFnWE44n4hCeNd73pXNCqJ/8PGXvOa10R3DA5NDMrvfe97MZvmoIMOiio1bC4VXs7SynzHJT5PE1wLJlomY/GqsbX6LRvScQBAfH/fffeNvjDSmI488siYEcN3UBP2zCGHHBJV6+OOOy5GPFns4kJ1HCcJjIRWLgkuGij+eavsFh1jBT+TSxAM9vXjH/84Zl0Si7ne9a4Xc8w+//nPR3bGAsZVc53rXCd6mHFqpvxk2cJ/7OXkAksaqhrrWfYmoxFHJjbMq1/96ujgFAj22E7iMcWOWTcDVi2W3ME+IQ4D1SDkMRxZxLe//e0jlfzkJz+JMZmzzz473OAGN4jH8F0neWXFjtmQvR9ZzMqGwJlcL8qSufGNbxwjlsiSffbZJ7r7H/vYx4aXvexl0eVPrtkznvGMCdCt05fGbseIa/hEClwyuGOIy+Anu+c97xlVZLQuPMvYMYQGcHISh3n5y18ejU25ZFrF/PVQY26LZSdQ5oOimczPF7/4xfClL30ppr9i/QMYFj/y5Y53vGO43e1uFx760IdGalPVmVryN9bKxm7HyEpnQm0eM4DYKjPAQD0maol9c6UrXSlSB5oZNk+OwLcaYlJdrtLtx2THSK7IbrOGIe9lbGJYcgzRSr6HImBryi+zoRPrxqlTnZPAFDtmwzq2oWWVPDLhFC1RvPSNb3wjWv5K+CNBA03sQQ96UJQ/NvKZsveygBm7HVOX7AfrIgj29re/PcZdUIv/8pe/hFe+8pURHKrLzjzzzPDNb34zegbwEsDW7GJvLGOq7Jhlc/97l1OV3SJZKxsGtoVLBu0LwU6WjAqXiFaiQkNNgPWSl7wk/oYazfdeVlVRTxbFyNK17mr5e5bFu+zHJsHuhbZkDZNObB9VmMnHJfOb3/wmUIJBNBPXC+oyL5yb2DhkyZAjYKvSGssYPYhXl20hTopfDvl3SwGWOzBujV0TCafgz8oKlVSIi2BEQkWve93rwhOf+MTJsSgBNviW0tKyKQaLVrq71eWXgWK0yDTJfLYpSV7G8JljoAAEPhSBoCdnGRlz97vfPcoXqIn4P+4ZnJtQDQ7PnFcSGOvAsy05UhG4nJsP5RiNxQNgtTDL6pQDQGosGTJkXRJvYeIR7siTxzzmMdElQ+HSc57znJglg0wiSwY2yPXq+sg08i57lXEZKIaJtjkNMh5VXWyBk/WuY2BdTDjOyvvd734xlIx7hrQlXDOEBgiUHXDAATFLBoNTczatqixJMV4rG9vmcV6uMB/yDsvjTIXySSedFBP8yFXGC6DaGJL8AOyud71r9Ab44Fsd18gCRpasHnIoLGg1nkPKAKvZcgPrqvesj+fgOxIxiPfjliEZg/Ql/kM5AlTsq5MazLEDY7Uy646y9hzKAlY/yRh6XfWqV43g2LoYm8I0bWFlUUwURus7lY+Zldk8B9k5UAnumM985jORlZGAweTDyvCVwcp23333qMFBLTldMYrwXx+ZTAl/rWy0KSZWixRQyJIhCAYAqM2wMeIuxP8JARAS4Hs0NKoAbOBxWvFSkmKKuryyUXKeKIe6ffxfOCkB441vfGOs5SdLBtcLVEUbE9KW6AmAT23//ffPEo1JYCTYxmxgekGtz3iOoQZcMWTBkKoE5aAu47hE6MO+MDYpbJJLhsUOtdT1KstiZcUls65fmRaosikld5lc2JcikmTHENenCuDAAw+M5ynIxrkoCalGpVnA6IG48RidmL5gSYAwwZRd0I+MUj+oRIoRzk3cMGTPyCWDY1OFS6kszGxgrFZW5SLPYpoDPmia23/aYysbhuzKI444InqYWcB8j5uGDEx6x7zoRS8K7373u2Nrk8c97nGTJPNpAGXJmLED4+0YgYXmhRdZLhl6yWDdU5yEUoANQ1Ym5X2PeMQjYvosrI+/lK8xC5gxx2N8jN/nOxDFJOlPvWQoxQAwWf40myOsTD8ZMmd4cU3NaWOXzNiFv1w0dTnNNtcMQDAwkT+EAAACqrHal23r25qVge6Y1WW7qrVQ5fqXV5pJxh1D+QW/wf622mqr6G1Gbfau/tadMYqBuXEvGeuQhJV9+tOfDp/73OfCL3/5y2izMOkAAjAkaeBdvu997ztxx4hqWmdiWgNrbPEYy258qBlPMlY93WGJUJ5zzjmRYshV5lisfmL8FM2SJUOoGc6T4y/LEv5jd2JKndY8aKVjRFJygfuF7n24ZMhlpkiJ7wAOCgIo1GUVNHXSGUNahCxbWcEDNktaPVpVPMa66q0SQPNRYvg0wsblgoxBPabkgvJy3P68yM7k9x133DGyPOWWTXvQmSlmbAamZWU+J0BeZnmd+Z3Mf+L6ODOJ9/vsS6nKqYalWcCM2Y6xPjKrCPEeCkCGQDFkycBVUJnJLcPl/4Mf/CAqAMgeZBCKABSWE15OAjN2O4YVX1fPQuYLrhcyMeklg7cZSqA3Gd+ROYNLhjTa448/fpIlY22fOraWBKa4/TfsnKsgl5QAQskoALhl1N6X7EsmGy0M+0WbMZDmhIKAwWltoMaW/9jtGMbv+1hadwrvYWf0xSTBT0YmtTH4zACGBEDsGDwBms/UViVZFDNmO8bbLtJSEfx2XlCB8ZMBFHIGAHD5yyVTJVdsDoGnnCxgxmzHaMKq0o2sM5LfyQGgYSmsDOAQ/BiU+M2smq1ip9bAcNGx2zE+x0z2DtRBhgw1mJSKE16GTcHKoBhY2QMf+MDYS0Y+M23u07pqeeyFS9Y3Zu0aQspoXiRZoJHhK+M79ZKRSwYVmeOwbzz1tCpcqnN5tzKxB3qyH2sVu5H6THyfXsqozOQl00uGIiX1jOE4ws7shoGb5v3vf3+s/08FybJCy/5BvZY20Pmd6bF84asdsy5khb2AoYafLBl2VMLlgvAnMEZ8H00NdsZ5ZNEQdqa0nJJzrzhUPWxS+Jdy8k0n8+YNTdXVyL6B5WvHJWXJcAxuflgY721OdCfZ/mNuwOBXtMocsU+gDKgGlwtWP5oZlIF8IUsGWwbbhrwzKAw3jdVyGxuYsvzRKFRJpZRSPeBMfGOAB9smCxobq1zpSFqUvqgVuYFFT4dYhDvN5FCP1WOGgiVcMupXRjUzMsmzzkaszObaVvHeAc5z40eynnPVS8rqtwFCFbTKJUMcBsqgUyyRS9z9JP0hY8gxIyuTCjP8aWTRdAKMFX6WBJcFJAuGrHr731r6FnEbsyf2QsY/bA27BtYFAFj9JPntuuuu0Y7BJSNQWsf89WBjNTBt8kUdS5O7RYVLUBJGJJQD1SD4/UZAnW+CPbb6GNkcVW30bZMffld7X+Uqw97UhUkA+5TbVgbmmJ2YVQLLhtdhXST7kcNMESzJGLAy2Bj2DJXMyB7+JAoAEfCm9cZM2jFjd/tbY9CHlmFHNFsgyYL9YXDJwM6IzwAQieVkaZIlg4ZG4ZIAmebAzLL8pS6POeHPT6K8ymhjZMmgMh966KGx/zIZMXK9IGvIksFN8853vnOSPZMCJQuYsYeWmSRZ7Go7IhakzUfZ7QInJi5/4v14lVGREfpQHP4yjEuamKK9qU6mVeGSKGas9TF1Dly+l9GNDFakEyMSlgXl8F/yGS1Nx+UYWkkZU2XHLIsNY8fmx2QFvJez+ozrhV4yUARZMkw+vWRofE0jBpQBCprIoiHXzGbJ+Hn1YGUBY2MQXq/PQX/ox1SNyVOKz55k9ZMNQ9HSox71qChraE8C68JVQz0MNTLEYHDXEApAKaD8r9ONfZhcayTZ8oShT/y055PlL1ZUVwira1jBjXDHm8xGcTgpUYmRK1j9uGSwY6ASIpvEbKgsQ/7IdmmdVF7llpBDc1p4dBEAq0qSsByibvK06gkjw84+/vGPT3rJAB4AqaKMSjP+7Na+rVuWeDL33eksL14EIDbi5Ssb6vi928RmyKgORk5NfpPGpvckkWsjbBQDHJrKM7Plgp0nY1h3v82AX0RA7DNrLNb9bwNa0yjIco4qr7EWri0RtN/VzV1S+IuUxbKsN1Y3W2RgbAtJu9hkRPKddV4yVlWH2coA23lcQIrd2cin/GipOUsCY4W+3qsJQYpPpm4+hN8ti7EZllVKAJNa15XPVolRyIQWRz//qpc0vNZ5ZVzc8tQhTOhqPYMfpwKFoiaxc1GU7afpbROxLAEg8FYlUMbNl0m+eCNTn2dRauyxYm/SZK18mmUxZbEygVE3iFluONRj/WKbBRgfa+FayBxYVlNzogCzfqU0BcZShOSSwPBuHb/Apy3SAkxLYDS51hC1mp6d/CoqbBXBLKxsOgOGUqSxwdbwlfHZbuZTBdA0NlcopiOKkebqi5xmYV8WvAJMS2BgT7JLZHBjUKqlr9XOeD+tO3kBpoIzNRX+9lI+V8xqa3Lx+Fa/rWSMt1Al6Jrq6ENSmTUG70WuivMzianjvEGqiWfbRd6/9a1vnVyjtdvf+35Enk119CEB48fig1h28mxBK+xLJX11XhELrtfUUos6S8bwEGwWIINpFuNraCBMtR3Wbz5KkgRpSEqW8H4zyRQCZSxOufGZF+t708LleNz/+BiVpZmalyQwQlZeUZGzOqEuOtUocml9YAqe2fCyjrMUxI4X6grLpJNLRnCMySc1VtUQzBF7MHMN62ObprElgeFkrQKrr9uHTqE/5N9tGANw+ENA+4Cg2JKohd8pfKU2hm6yACM3jNKIOYd5gvLY+U/9Y3LmIwmMVkhuzm3OTYd4TFUwzCo5oijJJP6T8McO5FQtU+JHOBm5gxeZ46Ee5BLXZn8ZXmoI1FlSuWIwIk9F+4Y4ybM+kx2LQsi+KKsqdkKqEkl8pCbR5c92VPJRSgXcuK6u1UlvfytLbKdtaSSzTsZQjq8bi+SBlwM+B4IMGTZUYOclUpisSm21NQGjvc860crsw1nP6TLEZayMsWzKap6+KNYml0M1lJGTugQ7q0p/RR59+9vfjpoebX71mgZOUsbIYLJ7eC27uqxVL01ME1gXSrcRSXuOFAUbspacSXX5SwLDhbjwWItjq1iugJLWxaL1hU2+ZIO0JsBAjZ4W69f9soDh4FJOvgEib+mTuww1sXgp7yOfzE8+Pf0BEE1O4qCVS4aTJbiqeOOiszUvMzVGSw1e4OsYVGF2WyILk7p+Mi132GGHuLEClWR2t1hsGWtcpqgmSTHWkPTGWK4LeygaWN1z+KwVP+Yqpy3HfOxjHwu77bZbrCbbd999I8unchnAKMOgp78UCtvRfBqlzMTK/IMOfaLbPF/VWKu0JwT7Ax7wgNjGl33I7nznO0f5Qd8YSv+oLoNtAQ6U4/daluyuq8NMUgwX8NpIigzbTExf5/oxVWlg1mjkvTVGbaMGKILOTLT4pewP0JA/3EOVzqlxZgFj7RgZZPInpW6wCL9rLBqbtWd4b4W9ZXtqiK1KMVsKiJZGc1JkEJmZ7ByrCKdMEKnWVXOUBEYPsuhe5FkXiDzM0kgFlpWz7OSH1X/qqafGzhfer4iXmW6y7Oh39tlnb9R9adozJYGxBtEysjA/Od6PZQW1VwIohkX4AwouGR8a4FrYL8973vPCW97ylgicqgNSed9JYLwzzhpXy6qVWVbmNVFRkACkpS9BMGotxaqYF+ugpB6Tnv7MHR3+Un6yKDrWJgyRAszKROX1Dko+CwzJYX9MXf+ZlMqcBGbsrKyKQ9gVL8ohvoKT8sILL5xosXQvx+hEewMgzwrlSyvCfwYNQMJfVGFPtbIWMOglQ69LuvfBtggxUwRLgx88zjvvvHP8qzI96h4pi2LGri57h6QmU5tgH3PMMbEvGT1jOJYmDFAOf6effnosmqWknEpmOYMlq+q03ZmBscJw0f1kmuCqMWlsYlvyGVq5Qn9lmvyQo3zYYYcFAGLHJXbJYMclFADUZHrJ8Bu1/nxv5VArilE8QSFYG4pddPtGAPixyUKXMahxWnWatopoZUw+7Xtxx9BLhnZY2DZoa7xI2MCpqU2wfaJHKxnj3f51pQYzsPFBHOo1K7FtABAINlfMWuucqzi/KAt7BiqiCwabxcmk8L4yD7ifjCxWBsWMuS2WlzEyEqEAmi9AEfSSIUuGUDNtf2mHBTVpE2za/0I1tJPPeSWB8epiVTpTzo2GfIwfkw8DVP3OvJxwwgmxVxntSBDuTDxRSuQJXWNx17BPGU3kkDvIJHrL+M1KG7Eyr+JZYZhbsz5kUKQW25wGP2YLjA0awuJgXdoEm41IiV7iBSBLEw2Mxj90YTrggANi/39SjSWvprllkhRjNRfej61ZKcB5L7C8zVIcUIlPOumkSS8ZjE1YP2wMNRrA8C7T/McuhGkLNgsYLjbW9r6aPOv6r2LnfKf2vmxVot3J+a8iJmuYtnZi8mBjBqbKuKwLotk8O2tGcA3mkJAzrM42CqpzBGdRjLX8x8bKtDCtGm0dk1ABiRhKT8KGQTvjpXoaQKFwidAzanQn3uUi/NdFMP0q5zsmnt2WyJKhlS+J47RjpLsfQl8vKAZQ0MYkl6A6XnUbYicpZuzqsuUWdqXz/sQTT4z7j9Hdb//9948T//Wvfz3uGsv+MQh8ASpjVMVfPjW3GJhuBqRx8V9WPJOp5O+6CCaXYW/LL3zhC+Hkk0+ODUo5li7lJGCw5zLxfnKV1YFXuWqcm4oGJylGFxizS0ZYWtWZeVHqkTwBlu2TVwYwbBdP6Nlm0VhNr5XwH7MTU8JflGVzlHFiEoNhfmzTOMkNmpO+5z3viV3Kd9ppp0lRkw1B19kySYrxBubY3P5WgNvCJCjmyCOPjK6YU045JdzjHveIh1qZDDvELUOZH93MxcpSbCzKtVTM3wMztryyukmEQohUUheDHIF1VbElnJqAR1amgNM1pwGUBGbseWXTesNAEWy1iJpMlr+N61tPAZ5mqApus/vuu0eWVpIxpjmkKn7zeWX+kGkUpGIk28RBSoKtdraNTRvLmJK+tHIpS73KqSkWJSWpKurJd1IKBO40qkmysgLMOmC8oWlVaMvubNhY53lAcog4CQwXqdqfK+fii3hMFSuroxKrscnRy3fsgwkYbMhgWZ+uI/bmwwl2vpLAFOG/yUYUU7fgpCrbKjWORb6IanLTipPAFHX5kqhNVWUD+ZCA95IAlM1htkGyTvbBLIVLaaasFiRiT1Kdc1z8VVfPohhdvOlN0sMazhGzjrUqJCBPMlTh2Zr9bP1tfgaSwPgH9WGA4Uxp8yfxWTGzgsOdLVexk+8Xc0qRmIiOlEtGqaHeAvYrofm09HumHYeVI/Jr1RUUOjK1AAAJKklEQVSvWo3MH0N7X+aN1CYbbvZz2Ipi9AClAUP9ArLUYgGt8hJ4m6ix5c+JoF9altQDIwCm1btwdi4VRmM2xcrkXhhzk58Us7WuFesnYx9mWBk5ZkpiseyslUvG2zGeJ4s0Uw8/1N997F3jyR3X+eefH/e5JEtm++23jzv5Ua18/PHHhzPPPDNymx133DFuHrf11lvHaegkRdbyRO9eWPQSDC0WqzlZDS2ylJV1NZj+pfg+qa8f+chHosv/wQ9+cIy7UGZOlfKuu+4aT6PibM8994zfIRJSyX5ZrEwIa0ta28gzJxI3VErRc2kMtiErY7QsSRY731vgyEUmfMwfGTFsWEpCH7nM1PfTLxNgaV9y0EEHxTDzfvvtN6GaaT3LkjLG7olic6u0mnJJfqgAVamzEtJe2/LqLmUYZ511Vkz4oxD2nHPOCZRb8CJbhhpMziGKudVWW8Vusx/96Ecv1fe/sVbmHXMaiJQBReqGOvGp51LFguw1K2Pse7lY1JfMsjkdB5WRzY97hmRAu/EC80aFGYB1lowhl7as1tRgF/l3OSwBwMsXK4sAAW2LYwBV3cr5LBCV1mSdoJbDtNbKtO2GHkxyZhl8Z3VjYtVbGaDPlp2pfp+uFwKJxD9eJAHynTQwcsvUyJRrpBSApIwRqloJlnUpY2aRKcSPQZ8BTGO3hqPdw1KuGKsQMRfK7te82GJirot9oxbzrfqVyZUtvipSXWRA/LPbKgZ+k2Ftj/M7wdIwjpcog/eWi0h+cR5AIHeklaXmLkkxulkpXNqQ8W9VbckPbzrkepEba2U6UYJwrPUxEvJiPTbTBUpQP3/K+6zGlqKMVsBYQSVStRpH05sP4TwZj9OKYzV+Gw4WMBS+UqVMmTibLCD8cfdTINtGOUqyMh8Yq6o/HMIEt3mGqnJxWzUmYASG/lPfv8cee8R6/l122SUmXGD98x1Z/tRfNn0lgZGWMeYGDJpcyy2gMHxihxxySGDjhUc/+tFRG6Ng6fDDD481MjSNa/pKAuMzP3QjrahlcMnIErfylHFLM5N89QYhZRjf+c53wrnnnhv7x/Di/TbbbBNb/+LcTEVAW8mYMdfHVHmepaky6YCG8JexCZhwF9ga3zd9JSnGa2U2frHo1GLHJgCq4jE+B8wa3QJJ6jH/fSFsE3CSwHgnJjeRdbxMlr8fiya6KllDQOm3M844YxImgEqozQS800477VKYQE0qcEqBlQRGFxDZckNe1s2QusnQf7djkdqscfLsNlYjVgVwCnpZGVUV4fXpTKLKaYHGJDBV6nEb/XyoINkx+THbfmXW0KS2Uu4YHJ78ARzn81/5ytYhSqcmvVp7l+2KgeStjr/ocsbKTGliVdstymzwSRW+KJbr2SIlcRq/IFPR3yTFaCXJIacVI5686HF/OWiVfCfZoiimNFKvHFTFapj8KpnkKcRvG1zFRZLAcNLYt/T1SXyWTVkZZKmK98pd1salsD2xr06y/bVafEnBolOLVqqVL3Wr2XuL5WOzipC4ShUF+KSPlKzNohjPD4X6MigB3s2iCbNjrkrK8D5Ezqs6p0qp8B6FRqzMqnb2xssAShXF2PQkKzNSK7zr37MoRuTtc69SmkXXD7sa1/MspsrFvxr3TV0zCUzJK9ssNYer8nsSGO+SGVteWV8KThIYlgPgjD3mvypkMeWiWcCUvLJ5w5JRH1PyyjadPyo5hUtiZcpAtCmgvTzxKt00J69slW5dedkkK/Mu6irDap4PvBr3sraL9XUtjB2zDHZLCliNMeXLSl2n7e9JitGD9qU2th1g0/PlC8vt/dL0PnXnJYHRiQJG7v4xbenb9aTnXK8As75bOB4OG/fvOwCYBKawsk1yFnjnxySB4Y5jbyTX+axnXDAJTFGXq8vJM+a21SFJYHR1WBqvvrSUVqOc4eShjDMLGBvB0/6QaGmpOsIZ5qO3Q21qkhIveJi+x5YExqeD2nQfn4zd2+y2uLFNjtfYuBwsfFreV4tbZp2aBEYPqa4Qylq0g8i604APsjEmFWRVlZPPcwhJYHyxju0rrHTSeT5w1/eymZV1BUpd3zPneklgdBGffLGMpX51Y82ZyK6PyQbGCkSbftO3hdx2QsTGlJHZt9DXeLKAsdTiWVvbiRnC+VVj6js9KwlMMTAHbGAWl8z86TpJMcWJOWAnJuulxGPmSzVJiploCet7Q5ZA2XwASgJTWNmAWVkR/vOhEnuXJMUUdXnA6rKE/zI5LutowHoC5k8nG+6YpBhbhiHPsjJklqHWv25McIo+3TNJYMBQuwmpBe6yRjFtEazG3BfVZAFjH85WYKnmv6+H7+K+trZ/SJmm2cDkFHR2MVF9X8NXJ/f1PElgfLsOhVwRkssUKGNc6mIhz/LgZUydq39IpN90ZfsxDCWskaQYX6IgUodiliXR3I9pCKUmSWBYiaUGsyk9Nj8vCxjrXR5j3+Xm09v8zCxgxt53ufn0Nj8zCYznt2Psu9x8epufmQSGSwNG6bvcfJKbnJkERlqZUkl1k7H0Xe7L/ZQERhSD41IOP+u8XHSVWWENPzYlzzdZ7V2ckwWM1cpsUvmiJ/tpAqvG1PfYksCUfmUDDpSVfmVdMKfZrpGkmNKvrPQrm21JdXR0ah/MvpSbJMUUX1lHK2DGy2QBU/qVzTirHRyeBKb0Kyv9yjpYZ80vsdD9ykrf5ebAz3pmkpVxwWLHzDqt7Y9PAlPsmGLHtF9mDa5Q7JgGk9bHKUoyGXwDBskY9uNSNFO5y31X9nYBXN2Y7PZVXdxn1mskZUyxY4odM+ui6vT4hbNjOh19uVj2DCRZWfaVyoGdzkABptPp7O5iBZju5rLTKxVgOp3O7i5WgOluLju9UgGm0+ns7mIFmO7mstMrZQNTmvx0Ou/JiyWBKb1kSi+Z5CqaxwELs7FP6SUz0BTZAsxAgVE8Zs2aNZfafXsebKWPeywMKyvCf8DCn5Vb1OX50m9SXS4ypsiY+S7JmrsVGTMIGOofouyDOQCAlPWzUNstat6K8J/vCkoK/6IuD1hdLn2X50st0TxZmyhoL+rygNXl+a+XcsckxZQp6mcGCjD9zHvyrgWY5BT1c0ABpp95T961AJOcon4OKMD0M+/JuxZgklPUzwH/BwNW+2m6bSJRAAAAAElFTkSuQmCC">
                                    </td>
                                    <td class="w3-center">
                                        <a class="logo center-elements w3-margin-top">
                                            <img role="button"
                                                 style="margin: 0 0 5px;background: rgba(52, 73, 94, 0.94);width:60%"
                                                 class="img-responsive" src="assets/app_settings/pwa/images/Logo.png">
                                        </a>
                                        <a class="company_address w3-text-black" href="https://oscorp.ir/">oscorp.ir</a>
                                        <hr class="w3-text-black"
                                            style="margin: 2px;height:1px;color:black;background-color:black">
                                        <p class="text_1 w3-text-black">تست: متن 1</p>
                                        <p class="text_2 w3-text-black">تست: متن 2</p>
                                        <p class="text_3 w3-text-black">تست: متن 3</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>

    <div class="print_element " style="height: 0; overflow: hidden;" {{--style="visibility:hidden;position:absolute"--}}
    data-html2canvas-ignore="true">
        <!-- Logo & Description invoice & Seller details & Buyer details & Invoice date & Invoice number & Barcode -->
        <div class="header_height">
            <!-- Logo & Description invoice & Seller details & Buyer details -->
            <div class="col-md-9 col-sm-9 col-xs-9">
                <!-- Logo -->
                <div class="col-md-4 col-sm-4 col-xs-4">
                    <a href="index.html" class="logo site_title w3-2017-greenery w3-text-black">
                        <i class="fa fa-paw w3-text-black"></i>
                        <span class="w3-text-black">Gentelella Alela!</span>
                    </a>
                    <h3 style="direction:ltr;font-size: 11px;margin-top: 0;"
                        class="logo_description text-center w3-text-black">Oscorp inc.
                    </h3>
                </div>
                <!-- Description invoice -->
                <div class="col-md-8 col-sm-8 col-xs-8 w3-center w3-margin-top">
                    <p class="description_invoice w3-text-black">صورتحساب نیابتي فروش كالا و ارائھ
                        خدمت</p>
                </div>
                <!-- Seller details & Buyer details -->
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <!-- Seller details -->
                    <hr class="w3-text-black" style="/*width: 50px;*/margin: 0px">
                    <p class="seller_details w3-text-black text-center"
                       style="/*width: 50px;font-weight: bold;*/margin: 0px;text-align: justify;text-justify: inter-word;">
                        <span style="/*width: 50px;margin: 0px;*/font-weight: bold;"
                              class="seller_name_label">فروشنده:</span>&nbsp;
                        <span class="seller_name">شركت نوآوران فن آوازه (سھامی خاص)</span>&nbsp;
                        &nbsp;&nbsp;
                        <span style="/*width: 50px;margin: 0px;*/font-weight: bold;"
                              class="seller_national_id_label">شناسھ ملی:</span>&nbsp;
                        <span class="seller_national_id">١٠٣٢٠٨۴۵٨۵٧</span>&nbsp; &nbsp;&nbsp;

                        <span style="/*width: 50px;margin: 0px;*/font-weight: bold;"
                              class="seller_registration_number_label">شماره ثبت:</span>&nbsp;
                        <span class="seller_registration_number">۴٣٣٨۴۵</span>&nbsp; &nbsp;&nbsp;

                        <span style="/*width: 50px;margin: 0px;*/font-weight: bold;"
                              class="seller_economical_number_label">شماره اقتصادی:</span>&nbsp;
                        <span class="seller_economical_number">۴١١۴١٩١٣۶۵١١</span>&nbsp; &nbsp;&nbsp;

                        <span style="/*width: 50px;margin: 0px;*/font-weight: bold;"
                              class="seller_address_label">نشانی:</span>&nbsp;
                        <span class="seller_address">تھران - گاندی جنوبی - نبش خیابان بیست و یکم - پلاک ٢٨</span>&nbsp;
                        &nbsp;&nbsp;

                        <span style="/*width: 50px;margin: 0px;*/font-weight: bold;"
                              class="seller_postal_code_label">کدپستی:</span>&nbsp;
                        <span class="seller_postal_code">1652845857</span>&nbsp; &nbsp;&nbsp;

                        <span style="/*width: 50px;margin: 0px;*/font-weight: bold;"
                              class="seller_phone_label">تلفن و فکس:</span>&nbsp;
                        <span class="seller_phone">02177352215</span>&nbsp; &nbsp;&nbsp;
                    </p>
                    <!-- Buyer details -->
                    <hr class="w3-text-black" style="/*width: 50px;*/margin: 0px">

                    <p class="buyer_details w3-text-black text-center"
                       style="/*width: 50px;font-weight: bold;*/margin: 0px;text-align: justify;text-justify: inter-word;">
                                            <span style="/*width: 50px;margin: 0px;*/font-weight: bold;"
                                                  class="buyer_name_label">خریدار:</span>&nbsp;
                        <span class="buyer_name">محسن رضوی</span>&nbsp; &nbsp;&nbsp;

                        <span style="/*width: 50px;margin: 0px;*/font-weight: bold;"
                              class="buyer_national_id_ssn_label">شناسھ ملی / شماره ملی:</span>&nbsp;
                        <span class="buyer_national_id_ssn_label">٣۶١٠٧٨٩٣١١</span>&nbsp; &nbsp;&nbsp;

                        <span style="/*width: 50px;margin: 0px;*/font-weight: bold;"
                              class="buyer_registration_number_label">شماره ثبت:</span>&nbsp;
                        <span class="buyer_registration_number">--</span>&nbsp; &nbsp;&nbsp;

                        <span style="/*width: 50px;margin: 0px;*/font-weight: bold;"
                              class="buyer_economical_number_label">شماره اقتصادی:</span>&nbsp;
                        <span class="buyer_economical_number">--</span>&nbsp; &nbsp;&nbsp;

                        <span style="/*width: 50px;margin: 0px;*/font-weight: bold;"
                              class="buyer_address_label">نشانی:</span>&nbsp;
                        <span class="buyer_address">فلکھ دوم تھرانپارس خیابان جشنواره خیابان زھدی خیابان کرمی کوچھ ی یوسف ایمانی پلاک ٢۴ طبقھ دوم زنگ دوم از پایین</span>&nbsp;
                        &nbsp;&nbsp;

                        <span style="/*width: 50px;margin: 0px;*/font-weight: bold;"
                              class="buyer_postal_code_label">کدپستی:</span>&nbsp;
                        <span class="buyer_postal_code">١۶۵٧٨٩۴٣۴٣</span>&nbsp; &nbsp;&nbsp;

                        <span style="/*width: 50px;margin: 0px;*/font-weight: bold;"
                              class="buyer_phone_label">تلفن و فکس:</span>&nbsp;
                        <span class="buyer_phone">02177352215</span>&nbsp; &nbsp;&nbsp;
                    </p>
                </div>
            </div>
            <!-- Invoice date & Invoice number & Barcode -->
            <div class="col-md-3 col-sm-3 col-xs-3">
                <!-- Invoice date -->
                <p style="/*width: 50px;font-weight: bold;*/margin: 0px;"
                   class="invoice_date w3-text-black text-center">تاریخ: 1397/11/10</p>
                <!-- Invoice number-->
                <p style="/*width: 50px;font-weight: bold;*/margin: 0px;"
                   class="invoice_number w3-text-black text-center">شماره فاکتور:2525021</p>
                <!-- Invoice Barcode -->
                <img style="/*width: 50px;font-weight: bold;*/margin: 0px;"
                     class="invoice_barcode img-responsive center-margin"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAACOCAYAAAA7IRMWAAATq0lEQVR4Xu2dR4gtxRvFa8wiIipiQAyYcKHydCEGjCCuTCD6jBhQngtFBTEuFBMGVBTFnNPimRCXghHcuRPdiGDADIoRdf5U3+n5367bdc9X1V0zty+/B28z1VVddar61PlOfd13YXFxcdHxDwRAAARAYO4QWIDg525OGRAIgAAIVAhA8CwEEAABEJhTBCD4OZ1YhgUCIAACEDxrAARAAATmFAEIfk4nlmGBAAiAAATPGgABEACBOUUAgp/TiWVYIAACIADBswZAAARAYE4RgODndGIZFgiAAAiYCX5hYaGBVv0CbP338IXY2N9DyMN26/Kw/bBerFz1q24n7F9sfLH+xsab2n9rf6ztquus85Q6L9b5io03/Luab3W/GA5Dnze1TnPLc+vF5k09n6pe6XLFT135IVx/ubxnxTG2lUHwS19qUAs8lZgUASmiTSVYRYixBac26NR2Vb9TcVREHbufqqcIJHccql5qf3M3bDXfQ29XzZ8qh+CDJxsFPwLESogQfHMBqQ0NBT9CQCk2JURyy3PrWYk0dcNR7XYth+Ah+NaoB4IffZtObfgx5Y+Cb1qdXSMkq+WkCBGCb84EFk1gbVgVWrigc0Naq9KJfSyz6wRaHyw1vhjhqXpdQ/2+iFaF+kq5KRxj7asISdVLJTzrOErP29CIuFR/1fypchQ8Ch4F34KAdWNFwTcRyN2Q1AaqNkhreSkiLtWuInBVDsFD8BA8BD+BgIpUUfAjyJQQUARcuhyCh+AheAgegl9CIFeJ59aD4EdnNdaNspWsUr4Hrw7VlLKJdiDIr1chqSonDz5PQalQPhV3LBosGo8ABN/+g3nWSA+CT3wBK1QGqQCSRUMWzTh1q8N6tTHGNkIlqMJ2uyreUkRcqt2+xlsqCSM2P7F+x9ZJKj+F64kXnXjRqREKpi5AK4FZI7yuykYRpopU1GGoGoe1/7GIVj3QpQhzaO1C8Laf0obgIXgIfoxtIfimxdcXkfYdcfTVLxT8EpIqZFTKBg++3ZO1WkZWpayus85TqhLtSoypkYO6nwp5FUGo8a/WvA1NaZfqr5o/VU4WTcDIEPwIEDx4PPjxRwMPvvlc5AqMlVb4EDwE3xp0QPAQPAT///Q9q1JeaQK39guLBoumQfQQPAQPwUPwamOIbWh9WZGx+4eqlENWDlmrNaGyS6yhd6533dfCDxe4ei9CWY+x9vDgm1kcVhzVOlupciwaLBosmhYEUtP4VGiuHujYxsIh6wgZhZ+1vNRhaKl2lQWjyiF4CB6Ch+AnEFBZSCqCiZXnRkhWArcSntqQU8sheN5kbSVSpdCsSlJ5ZaqdCU9r6c1Z64OlHvjVCvVj9021ShQxKUJQOKLgm0q9FGEOrV21YalyFDwKHgWPgkfBLyGQuwHk1lME3bUcgofgIXgIHoKH4CsE1EZl3XBSI+RUh2HCcVg05tuoU3LlTbayZQtwqSF/ar+slojV2lETi0XTtBj6soaUhaesnaHOmyKa3PLceqk4KktupcpR8Ch4FDwKHgWPgkfBewRQ8M0fU1YKU+GllH/XbIy+lHRqxNXXfRW+KPjpkZOat76UdKnIQEUOqhwFj4JHwaPgUfAoeBQ8Cj5+CKOUuPVMQCmukImshzPWTy+o+ytFrSKWmOJSSjw1krEq01mdt1KKeGjtKoWuylHwKHgUPAoeBY+CR8Gj4FHwKPj2j7CpyCc18hqa0i7VX6XQVTkKHgWPgkfBo+BR8Ch4FDwKHgWPgh/fDVPPgMJIRynwruUoeBQ8Ch4Fj4JHwaPgUfAoeBQ8Ch4Fn/9Jg9hZjTUSalWj/ksBfKpg+i8UhcBZ0wq7Ep5K00tND1QhsEofVIeFXccbC7lTF746tFTj7DqO0vNW6tByaO1i0bR/hniCryB4CH5aBKYIUxF/qY1FEbHaGBRBKKIO66v+qHKFo1XJ5RJ1br1UHK0brGq3azkePB48HjwePB48HjwePB48HrxSqLzJOt2jR8GPEFgphY+CR8Gj4FHwKHgUPAoeBY+CR8GTRTO+G5Y+M8CD55C1NeSzHo6FoWKsnlpos3pYlzqeXAshrNfXfdWGEuuv1QKY1Xkb2mFoqf6q506VY9Fg0WDRYNFg0WDRYNFg0WDRKEXNISuHrCt5iIqCHyHAi06L5MFbHjwsmhECaqNS1k7XF9RKWR5Da1cRuCrHosGiwaLBosGiwaLBorEom1a29CHEQvO3TJVSVOWhVWA9LFUKJlQEQz+sSx1PKu7hfCvlG1NcsfsqS0jVsyq81HHkrudcfK3rMHW8s96uGo8qR8Gj4FHwKHgUPAoeBY+C55BVKWoUPIes03gijGCUAu9ajoJHwaPgUfAoeBQ8Ch4Fj4JHwfMm6/huyJusIzTUGWDsjCeMMKxnhGF7pEmSJtm6EFMPCyF4CB6C5wc/JkLeVCJJzTZQO6hVaYSenzXLQI0v1q6q1zWfOnU8qbjHlElf91UbSqy/Q583peRyy3PrKS+8VLvqvqocDx4PHg8eDx4PHg8eDx4PHg9eKWqyaMiimcYTYcSlFHjXchQ8Ch4Fj4JHwaPgUfAoeBQ8Cp5DVg5ZOWTlkHUJAWVZcMjaXCqxT1CkHjZzyNr8NIg1ySD3sDS3XlcLRtXHosGiwaLBosGiwaLBosGiwaLBosGiwaLBosGiwaJpKCJlmYTZFeoNv3CBqa+LxiwEZZGFFoB1g0u1lGLj7zvrpJSVUqpdZcGociwaLBosGiwaLBosGiwaLBosGquCjSnfmOJCwY8QGOphKAp+ZN2F/1SEqCLV2Bv6E/dZNF6pQlmVFdI6Sn7wYxkWNaEqVFfWhArpc60Sa7+s66Prwlc4qHF23ais/Y89D4rISxHm0NpVFowqx6LBosGiwaLBosGiwaLBosGi6ap8sWhsVszQlHap/iqFrspR8Ch4FDwKHgWPgkfBo+BR8Ch48uDHd0N1lqAUdulyFDwKHgWPgkfBo+BR8Ch4FDwKHgWPgudN1glFlJtWpkLA0iHY0NPtwhBYjae+3op7ONGkSfI9+GlCMFxfWDSjj8Kp563VZhj7I7/Jym+yNhZS7MGC4EcIqI0qV7Dk4qs2Zmt5qWyXUu123QBKC8DYhpX6fEHwC9M/fxp7j0u9WGStpxaaeuBjSlrV6/pNExT8CAH1Al9qJFJ63koR5tDaVc+dKofgg5WtHgSlbGKhRO4DoXa20hOYq4xUKGr1siH4PMtj6PM2NCIu1V9F4Kq8ND+g4JcQgOCbShKCb0ZkMetC4aTqWQkABT890knF0brBqna7lkPwKPjWoCO2MFSEM2tEgUWDReMRUJFwX0SqIteVLofgIXgIvgUBRQgqIutrY0HBj5DsSxGXslJKtdvXxmM9a1PjsPYndp2KOK33Dx9ZsmjIojERRWwBqr8rZaYIKnXhxyKleYm81IOeW55bTxFbqXbVfVU5Ch4Fj4JHwU8goJIJVATT9XC8FGEOrV1F4KocgofgIXgIHoJfQiB3A8itpwi6azkED8FD8BA8BA/BVwiojcq64cSuS7UiY2cH4YLFg8eDr9ZErhceW5gxLzxc4Ln35ZB1hKTCz1quCCy3PLeelTBz20fBo+BR8Ch4FDwKHgU/TUmoUCL3UMqarlcqDSpXGYWKN6Zoc3FRilodEqaGkOp+1vGm3hcFj4K3WCfq/ZRS/BBb932tc8Wry/fhR7fbX3m3TrwKJRVRQ/DNX51XeIWhdWpWytA35lxLInWdWnFarXbVfVU5Fg0WDRYNFg0WDRYNFg0WzfC+ShiLHFJDSCya6d/ttuKjrlOWpFKsqnxokYEajypHwaPgUfAoeBQ8Ch4Fj4JHwatDz74Pd9X9YorY6i2rs4DVOjsZmtIu1V+l0FU5Ch4Fj4JHwaPgUfAoeBQ8Cl4pahR83g+UWL15pVhVeSmlXapdNR5VjoJHwaPgUfAoeBQ8Ch4Fj4JHwU9X6Aofq1IvpYiH1q5S6KocBY+CR8Gj4FHwKHgUPAoeBa8UKh48Hvw0nggjGKXAu5aj4FHwKHgUPAoeBY+CR8Gj4FHwePDju2HpN29R8M1vOLWqUf8dez42xsfGLKFz7iGgCr3Vi0ex+6oNRdVTBMGLTtM/AqfmDYIfrTD10cKQmEPcrDhC8BHLKRXAmHenPksam8iQaBRxqXIrEcfuGyM+a7u5xJh631wcconJulGp8ad+/dKKu9qwVDlZNM0nVH211Erc1uuUIFHzA8FD8K2KwrphWYlGEVxfGwsE364QFRFYhYh1I1ytjUPdV5VzyBohRLXTqAc43GkUIaSWx0Kc2H1R8M2vIaYqaUX8VuWbel8IHoL3CHTd0JTCzuWH2Lrva53H+j3Bc3jwePB+USjFpohcES5pkqRJWtaZWod9laPgY6YOfwcBEAABEBgEAuYsmkGMhk6CAAiAAAgsIwDBsxhAAARAYE4RgODndGIZFgiAAAhA8KwBEAABEJhTBCD4OZ1YhgUCIAACEDxrAARAAATmFAEIfk4nlmGBAAiAAATPGgABEACBOUUAgp/BiX3++efdWWed1ejZmjVr3CmnnOLOOecct8suuyyXTbv2/PPPdzvttFP2CL///nv3+OOPu6eeesp9+umn7thjj3WXXHKJO+GEE9xGG23UaPevv/5yr7zyirvvvvvcRx995PbZZx+3bt06d+GFF7otttiicW1Ku77iL7/84p599ll3//33u6OOOsrdc889bvPNN88el6+Y0l+uHUGdOm+dJojKvSAAwfcCY7+NtJF2fYcDDjjAPfPMM27//fev/jTt2pNPPtk9/PDDbrvttkvu4CeffOLOO++8iqzDf/fee6+79NJLl78D8s8//7i7777bXX311RPX+g3hjjvuWCb5lHZ//PHHanPxxP7FF19UbV988cWdCT6lv1w72pxT5i15sVGhGAIQfDFo8xuuSfv99993hx12WPWdmG+//dY9/fTT7pZbbqmI15Pmpptuukzw9bX+rj///LO766673K233urG/57SI38/f4+TTjrJHXLIIW6DDTZwb7/9dqXI99prr2qT2XHHHasm3333XXf66adX6vrmm292u+++e0XI1157rXvzzTcr9X3iiSdW16a065X6FVdc4Y477jh35ZVXujvvvNPtsccenQk+pb9cmz5vKeuMa8siAMGXxTer9ZDg60Y8cV9wwQXu999/r4h92223bSV4f/0HH3zgDj/88GyCb+v4v//+62644Qb31ltvuZdffrmyYdr+Vtf1ts5pp53mjjnmGHf77be7TTbZpBWPWBsff/yxe++995y3mv7880935plnut12260Twaf0d8MNN5wYb2xs83xt6rxlLXoqFUEAgi8Ca7dGFcF7MnnsscfcVlttNUHwXu1//fXX7sYbb3Q//PBDtkUzjeDfeecd98ILL7hdd921ihbOPvtst/feezdI/Jtvvqn8+AcffNAdeuihyxuStd3wOm/X9EHwKf31UYt1bPN8rRcSufPW7UmgdlcEIPiuCBaoH7NoHnjggcqi8X735ZdfXnngMQ/eWxtXXXWV23777Xvr4VdffVUR3oEHHlj1w1tE3oo544wz3PHHH1+p3d9++8098sgjlVXz008/Vfc+6KCD3EsvveT23HPP1r60tVuK4FP6u/HGG5vHNs/Xdpm33hYfDWUhAMFnwVa20rSD01NPPbU6dKyJe9q1l112WUXE41ksseufe+65SiHH/vnDRm+zeE/9ySefdPvuu291aW3D+OyeHXbYwd10003V3/bbbz93zTXXuO+++666vrZ0wvZj7eYQvGVsKf31ffAWk2Vs83ytt+Jy563sk0LrCgEIXiG0CuUhUW255ZbVYatXz/6wso2wwwPZhx56qPKq/X/v29f/LCTY9jD7dh599NHq/5FHHrl8Sa2IP/zww+pv22yzjbv++uvdRRddVPXztttuc+vXr29V8J7cY+2WIviU/taq3DK2eb42VPAp87YKjw+3HEMAgp/B5RDz4Nu6qvx6n+niLZ3NNtssa6R//PFHlU3jVfgTTzzhjj766MbPpNXeuCdBnxLps13qtMy///67Sp387LPPqkyarbfeerkPqt0cgrcMMKW///33XxXVWMY2z9d2mTfLnHBNOQQg+HLYZrc8KwT/66+/uuuuu8698cYbVYrmuHKvB1eTuCfBF198sUqRrP99/vnnbu3atdUh63gWjaXdUgSf0l/fB79BWcY2z9fWWTQ585b9EFCxFwQg+F5g7LeRrgTvM0X8G6jeDw8tGmtP/QGpJzefB+4PTY844oho1ddff72yj3zOvM+933nnnd2XX35Z5cG/9tpr7tVXX63egvX/Utodv2FfWTS+zZT+cm23ebOuN64rgwAEXwbXTq3mEHzbDc8999zKnomluU3r5LTDW19v/I1SnznjM3Z8SmT4zyt3b9vUnzZIabfO5Y/1M/et1pT+cu3okxQp89Zp8VO5VwQg+F7h7KexLgRfH8j6zA+vqHO/2ZL6QHsi9Ln5/nDXZ6ocfPDBzmfx+O/n+HTK+l9Ku6UI3vfF2l+uHc1cyrz18xTQSh8IQPB9oEgbIAACIDCDCEDwMzgpdAkEQAAE+kAAgu8DRdoAARAAgRlEAIKfwUmhSyAAAiDQBwIQfB8o0gYIgAAIzCACEPwMTgpdAgEQAIE+EIDg+0CRNkAABEBgBhGA4GdwUugSCIAACPSBAATfB4q0AQIgAAIziAAEP4OTQpdAAARAoA8E/gdvetdE/aXltwAAAABJRU5ErkJggg==">
            </div>
            <div class="clearfix "></div>
            <hr class="w3-text-black" style="/*width: 50px;*/margin: 2px;font-size: 11px">
        </div>
        <!-- Table-->
        <div class="w3-margin-top w3-text-black col-md-12 col-sm-12 col-xs-12">
            <table class="table table-striped jambo_table print-padding-tr-td-2">
                <thead class="header_height">
                <tr>
                    <th>#</th>
                    <th>نام</th>
                    <th>نام خانوادگی</th>
                    <th>یوزر</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr class="vvvvvv">
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                <tr id="after1">
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr class="beforeClass">
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <!--<tr class="html2pdf__page-break"></tr>-->
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>علی</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>اسدی</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>علی اسدی</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>


    <div class="w3-center">
        <button id="create_pdf" type="button"
                class="center-margin w3-margin-top w3-margin-bottom btn btn-success col-md-4 col-sm-4 col-xs-4 ">
            <span class="text">{{__('Dashboard.public.print')}}</span>&nbsp;&nbsp;&nbsp;
            <span><i class="fa fa-refresh hidden"></i></span>
        </button>
    </div>

    <div class="row top_tiles">
        <div class="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="tile-stats">
                <div class="icon"><i class="fa fa-caret-square-o-right"></i></div>
                <div class="count">179</div>
                <h3>New Sign ups</h3>
                <p>Lorem ipsum psdea itgum rixt.</p>
            </div>
        </div>
        <div class="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="tile-stats">
                <div class="icon"><i class="fa fa-comments-o"></i></div>
                <div class="count">179</div>
                <h3>New Sign ups</h3>
                <p>Lorem ipsum psdea itgum rixt.</p>
            </div>
        </div>
        <div class="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="tile-stats">
                <div class="icon"><i class="fa fa-sort-amount-desc"></i></div>
                <div class="count">179</div>
                <h3>New Sign ups</h3>
                <p>Lorem ipsum psdea itgum rixt.</p>
            </div>
        </div>
        <div class="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="tile-stats">
                <div class="icon"><i class="fa fa-check-square-o"></i></div>
                <div class="count">179</div>
                <h3>New Sign ups</h3>
                <p>Lorem ipsum psdea itgum rixt.</p>
            </div>
        </div>
    </div>

</div>


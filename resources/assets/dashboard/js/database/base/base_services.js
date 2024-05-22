import * as JsStore from 'jsstore';
import {DATA_TYPE} from 'jsstore';
import {
    WfAddPurchaseRequestServices,
    WfAddPayRequestServices,
    WfAddContractorRequestServices,
    WfAddContractorAddendumRequestServices,
    WfAddPayContractorRequestServices,
    WfAddPayGood_P_ContractorRequestServices,
    WfAddMonthlyFeePaymentRequestServices,
    WfAddOverchargeRequestServices,
    WfEditPurchaseRequestServices,
    WfEditPayRequestServices,
    WfEditContractorRequestServices,
    WfEditContractorAddendumRequestServices,
    WfEditPayContractorRequestServices,
    WfEditPayGood_P_ContractorRequestServices,
    WfEditMonthlyFeePaymentRequestServices,
    WfEditOverchargeRequestServices,
} from '..';

import {Public_Classes} from "./public_classes";
// import {UserDealerServices} from "../model_services/user_dealer_services";


const getWorkerPath = () => {
    if (process.env.NODE_ENV === 'development') {
        return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js");
    } else {
        return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js");
    }
};

// This will ensure that we are using only one instance.
// Otherwise due to multiple instance multiple worker will be created.
const workerPath = getWorkerPath();


const getDatabase = (dbname) => {

    /*// Table barcodes
    const tblBarcodes: ITable = {
        name: 'barcodes',
        columns: {
            id: {
                /!*primaryKey: true,
                autoIncrement: false*!/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            barcodeable_type: {
                dataType: DATA_TYPE.String
            },
            barcodeable_id: {
                dataType: DATA_TYPE.Number,
            },
            barcode: {
                notNull: true,
                dataType: DATA_TYPE.String,
                unique: true
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };
    // Table categories
    const tblCategories: ITable = {
        name: 'categories',
        columns: {
            id: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            number: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };
    // Table companies
    const tblCompanies: ITable = {
        name: 'companies',
        columns: {
            id: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            name: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            dealer_type: {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'company'
            },
            web_site_name: {
                dataType: DATA_TYPE.String
            },
            open: {
                dataType: DATA_TYPE.String, // date time
            },
            logo: {
                dataType: DATA_TYPE.String
            },
            national_ID: {
                dataType: DATA_TYPE.String,
                unique: true
            },
            registration_number: {
                dataType: DATA_TYPE.String,
                unique: true
            },
            economical_number: {
                dataType: DATA_TYPE.String,
                unique: true
            },
            managing_director: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };
    // Table currencies
    const tblCurrencies: ITable = {
        name: 'currencies',
        columns: {
            id: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            name: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            code: {
                notNull: true,
                dataType: DATA_TYPE.String,
                unique: true
            },
            symbol: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            format: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            exchange_rate: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            active: {
                notNull: true,
                dataType: DATA_TYPE.Boolean,
                default: false
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };
    // Table factories
    const tblFactories: ITable = {
        name: 'factories',
        columns: {
            id: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            name: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            dealer_type: {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'factory'
            },
            web_site_name: {
                dataType: DATA_TYPE.String
            },
            open: {
                dataType: DATA_TYPE.String, // date time
            },
            logo: {
                dataType: DATA_TYPE.String
            },
            national_ID: {
                dataType: DATA_TYPE.String,
                unique: true
            },
            registration_number: {
                dataType: DATA_TYPE.String,
                unique: true
            },
            economical_number: {
                dataType: DATA_TYPE.String,
                unique: true
            },
            managing_director: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };
    // Table package_types
    const tblPackageTypes: ITable = {
        name: 'package_types',
        columns: {
            id: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            name: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            entered_by: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };
    // Table products
    const tblProducts: ITable = {
        name: 'products',
        columns: {
            id: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            name: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            scale: {
                dataType: DATA_TYPE.Number
            },
            product_type_id: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            dealerable_type: {
                dataType: DATA_TYPE.String
            },
            dealerable_id: {
                dataType: DATA_TYPE.Number
            },
            discount_percent: {
                dataType: DATA_TYPE.Number,
                default: '0.00'
            },
            vat_percent: {
                dataType: DATA_TYPE.Number,
                default: '0.00'
            },
            enabled: {
                notNull: true,
                dataType: DATA_TYPE.Boolean,
                default: true
            },
            description: {
                dataType: DATA_TYPE.String
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };
    // Table product_show_room
    const tblProductShowroom: ITable = {
        name: 'product_show_room',
        columns: {
            id: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            product_id: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            show_room_id: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            package_type_id: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            quantity: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            no_of_items_in_package: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            item_package_type_id: {
                notNull: true,
                dataType: DATA_TYPE.Number,
            },
            station_id: {
                notNull: true,
                dataType: DATA_TYPE.Number,
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };
    // Table product_store
    const tblProductStore: ITable = {
        name: 'product_store',
        columns: {
            id: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            product_id: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            store_id: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            package_type_id: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            quantity: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            no_of_items_in_package: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            item_package_type_id: {
                notNull: true,
                dataType: DATA_TYPE.Number,
            },
            station_id: {
                notNull: true,
                dataType: DATA_TYPE.Number,
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };
    // Table product_types
    const tblProductTypes: ITable = {
        name: 'product_types',
        columns: {
            id: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            name: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            entered_by: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };
    // Table retail_prices
    const tblRetailPrices: ITable = {
        name: 'retail_prices',
        columns: {
            id: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            name: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            product_id: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            currency_id: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            package_type_id: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            retail_price: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            no_of_items_in_package: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            item_package_type_id: {
                notNull: true,
                dataType: DATA_TYPE.Number,
            },
            default: {
                notNull: true,
                dataType: DATA_TYPE.Boolean,
                default: false
            },
            enabled: {
                notNull: true,
                dataType: DATA_TYPE.Boolean,
                default: true
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };
    // Table shops
    const tblShops: ITable = {
        name: 'shops',
        columns: {
            id: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            name: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            dealer_type: {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'shop'
            },
            web_site_name: {
                dataType: DATA_TYPE.String
            },
            open: {
                dataType: DATA_TYPE.String, // date time
            },
            logo: {
                dataType: DATA_TYPE.String
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };
    // Table show_rooms
    const tblShowrooms: ITable = {
        name: 'show_rooms',
        columns: {
            id: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            name: {
                notNull: true,
                unique: true,
                dataType: DATA_TYPE.String
            },
            no_of_vertical_lines: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            no_of_horizontal_lines: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            no_of_shelves: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            no_of_rows: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            no_of_shelves_left: {
                notNull: true,
                dataType: DATA_TYPE.Number,
            },
            no_of_shelves_right: {
                notNull: true,
                dataType: DATA_TYPE.Number,
            },
            no_of_shelves_horizontal: {
                notNull: true,
                dataType: DATA_TYPE.Number,
            },
            shelf_head: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };
    // Table stations
    const tblStations: ITable = {
        name: 'stations',
        columns: {
            id: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            line_type: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            line_number: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            side_type: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            category_id: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            subcategory_id: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };
    // Table stores
    const tblStores: ITable = {
        name: 'stores',
        columns: {
            id: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            name: {
                notNull: true,
                unique: true,
                dataType: DATA_TYPE.String
            },
            no_of_vertical_lines: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            no_of_horizontal_lines: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            no_of_shelves: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            no_of_rows: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            no_of_shelves_left: {
                notNull: true,
                dataType: DATA_TYPE.Number,
            },
            no_of_shelves_right: {
                notNull: true,
                dataType: DATA_TYPE.Number,
            },
            no_of_shelves_horizontal: {
                notNull: true,
                dataType: DATA_TYPE.Number,
            },
            shelf_head: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };
    // Table subcategories
    const tblSubcategories: ITable = {
        name: 'subcategories',
        columns: {
            id: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            number: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };
    // Table wholesale_prices
    const tblWholesalePrices: ITable = {
        name: 'wholesale_prices',
        columns: {
            id: {
                dataType: DATA_TYPE.Number,
                unique: true
            },
            name: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            product_id: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            currency_id: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            package_type_id: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            more_than: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            wholesale_price: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            no_of_items_in_package: {
                notNull: true,
                dataType: DATA_TYPE.Number
            },
            item_package_type_id: {
                notNull: true,
                dataType: DATA_TYPE.Number,
            },
            default: {
                notNull: true,
                dataType: DATA_TYPE.Boolean,
                default: false
            },
            enabled: {
                notNull: true,
                dataType: DATA_TYPE.Boolean,
                default: true
            },
            revision: {
                notNull: true,
                dataType: DATA_TYPE.Number,
                default: 1
            },
            status : {
                notNull: true,
                dataType: DATA_TYPE.String,
                default: 'none'
            },
            last_modified_by: {
                dataType: DATA_TYPE.Number,
            },
            created_at: {
                dataType: DATA_TYPE.String, // date time,
            },
            updated_at: {
                dataType: DATA_TYPE.String, // date time,
            },
        }
    };

    const dataBase: IDataBase = {
        name: dbname,
        tables: [tblBarcodes, tblCategories, tblCompanies, tblCurrencies, tblFactories, tblPackageTypes, tblProducts, tblProductShowroom, tblProductStore, tblProductTypes, tblRetailPrices, tblShops, tblShowrooms, tblStations, tblStores, tblSubcategories, tblWholesalePrices]
    };
    return dataBase;*/

    // Table wf_add_purchase_requests
    const tblWfAddPurchaseRequests = {
        name: 'wf_add_purchase_requests',
        columns: {
            id: {
                /*primaryKey: true,
                autoIncrement: false*/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            wfable: {
                dataType: DATA_TYPE.Object
            },
        }
    };

    // Table wf_edit_purchase_requests
    const tblWfEditPurchaseRequests = {
        name: 'wf_edit_purchase_requests',
        columns: {
            id: {
                /*primaryKey: true,
                autoIncrement: false*/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            wfable: {
                dataType: DATA_TYPE.Object
            },
        }
    };

    // Table wf_add_pay_requests
    const tblWfAddPayRequests = {
        name: 'wf_add_pay_requests',
        columns: {
            id: {
                /*primaryKey: true,
                autoIncrement: false*/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            wfable: {
                dataType: DATA_TYPE.Object
            },
        }
    };

    // Table wf_edit_pay_requests
    const tblWfEditPayRequests = {
        name: 'wf_edit_pay_requests',
        columns: {
            id: {
                /*primaryKey: true,
                autoIncrement: false*/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            wfable: {
                dataType: DATA_TYPE.Object
            },
        }
    };

    // Table wf_add_contractor_requests
    const tblWfAddContractorRequests = {
        name: 'wf_add_contractor_requests',
        columns: {
            id: {
                /*primaryKey: true,
                autoIncrement: false*/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            wfable: {
                dataType: DATA_TYPE.Object
            },
        }
    };

    // Table wf_edit_contractor_requests
    const tblWfEditContractorRequests = {
        name: 'wf_edit_contractor_requests',
        columns: {
            id: {
                /*primaryKey: true,
                autoIncrement: false*/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            wfable: {
                dataType: DATA_TYPE.Object
            },
        }
    };

    // Table wf_add_contractor_addendum_requests
    const tblWfAddContractorAddendumRequests = {
        name: 'wf_add_contractor_addendum_requests',
        columns: {
            id: {
                /*primaryKey: true,
                autoIncrement: false*/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            wfable: {
                dataType: DATA_TYPE.Object
            },
        }
    };

    // Table wf_edit_contractor_addendum_requests
    const tblWfEditContractorAddendumRequests = {
        name: 'wf_edit_contractor_addendum_requests',
        columns: {
            id: {
                /*primaryKey: true,
                autoIncrement: false*/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            wfable: {
                dataType: DATA_TYPE.Object
            },
        }
    };

    // Table wf_add_pay_contractor_requests
    const tblWfAddPayContractorRequests = {
        name: 'wf_add_pay_contractor_requests',
        columns: {
            id: {
                /*primaryKey: true,
                autoIncrement: false*/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            wfable: {
                dataType: DATA_TYPE.Object
            },
        }
    };

    // Table wf_edit_pay_contractor_requests
    const tblWfEditPayContractorRequests = {
        name: 'wf_edit_pay_contractor_requests',
        columns: {
            id: {
                /*primaryKey: true,
                autoIncrement: false*/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            wfable: {
                dataType: DATA_TYPE.Object
            },
        }
    };

    // Table wf_add_pay_good_p_contractor_requests
    const tblWfAddPayGood_P_ContractorRequests = {
        name: 'wf_add_pay_good_p_contractor_requests',
        columns: {
            id: {
                /*primaryKey: true,
                autoIncrement: false*/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            wfable: {
                dataType: DATA_TYPE.Object
            },
        }
    };

    // Table wf_edit_pay_good_p_contractor_requests
    const tblWfEditPayGood_P_ContractorRequests = {
        name: 'wf_edit_pay_good_p_contractor_requests',
        columns: {
            id: {
                /*primaryKey: true,
                autoIncrement: false*/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            wfable: {
                dataType: DATA_TYPE.Object
            },
        }
    };

    // Table wf_add_monthly_fee_payment_requests
    const tblWfAddMonthlyFeePaymentRequests = {
        name: 'wf_add_monthly_fee_payment_requests',
        columns: {
            id: {
                /*primaryKey: true,
                autoIncrement: false*/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            wfable: {
                dataType: DATA_TYPE.Object
            },
        }
    };

    // Table wf_edit_monthly_fee_payment_requests
    const tblWfEditMonthlyFeePaymentRequests = {
        name: 'wf_edit_monthly_fee_payment_requests',
        columns: {
            id: {
                /*primaryKey: true,
                autoIncrement: false*/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            wfable: {
                dataType: DATA_TYPE.Object
            },
        }
    };

    // Table wf_add_overcharge_requests
    const tblWfAddOverchargeRequests = {
        name: 'wf_add_overcharge_requests',
        columns: {
            id: {
                /*primaryKey: true,
                autoIncrement: false*/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            wfable: {
                dataType: DATA_TYPE.Object
            },
        }
    };

    // Table wf_edit_overcharge_requests
    const tblWfEditOverchargeRequests = {
        name: 'wf_edit_overcharge_requests',
        columns: {
            id: {
                /*primaryKey: true,
                autoIncrement: false*/
                dataType: DATA_TYPE.Number,
                unique: true

            },
            wfable: {
                dataType: DATA_TYPE.Object
            },
        }
    };

    const dataBase = {
        name: dbname,
        tables: [
            tblWfAddPurchaseRequests,
            tblWfEditPurchaseRequests,
            tblWfAddPayRequests,
            tblWfEditPayRequests,
            tblWfAddContractorRequests,
            tblWfEditContractorRequests,
            tblWfAddContractorAddendumRequests,
            tblWfEditContractorAddendumRequests,
            tblWfAddPayContractorRequests,
            tblWfEditPayContractorRequests,
            tblWfAddPayGood_P_ContractorRequests,
            tblWfEditPayGood_P_ContractorRequests,
            tblWfAddMonthlyFeePaymentRequests,
            tblWfEditMonthlyFeePaymentRequests,
            tblWfAddOverchargeRequests,
            tblWfEditOverchargeRequests,
        ],
        version: 2
    };
    return dataBase;
};


export class BaseServicesDB {
    connection;
    dbName = 'draft';
    wfAddPurchaseRequestServices;
    wfAddPayRequestServices;
    wfAddContractorRequestServices;
    wfAddContractorAddendumRequestServices;
    wfAddPayContractorRequestServices;
    wfAddPayGood_P_ContractorRequestServices;
    wfAddMonthlyFeePaymentRequestServices;
    wfAddOverchargeRequestServices;
    wfEditPurchaseRequestServices;
    wfEditPayRequestServices;
    wfEditContractorRequestServices;
    wfEditContractorAddendumRequestServices;
    wfEditPayContractorRequestServices;
    wfEditPayGood_P_ContractorRequestServices;
    wfEditMonthlyFeePaymentRequestServices;
    wfEditOverchargeRequestServices;

    constructor(dbName) {
        var this_Class = this;
        this.dbName = dbName;
        this.connection = new JsStore.Connection(new Worker(workerPath));
        /*this.connection.addMiddleware(async function (request, next) {
            console.log('02')
            if (!await this_Class.check_DB_Exist()){
                console.log('1')
                return Public_Classes.event_When_Database_Not_Available();
            }
            console.log('3')
            next();
            console.log('4')
        });*/
    }

    get connection() {
        return this._connection;
    }

    get dbName() {
        return this._dbName;
    }

    /*get wfAddPayRequestServices() {
        return this._wfAddPayRequestServices;
    }

    get wfEditPayRequestServices() {
        return this._wfEditPayRequestServices;
    }*/


    set connection(value) {
        return this._connection = value;
    }

    async init_Offline_Database() {
        // this.connection = new JsStore.Connection(new Worker(workerPath));
        try {
            const dataBase = getDatabase(this.dbName);
            await this.connection.initDb(dataBase)
        } catch (ex) {
            console.error(ex);
        }
    }

    async init() {
        var this_Class = this;
        let promise = new Promise((resolve, reject) => {
            try {
                'use strict'
                if (!('indexedDB' in window)) {
                    console.warn(Lang.get('validation.validator.indexedDB_not_supported'));
                    resolve(Lang.get('validation.validator.indexedDB_not_supported'))
                } else {
                    this_Class.check_DB_Exist().then(async function (isExist) {
                        if (isExist) {
                            await this_Class.init_Offline_Database();
                            await this_Class.connection.openDb(this_Class.dbName);
                            // this_Class.connection_Middleware();
                            await this_Class.sync_Data();
                            resolve(true);
                        } else {
                            await this_Class.init_Offline_Database();
                            // this_Class.connection_Middleware();
                            await this_Class.sync_Data();
                            resolve(true);
                        }
                    });
                }
            } catch (ex) {
                // console.error(ex);
                resolve(false);
                resolve(Lang.get('supermarket/storeCashier/Dashboard.public.message_system.error_registered'));
            }
        })

        return await promise;

    }

    connection_Middleware() {
        var this_Class = this;
        this.connection.addMiddleware(async function (request) {
            if (!await this_Class.check_DB_Exist()) {
                return Public_Classes.event_When_Database_Not_Available();
            }
            // next();
        },true);
    }

    async init_DB_If_Not_Exist() {
        var this_Class = this;
        let promise = new Promise((resolve, reject) => {
            try {
                'use strict'
                if (!('indexedDB' in window)) {
                    console.warn(Lang.get('validation.validator.indexedDB_not_supported'));
                    resolve(Lang.get('validation.validator.indexedDB_not_supported'))
                } else {
                    this_Class.check_DB_Exist().then(async function (isExist) {
                        if (isExist) {
                            this_Class.connection.openDb(this_Class.dbName);
                            resolve(true);
                        } else {
                            await this_Class.init_Offline_Database();
                            await this_Class.sync_Data();
                            resolve(true);
                        }
                    });
                }
            } catch (ex) {
                // console.error(ex);
                resolve(false);
                resolve(Lang.get('supermarket/storeCashier/Dashboard.public.message_system.error_registered'));
            }
        })

        return await promise;

    }

    async check_DB_Exist() {
        const isExisting = (await window.indexedDB.databases()).map(db => db.name).includes(this.dbName);
        return !!isExisting;
    }


    async sync_Data() {
        let this_Class = this;

        // Local uses
        this.wfAddPurchaseRequestServices = new WfAddPurchaseRequestServices(this.connection, this.dbName);
        this.wfAddPayRequestServices = new WfAddPayRequestServices(this.connection, this.dbName);
        this.wfAddContractorRequestServices = new WfAddContractorRequestServices(this.connection, this.dbName);
        this.wfAddContractorAddendumRequestServices = new WfAddContractorAddendumRequestServices(this.connection, this.dbName);
        this.wfAddPayContractorRequestServices = new WfAddPayContractorRequestServices(this.connection, this.dbName);
        this.wfAddPayGood_P_ContractorRequestServices = new WfAddPayGood_P_ContractorRequestServices(this.connection, this.dbName);
        this.wfAddMonthlyFeePaymentRequestServices = new WfAddMonthlyFeePaymentRequestServices(this.connection, this.dbName);
        this.wfAddOverchargeRequestServices = new WfAddOverchargeRequestServices(this.connection, this.dbName);
        this.wfEditPurchaseRequestServices = new WfEditPurchaseRequestServices(this.connection, this.dbName);
        this.wfEditPayRequestServices = new WfEditPayRequestServices(this.connection, this.dbName);
        this.wfEditContractorRequestServices = new WfEditContractorRequestServices(this.connection, this.dbName);
        this.wfEditContractorAddendumRequestServices = new WfEditContractorAddendumRequestServices(this.connection, this.dbName);
        this.wfEditPayContractorRequestServices = new WfEditPayContractorRequestServices(this.connection, this.dbName);
        this.wfEditPayGood_P_ContractorRequestServices = new WfEditPayGood_P_ContractorRequestServices(this.connection, this.dbName);
        this.wfEditMonthlyFeePaymentRequestServices = new WfEditMonthlyFeePaymentRequestServices(this.connection, this.dbName);
        this.wfEditOverchargeRequestServices = new WfEditOverchargeRequestServices(this.connection, this.dbName);

    }
}

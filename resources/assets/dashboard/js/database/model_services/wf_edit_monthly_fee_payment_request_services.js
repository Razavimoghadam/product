export class WfEditMonthlyFeePaymentRequestServices {

    constructor(connection, dbName) {
        this.connection = connection;
        this.dbName = dbName;
    }

    async getWfEditMonthlyFeePaymentRequests() {

        return await this.connection.select({
            from: 'wf_edit_monthly_fee_payment_requests'
        });
    }

    async getWfEditMonthlyFeePaymentRequestIDs() {
        var result = await this.connection.select({
            from: 'wf_edit_monthly_fee_payment_requests'
        });
        return $.map(result, function (value, key) {
            return value.id;
        });

    }

    async addWfEditMonthlyFeePaymentRequest(wfEditMonthlyFeePaymentRequest = []) {
        return await this.connection.insert({
            into: 'wf_edit_monthly_fee_payment_requests',
            values: wfEditMonthlyFeePaymentRequest
        }).then(function (rowsAdded) {
            return rowsAdded;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async deleteWfEditMonthlyFeePaymentRequest(wfEditMonthlyFeePaymentRequestId) {
        return await this.connection.remove({
            from: 'wf_edit_monthly_fee_payment_requests',
            where: {
                id: Number(wfEditMonthlyFeePaymentRequestId)
            }
        }).then(function (rowsDeleted) {
            return rowsDeleted;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async getWfEditMonthlyFeePaymentRequest(wfEditMonthlyFeePaymentRequestId) {
        return await this.connection.select({
            from: 'wf_edit_monthly_fee_payment_requests',
            where: {
                id: Number(wfEditMonthlyFeePaymentRequestId)
            }
        }).then(function (data) {
            // console.log(data);
            return data
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async updateWfEditMonthlyFeePaymentRequest(wfEditMonthlyFeePaymentRequestId, value) {
        return await this.connection.update({
            in: 'wf_edit_monthly_fee_payment_requests',
            set: value,
            where: {
                id: Number(wfEditMonthlyFeePaymentRequestId)
            }
        }).then(function (rowsUpdated) {
            // console.log(rowsUpdated);
            return rowsUpdated;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async exists(id) {
        return await this.connection.count({from: 'wf_edit_monthly_fee_payment_requests', where: {id: id,}}) > 0;
    }


    async updateOrCreateWfEditMonthlyFeePaymentRequest(id, values) {
        if (await this.exists(id)) {
            //await this.updateRelations(values)
            return await this.updateWfEditMonthlyFeePaymentRequest(id, values)
        } else {
            return await this.addWfEditMonthlyFeePaymentRequest([{id:id,wfable:values.wfable}])
        }
    }

    async updateOrCreateWfEditMonthlyFeePaymentRequests(data) {
        let this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];
            if (!isEmpty(data)) {
                $.each(data, async function (key, value) {
                    let resultUpdateOrCreate = await this_Class.updateOrCreateWfEditMonthlyFeePaymentRequest(value.id, value);
                    result.push(resultUpdateOrCreate);
                    if (data.length == (key + 1))
                        resolve(result);
                });
            } else resolve(false);

        });
        let result = await promise;
        console.log(result)
        return result;

    }

    async deleteWfEditMonthlyFeePaymentRequests(wfEditMonthlyFeePaymentRequest_IDs) {
        var this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];

            if (!isEmpty(wfEditMonthlyFeePaymentRequest_IDs)) {
                $.each(wfEditMonthlyFeePaymentRequest_IDs, async function (key, value) {
                    let resultDelete = await this_Class.deleteWfEditMonthlyFeePaymentRequest(value);
                    result.push(resultDelete);

                    if (wfEditMonthlyFeePaymentRequest_IDs.length == (key + 1))
                        resolve(result);
                });
            } else resolve(false);

        });
        let result = await promise;
        console.log(result)
        return result;
    }

}

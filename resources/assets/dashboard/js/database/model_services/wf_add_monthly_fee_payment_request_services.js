export class WfAddMonthlyFeePaymentRequestServices {

    constructor(connection, dbName) {
        this.connection = connection;
        this.dbName = dbName;
    }

    async getWfAddMonthlyFeePaymentRequests() {

        return await this.connection.select({
            from: 'wf_add_monthly_fee_payment_requests'
        });
    }

    async getWfAddMonthlyFeePaymentRequestIDs() {
        var result = await this.connection.select({
            from: 'wf_add_monthly_fee_payment_requests'
        });
        return $.map(result, function (value, key) {
            return value.id;
        });

    }

    async addWfAddMonthlyFeePaymentRequest(wfAddMonthlyFeePaymentRequest = []) {
        return await this.connection.insert({
            into: 'wf_add_monthly_fee_payment_requests',
            values: wfAddMonthlyFeePaymentRequest
        }).then(function (rowsAdded) {
            return rowsAdded;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async deleteWfAddMonthlyFeePaymentRequest(wfAddMonthlyFeePaymentRequestId) {
        return await this.connection.remove({
            from: 'wf_add_monthly_fee_payment_requests',
            where: {
                id: Number(wfAddMonthlyFeePaymentRequestId)
            }
        }).then(function (rowsDeleted) {
            return rowsDeleted;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async getWfAddMonthlyFeePaymentRequest(wfAddMonthlyFeePaymentRequestId) {
        return await this.connection.select({
            from: 'wf_add_monthly_fee_payment_requests',
            where: {
                id: Number(wfAddMonthlyFeePaymentRequestId)
            }
        }).then(function (data) {
            // console.log(data);
            return data
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async updateWfAddMonthlyFeePaymentRequest(wfAddMonthlyFeePaymentRequestId, value) {
        return await this.connection.update({
            in: 'wf_add_monthly_fee_payment_requests',
            set: value,
            where: {
                id: Number(wfAddMonthlyFeePaymentRequestId)
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
        return await this.connection.count({from: 'wf_add_monthly_fee_payment_requests', where: {id: id,}}) > 0;
    }


    async updateOrCreateWfAddMonthlyFeePaymentRequest(id, values) {
        if (await this.exists(id)) {
            //await this.updateRelations(values)
            return await this.updateWfAddMonthlyFeePaymentRequest(id, values)
        } else {
            return await this.addWfAddMonthlyFeePaymentRequest([{id:id,wfable:values.wfable}])
        }
    }

    async updateOrCreateWfAddMonthlyFeePaymentRequests(data) {
        let this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];
            if (!isEmpty(data)) {
                $.each(data, async function (key, value) {
                    let resultUpdateOrCreate = await this_Class.updateOrCreateWfAddMonthlyFeePaymentRequest(value.id, value);
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

    async deleteWfAddMonthlyFeePaymentRequests(wfAddMonthlyFeePaymentRequest_IDs) {
        var this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];

            if (!isEmpty(wfAddMonthlyFeePaymentRequest_IDs)) {
                $.each(wfAddMonthlyFeePaymentRequest_IDs, async function (key, value) {
                    let resultDelete = await this_Class.deleteWfAddMonthlyFeePaymentRequest(value);
                    result.push(resultDelete);

                    if (wfAddMonthlyFeePaymentRequest_IDs.length == (key + 1))
                        resolve(result);
                });
            } else resolve(false);

        });
        let result = await promise;
        console.log(result)
        return result;
    }

}

export class WfAddPayGood_P_ContractorRequestServices {

    constructor(connection, dbName) {
        this.connection = connection;
        this.dbName = dbName;
    }

    async getWfAddPayGood_P_ContractorRequests() {

        return await this.connection.select({
            from: 'wf_add_pay_good_p_contractor_requests'
        });
    }

    async getWfAddPayGood_P_ContractorRequestIDs() {
        var result = await this.connection.select({
            from: 'wf_add_pay_good_p_contractor_requests'
        });
        return $.map(result, function (value, key) {
            return value.id;
        });

    }

    async addWfAddPayGood_P_ContractorRequest(wfAddPayGood_P_ContractorRequest = []) {
        return await this.connection.insert({
            into: 'wf_add_pay_good_p_contractor_requests',
            values: wfAddPayGood_P_ContractorRequest
        }).then(function (rowsAdded) {
            return rowsAdded;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async deleteWfAddPayGood_P_ContractorRequest(wfAddPayGood_P_ContractorRequestId) {
        return await this.connection.remove({
            from: 'wf_add_pay_good_p_contractor_requests',
            where: {
                id: Number(wfAddPayGood_P_ContractorRequestId)
            }
        }).then(function (rowsDeleted) {
            return rowsDeleted;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async getWfAddPayGood_P_ContractorRequest(wfAddPayGood_P_ContractorRequestId) {
        return await this.connection.select({
            from: 'wf_add_pay_good_p_contractor_requests',
            where: {
                id: Number(wfAddPayGood_P_ContractorRequestId)
            }
        }).then(function (data) {
            // console.log(data);
            return data
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async updateWfAddPayGood_P_ContractorRequest(wfAddPayGood_P_ContractorRequestId, value) {
        return await this.connection.update({
            in: 'wf_add_pay_good_p_contractor_requests',
            set: value,
            where: {
                id: Number(wfAddPayGood_P_ContractorRequestId)
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
        return await this.connection.count({from: 'wf_add_pay_good_p_contractor_requests', where: {id: id,}}) > 0;
    }


    async updateOrCreateWfAddPayGood_P_ContractorRequest(id, values) {
        if (await this.exists(id)) {
            //await this.updateRelations(values)
            return await this.updateWfAddPayGood_P_ContractorRequest(id, values)
        } else {
            return await this.addWfAddPayGood_P_ContractorRequest([{id:id,wfable:values.wfable}])
        }
    }

    async updateOrCreateWfAddPayGood_P_ContractorRequests(data) {
        let this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];
            if (!isEmpty(data)) {
                $.each(data, async function (key, value) {
                    let resultUpdateOrCreate = await this_Class.updateOrCreateWfAddPayGood_P_ContractorRequest(value.id, value);
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

    async deleteWfAddPayGood_P_ContractorRequests(wfAddPayGood_P_ContractorRequest_IDs) {
        var this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];

            if (!isEmpty(wfAddPayGood_P_ContractorRequest_IDs)) {
                $.each(wfAddPayGood_P_ContractorRequest_IDs, async function (key, value) {
                    let resultDelete = await this_Class.deleteWfAddPayGood_P_ContractorRequest(value);
                    result.push(resultDelete);

                    if (wfAddPayGood_P_ContractorRequest_IDs.length == (key + 1))
                        resolve(result);
                });
            } else resolve(false);

        });
        let result = await promise;
        console.log(result)
        return result;
    }

}

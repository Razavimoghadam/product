export class WfEditPayGood_P_ContractorRequestServices {

    constructor(connection, dbName) {
        this.connection = connection;
        this.dbName = dbName;
    }

    async getWfEditPayGood_P_ContractorRequests() {

        return await this.connection.select({
            from: 'wf_edit_pay_good_p_contractor_requests'
        });
    }

    async getWfEditPayGood_P_ContractorRequestIDs() {
        var result = await this.connection.select({
            from: 'wf_edit_pay_good_p_contractor_requests'
        });
        return $.map(result, function (value, key) {
            return value.id;
        });

    }

    async addWfEditPayGood_P_ContractorRequest(wfEditPayGood_P_ContractorRequest = []) {
        return await this.connection.insert({
            into: 'wf_edit_pay_good_p_contractor_requests',
            values: wfEditPayGood_P_ContractorRequest
        }).then(function (rowsAdded) {
            return rowsAdded;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async deleteWfEditPayGood_P_ContractorRequest(wfEditPayGood_P_ContractorRequestId) {
        return await this.connection.remove({
            from: 'wf_edit_pay_good_p_contractor_requests',
            where: {
                id: Number(wfEditPayGood_P_ContractorRequestId)
            }
        }).then(function (rowsDeleted) {
            return rowsDeleted;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async getWfEditPayGood_P_ContractorRequest(wfEditPayGood_P_ContractorRequestId) {
        return await this.connection.select({
            from: 'wf_edit_pay_good_p_contractor_requests',
            where: {
                id: Number(wfEditPayGood_P_ContractorRequestId)
            }
        }).then(function (data) {
            // console.log(data);
            return data
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async updateWfEditPayGood_P_ContractorRequest(wfEditPayGood_P_ContractorRequestId, value) {
        return await this.connection.update({
            in: 'wf_edit_pay_good_p_contractor_requests',
            set: value,
            where: {
                id: Number(wfEditPayGood_P_ContractorRequestId)
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
        return await this.connection.count({from: 'wf_edit_pay_good_p_contractor_requests', where: {id: id,}}) > 0;
    }


    async updateOrCreateWfEditPayGood_P_ContractorRequest(id, values) {
        if (await this.exists(id)) {
            //await this.updateRelations(values)
            return await this.updateWfEditPayGood_P_ContractorRequest(id, values)
        } else {
            return await this.addWfEditPayGood_P_ContractorRequest([{id:id,wfable:values.wfable}])
        }
    }

    async updateOrCreateWfEditPayGood_P_ContractorRequests(data) {
        let this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];
            if (!isEmpty(data)) {
                $.each(data, async function (key, value) {
                    let resultUpdateOrCreate = await this_Class.updateOrCreateWfEditPayGood_P_ContractorRequest(value.id, value);
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

    async deleteWfEditPayGood_P_ContractorRequests(wfEditPayGood_P_ContractorRequest_IDs) {
        var this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];

            if (!isEmpty(wfEditPayGood_P_ContractorRequest_IDs)) {
                $.each(wfEditPayGood_P_ContractorRequest_IDs, async function (key, value) {
                    let resultDelete = await this_Class.deleteWfEditPayGood_P_ContractorRequest(value);
                    result.push(resultDelete);

                    if (wfEditPayGood_P_ContractorRequest_IDs.length == (key + 1))
                        resolve(result);
                });
            } else resolve(false);

        });
        let result = await promise;
        console.log(result)
        return result;
    }

}

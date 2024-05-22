export class WfEditPayContractorRequestServices {

    constructor(connection, dbName) {
        this.connection = connection;
        this.dbName = dbName;
    }

    async getWfEditPayContractorRequests() {

        return await this.connection.select({
            from: 'wf_edit_pay_contractor_requests'
        });
    }

    async getWfEditPayContractorRequestIDs() {
        var result = await this.connection.select({
            from: 'wf_edit_pay_contractor_requests'
        });
        return $.map(result, function (value, key) {
            return value.id;
        });

    }

    async addWfEditPayContractorRequest(wfEditPayContractorRequest = []) {
        return await this.connection.insert({
            into: 'wf_edit_pay_contractor_requests',
            values: wfEditPayContractorRequest
        }).then(function (rowsAdded) {
            return rowsAdded;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async deleteWfEditPayContractorRequest(wfEditPayContractorRequestId) {
        return await this.connection.remove({
            from: 'wf_edit_pay_contractor_requests',
            where: {
                id: Number(wfEditPayContractorRequestId)
            }
        }).then(function (rowsDeleted) {
            return rowsDeleted;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async getWfEditPayContractorRequest(wfEditPayContractorRequestId) {
        return await this.connection.select({
            from: 'wf_edit_pay_contractor_requests',
            where: {
                id: Number(wfEditPayContractorRequestId)
            }
        }).then(function (data) {
            // console.log(data);
            return data
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async updateWfEditPayContractorRequest(wfEditPayContractorRequestId, value) {
        return await this.connection.update({
            in: 'wf_edit_pay_contractor_requests',
            set: value,
            where: {
                id: Number(wfEditPayContractorRequestId)
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
        return await this.connection.count({from: 'wf_edit_pay_contractor_requests', where: {id: id,}}) > 0;
    }


    async updateOrCreateWfEditPayContractorRequest(id, values) {
        if (await this.exists(id)) {
            //await this.updateRelations(values)
            return await this.updateWfEditPayContractorRequest(id, values)
        } else {
            return await this.addWfEditPayContractorRequest([{id:id,wfable:values.wfable}])
        }
    }

    async updateOrCreateWfEditPayContractorRequests(data) {
        let this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];
            if (!isEmpty(data)) {
                $.each(data, async function (key, value) {
                    let resultUpdateOrCreate = await this_Class.updateOrCreateWfEditPayContractorRequest(value.id, value);
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

    async deleteWfEditPayContractorRequests(wfEditPayContractorRequest_IDs) {
        var this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];

            if (!isEmpty(wfEditPayContractorRequest_IDs)) {
                $.each(wfEditPayContractorRequest_IDs, async function (key, value) {
                    let resultDelete = await this_Class.deleteWfEditPayContractorRequest(value);
                    result.push(resultDelete);

                    if (wfEditPayContractorRequest_IDs.length == (key + 1))
                        resolve(result);
                });
            } else resolve(false);

        });
        let result = await promise;
        console.log(result)
        return result;
    }

}

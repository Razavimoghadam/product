export class WfEditContractorRequestServices {

    constructor(connection, dbName) {
        this.connection = connection;
        this.dbName = dbName;
    }

    async getWfEditContractorRequests() {

        return await this.connection.select({
            from: 'wf_edit_contractor_requests'
        });
    }

    async getWfEditContractorRequestIDs() {
        var result = await this.connection.select({
            from: 'wf_edit_contractor_requests'
        });
        return $.map(result, function (value, key) {
            return value.id;
        });

    }

    async addWfEditContractorRequest(wfEditContractorRequest = []) {
        return await this.connection.insert({
            into: 'wf_edit_contractor_requests',
            values: wfEditContractorRequest
        }).then(function (rowsAdded) {
            return rowsAdded;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async deleteWfEditContractorRequest(wfEditContractorRequestId) {
        return await this.connection.remove({
            from: 'wf_edit_contractor_requests',
            where: {
                id: Number(wfEditContractorRequestId)
            }
        }).then(function (rowsDeleted) {
            return rowsDeleted;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async getWfEditContractorRequest(wfEditContractorRequestId) {
        return await this.connection.select({
            from: 'wf_edit_contractor_requests',
            where: {
                id: Number(wfEditContractorRequestId)
            }
        }).then(function (data) {
            // console.log(data);
            return data
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async updateWfEditContractorRequest(wfEditContractorRequestId, value) {
        return await this.connection.update({
            in: 'wf_edit_contractor_requests',
            set: value,
            where: {
                id: Number(wfEditContractorRequestId)
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
        return await this.connection.count({from: 'wf_edit_contractor_requests', where: {id: id,}}) > 0;
    }


    async updateOrCreateWfEditContractorRequest(id, values) {
        if (await this.exists(id)) {
            //await this.updateRelations(values)
            return await this.updateWfEditContractorRequest(id, values)
        } else {
            return await this.addWfEditContractorRequest([{id:id,wfable:values.wfable}])
        }
    }

    async updateOrCreateWfEditContractorRequests(data) {
        let this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];
            if (!isEmpty(data)) {
                $.each(data, async function (key, value) {
                    let resultUpdateOrCreate = await this_Class.updateOrCreateWfEditContractorRequest(value.id, value);
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

    async deleteWfEditContractorRequests(wfEditContractorRequest_IDs) {
        var this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];

            if (!isEmpty(wfEditContractorRequest_IDs)) {
                $.each(wfEditContractorRequest_IDs, async function (key, value) {
                    let resultDelete = await this_Class.deleteWfEditContractorRequest(value);
                    result.push(resultDelete);

                    if (wfEditContractorRequest_IDs.length == (key + 1))
                        resolve(result);
                });
            } else resolve(false);

        });
        let result = await promise;
        console.log(result)
        return result;
    }

}

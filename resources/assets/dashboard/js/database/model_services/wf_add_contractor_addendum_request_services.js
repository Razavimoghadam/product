export class WfAddContractorAddendumRequestServices {

    constructor(connection, dbName) {
        this.connection = connection;
        this.dbName = dbName;
    }

    async getWfAddContractorAddendumRequests() {

        return await this.connection.select({
            from: 'wf_add_contractor_addendum_requests'
        });
    }

    async getWfAddContractorAddendumRequestIDs() {
        var result = await this.connection.select({
            from: 'wf_add_contractor_addendum_requests'
        });
        return $.map(result, function (value, key) {
            return value.id;
        });

    }

    async addWfAddContractorAddendumRequest(wfAddContractorAddendumRequest = []) {
        return await this.connection.insert({
            into: 'wf_add_contractor_addendum_requests',
            values: wfAddContractorAddendumRequest
        }).then(function (rowsAdded) {
            return rowsAdded;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async deleteWfAddContractorAddendumRequest(wfAddContractorAddendumRequestId) {
        return await this.connection.remove({
            from: 'wf_add_contractor_addendum_requests',
            where: {
                id: Number(wfAddContractorAddendumRequestId)
            }
        }).then(function (rowsDeleted) {
            return rowsDeleted;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async getWfAddContractorAddendumRequest(wfAddContractorAddendumRequestId) {
        return await this.connection.select({
            from: 'wf_add_contractor_addendum_requests',
            where: {
                id: Number(wfAddContractorAddendumRequestId)
            }
        }).then(function (data) {
            // console.log(data);
            return data
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async updateWfAddContractorAddendumRequest(wfAddContractorAddendumRequestId, value) {
        return await this.connection.update({
            in: 'wf_add_contractor_addendum_requests',
            set: value,
            where: {
                id: Number(wfAddContractorAddendumRequestId)
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
        return await this.connection.count({from: 'wf_add_contractor_addendum_requests', where: {id: id,}}) > 0;
    }


    async updateOrCreateWfAddContractorAddendumRequest(id, values) {
        if (await this.exists(id)) {
            //await this.updateRelations(values)
            return await this.updateWfAddContractorAddendumRequest(id, values)
        } else {
            return await this.addWfAddContractorAddendumRequest([{id:id,wfable:values.wfable}])
        }
    }

    async updateOrCreateWfAddContractorAddendumRequests(data) {
        let this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];
            if (!isEmpty(data)) {
                $.each(data, async function (key, value) {
                    let resultUpdateOrCreate = await this_Class.updateOrCreateWfAddContractorAddendumRequest(value.id, value);
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

    async deleteWfAddContractorAddendumRequests(wfAddContractorAddendumRequest_IDs) {
        var this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];

            if (!isEmpty(wfAddContractorAddendumRequest_IDs)) {
                $.each(wfAddContractorAddendumRequest_IDs, async function (key, value) {
                    let resultDelete = await this_Class.deleteWfAddContractorAddendumRequest(value);
                    result.push(resultDelete);

                    if (wfAddContractorAddendumRequest_IDs.length == (key + 1))
                        resolve(result);
                });
            } else resolve(false);

        });
        let result = await promise;
        console.log(result)
        return result;
    }

}

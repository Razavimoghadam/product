export class WfEditContractorAddendumRequestServices {

    constructor(connection, dbName) {
        this.connection = connection;
        this.dbName = dbName;
    }

    async getWfEditContractorAddendumRequests() {

        return await this.connection.select({
            from: 'wf_edit_contractor_addendum_requests'
        });
    }

    async getWfEditContractorAddendumRequestIDs() {
        var result = await this.connection.select({
            from: 'wf_edit_contractor_addendum_requests'
        });
        return $.map(result, function (value, key) {
            return value.id;
        });

    }

    async addWfEditContractorAddendumRequest(wfEditContractorAddendumRequest = []) {
        return await this.connection.insert({
            into: 'wf_edit_contractor_addendum_requests',
            values: wfEditContractorAddendumRequest
        }).then(function (rowsAdded) {
            return rowsAdded;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async deleteWfEditContractorAddendumRequest(wfEditContractorAddendumRequestId) {
        return await this.connection.remove({
            from: 'wf_edit_contractor_addendum_requests',
            where: {
                id: Number(wfEditContractorAddendumRequestId)
            }
        }).then(function (rowsDeleted) {
            return rowsDeleted;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async getWfEditContractorAddendumRequest(wfEditContractorAddendumRequestId) {
        return await this.connection.select({
            from: 'wf_edit_contractor_addendum_requests',
            where: {
                id: Number(wfEditContractorAddendumRequestId)
            }
        }).then(function (data) {
            // console.log(data);
            return data
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async updateWfEditContractorAddendumRequest(wfEditContractorAddendumRequestId, value) {
        return await this.connection.update({
            in: 'wf_edit_contractor_addendum_requests',
            set: value,
            where: {
                id: Number(wfEditContractorAddendumRequestId)
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
        return await this.connection.count({from: 'wf_edit_contractor_addendum_requests', where: {id: id,}}) > 0;
    }


    async updateOrCreateWfEditContractorAddendumRequest(id, values) {
        if (await this.exists(id)) {
            //await this.updateRelations(values)
            return await this.updateWfEditContractorAddendumRequest(id, values)
        } else {
            return await this.addWfEditContractorAddendumRequest([{id:id,wfable:values.wfable}])
        }
    }

    async updateOrCreateWfEditContractorAddendumRequests(data) {
        let this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];
            if (!isEmpty(data)) {
                $.each(data, async function (key, value) {
                    let resultUpdateOrCreate = await this_Class.updateOrCreateWfEditContractorAddendumRequest(value.id, value);
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

    async deleteWfEditContractorAddendumRequests(wfEditContractorAddendumRequest_IDs) {
        var this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];

            if (!isEmpty(wfEditContractorAddendumRequest_IDs)) {
                $.each(wfEditContractorAddendumRequest_IDs, async function (key, value) {
                    let resultDelete = await this_Class.deleteWfEditContractorAddendumRequest(value);
                    result.push(resultDelete);

                    if (wfEditContractorAddendumRequest_IDs.length == (key + 1))
                        resolve(result);
                });
            } else resolve(false);

        });
        let result = await promise;
        console.log(result)
        return result;
    }

}

export class WfEditOverchargeRequestServices {

    constructor(connection, dbName) {
        this.connection = connection;
        this.dbName = dbName;
    }

    async getWfEditOverchargeRequests() {

        return await this.connection.select({
            from: 'wf_edit_overcharge_requests'
        });
    }

    async getWfEditOverchargeRequestIDs() {
        var result = await this.connection.select({
            from: 'wf_edit_overcharge_requests'
        });
        return $.map(result, function (value, key) {
            return value.id;
        });

    }

    async addWfEditOverchargeRequest(wfEditOverchargeRequest = []) {
        return await this.connection.insert({
            into: 'wf_edit_overcharge_requests',
            values: wfEditOverchargeRequest
        }).then(function (rowsAdded) {
            return rowsAdded;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async deleteWfEditOverchargeRequest(wfEditOverchargeRequestId) {
        return await this.connection.remove({
            from: 'wf_edit_overcharge_requests',
            where: {
                id: Number(wfEditOverchargeRequestId)
            }
        }).then(function (rowsDeleted) {
            return rowsDeleted;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async getWfEditOverchargeRequest(wfEditOverchargeRequestId) {
        return await this.connection.select({
            from: 'wf_edit_overcharge_requests',
            where: {
                id: Number(wfEditOverchargeRequestId)
            }
        }).then(function (data) {
            // console.log(data);
            return data
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async updateWfEditOverchargeRequest(wfEditOverchargeRequestId, value) {
        return await this.connection.update({
            in: 'wf_edit_overcharge_requests',
            set: value,
            where: {
                id: Number(wfEditOverchargeRequestId)
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
        return await this.connection.count({from: 'wf_edit_overcharge_requests', where: {id: id,}}) > 0;
    }


    async updateOrCreateWfEditOverchargeRequest(id, values) {
        if (await this.exists(id)) {
            //await this.updateRelations(values)
            return await this.updateWfEditOverchargeRequest(id, values)
        } else {
            return await this.addWfEditOverchargeRequest([{id:id,wfable:values.wfable}])
        }
    }

    async updateOrCreateWfEditOverchargeRequests(data) {
        let this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];
            if (!isEmpty(data)) {
                $.each(data, async function (key, value) {
                    let resultUpdateOrCreate = await this_Class.updateOrCreateWfEditOverchargeRequest(value.id, value);
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

    async deleteWfEditOverchargeRequests(wfEditOverchargeRequest_IDs) {
        var this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];

            if (!isEmpty(wfEditOverchargeRequest_IDs)) {
                $.each(wfEditOverchargeRequest_IDs, async function (key, value) {
                    let resultDelete = await this_Class.deleteWfEditOverchargeRequest(value);
                    result.push(resultDelete);

                    if (wfEditOverchargeRequest_IDs.length == (key + 1))
                        resolve(result);
                });
            } else resolve(false);

        });
        let result = await promise;
        console.log(result)
        return result;
    }

}

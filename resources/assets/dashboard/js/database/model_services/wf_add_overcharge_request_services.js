export class WfAddOverchargeRequestServices {

    constructor(connection, dbName) {
        this.connection = connection;
        this.dbName = dbName;
    }

    async getWfAddOverchargeRequests() {

        return await this.connection.select({
            from: 'wf_add_overcharge_requests'
        });
    }

    async getWfAddOverchargeRequestIDs() {
        var result = await this.connection.select({
            from: 'wf_add_overcharge_requests'
        });
        return $.map(result, function (value, key) {
            return value.id;
        });

    }

    async addWfAddOverchargeRequest(wfAddOverchargeRequest = []) {
        return await this.connection.insert({
            into: 'wf_add_overcharge_requests',
            values: wfAddOverchargeRequest
        }).then(function (rowsAdded) {
            return rowsAdded;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async deleteWfAddOverchargeRequest(wfAddOverchargeRequestId) {
        return await this.connection.remove({
            from: 'wf_add_overcharge_requests',
            where: {
                id: Number(wfAddOverchargeRequestId)
            }
        }).then(function (rowsDeleted) {
            return rowsDeleted;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async getWfAddOverchargeRequest(wfAddOverchargeRequestId) {
        return await this.connection.select({
            from: 'wf_add_overcharge_requests',
            where: {
                id: Number(wfAddOverchargeRequestId)
            }
        }).then(function (data) {
            // console.log(data);
            return data
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async updateWfAddOverchargeRequest(wfAddOverchargeRequestId, value) {
        return await this.connection.update({
            in: 'wf_add_overcharge_requests',
            set: value,
            where: {
                id: Number(wfAddOverchargeRequestId)
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
        return await this.connection.count({from: 'wf_add_overcharge_requests', where: {id: id,}}) > 0;
    }


    async updateOrCreateWfAddOverchargeRequest(id, values) {
        if (await this.exists(id)) {
            //await this.updateRelations(values)
            return await this.updateWfAddOverchargeRequest(id, values)
        } else {
            return await this.addWfAddOverchargeRequest([{id:id,wfable:values.wfable}])
        }
    }

    async updateOrCreateWfAddOverchargeRequests(data) {
        let this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];
            if (!isEmpty(data)) {
                $.each(data, async function (key, value) {
                    let resultUpdateOrCreate = await this_Class.updateOrCreateWfAddOverchargeRequest(value.id, value);
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

    async deleteWfAddOverchargeRequests(wfAddOverchargeRequest_IDs) {
        var this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];

            if (!isEmpty(wfAddOverchargeRequest_IDs)) {
                $.each(wfAddOverchargeRequest_IDs, async function (key, value) {
                    let resultDelete = await this_Class.deleteWfAddOverchargeRequest(value);
                    result.push(resultDelete);

                    if (wfAddOverchargeRequest_IDs.length == (key + 1))
                        resolve(result);
                });
            } else resolve(false);

        });
        let result = await promise;
        console.log(result)
        return result;
    }

}

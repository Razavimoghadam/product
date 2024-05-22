export class WfAddPurchaseRequestServices {

    constructor(connection, dbName) {
        this.connection = connection;
        this.dbName = dbName;
    }

    async getWfAddPurchaseRequests() {

        return await this.connection.select({
            from: 'wf_add_purchase_requests'
        });
    }

    async getWfAddPurchaseRequestIDs() {
        var result = await this.connection.select({
            from: 'wf_add_purchase_requests'
        });
        return $.map(result, function (value, key) {
            return value.id;
        });

    }

    async addWfAddPurchaseRequest(wfAddPurchaseRequest = []) {
        return await this.connection.insert({
            into: 'wf_add_purchase_requests',
            values: wfAddPurchaseRequest
        }).then(function (rowsAdded) {
            return rowsAdded;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async deleteWfAddPurchaseRequest(wfAddPurchaseRequestId) {
        return await this.connection.remove({
            from: 'wf_add_purchase_requests',
            where: {
                id: Number(wfAddPurchaseRequestId)
            }
        }).then(function (rowsDeleted) {
            return rowsDeleted;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async getWfAddPurchaseRequest(wfAddPurchaseRequestId) {
        return await this.connection.select({
            from: 'wf_add_purchase_requests',
            where: {
                id: Number(wfAddPurchaseRequestId)
            }
        }).then(function (data) {
            // console.log(data);
            return data
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async updateWfAddPurchaseRequest(wfAddPurchaseRequestId, value) {
        return await this.connection.update({
            in: 'wf_add_purchase_requests',
            set: value,
            where: {
                id: Number(wfAddPurchaseRequestId)
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
        return await this.connection.count({from: 'wf_add_purchase_requests', where: {id: id,}}) > 0;
    }


    async updateOrCreateWfAddPurchaseRequest(id, values) {
        if (await this.exists(id)) {
            //await this.updateRelations(values)
            return await this.updateWfAddPurchaseRequest(id, values)
        } else {
            return await this.addWfAddPurchaseRequest([{id:id,wfable:values.wfable}])
        }
    }

    async updateOrCreateWfAddPurchaseRequests(data) {
        let this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];
            if (!isEmpty(data)) {
                $.each(data, async function (key, value) {
                    let resultUpdateOrCreate = await this_Class.updateOrCreateWfAddPurchaseRequest(value.id, value);
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

    async deleteWfAddPurchaseRequests(wfAddPurchaseRequest_IDs) {
        var this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];

            if (!isEmpty(wfAddPurchaseRequest_IDs)) {
                $.each(wfAddPurchaseRequest_IDs, async function (key, value) {
                    let resultDelete = await this_Class.deleteWfAddPurchaseRequest(value);
                    result.push(resultDelete);

                    if (wfAddPurchaseRequest_IDs.length == (key + 1))
                        resolve(result);
                });
            } else resolve(false);

        });
        let result = await promise;
        console.log(result)
        return result;
    }

}

export class WfEditPurchaseRequestServices {

    constructor(connection, dbName) {
        this.connection = connection;
        this.dbName = dbName;
    }

    async getWfEditPurchaseRequests() {

        return await this.connection.select({
            from: 'wf_edit_purchase_requests'
        });
    }

    async getWfEditPurchaseRequestIDs() {
        var result = await this.connection.select({
            from: 'wf_edit_purchase_requests'
        });
        return $.map(result, function (value, key) {
            return value.id;
        });

    }

    async addWfEditPurchaseRequest(wfEditPurchaseRequest = []) {
        return await this.connection.insert({
            into: 'wf_edit_purchase_requests',
            values: wfEditPurchaseRequest
        }).then(function (rowsAdded) {
            return rowsAdded;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async deleteWfEditPurchaseRequest(wfEditPurchaseRequestId) {
        return await this.connection.remove({
            from: 'wf_edit_purchase_requests',
            where: {
                id: Number(wfEditPurchaseRequestId)
            }
        }).then(function (rowsDeleted) {
            return rowsDeleted;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async getWfEditPurchaseRequest(wfEditPurchaseRequestId) {
        return await this.connection.select({
            from: 'wf_edit_purchase_requests',
            where: {
                id: Number(wfEditPurchaseRequestId)
            }
        }).then(function (data) {
            // console.log(data);
            return data
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async updateWfEditPurchaseRequest(wfEditPurchaseRequestId, value) {
        return await this.connection.update({
            in: 'wf_edit_purchase_requests',
            set: value,
            where: {
                id: Number(wfEditPurchaseRequestId)
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
        return await this.connection.count({from: 'wf_edit_purchase_requests', where: {id: id,}}) > 0;
    }


    async updateOrCreateWfEditPurchaseRequest(id, values) {
        if (await this.exists(id)) {
            //await this.updateRelations(values)
            return await this.updateWfEditPurchaseRequest(id, values)
        } else {
            return await this.addWfEditPurchaseRequest([{id:id,wfable:values.wfable}])
        }
    }

    async updateOrCreateWfEditPurchaseRequests(data) {
        let this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];
            if (!isEmpty(data)) {
                $.each(data, async function (key, value) {
                    let resultUpdateOrCreate = await this_Class.updateOrCreateWfEditPurchaseRequest(value.id, value);
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

    async deleteWfEditPurchaseRequests(wfEditPurchaseRequest_IDs) {
        var this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];

            if (!isEmpty(wfEditPurchaseRequest_IDs)) {
                $.each(wfEditPurchaseRequest_IDs, async function (key, value) {
                    let resultDelete = await this_Class.deleteWfEditPurchaseRequest(value);
                    result.push(resultDelete);

                    if (wfEditPurchaseRequest_IDs.length == (key + 1))
                        resolve(result);
                });
            } else resolve(false);

        });
        let result = await promise;
        console.log(result)
        return result;
    }

}

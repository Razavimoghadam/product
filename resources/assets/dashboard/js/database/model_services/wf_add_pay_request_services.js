export class WfAddPayRequestServices {

    constructor(connection, dbName) {
        this.connection = connection;
        this.dbName = dbName;
    }

    async getWfAddPayRequests() {

        return await this.connection.select({
            from: 'wf_add_pay_requests'
        });
    }

    async getWfAddPayRequestIDs() {
        var result = await this.connection.select({
            from: 'wf_add_pay_requests'
        });
        return $.map(result, function (value, key) {
            return value.id;
        });

    }

    async addWfAddPayRequest(wfAddPayRequest = []) {
        return await this.connection.insert({
            into: 'wf_add_pay_requests',
            values: wfAddPayRequest
        }).then(function (rowsAdded) {
            return rowsAdded;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async deleteWfAddPayRequest(wfAddPayRequestId) {
        return await this.connection.remove({
            from: 'wf_add_pay_requests',
            where: {
                id: Number(wfAddPayRequestId)
            }
        }).then(function (rowsDeleted) {
            return rowsDeleted;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async getWfAddPayRequest(wfAddPayRequestId) {
        return await this.connection.select({
            from: 'wf_add_pay_requests',
            where: {
                id: Number(wfAddPayRequestId)
            }
        }).then(function (data) {
            // console.log(data);
            return data
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async updateWfAddPayRequest(wfAddPayRequestId, value) {
        return await this.connection.update({
            in: 'wf_add_pay_requests',
            set: value,
            where: {
                id: Number(wfAddPayRequestId)
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
        return await this.connection.count({from: 'wf_add_pay_requests', where: {id: id,}}) > 0;
    }


    async updateOrCreateWfAddPayRequest(id, values) {
        if (await this.exists(id)) {
            //await this.updateRelations(values)
            return await this.updateWfAddPayRequest(id, values)
        } else {
            return await this.addWfAddPayRequest([{id:id,wfable:values.wfable}])
        }
    }

    async updateOrCreateWfAddPayRequests(data) {
        let this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];
            if (!isEmpty(data)) {
                $.each(data, async function (key, value) {
                    let resultUpdateOrCreate = await this_Class.updateOrCreateWfAddPayRequest(value.id, value);
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

    async deleteWfAddPayRequests(wfAddPayRequest_IDs) {
        var this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];

            if (!isEmpty(wfAddPayRequest_IDs)) {
                $.each(wfAddPayRequest_IDs, async function (key, value) {
                    let resultDelete = await this_Class.deleteWfAddPayRequest(value);
                    result.push(resultDelete);

                    if (wfAddPayRequest_IDs.length == (key + 1))
                        resolve(result);
                });
            } else resolve(false);

        });
        let result = await promise;
        console.log(result)
        return result;
    }

}

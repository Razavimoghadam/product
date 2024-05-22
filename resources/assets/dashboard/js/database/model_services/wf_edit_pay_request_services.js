export class WfEditPayRequestServices {

    constructor(connection, dbName) {
        this.connection = connection;
        this.dbName = dbName;
    }

    async getWfEditPayRequests() {

        return await this.connection.select({
            from: 'wf_edit_pay_requests'
        });
    }

    async getWfEditPayRequestIDs() {
        var result = await this.connection.select({
            from: 'wf_edit_pay_requests'
        });
        return $.map(result, function (value, key) {
            return value.id;
        });

    }

    async addWfEditPayRequest(wfEditPayRequest = []) {
        return await this.connection.insert({
            into: 'wf_edit_pay_requests',
            values: wfEditPayRequest
        }).then(function (rowsAdded) {
            return rowsAdded;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async deleteWfEditPayRequest(wfEditPayRequestId) {
        return await this.connection.remove({
            from: 'wf_edit_pay_requests',
            where: {
                id: Number(wfEditPayRequestId)
            }
        }).then(function (rowsDeleted) {
            return rowsDeleted;
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async getWfEditPayRequest(wfEditPayRequestId) {
        return await this.connection.select({
            from: 'wf_edit_pay_requests',
            where: {
                id: Number(wfEditPayRequestId)
            }
        }).then(function (data) {
            // console.log(data);
            return data
        }).catch(function (err) {
            console.log(err);
            return 'db_error';
        });
    }

    async updateWfEditPayRequest(wfEditPayRequestId, value) {
        return await this.connection.update({
            in: 'wf_edit_pay_requests',
            set: value,
            where: {
                id: Number(wfEditPayRequestId)
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
        return await this.connection.count({from: 'wf_edit_pay_requests', where: {id: id,}}) > 0;
    }


    async updateOrCreateWfEditPayRequest(id, values) {
        if (await this.exists(id)) {
            //await this.updateRelations(values)
            return await this.updateWfEditPayRequest(id, values)
        } else {
            return await this.addWfEditPayRequest([{id:id,wfable:values.wfable}])
        }
    }

    async updateOrCreateWfEditPayRequests(data) {
        let this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];
            if (!isEmpty(data)) {
                $.each(data, async function (key, value) {
                    let resultUpdateOrCreate = await this_Class.updateOrCreateWfEditPayRequest(value.id, value);
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

    async deleteWfEditPayRequests(wfEditPayRequest_IDs) {
        var this_Class = this;

        let promise = new Promise((resolve, reject) => {
            let result = [];

            if (!isEmpty(wfEditPayRequest_IDs)) {
                $.each(wfEditPayRequest_IDs, async function (key, value) {
                    let resultDelete = await this_Class.deleteWfEditPayRequest(value);
                    result.push(resultDelete);

                    if (wfEditPayRequest_IDs.length == (key + 1))
                        resolve(result);
                });
            } else resolve(false);

        });
        let result = await promise;
        console.log(result)
        return result;
    }

}

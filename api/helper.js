
exports.insertFormat = (data) => {

    if(!data || !data.name) data['name'] = null;
    if(!data || !data.email) data['email'] = null;

    return data;
};
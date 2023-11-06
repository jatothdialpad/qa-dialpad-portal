const errorHandle = (err, req, res) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch(statusCode) {
        case 401:
            res.json({
                "Message": err.Message,
                "stacktrace": err.stacktrace
            })
            break;
        case 404:
            res.json({
                "Message": err.Message,
                "stacktrace": err.stacktrace
            })
            break;
        default:
            throw new err;
    }
}

module.exports = { errorHandle }
const errorHandler = (err, req, res, next) => {
    const statusCode = err.status || 500;
    const message = err.message || 'Something Went Wrong!';

    res.status(statusCode).json({ message, success: false });
}

module.exports = errorHandler;
const notFound = (req, res, next) => res.status(404).json({ message: `Route ${req.originalUrl} Not Found!`, success: false });

module.exports = notFound;
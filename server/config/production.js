module.exports = {
    logging: false,
    db: {
        url: process.env.MONGODB_URI || 'mongodb://localhost/todos'
    }
};

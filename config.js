var config = {
    mongodb: {
        port: process.env.MONGODB_PORT_27017_TCP_PORT,
        addr: process.env.MONGODB_PORT_27017_TCP_ADDR,
        instance: process.env.MONGODB_INSTANCE_NAME,
        password: process.env.MONGODB_PASSWORD,
        username: process.env.MONGODB_USERNAME
    }
};

module.exports = config;
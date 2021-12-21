module.exports = {
    HOST: 'localhost',
    USER: 'your_username e.g root',
    PASSWORD: 'yourpassword',
    DB: 'nodesql',
    dialect: 'mysql',
    pool: {
        
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
};
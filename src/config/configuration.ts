export default () => ({
    port: 3000,
    database: {
        type: process.env.TYPE_POSTGRES,
        host: process.env.HOST_POSTGRES,
        port:  5432,
        username: process.env.USER_POSTGRES,
        password:  process.env.PASSWORD_POSTGRES,
        database: process.env.DATABASE_POSTGRES,
    }
});

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi_ticketing'),
        username: env('DATABASE_USERNAME', 'nata'),
        password: env('DATABASE_PASSWORD', 'asdasd123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

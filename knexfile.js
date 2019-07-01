require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_URL_DEV,
      user: process.env.DATABASE_USER_DEV,
      port: process.env.DATABASE_PORT_DEV,
      password: process.env.DATABASE_PASSWORD_DEV,
      database: process.env.DATABASE_NAME_DEV
    },
    migrations: {
      directory: './database/migrations',
      tablename: 'knex_migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    pool: {
      min: 2,
      max: 10
    },
    useNullAsDefault: true
  },

  // testing: {
  //     client: 'mysql',
  //     connection: {
  //         filename: './database/test.db3'
  //     },
  //     useNullAsDefault: true,
  //     migrations: {
  //         directory: './database/migrations'
  //     },
  //     seeds: {
  //         directory: './database/seeds'
  //     },
  //     useNullAsDefault: true
  // },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_URL_DEV,
      user: process.env.DATABASE_USER_DEV,
      port: process.env.DATABASE_PORT_DEV,
      password: process.env.DATABASE_PASSWORD_DEV,
      database: process.env.DATABASE_NAME_DEV
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    useNullAsDefault: true
  }
};

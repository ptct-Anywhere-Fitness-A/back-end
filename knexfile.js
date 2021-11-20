const sharedConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: { directory: './data/migrations' },
    pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
  }
  
  module.exports = {
    development: {
      ...sharedConfig,//using sharedConfig info
      connection: { filename: './data/fitness.db3' },
      seeds: { directory: './data/seeds' },
      },
      testing: {
        ...sharedConfig,//copying & using sharedConfig info
        connection: { filename: './data/fitness_test.db3' },
      },
  };
  
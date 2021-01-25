module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DB_URL || '',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres:postgres@127.0.0.1/noteful',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://postgres:postgres@127.0.0.1/noteful-test'
  }
const env = process.env;

const config = {
  db: {
    host: env.DB_HOST || 'freedb.tech',
    user: env.DB_USER || 'freedbtech_languageiha',
    password: env.DB_PASSWORD || '@4U35n42Luc8Qkt',
    database: env.DB_NAME || 'freedbtech_languageiha'
  },
  listPerPage: env.LIST_PER_PAGE || 10
};

module.exports = config;

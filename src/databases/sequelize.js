const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'appointmentmanager',
  process.env.DB_USER || 'appointmentmanager_user',
  process.env.DB_PASSWORD || 'mQWsY2qZ6UTBO13ZmfsFsKJoyKBYhJDA',
  {
    host: process.env.DB_HOST || 'dpg-d88jbp77f7vs73b9r44g-a.oregon-postgres.render.com',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

sequelize.authenticate()
  .then(() => console.log('✅ Sequelize conectado a PostgreSQL - Render'))
  .catch(err => console.error('❌ Error de conexión:', err));

module.exports = sequelize;
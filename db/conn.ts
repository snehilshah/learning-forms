import mysql from 'mysql2/promise'

const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: 3306,
  database: 'learning',
  connectTimeout: 30 * 1000,
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0,
})

export { dbPool }

const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL || 'postgres://angel@localhost:5432/sweetness');

module.exports = db;
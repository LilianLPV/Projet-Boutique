const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'boutique_js',
    connectionLimit: 10,
    queueLimit: 0,
});

pool.getConnection()
    .then((connection) => {
        console.log('Connected to the database');
        connection.release();
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

module.exports = pool;
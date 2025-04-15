const pool = require('../../config/db');

class Sneaker {

    static async getById(id) {
        try {
            const query = `
            SELECT * FROM products AS p 
            WHERE p.product_id = ?`;
            const [results] = await pool.query(query, [id]);
            return results[0];
        } catch (error) {
            console.error("Error fetching sneaker by ID:", error);
            throw error;
        }
    }
}

module.exports = Sneaker;

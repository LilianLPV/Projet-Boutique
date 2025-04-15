const pool = require('../../config/db');

class Sneaker {

    static async getById(id) {
        try {
            const query = `
            SELECT * FROM produits AS p
            JOIN categories AS cp ON p.ID_Categories = cp.ID_Categories    
            WHERE p.ID_Produits = ?`;
            const [results] = await pool.query(query, [id]);
            return results[0];
        } catch (error) {
            console.error("Error fetching sneaker by ID:", error);
            throw error;
        }
    }
}

module.exports = Sneaker;

import { sql } from "@vercel/postgres";

async function getUserFromDb(username: string, password: string): Promise<boolean> {
    try {
        // Make a database query to check if the user's credentials exist
        // Replace this with your actual database query code
        const userExists = await sql.query('SELECT COUNT(*) FROM users WHERE username = ? AND password = ?', [username, password]);

        // Return true if the user exists, false otherwise
        return userExists > 0;
    } catch (error) {
        // Handle any errors that occur during the database query
        console.error('Error checking user credentials:', error);
        throw error;
    }
}
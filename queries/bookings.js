const db = require("../db/dbConfig.js");

const getAllBookings = async () => {
    try {
        const allBookings = await db.any("SELECT * FROM ")
        return allBookings
    } catch (error) {
        console.error('Error fetching all bookings:', err);
        return err;
    }
}

const getOneBooking = async () => {
    try {
        const oneBooking = await db.one("SELECT * FROM bookings WHERE id = $1", id)
        return oneBooking
    } catch (error) {
        console.error('Error fetching one booking:', err);
        return err;
    }
}

const createBooking = async () => {
    try {
        const newBooking = await db.one("INSERT INTO bookings (user_id, room_id, start_date, end_date, checkout) VALUES ($1, $2, $3, $4, $5) RETURNING *", [user_id, room_id, start_date, end_date, checkout]);
        return newBooking
    } catch (error) {
        console.error('Error creating bookings:', err);
        return err;
    }
}

const updateBooking = async () => {
    try {
        const { user_id, room_id, start_date, end_date, checkout } = booking;
        const updatedBooking = await db.one("UPDATE bookings SET user_id = $1, room_id = $2, start_date = $3, end_date = $4, checkout = $4 WHERE id = $6 RETURNING *", [user_id, room_id, start_date, end_date, checkout]);
        return updatedBooking
    } catch (error) {
        console.error('Error updating bookings:', err);
        return err;
    }
}

const deleteBooking = async () => {
    try {
        const deletedBooking = await db.one("DELETE FROM bookings WHERE id = $1 RETURNING *", id);
        return deletedBooking        
    } catch (error) {
        console.error('Error deleting  bookings:', err);
        return err;
    }
}



module.exports = {
    getAllBookings,
    getOneBooking,
    createBooking,
    updateBooking,
    deleteBooking
}